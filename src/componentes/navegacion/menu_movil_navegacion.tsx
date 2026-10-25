/**
 * @file menu_movil_navegacion.tsx
 * @description Panel desplegable de navegación para pantallas móviles con enlaces de sección y controles de preferencias.
 */

import { motion, AnimatePresence } from "framer-motion";
import {
  SelectorIdioma,
  BotonAlternarTema,
  EnlaceDescargaCurriculum,
} from "@/componentes/navegacion/controles_preferencias";

/**
 * Representa un enlace de navegación hacia una sección interna de la página.
 */
export interface EnlaceSeccionNavegacion {
  selector_destino: string;
  etiqueta_visible: string;
}

/**
 * Propiedades requeridas por el componente MenuMovilNavegacion.
 */
interface PropiedadesMenuMovilNavegacion {
  esta_abierto: boolean;
  enlaces_navegacion: EnlaceSeccionNavegacion[];
  al_seleccionar_seccion: (selector_destino: string) => void;
}

/**
 * Renderiza el menú desplegable animado en dispositivos móviles cuando se encuentra activo.
 *
 * @param {PropiedadesMenuMovilNavegacion} propiedades_menu - Estado de apertura, enlaces y manejador de selección.
 * @returns {JSX.Element} Contenedor animado del menú móvil.
 */
export function MenuMovilNavegacion({
  esta_abierto,
  enlaces_navegacion,
  al_seleccionar_seccion,
}: PropiedadesMenuMovilNavegacion): JSX.Element {
  return (
    <AnimatePresence>
      {esta_abierto && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {enlaces_navegacion.map((enlace_navegacion) => (
              <button
                key={enlace_navegacion.selector_destino}
                onClick={() => al_seleccionar_seccion(enlace_navegacion.selector_destino)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                {enlace_navegacion.etiqueta_visible}
              </button>
            ))}

            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <SelectorIdioma />
              <BotonAlternarTema con_animacion_rotacion={false} />
            </div>

            <EnlaceDescargaCurriculum ancho_completo={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
