/**
 * @file desplazamiento_suave.ts
 * @description Funciones de utilidad para la navegación mediante desplazamiento suave (smooth scroll) en el DOM.
 */

/**
 * Desplaza suavemente la vista del navegador hacia el elemento del DOM que coincida con el selector indicado.
 *
 * @param {string} selector_seccion_destino - Selector CSS de la sección destino (ej. "#contact").
 * @returns {void} No retorna ningún valor.
 */
export function desplazar_hacia_seccion(selector_seccion_destino: string): void {
  const elemento_seccion_destino = document.querySelector(selector_seccion_destino);
  if (elemento_seccion_destino) {
    elemento_seccion_destino.scrollIntoView({ behavior: "smooth" });
  }
}
