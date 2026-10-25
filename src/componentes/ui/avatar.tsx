/**
 * @file avatar.tsx
 * @description Componentes primitivos de Avatar basados en Radix UI para mostrar imágenes de perfil y respaldos.
 */

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

/**
 * Contenedor circular raíz del componente Avatar.
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_elemento) => (
  <AvatarPrimitive.Root
    ref={referencia_elemento}
    className={combinar_clases_css(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

/**
 * Imagen principal renderizada dentro del contenedor Avatar.
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_elemento) => (
  <AvatarPrimitive.Image
    ref={referencia_elemento}
    className={combinar_clases_css("aspect-square h-full w-full", clase_personalizada)}
    {...propiedades_restantes}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

/**
 * Elemento de respaldo que se muestra cuando la imagen del Avatar no carga o está pendiente.
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className: clase_personalizada, ...propiedades_restantes }, referencia_elemento) => (
  <AvatarPrimitive.Fallback
    ref={referencia_elemento}
    className={combinar_clases_css(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      clase_personalizada
    )}
    {...propiedades_restantes}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
