/**
 * @file indice_traducciones.ts
 * @description Punto de acceso unificado para los diccionarios de idioma (inglés y español) y sus tipos asociados.
 */

import { traducciones_en } from "@/traducciones/traducciones_en";
import { traducciones_es } from "@/traducciones/traducciones_es";
import type {
  CodigoIdioma,
  EstructuraTraducciones,
  ClaveCategoriaTecnologia,
  ProyectoPortafolio,
  PuestoExperiencia,
  ProyectoDestacadoExperiencia,
  RegistroEducacion,
} from "@/traducciones/tipos_traducciones";

/**
 * Catálogo maestro de traducciones indexado por código de idioma ("en" | "es").
 */
export const catalogo_traducciones: Record<CodigoIdioma, EstructuraTraducciones> = {
  en: traducciones_en,
  es: traducciones_es,
};

export type {
  CodigoIdioma,
  EstructuraTraducciones,
  ClaveCategoriaTecnologia,
  ProyectoPortafolio,
  PuestoExperiencia,
  ProyectoDestacadoExperiencia,
  RegistroEducacion,
};
