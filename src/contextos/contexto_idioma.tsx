/**
 * @file contexto_idioma.tsx
 * @description Contexto global de React y hook personalizado para gestionar el idioma activo (inglés o español) con persistencia local.
 */

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  catalogo_traducciones,
  type CodigoIdioma,
  type EstructuraTraducciones,
} from "@/traducciones/indice_traducciones";

const CLAVE_ALMACENAMIENTO_IDIOMA = "portafolio_idioma_preferido";

/**
 * Propiedades expuestas por el contexto de idioma a los componentes consumidores.
 */
interface ValorContextoIdioma {
  idioma_actual: CodigoIdioma;
  cambiar_idioma: (nuevo_idioma: CodigoIdioma) => void;
  textos_traducidos: EstructuraTraducciones;
}

const ContextoIdioma = createContext<ValorContextoIdioma | undefined>(undefined);

/**
 * Determina el idioma inicial a partir de localStorage o de la configuración del navegador.
 *
 * @returns {CodigoIdioma} Código de idioma inicial ("es" o "en").
 */
function obtener_idioma_inicial(): CodigoIdioma {
  if (typeof window === "undefined") {
    return "es";
  }

  const idioma_almacenado = localStorage.getItem(CLAVE_ALMACENAMIENTO_IDIOMA);
  if (idioma_almacenado === "es" || idioma_almacenado === "en") {
    return idioma_almacenado;
  }

  const idioma_navegador = window.navigator?.language?.toLowerCase() ?? "";
  return idioma_navegador.startsWith("en") ? "en" : "es";
}

/**
 * Proveedor del contexto de idioma que envuelve el árbol de componentes de la aplicación.
 *
 * @param {{ children: ReactNode }} propiedades_proveedor - Elementos hijos que tendrán acceso al idioma activo.
 * @returns {JSX.Element} Proveedor de contexto configurado con persistencia en localStorage.
 */
export function ProveedorIdioma({ children }: { children: ReactNode }): JSX.Element {
  const [idioma_actual, establecer_idioma_actual] = useState<CodigoIdioma>(obtener_idioma_inicial);
  const textos_traducidos = catalogo_traducciones[idioma_actual];

  useEffect(() => {
    localStorage.setItem(CLAVE_ALMACENAMIENTO_IDIOMA, idioma_actual);
    document.documentElement.lang = idioma_actual;
  }, [idioma_actual]);

  return (
    <ContextoIdioma.Provider
      value={{
        idioma_actual,
        cambiar_idioma: establecer_idioma_actual,
        textos_traducidos,
      }}
    >
      {children}
    </ContextoIdioma.Provider>
  );
}

/**
 * Hook personalizado para acceder al idioma activo, la función de cambio y los textos traducidos.
 *
 * @returns {ValorContextoIdioma} Estado actual de idioma y diccionario de textos.
 */
export function use_idioma(): ValorContextoIdioma {
  const contexto_actual = useContext(ContextoIdioma);
  if (contexto_actual === undefined) {
    throw new Error("use_idioma debe utilizarse dentro de un ProveedorIdioma");
  }
  return contexto_actual;
}
