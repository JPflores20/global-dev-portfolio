/**
 * @file servicio_mensajes_contacto.ts
 * @description Servicio de acceso a datos para registrar mensajes del formulario de contacto en Cloud Firestore.
 */

import { collection, addDoc } from "firebase/firestore";
import { base_datos_firestore } from "@/configuracion/cliente_firebase";
import type { ValoresFormularioContacto } from "@/utilidades/validacion_contacto";

/**
 * Nombre de la colección en Firestore donde se almacenan los mensajes recibidos.
 */
const COLECCION_MENSAJES_FIRESTORE = "mensajes";

/**
 * Guarda un nuevo mensaje de contacto en la colección correspondiente de Firebase Firestore.
 *
 * @param {ValoresFormularioContacto} valores_mensaje - Información validada del remitente y su mensaje.
 * @returns {Promise<void>} Promesa que se resuelve cuando el documento ha sido persistido.
 */
export async function guardar_mensaje_contacto(
  valores_mensaje: ValoresFormularioContacto
): Promise<void> {
  await addDoc(collection(base_datos_firestore, COLECCION_MENSAJES_FIRESTORE), {
    nombre: valores_mensaje.nombre_remitente,
    email: valores_mensaje.correo_remitente,
    mensaje: valores_mensaje.mensaje_consulta,
    fecha: new Date().toISOString(),
  });
}
