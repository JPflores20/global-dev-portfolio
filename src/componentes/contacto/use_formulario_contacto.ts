/**
 * @file use_formulario_contacto.ts
 * @description Hook personalizado que encapsula el estado, validación y envío a Firestore del formulario de contacto.
 */

import { useState, type ChangeEvent, type FormEvent } from "react";
import { use_notificaciones } from "@/hooks/use_notificaciones";
import {
  validar_campos_contacto,
  type ValoresFormularioContacto,
} from "@/utilidades/validacion_contacto";
import { guardar_mensaje_contacto } from "@/servicios/servicio_mensajes_contacto";

const ESTADO_INICIAL_FORMULARIO: ValoresFormularioContacto = {
  nombre_remitente: "",
  correo_remitente: "",
  mensaje_consulta: "",
};

/**
 * Gestiona el ciclo de vida completo de captura, validación y envío de mensajes de contacto.
 *
 * @returns {{
 *   valores_formulario: ValoresFormularioContacto;
 *   envio_en_progreso: boolean;
 *   errores_validacion: Record<string, string>;
 *   manejar_cambio_campo: (evento_cambio_campo: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
 *   manejar_envio_formulario: (evento_envio_formulario: FormEvent) => Promise<void>;
 * }} Estado y manejadores del formulario de contacto.
 */
export function use_formulario_contacto() {
  const { mostrar_notificacion } = use_notificaciones();
  const [valores_formulario, establecer_valores_formulario] =
    useState<ValoresFormularioContacto>(ESTADO_INICIAL_FORMULARIO);
  const [envio_en_progreso, establecer_envio_en_progreso] = useState<boolean>(false);
  const [errores_validacion, establecer_errores_validacion] = useState<
    Record<string, string>
  >({});

  /**
   * Actualiza el valor del campo modificado y limpia su error de validación previo.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} evento_cambio_campo - Evento de cambio en el input.
   * @returns {void} No retorna ningún valor.
   */
  const manejar_cambio_campo = (
    evento_cambio_campo: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name: nombre_campo, value: nuevo_valor_campo } = evento_cambio_campo.target;
    establecer_valores_formulario((valores_previos) => ({
      ...valores_previos,
      [nombre_campo]: nuevo_valor_campo,
    }));
    if (errores_validacion[nombre_campo]) {
      establecer_errores_validacion((errores_previos) => ({
        ...errores_previos,
        [nombre_campo]: "",
      }));
    }
  };

  /**
   * Ejecuta la validación Zod y guarda el mensaje en Firestore mostrando alertas de éxito o error.
   *
   * @param {FormEvent} evento_envio_formulario - Evento de envío del formulario.
   * @returns {Promise<void>} Promesa que finaliza al terminar el envío.
   */
  const manejar_envio_formulario = async (
    evento_envio_formulario: FormEvent
  ): Promise<void> => {
    evento_envio_formulario.preventDefault();
    establecer_errores_validacion({});

    const resultado_validacion = validar_campos_contacto(valores_formulario);
    if (!resultado_validacion.es_valido) {
      establecer_errores_validacion(resultado_validacion.errores_por_campo);
      return;
    }

    establecer_envio_en_progreso(true);

    try {
      await guardar_mensaje_contacto(valores_formulario);
      mostrar_notificacion({
        title: "¡Mensaje Enviado!",
        description: "He recibido tu mensaje correctamente.",
      });
      establecer_valores_formulario(ESTADO_INICIAL_FORMULARIO);
    } catch (error_envio_firestore) {
      console.error("Error enviando a Firebase:", error_envio_firestore);
      mostrar_notificacion({
        variant: "destructive",
        title: "Error",
        description:
          "Hubo un problema al enviar el mensaje. Intenta contactarme por WhatsApp.",
      });
    } finally {
      establecer_envio_en_progreso(false);
    }
  };

  return {
    valores_formulario,
    envio_en_progreso,
    errores_validacion,
    manejar_cambio_campo,
    manejar_envio_formulario,
  };
}
