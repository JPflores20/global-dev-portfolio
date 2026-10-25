/**
 * @file dialogo.tsx
 * @description Componentes de ventana modal (Dialog) construidos sobre Radix UI para mostrar detalles de proyectos.
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

/**
 * Capa de fondo semitransparente que oscurece el contenido detrás del diálogo modal.
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_overlay) => (
  <DialogPrimitive.Overlay
    ref={referencia_overlay}
    className={combinar_clases_css(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/**
 * Contenedor principal centrado del diálogo modal con botón de cierre integrado.
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className: clase_personalizada, children, ...propiedades_restantes }, referencia_contenido) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={referencia_contenido}
      className={combinar_clases_css(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        clase_personalizada
      )}
      {...propiedades_restantes}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/**
 * Cabecera estructural para agrupar el título y subtítulo del diálogo modal.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} propiedades_cabecera - Atributos HTML del contenedor de cabecera.
 * @returns {JSX.Element} Contenedor estilizado de cabecera.
 */
const DialogHeader = ({
  className: clase_personalizada,
  ...propiedades_restantes
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div
    className={combinar_clases_css(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
);
DialogHeader.displayName = "DialogHeader";

/**
 * Pie estructural para alinear botones de acción dentro del diálogo modal.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} propiedades_pie - Atributos HTML del contenedor inferior.
 * @returns {JSX.Element} Contenedor estilizado de pie de diálogo.
 */
const DialogFooter = ({
  className: clase_personalizada,
  ...propiedades_restantes
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div
    className={combinar_clases_css(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
);
DialogFooter.displayName = "DialogFooter";

/**
 * Título accesible del diálogo modal.
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_titulo) => (
  <DialogPrimitive.Title
    ref={referencia_titulo}
    className={combinar_clases_css(
      "text-lg font-semibold leading-none tracking-tight",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * Descripción accesible secundaria del diálogo modal.
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_descripcion) => (
  <DialogPrimitive.Description
    ref={referencia_descripcion}
    className={combinar_clases_css("text-sm text-muted-foreground", clase_personalizada)}
    {...propiedades_restantes}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
