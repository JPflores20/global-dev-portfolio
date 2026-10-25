/**
 * @file enlace_navegacion.tsx
 * @description Envoltorio compatible con NavLink de React Router que facilita la asignación de clases activas y pendientes.
 */

import { NavLink as EnlaceRouterBase, type NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

/**
 * Propiedades extendidas para el componente EnlaceNavegacion.
 */
interface PropiedadesEnlaceNavegacion extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

/**
 * Componente de enlace de enrutamiento que aplica clases condicionales según el estado activo o pendiente de la ruta.
 */
const EnlaceNavegacion = forwardRef<HTMLAnchorElement, PropiedadesEnlaceNavegacion>(
  (
    {
      className: clase_base,
      activeClassName: clase_estado_activo,
      pendingClassName: clase_estado_pendiente,
      to: ruta_destino,
      ...propiedades_restantes
    },
    referencia_enlace
  ) => {
    return (
      <EnlaceRouterBase
        ref={referencia_enlace}
        to={ruta_destino}
        className={({ isActive: ruta_esta_activa, isPending: ruta_esta_pendiente }) =>
          combinar_clases_css(
            clase_base,
            ruta_esta_activa && clase_estado_activo,
            ruta_esta_pendiente && clase_estado_pendiente
          )
        }
        {...propiedades_restantes}
      />
    );
  }
);

EnlaceNavegacion.displayName = "EnlaceNavegacion";

export { EnlaceNavegacion };
