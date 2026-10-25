/**
 * @file use_seccion_activa.ts
 * @description Hook personalizado (Scroll Spy) que detecta qué sección de la página está actualmente visible en el viewport.
 */

import { useEffect, useState } from "react";

const SELECTORES_SECCIONES_OBSERVADAS: string[] = [
  "#about",
  "#skills",
  "#experience",
  "#projects",
  "#contact",
];

/**
 * Monitorea el desplazamiento vertical de la ventana para determinar el selector de la sección activa.
 *
 * @returns {string} Selector CSS de la sección activa (por ejemplo "#experience") o cadena vacía si está en el inicio.
 */
export function use_seccion_activa(): string {
  const [selector_activo, establecer_selector_activo] = useState<string>("");

  useEffect(() => {
    const actualizar_seccion_por_scroll = (): void => {
      const posicion_scroll_actual = window.scrollY + 220;

      if (window.scrollY < 300) {
        establecer_selector_activo("");
        return;
      }

      let ultimo_selector_encontrado = "";
      for (const selector_seccion of SELECTORES_SECCIONES_OBSERVADAS) {
        const elemento_seccion = document.querySelector<HTMLElement>(selector_seccion);
        if (
          elemento_seccion &&
          elemento_seccion.offsetTop <= posicion_scroll_actual
        ) {
          ultimo_selector_encontrado = selector_seccion;
        }
      }

      establecer_selector_activo(ultimo_selector_encontrado);
    };

    actualizar_seccion_por_scroll();
    window.addEventListener("scroll", actualizar_seccion_por_scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", actualizar_seccion_por_scroll);
    };
  }, []);

  return selector_activo;
}
