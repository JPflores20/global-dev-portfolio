/**
 * @file contexto_tema.tsx
 * @description Contexto global de React y hook personalizado para alternar y persistir el tema visual (claro/oscuro).
 */

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

/**
 * Modos de tema visual soportados por el portafolio.
 */
export type ModoTemaVisual = "light" | "dark";

/**
 * Contrato del contexto de tema visual.
 */
interface ValorContextoTema {
  tema_actual: ModoTemaVisual;
  alternar_tema: () => void;
}

const CLAVE_ALMACENAMIENTO_TEMA = "portfolio-theme";
const ContextoTema = createContext<ValorContextoTema | undefined>(undefined);

/**
 * Obtiene el tema inicial desde localStorage o desde la preferencia de color del sistema operativo.
 *
 * @returns {ModoTemaVisual} Modo de color inicial ("light" o "dark").
 */
function obtener_tema_inicial(): ModoTemaVisual {
  const tema_guardado = localStorage.getItem(CLAVE_ALMACENAMIENTO_TEMA);
  if (tema_guardado === "light" || tema_guardado === "dark") {
    return tema_guardado;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

/**
 * Proveedor del contexto de tema que sincroniza la clase CSS en el elemento raíz del documento.
 *
 * @param {{ children: ReactNode }} propiedades_proveedor - Árbol de componentes hijos.
 * @returns {JSX.Element} Proveedor de contexto de tema visual.
 */
export function ProveedorTema({ children }: { children: ReactNode }): JSX.Element {
  const [tema_actual, establecer_tema_actual] = useState<ModoTemaVisual>(obtener_tema_inicial);

  useEffect(() => {
    localStorage.setItem(CLAVE_ALMACENAMIENTO_TEMA, tema_actual);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(tema_actual);
  }, [tema_actual]);

  useEffect(() => {
    const consulta_preferencia_oscura = window.matchMedia("(prefers-color-scheme: dark)");

    const manejar_cambio_preferencia_sistema = (
      evento_cambio_medios: MediaQueryListEvent
    ): void => {
      const tema_persistido = localStorage.getItem(CLAVE_ALMACENAMIENTO_TEMA);
      if (!tema_persistido) {
        establecer_tema_actual(evento_cambio_medios.matches ? "dark" : "light");
      }
    };

    consulta_preferencia_oscura.addEventListener("change", manejar_cambio_preferencia_sistema);
    return () => {
      consulta_preferencia_oscura.removeEventListener(
        "change",
        manejar_cambio_preferencia_sistema
      );
    };
  }, []);

  /**
   * Alterna entre el modo oscuro y el modo claro.
   *
   * @returns {void} No retorna ningún valor.
   */
  const alternar_tema = (): void => {
    establecer_tema_actual((tema_previo) => (tema_previo === "dark" ? "light" : "dark"));
  };

  return (
    <ContextoTema.Provider value={{ tema_actual, alternar_tema }}>
      {children}
    </ContextoTema.Provider>
  );
}

/**
 * Hook personalizado para consultar y alternar el tema visual activo.
 *
 * @returns {ValorContextoTema} Tema actual y función para alternarlo.
 */
export function use_tema(): ValorContextoTema {
  const contexto_actual = useContext(ContextoTema);
  if (contexto_actual === undefined) {
    throw new Error("use_tema debe utilizarse dentro de un ProveedorTema");
  }
  return contexto_actual;
}
