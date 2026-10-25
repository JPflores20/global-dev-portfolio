/**
 * @file descripcion_emergente.tsx
 * @description Componentes de información emergente (Tooltip) basados en Radix UI.
 */

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

/**
 * Contenedor flotante animado que muestra el texto de ayuda al posicionar el cursor sobre el disparador.
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(
  (
    { className: clase_personalizada, sideOffset: distancia_borde = 4, ...propiedades_restantes },
    referencia_contenido
  ) => (
    <TooltipPrimitive.Content
      ref={referencia_contenido}
      sideOffset={distancia_borde}
      className={combinar_clases_css(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        clase_personalizada
      )}
      {...propiedades_restantes}
    />
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
