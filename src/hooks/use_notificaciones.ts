/**
 * @file use_notificaciones.ts
 * @description Hook personalizado y función disparadora para mostrar notificaciones emergentes (toasts) en la interfaz.
 */

import * as React from "react";
import {
  type NotificacionToastActiva,
  type EstadoNotificaciones,
  generar_id_notificacion,
  despachar_accion_notificacion,
  suscriptores_notificaciones,
  estado_memoria_notificaciones,
} from "@/hooks/gestor_estado_notificaciones";

/**
 * Propiedades requeridas para crear una nueva notificación sin especificar manualmente el ID.
 */
export type ParametrosNuevaNotificacion = Omit<NotificacionToastActiva, "id">;

/**
 * Crea y muestra una nueva notificación emergente en la pantalla.
 *
 * @param {ParametrosNuevaNotificacion} propiedades_notificacion - Título, descripción y variante visual de la alerta.
 * @returns {{ id: string; dismiss: () => void; update: (nuevas_propiedades: NotificacionToastActiva) => void }} Controles de la notificación creada.
 */
export function mostrar_notificacion({ ...propiedades_notificacion }: ParametrosNuevaNotificacion) {
  const identificador_unico = generar_id_notificacion();

  const actualizar_notificacion = (nuevas_propiedades: NotificacionToastActiva): void => {
    despachar_accion_notificacion({
      type: "UPDATE_TOAST",
      toast: { ...nuevas_propiedades, id: identificador_unico },
    });
  };

  const ocultar_notificacion = (): void => {
    despachar_accion_notificacion({
      type: "DISMISS_TOAST",
      toastId: identificador_unico,
    });
  };

  despachar_accion_notificacion({
    type: "ADD_TOAST",
    toast: {
      ...propiedades_notificacion,
      id: identificador_unico,
      open: true,
      onOpenChange: (esta_abierto: boolean) => {
        if (!esta_abierto) {
          ocultar_notificacion();
        }
      },
    },
  });

  return {
    id: identificador_unico,
    dismiss: ocultar_notificacion,
    update: actualizar_notificacion,
  };
}

/**
 * Hook de React que suscribe el componente al estado de notificaciones activas y expone funciones para lanzarlas o cerrarlas.
 *
 * @returns {{ toasts: NotificacionToastActiva[]; mostrar_notificacion: typeof mostrar_notificacion; ocultar_notificacion: (id_toast?: string) => void }} Estado y disparadores de notificaciones.
 */
export function use_notificaciones() {
  const [estado_actual, establecer_estado_actual] = React.useState<EstadoNotificaciones>(
    estado_memoria_notificaciones
  );

  React.useEffect(() => {
    suscriptores_notificaciones.push(establecer_estado_actual);
    return () => {
      const indice_suscriptor = suscriptores_notificaciones.indexOf(establecer_estado_actual);
      if (indice_suscriptor > -1) {
        suscriptores_notificaciones.splice(indice_suscriptor, 1);
      }
    };
  }, [estado_actual]);

  return {
    ...estado_actual,
    mostrar_notificacion,
    ocultar_notificacion: (identificador_toast?: string) =>
      despachar_accion_notificacion({
        type: "DISMISS_TOAST",
        toastId: identificador_toast,
      }),
  };
}
