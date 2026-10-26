/**
 * @file traducciones_es.ts
 * @description Diccionario completo de textos en español para todas las secciones del portafolio.
 */

import type { EstructuraTraducciones } from "@/traducciones/tipos_traducciones";
import { descripciones_tecnologias_es } from "@/traducciones/descripciones_tecnologias_es";
import { lista_proyectos_es } from "@/traducciones/proyectos_es";
import { lista_experiencia_es } from "@/traducciones/experiencia_es";

/**
 * Objeto de traducciones en idioma español (es).
 */
export const traducciones_es: EstructuraTraducciones = {
  nav: {
    about: "Sobre Mí",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    download_cv: "Descargar CV",
  },
  hero: {
    greeting: "Hola, soy",
    name: "José Luis Flores Carrillo",
    role: "Ingeniero de Software & Analista de Datos",
    tagline:
      "Especializado en Analítica Industrial, Automatización SAP, Desarrollo Móvil/Web y Machine Learning",
    cta: "Contáctame",
  },
  about: {
    title: "Sobre Mí",
    description:
      "Ingeniero de Software y Técnico en Sistemas Digitales con más de 3 años de experiencia en desarrollo móvil/web, analítica industrial y automatización operativa. Actualmente Analista de Datos en Grupo Modelo (Cervecería de Zacatecas), donde diseño plataformas en tiempo real para Control Estadístico de Procesos (SPC / Seis Sigma), metodologías VPO/TPM, integración con Siemens Braumat/SAP e Inteligencia Artificial (Google Gemini).",
    highlights: [
      "Analista de Datos & Ing. de Software en Grupo Modelo (AB InBev)",
      "Certificación Generative AI Leader (Google)",
      "Automatización Industrial (SAP GUI Scripting, VBA, Siemens Braumat, SPC)",
      "Especialista Full-Stack & Móvil (React, TypeScript, Flutter, Python, SQL)",
    ],
    education_title: "Formación Académica",
    education: [
      {
        degree: "Ingeniería de Software",
        school: "Universidad Autónoma de Zacatecas",
        period: "2021 - 2026",
      },
      {
        degree: "Técnico en Sistemas Digitales",
        school: 'CECYT 18 "Zacatecas"',
        period: "2018 - 2021",
        license: "Cédula Profesional: 14051792",
      },
    ],
    certifications_title: "Certificaciones",
    certifications: ["Generative AI Leader (Google)"],
    languages_title: "Idiomas",
    languages: ["Español (Nativo)", "Inglés (B2 - Intermedio/Avanzado)"],
  },
  experience: {
    title: "Experiencia",
    positions: lista_experiencia_es,
  },
  skills: {
    title: "Habilidades",
    categories: {
      languages: "Lenguajes",
      frameworks: "Frameworks",
      tools: "Herramientas y Tecnologías",
    },
  },
  tech_stack: {
    title: "Stack Tecnológico",
    description:
      "Una lista seleccionada de tecnologías y herramientas que utilizo para crear productos digitales.",
    categories: {
      All: "Todos",
      Frontend: "Frontend",
      Backend: "Backend",
      Mobile: "Móvil",
      Database: "Bases de Datos",
      DevOps: "DevOps",
      AI: "IA Asistida",
      Tools: "Diseño y Herramientas",
    },
    tech_descriptions: descripciones_tecnologias_es,
  },
  projects: {
    title: "Proyectos",
    view_details: "Ver Detalles",
    view_code: "Ver Código",
    live_demo: "Website",
    video_demo: "Video Demo",
    lista_proyectos: lista_proyectos_es,
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría saber de ti!",
    form: {
      name: "Tu Nombre",
      email: "Tu Correo",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado exitosamente!",
      error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
    },
    info: {
      phone: "WhatsApp",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
    made_with: "Hecho con",
  },
};
