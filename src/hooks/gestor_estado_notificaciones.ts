/**
 * @file gestor_estado_notificaciones.ts
 * @description Gestión de estado en memoria, reducer y cola de expiración para el sistema de notificaciones (toasts).
 */

import type * as React from "react";
import type { ElementoAccionToast, PropiedadesToast } from "@/componentes/ui/notificacion_toast";

const LIMITE_NOTIFICACIONES_VISIBLES = 1;
const RETRASO_ELIMINACION_TOAST_MS = 1000000;

/**
 * Estructura interna de una notificación activa en la cola del gestor.
 */
export type NotificacionToastActiva = PropiedadesToast & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ElementoAccionToast;
};

/**
 * Acciones soportadas por el reductor de estado de notificaciones.
 */
export type AccionEstadoNotificacion =
  | {
      type: "ADD_TOAST";
      toast: NotificacionToastActiva;
    }
  | {
      type: "UPDATE_TOAST";
      toast: Partial<NotificacionToastActiva>;
    }
  | {
      type: "DISMISS_TOAST";
      toastId?: NotificacionToastActiva["id"];
    }
  | {
      type: "REMOVE_TOAST";
      toastId?: NotificacionToastActiva["id"];
    };

/**
 * Estado global del contenedor de notificaciones.
 */
export interface EstadoNotificaciones {
  toasts: NotificacionToastActiva[];
}

let contador_identificadores_toast = 0;
const mapa_temporizadores_toast = new Map<string, ReturnType<typeof setTimeout>>();
export const suscriptores_notificaciones: Array<(nuevo_estado: EstadoNotificaciones) => void> = [];
export let estado_memoria_notificaciones: EstadoNotificaciones = { toasts: [] };

/**
 * Genera un identificador numérico secuencial único para cada notificación.
 *
 * @returns {string} Identificador único en formato texto.
 */
export function generar_id_notificacion(): string {
  contador_identificadores_toast =
    (contador_identificadores_toast + 1) % Number.MAX_SAFE_INTEGER;
  return contador_identificadores_toast.toString();
}

/**
 * Programa la eliminación definitiva de una notificación tras su cierre visual.
 *
 * @param {string} identificador_toast - ID de la notificación que se agregará a la cola de remoción.
 * @returns {void} No retorna ningún valor.
 */
function encolar_eliminacion_notificacion(identificador_toast: string): void {
  if (mapa_temporizadores_toast.has(identificador_toast)) {
    return;
  }

  const temporizador_remocion = setTimeout(() => {
    mapa_temporizadores_toast.delete(identificador_toast);
    despachar_accion_notificacion({
      type: "REMOVE_TOAST",
      toastId: identificador_toast,
    });
  }, RETRASO_ELIMINACION_TOAST_MS);

  mapa_temporizadores_toast.set(identificador_toast, temporizador_remocion);
}

/**
 * Función reductora pura que calcula el siguiente estado de la lista de notificaciones.
 *
 * @param {EstadoNotificaciones} estado_actual - Estado vigente de las notificaciones.
 * @param {AccionEstadoNotificacion} accion_recibida - Acción a aplicar sobre el estado.
 * @returns {EstadoNotificaciones} Nuevo estado actualizado.
 */
export function reductor_notificaciones(
  estado_actual: EstadoNotificaciones,
  accion_recibida: AccionEstadoNotificacion
): EstadoNotificaciones {
  switch (accion_recibida.type) {
    case "ADD_TOAST":
      return {
        ...estado_actual,
        toasts: [accion_recibida.toast, ...estado_actual.toasts].slice(
          0,
          LIMITE_NOTIFICACIONES_VISIBLES
        ),
      };

    case "UPDATE_TOAST":
      return {
        ...estado_actual,
        toasts: estado_actual.toasts.map((notificacion_existente) =>
          notificacion_existente.id === accion_recibida.toast.id
            ? { ...notificacion_existente, ...accion_recibida.toast }
            : notificacion_existente
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId: id_notificacion_a_ocultar } = accion_recibida;

      if (id_notificacion_a_ocultar) {
        encolar_eliminacion_notificacion(id_notificacion_a_ocultar);
      } else {
        estado_actual.toasts.forEach((notificacion_iterada) => {
          encolar_eliminacion_notificacion(notificacion_iterada.id);
        });
      }

      return {
        ...estado_actual,
        toasts: estado_actual.toasts.map((notificacion_existente) =>
          notificacion_existente.id === id_notificacion_a_ocultar ||
          id_notificacion_a_ocultar === undefined
            ? { ...notificacion_existente, open: false }
            : notificacion_existente
        ),
      };
    }

    case "REMOVE_TOAST":
      if (accion_recibida.toastId === undefined) {
        return { ...estado_actual, toasts: [] };
      }
      return {
        ...estado_actual,
        toasts: estado_actual.toasts.filter(
          (notificacion_existente) => notificacion_existente.id !== accion_recibida.toastId
        ),
      };
  }
}

/**
 * Ejecuta una acción en el reductor y notifica a todos los componentes suscritos.
 *
 * @param {AccionEstadoNotificacion} accion_a_despachar - Acción de actualización de notificaciones.
 * @returns {void} No retorna ningún valor.
 */
export function despachar_accion_notificacion(
  accion_a_despachar: AccionEstadoNotificacion
): void {
  estado_memoria_notificaciones = reductor_notificaciones(
    estado_memoria_notificaciones,
    accion_a_despachar
  );
  suscriptores_notificaciones.forEach((funcion_suscriptora) => {
    funcion_suscriptora(estado_memoria_notificaciones);
  });
}
