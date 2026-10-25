/**
 * @file controles_preferencias.tsx
 * @description Subcomponentes reutilizables para cambiar el idioma (ES/EN), alternar el tema claro/oscuro y descargar el CV.
 */

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Download } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { use_tema } from "@/contextos/contexto_tema";
import { Button } from "@/componentes/ui/boton";

const RUTA_ARCHIVO_CV_PDF = "/CV_José Luis Flores Carrillo_2026.pdf";
const NOMBRE_DESCARGA_CV_PDF = "CV_José Luis Flores Carrillo_2026.pdf";

/**
 * Selector tipo píldora para alternar entre los idiomas Español (ES) e Inglés (EN).
 *
 * @returns {JSX.Element} Contenedor de botones de selección de idioma.
 */
export function SelectorIdioma(): JSX.Element {
  const { idioma_actual, cambiar_idioma } = use_idioma();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
      <button
        onClick={() => cambiar_idioma("es")}
        className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
          idioma_actual === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => cambiar_idioma("en")}
        className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
          idioma_actual === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}

/**
 * Botón circular que alterna entre el modo oscuro y el modo claro con animación de rotación.
 *
 * @param {{ con_animacion_rotacion?: boolean }} propiedades_boton - Define si el ícono rota al cambiar de tema.
 * @returns {JSX.Element} Botón de cambio de tema.
 */
export function BotonAlternarTema({
  con_animacion_rotacion = true,
}: {
  con_animacion_rotacion?: boolean;
}): JSX.Element {
  const { tema_actual, alternar_tema } = use_tema();

  if (!con_animacion_rotacion) {
    return (
      <Button variant="ghost" size="icon" onClick={alternar_tema} className="rounded-full">
        {tema_actual === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="icon" onClick={alternar_tema} className="rounded-full">
      <AnimatePresence mode="wait">
        {tema_actual === "dark" ? (
          <motion.div
            key="icono_sol"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="icono_luna"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
          >
            <Moon className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}

/**
 * Enlace estilizado como botón con gradiente para descargar el Currículum Vitae en formato PDF.
 *
 * @param {{ ancho_completo?: boolean }} propiedades_enlace - Indica si el botón debe ocupar todo el ancho disponible.
 * @returns {JSX.Element} Enlace de descarga de CV.
 */
export function EnlaceDescargaCurriculum({
  ancho_completo = false,
}: {
  ancho_completo?: boolean;
}): JSX.Element {
  const { textos_traducidos } = use_idioma();

  return (
    <a
      href={RUTA_ARCHIVO_CV_PDF}
      download={NOMBRE_DESCARGA_CV_PDF}
      target="_blank"
      rel="noopener noreferrer"
      className={ancho_completo ? "block w-full" : undefined}
    >
      <Button
        className={`${
          ancho_completo ? "w-full " : ""
        }gradient-bg text-white rounded-full gap-2`}
      >
        <Download className="h-4 w-4" />
        {textos_traducidos.nav.download_cv}
      </Button>
    </a>
  );
}
