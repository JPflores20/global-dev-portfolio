/**
 * @file campo_texto.tsx
 * @description Componente de entrada de texto de una línea (Input) estilizado para formularios.
 */

import * as React from "react";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

/**
 * Campo de entrada HTML estilizado con soporte de reenvío de referencia (forwardRef).
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className: clase_personalizada, type: tipo_entrada, ...propiedades_restantes }, referencia_input) => {
    return (
      <input
        type={tipo_entrada}
        className={combinar_clases_css(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          clase_personalizada
        )}
        ref={referencia_input}
        {...propiedades_restantes}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
