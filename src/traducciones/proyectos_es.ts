/**
 * @file proyectos_es.ts
 * @description Lista consolidada de los 19 proyectos destacados del portafolio en español (9 comerciales/IA + 10 industriales).
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";
import { proyectos_industriales_es } from "@/traducciones/proyectos_industriales_es";

/**
 * Arreglo completo de proyectos destacados (encabezado por los Proyectos Comerciales Destacados + sistemas de Grupo Modelo).
 */
export const lista_proyectos_es: ProyectoPortafolio[] = [
  {
    title: "DentaFlow PRO",
    short_desc: "Reservas en línea, expediente clínico electrónico, recetas PDF y CRM WhatsApp/Email",
    full_desc:
      "Plataforma dental multi-clínica con agenda de citas en línea, expedientes clínicos electrónicos con alertas médicas, generación de recetas en PDF, seguimiento financiero y CRM automatizado por WhatsApp y correo electrónico.",
    tech: ["React", "TypeScript", "TanStack Router", "Firebase", "Tailwind CSS"],
    github: "https://github.com/JPflores20/pixel-perfect-replica",
    demo: "https://dentalflow-802ca.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "ONE Event Flow",
    short_desc: "Gestión de invitados (RSVP, check-in QR), planos drag-and-drop y contabilidad",
    full_desc:
      "Plataforma en tiempo real para gestión de invitados (confirmaciones RSVP, check-in en puerta con código QR e integración con WhatsApp y Google Calendar), diseñador interactivo drag-and-drop de planos de mesas y módulo contable.",
    tech: ["React", "TypeScript", "Firebase", "Canvas Drag & Drop", "Tailwind CSS"],
    github: "https://github.com/JPflores20/one-event-flow",
    demo: "https://one-wedding-planner.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Vision Hub",
    short_desc: "Expedientes clínicos, graduación de lentes, inventario multi-sucursal y POS",
    full_desc:
      "Plataforma integral de administración óptica para expedientes clínicos, prescripción de lentes, control de inventario multi-sucursal, Punto de Venta (POS) y reportes financieros ejecutivos para Ópticas Visión 2000.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com/JPflores20/visionflow-hub",
    demo: "https://opticas-vision-2000.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "GradFrame",
    short_desc: "Calculadora dinámica de paquetes, registro por código de evento y CMS en tiempo real",
    full_desc:
      "Plataforma comercial para estudio fotográfico de graduaciones con calculadora dinámica de paquetes, registro de graduados por código de evento, agenda pública de reservaciones y CMS administrativo en tiempo real.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "CMS Tiempo Real"],
    github: "https://github.com/JPflores20/gradframe-zacatecas-captures",
    demo: "https://gradframe-graduation.com/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Montse Elite Fitness",
    short_desc: "Motor de cálculo metabólico (Mifflin-St Jeor, TDEE, macros) y CMS con exportación JSON",
    full_desc:
      "Aplicación web de fitness equipada con motor de cálculo metabólico (Mifflin-St Jeor, TDEE y macronutrientes), catálogo de 1,324 ejercicios y panel administrativo CMS Studio en vivo con exportación JSON.",
    tech: ["React 19", "TypeScript", "TanStack Start", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/JPflores20/montse-elite-fitness",
    demo: "https://montseelitefitness.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Golden English Zac",
    short_desc: "Sitio web comercial en producción para academia de inglés",
    full_desc:
      "Landing page comercial moderna para Golden English Zacatecas. Incluye animaciones al hacer scroll, contadores dinámicos de estadísticas y formularios de contacto. Desarrollada con React, TypeScript y Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/JPflores20/golden-english-zac-landing",
    demo: "https://goldenenglishzac.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Taxaf",
    short_desc: "Aplicación móvil de transporte (ride-hailing) publicada en iOS y Android",
    full_desc:
      "Liderazgo en diseño UI/UX, desarrollo móvil frontend en Flutter, pruebas QA y gestión de bases de datos en tiempo real para las aplicaciones de movilidad Taxaf en Google Play y App Store.",
    tech: ["Flutter", "Dart", "Firebase", "SQL"],
    github: "https://github.com/JPflores20",
    demo: null,
    play_store: "https://play.google.com/store/apps/details?id=com.taxaf.user&pcampaignid=web_share",
    app_store: "https://apps.apple.com/mx/app/taxaf/id6748660857",
    youtube: "https://youtu.be/TKlX189a_J4?si=AoLnTHjgEfsv9lVS",
  },
  {
    title: "Sistema REDECO",
    short_desc: "Sistema web full-stack para gestión de quejas financieras",
    full_desc:
      "Liderazgo y desarrollo de un sistema web full-stack para optimizar la gestión y reporte de quejas financieras ante CONDUSEF (REDECO) en Zacatecas.",
    tech: ["Django", "React", "PostgreSQL", "Git"],
    github: "https://github.com/JPflores20/api_redeco_reune",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Modelo ML Cáncer de Pulmón",
    short_desc: "Modelo predictivo de Machine Learning para detección temprana de cáncer de pulmón",
    full_desc:
      "Investigación y desarrollo de un modelo predictivo de Machine Learning y Deep Learning para la detección temprana de cáncer de pulmón mediante el análisis de conjuntos de datos clínicos y patrones médicos.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/JPflores20",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
  ...proyectos_industriales_es,
];
