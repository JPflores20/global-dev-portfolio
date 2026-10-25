/**
 * @file notificacion_sonner.tsx
 * @description Adaptador de notificaciones emergentes basado en la librería Sonner sincronizado con el tema visual.
 */

import type * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as ProveedorSonnerBase, toast as disparar_sonner } from "sonner";

type PropiedadesContenedorSonner = React.ComponentProps<typeof ProveedorSonnerBase>;

/**
 * Renderiza el contenedor de notificaciones Sonner aplicando los colores del sistema de diseño.
 *
 * @param {PropiedadesContenedorSonner} propiedades_sonner - Configuración opcional para el contenedor Sonner.
 * @returns {JSX.Element} Contenedor de notificaciones Sonner.
 */
const Toaster = ({ ...propiedades_sonner }: PropiedadesContenedorSonner): JSX.Element => {
  const { theme: tema_sistema = "system" } = useTheme();

  return (
    <ProveedorSonnerBase
      theme={tema_sistema as PropiedadesContenedorSonner["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...propiedades_sonner}
    />
  );
};

export { Toaster, disparar_sonner };
