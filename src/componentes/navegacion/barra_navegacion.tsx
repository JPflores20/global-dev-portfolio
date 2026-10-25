/**
 * @file barra_navegacion.tsx
 * @description Barra de navegación superior fija con enlaces de secciones, indicador activo (Scroll Spy) y menú móvil.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { use_seccion_activa } from "@/hooks/use_seccion_activa";
import { Button } from "@/componentes/ui/boton";
import { desplazar_hacia_seccion } from "@/utilidades/desplazamiento_suave";
import {
  SelectorIdioma,
  BotonAlternarTema,
  EnlaceDescargaCurriculum,
} from "@/componentes/navegacion/controles_preferencias";
import {
  MenuMovilNavegacion,
  type EnlaceSeccionNavegacion,
} from "@/componentes/navegacion/menu_movil_navegacion";

/**
 * Barra de navegación principal adaptable a escritorio y dispositivos móviles.
 *
 * @returns {JSX.Element} Elemento nav animado fijo en la parte superior.
 */
export function BarraNavegacion(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const selector_seccion_activa = use_seccion_activa();
  const [menu_movil_abierto, establecer_menu_movil_abierto] = useState<boolean>(false);

  const enlaces_secciones: EnlaceSeccionNavegacion[] = [
    { selector_destino: "#about", etiqueta_visible: textos_traducidos.nav.about },
    { selector_destino: "#skills", etiqueta_visible: textos_traducidos.nav.skills },
    { selector_destino: "#experience", etiqueta_visible: textos_traducidos.nav.experience },
    { selector_destino: "#projects", etiqueta_visible: textos_traducidos.nav.projects },
    { selector_destino: "#contact", etiqueta_visible: textos_traducidos.nav.contact },
  ];

  /**
   * Desplaza suavemente hacia la sección seleccionada y cierra el menú móvil si estaba abierto.
   *
   * @param {string} selector_destino - Selector CSS de la sección a mostrar.
   * @returns {void} No retorna ningún valor.
   */
  const navegar_a_seccion = (selector_destino: string): void => {
    desplazar_hacia_seccion(selector_destino);
    establecer_menu_movil_abierto(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logotipo con iniciales */}
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            JLFC
          </motion.a>

          {/* Enlaces de navegación para escritorio con indicador activo */}
          <div className="hidden md:flex items-center gap-6">
            {enlaces_secciones.map((enlace_navegacion) => {
              const es_enlace_activo =
                selector_seccion_activa === enlace_navegacion.selector_destino;
              return (
                <button
                  key={enlace_navegacion.selector_destino}
                  onClick={() => navegar_a_seccion(enlace_navegacion.selector_destino)}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    es_enlace_activo
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {enlace_navegacion.etiqueta_visible}
                  {es_enlace_activo && (
                    <motion.span
                      layoutId="indicador-navegacion-activa"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full gradient-bg"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controles derechos en escritorio */}
          <div className="hidden md:flex items-center gap-3">
            <SelectorIdioma />
            <BotonAlternarTema con_animacion_rotacion={true} />
            <EnlaceDescargaCurriculum ancho_completo={false} />
          </div>

          {/* Botón de apertura/cierre de menú móvil */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => establecer_menu_movil_abierto(!menu_movil_abierto)}
          >
            {menu_movil_abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <MenuMovilNavegacion
        esta_abierto={menu_movil_abierto}
        enlaces_navegacion={enlaces_secciones}
        al_seleccionar_seccion={navegar_a_seccion}
      />
    </motion.nav>
  );
}
