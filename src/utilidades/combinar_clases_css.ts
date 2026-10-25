/**
 * @file combinar_clases_css.ts
 * @description Utilidad para fusionar clases condicionales de CSS y resolver conflictos de Tailwind CSS.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina múltiples listas o diccionarios de clases CSS y optimiza las utilidades de Tailwind.
 *
 * @param {...ClassValue[]} lista_clases_entrada - Clases CSS condicionales o estáticas a combinar.
 * @returns {string} Cadena de clases CSS unificada y sin duplicados conflictivos.
 */
export function combinar_clases_css(...lista_clases_entrada: ClassValue[]): string {
  return twMerge(clsx(lista_clases_entrada));
}
