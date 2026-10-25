/**
 * @file etiqueta.tsx
 * @description Componente accesible de etiqueta de formulario (Label) basado en Radix UI.
 */

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

/**
 * Variantes tipográficas base para las etiquetas de campos de formulario.
 */
const variantes_etiqueta = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

/**
 * Etiqueta accesible vinculada a controles de entrada de formulario.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof variantes_etiqueta>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_etiqueta) => (
  <LabelPrimitive.Root
    ref={referencia_etiqueta}
    className={combinar_clases_css(variantes_etiqueta(), clase_personalizada)}
    {...propiedades_restantes}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
