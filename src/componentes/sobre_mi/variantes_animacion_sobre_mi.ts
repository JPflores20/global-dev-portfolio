/**
 * @file variantes_animacion_sobre_mi.ts
 * @description Definiciones de variantes de animación de Framer Motion para los elementos de la sección Sobre Mí.
 */

import type { Variants } from "framer-motion";

/**
 * Variantes del contenedor principal que coordina la aparición escalonada (stagger) de sus hijos.
 */
export const variantes_contenedor_sobre_mi: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Variantes para bloques de contenido y tarjetas con desplazamiento vertical suave tipo resorte.
 */
export const variantes_bloque_sobre_mi: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

/**
 * Variantes de escala rápida (efecto pop) para las insignias de certificaciones.
 */
export const variantes_insignia_certificacion: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
