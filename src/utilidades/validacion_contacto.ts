/**
 * @file validacion_contacto.ts
 * @description Esquema y funciones de validación para el formulario de contacto utilizando Zod.
 */

import { z } from "zod";

/**
 * Estructura de los campos del formulario de contacto.
 */
export interface ValoresFormularioContacto {
  nombre_remitente: string;
  correo_remitente: string;
  mensaje_consulta: string;
}

/**
 * Resultado procesado de la validación del formulario de contacto.
 */
export interface ResultadoValidacionContacto {
  es_valido: boolean;
  errores_por_campo: Record<string, string>;
}

/**
 * Esquema de validación estricto para los campos de entrada del formulario de contacto.
 */
export const esquema_validacion_contacto = z.object({
  nombre_remitente: z.string().trim().min(1, "Name is required").max(100),
  correo_remitente: z.string().trim().email("Invalid email address").max(255),
  mensaje_consulta: z.string().trim().min(1, "Message is required").max(1000),
});

/**
 * Valida los valores introducidos por el usuario en el formulario de contacto.
 *
 * @param {ValoresFormularioContacto} valores_formulario - Objeto con nombre, correo y mensaje del remitente.
 * @returns {ResultadoValidacionContacto} Objeto indicando si los campos son válidos y el mapa de errores.
 */
export function validar_campos_contacto(
  valores_formulario: ValoresFormularioContacto
): ResultadoValidacionContacto {
  const resultado_analisis = esquema_validacion_contacto.safeParse(valores_formulario);

  if (resultado_analisis.success) {
    return {
      es_valido: true,
      errores_por_campo: {},
    };
  }

  const errores_detectados: Record<string, string> = {};
  const lista_incidencias_zod =
    resultado_analisis.error.issues || resultado_analisis.error.errors || [];
  lista_incidencias_zod.forEach((detalle_error_validacion) => {
    const nombre_campo_afectado = detalle_error_validacion.path[0];
    if (nombre_campo_afectado) {
      errores_detectados[String(nombre_campo_afectado)] = detalle_error_validacion.message;
    }
  });

  return {
    es_valido: false,
    errores_por_campo: errores_detectados,
  };
}

/**
 * Construye el enlace de contacto directo de WhatsApp con un mensaje predeterminado según el idioma activo.
 *
 * @param {"en" | "es"} idioma_activo - Código del idioma seleccionado actualmente en la aplicación.
 * @returns {string} URL completa de WhatsApp con el mensaje codificado.
 */
export function construir_url_whatsapp(idioma_activo: "en" | "es"): string {
  const mensaje_predeterminado_whatsapp =
    idioma_activo === "en"
      ? "Hello José Luis, I saw your portfolio and would like to contact you."
      : "Hola José Luis, vi tu portafolio y me gustaría contactarte.";

  return `https://wa.me/524921954970?text=${encodeURIComponent(mensaje_predeterminado_whatsapp)}`;
}
