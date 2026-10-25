/**
 * @file contenedor_notificaciones.tsx
 * @description Componente proveedor que suscribe y renderiza todas las notificaciones Toast activas en pantalla.
 */

import { use_notificaciones } from "@/hooks/use_notificaciones";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/componentes/ui/notificacion_toast";

/**
 * Renderiza la lista de notificaciones activas gestionadas por el hook use_notificaciones.
 *
 * @returns {JSX.Element} Árbol de proveedor y elementos Toast.
 */
export function Toaster(): JSX.Element {
  const { toasts: lista_notificaciones_activas } = use_notificaciones();

  return (
    <ToastProvider>
      {lista_notificaciones_activas.map(function renderizar_notificacion_individual({
        id: identificador_notificacion,
        title: titulo_notificacion,
        description: descripcion_notificacion,
        action: accion_notificacion,
        ...propiedades_restantes
      }) {
        return (
          <Toast key={identificador_notificacion} {...propiedades_restantes}>
            <div className="grid gap-1">
              {titulo_notificacion && <ToastTitle>{titulo_notificacion}</ToastTitle>}
              {descripcion_notificacion && (
                <ToastDescription>{descripcion_notificacion}</ToastDescription>
              )}
            </div>
            {accion_notificacion}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
