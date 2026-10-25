/**
 * @file insignia.tsx
 * @description Componente reutilizable de insignia (Badge) para etiquetas de certificaciones, licencias y estados.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

/**
 * Configuración de variantes visuales de la insignia mediante class-variance-authority.
 */
const variantes_insignia = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Propiedades aceptadas por el componente Badge.
 */
export interface PropiedadesInsignia
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variantes_insignia> {}

/**
 * Renderiza una etiqueta estilizada tipo píldora según la variante seleccionada.
 *
 * @param {PropiedadesInsignia} propiedades_componente - Atributos HTML y variante de estilo.
 * @returns {JSX.Element} Elemento div con estilos de insignia.
 */
function Badge({
  className: clase_personalizada,
  variant: variante_visual,
  ...propiedades_restantes
}: PropiedadesInsignia): JSX.Element {
  return (
    <div
      className={combinar_clases_css(
        variantes_insignia({ variant: variante_visual }),
        clase_personalizada
      )}
      {...propiedades_restantes}
    />
  );
}

export { Badge, variantes_insignia };
