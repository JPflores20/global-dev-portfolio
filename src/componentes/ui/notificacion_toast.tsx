/**
 * @file notificacion_toast.tsx
 * @description Componentes primitivos de notificación Toast basados en Radix UI para alertas de estado del formulario.
 */

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

const ToastProvider = ToastPrimitives.Provider;

/**
 * Región de la pantalla donde se apilan las notificaciones emergentes.
 */
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_viewport) => (
  <ToastPrimitives.Viewport
    ref={referencia_viewport}
    className={combinar_clases_css(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

/**
 * Variantes visuales para notificaciones informativas o de error destructivo.
 */
const variantes_toast = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Elemento raíz de una notificación individual.
 */
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof variantes_toast>
>(
  (
    { className: clase_personalizada, variant: variante_visual, ...propiedades_restantes },
    referencia_toast
  ) => {
    return (
      <ToastPrimitives.Root
        ref={referencia_toast}
        className={combinar_clases_css(
          variantes_toast({ variant: variante_visual }),
          clase_personalizada
        )}
        {...propiedades_restantes}
      />
    );
  }
);
Toast.displayName = ToastPrimitives.Root.displayName;

/**
 * Botón de acción interactiva opcional dentro de una notificación.
 */
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_accion) => (
  <ToastPrimitives.Action
    ref={referencia_accion}
    className={combinar_clases_css(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

/**
 * Botón de cierre manual para descartar la notificación.
 */
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_cierre) => (
  <ToastPrimitives.Close
    ref={referencia_cierre}
    className={combinar_clases_css(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      clase_personalizada
    )}
    toast-close=""
    {...propiedades_restantes}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

/**
 * Título destacado de la notificación.
 */
const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_titulo) => (
  <ToastPrimitives.Title
    ref={referencia_titulo}
    className={combinar_clases_css("text-sm font-semibold", clase_personalizada)}
    {...propiedades_restantes}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

/**
 * Texto descriptivo secundario de la notificación.
 */
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_descripcion) => (
  <ToastPrimitives.Description
    ref={referencia_descripcion}
    className={combinar_clases_css("text-sm opacity-90", clase_personalizada)}
    {...propiedades_restantes}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export type PropiedadesToast = React.ComponentPropsWithoutRef<typeof Toast>;
export type ElementoAccionToast = React.ReactElement<typeof ToastAction>;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
