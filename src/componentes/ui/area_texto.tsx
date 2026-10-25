/**
 * @file area_texto.tsx
 * @description Componente de área de texto multilínea (Textarea) para redacción de mensajes en formularios.
 */

import * as React from "react";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

/**
 * Propiedades estándar de un elemento HTML textarea.
 */
export type PropiedadesAreaTexto = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Área de texto multilínea accesible con soporte de referencia y estilos del sistema de diseño.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, PropiedadesAreaTexto>(
  ({ className: clase_personalizada, ...propiedades_restantes }, referencia_textarea) => {
    return (
      <textarea
        className={combinar_clases_css(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          clase_personalizada
        )}
        ref={referencia_textarea}
        {...propiedades_restantes}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
