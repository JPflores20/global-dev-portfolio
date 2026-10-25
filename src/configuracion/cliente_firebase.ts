/**
 * @file cliente_firebase.ts
 * @description Inicialización y configuración centralizada de los servicios de Firebase (Firestore y Analytics).
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

/**
 * Parámetros de conexión a Firebase obtenidos desde las variables de entorno de Vite.
 */
const configuracion_credenciales_firebase = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

/**
 * Instancia principal de la aplicación Firebase.
 */
const aplicacion_firebase = initializeApp(configuracion_credenciales_firebase);

/**
 * Servicio de analítica web de Firebase (inicializado únicamente en entorno de navegador).
 */
export const servicio_analitica_firebase =
  typeof window !== "undefined" ? getAnalytics(aplicacion_firebase) : null;

/**
 * Instancia de base de datos Cloud Firestore utilizada para almacenar mensajes de contacto.
 */
export const base_datos_firestore = getFirestore(aplicacion_firebase);
