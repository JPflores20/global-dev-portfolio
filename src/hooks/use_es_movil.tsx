/**
 * @file use_es_movil.tsx
 * @description Hook personalizado para detectar de forma reactiva si la ventana actual corresponde a un dispositivo móvil.
 */

import * as React from "react";

/**
 * Ancho máximo en píxeles considerado como punto de quiebre móvil.
 */
const PUNTO_QUIEBRE_MOVIL_PX = 768;

/**
 * Evalúa si el ancho del viewport actual es inferior al punto de quiebre móvil (768px).
 *
 * @returns {boolean} Verdadero si la pantalla es de tamaño móvil, falso en caso contrario.
 */
export function use_es_movil(): boolean {
  const [es_pantalla_movil, establecer_es_pantalla_movil] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const consulta_medios_movil = window.matchMedia(
      `(max-width: ${PUNTO_QUIEBRE_MOVIL_PX - 1}px)`
    );

    const actualizar_estado_movil = (): void => {
      establecer_es_pantalla_movil(window.innerWidth < PUNTO_QUIEBRE_MOVIL_PX);
    };

    consulta_medios_movil.addEventListener("change", actualizar_estado_movil);
    establecer_es_pantalla_movil(window.innerWidth < PUNTO_QUIEBRE_MOVIL_PX);

    return () => {
      consulta_medios_movil.removeEventListener("change", actualizar_estado_movil);
    };
  }, []);

  return Boolean(es_pantalla_movil);
}
