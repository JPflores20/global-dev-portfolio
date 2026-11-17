/**
 * @file experiencia_es.ts
 * @description Catálogo de experiencia profesional y proyectos comerciales en español alineado con el CV 2026.
 */

import type { PuestoExperiencia } from "@/traducciones/tipos_traducciones";
import {
  sistemas_analista_datos_es,
  sistemas_practicante_software_es,
} from "@/traducciones/sistemas_grupo_modelo_es";

/**
 * Lista de posiciones laborales y proyectos comerciales en español ordenados cronológicamente.
 */
export const lista_experiencia_es: PuestoExperiencia[] = [
  {
    role: "Ingeniero de Software & Analista de Datos Industrial",
    company: "Grupo Modelo (AB InBev • Compañía Cervecera de Zacatecas)",
    period: "Abr 2026 - Presente",
    description:
      "Liderazgo en digitalización operativa, analítica industrial y desarrollo de plataformas web/móviles en 4 pilares estratégicos: (1) Control de Procesos en Bloque Frío, Cocimientos y Envasado; (2) TPM, Excelencia Operacional y Matriz SKAP; (3) Mejora Continua y Metodologías VPO (PDCA & RDA); y (4) Calidad, Control Estadístico de Procesos (SPC / Seis Sigma) y Seguridad Industrial.",
    proyectos_destacados: sistemas_analista_datos_es,
  },
  {
    role: "Becario de Ingeniería de Software (Practicante)",
    company: "Compañía Cervecera de Zacatecas (Grupo Modelo)",
    period: "Ene 2026 - Abr 2026",
    description:
      "Desarrollo e implementación de 'Brew Insights' para el análisis de datos de producción en el bloque de cocimientos e ingesta de archivos .DBF de Siemens Braumat, así como creación y optimización de suites de automatización en VBA y SAP GUI Scripting para agilizar el flujo de inventario y órdenes en SAP.",
    proyectos_destacados: sistemas_practicante_software_es,
  },
  {
    role: "Desarrollador Full-Stack & Arquitecto SaaS",
    company: "Proyectos Comerciales Destacados (Producción)",
    period: "2024 - Presente",
    description:
      "Diseño, arquitectura y despliegue de plataformas comerciales SaaS en la nube con React, TypeScript, TanStack Start/Router y Firebase para los sectores clínico dental, óptico, logística de eventos, fotografía y fitness.",
    proyectos_destacados: [
      {
        nombre_proyecto: "DentaFlow PRO",
        descripcion_proyecto:
          "Plataforma dental multi-clínica con reservas en línea, expedientes clínicos electrónicos con alertas médicas, recetas en PDF, seguimiento financiero y CRM automatizado por WhatsApp/correo.",
        tecnologias_utilizadas: ["React", "TypeScript", "TanStack Router", "Firebase", "CRM WhatsApp"],
        url_demo: "https://dentalflow-802ca.web.app/",
        url_repositorio: "https://github.com/JPflores20/pixel-perfect-replica",
      },
      {
        nombre_proyecto: "ONE Event Flow",
        descripcion_proyecto:
          "Plataforma en tiempo real para gestión de invitados (RSVP, check-in QR en puerta, integración con WhatsApp y Google Calendar), diseñador drag-and-drop de planos de mesas y módulo contable.",
        tecnologias_utilizadas: ["React", "TypeScript", "Firebase", "Drag & Drop Canvas", "QR Check-in"],
        url_demo: "https://one-wedding-planner.web.app/",
        url_repositorio: "https://github.com/JPflores20/one-event-flow",
      },
      {
        nombre_proyecto: "Vision Hub",
        descripcion_proyecto:
          "Plataforma integral de administración óptica para expedientes clínicos, prescripciones de lentes, control de inventario multi-sucursal, Punto de Venta (POS) y reportes financieros ejecutivos.",
        tecnologias_utilizadas: ["React", "TypeScript", "Firebase", "POS Multi-Sucursal", "Tailwind CSS"],
        url_demo: "https://opticas-vision-2000.web.app/",
        url_repositorio: "https://github.com/JPflores20/visionflow-hub",
      },
      {
        nombre_proyecto: "GradFrame",
        descripcion_proyecto:
          "Plataforma comercial de estudio fotográfico con calculadora dinámica de paquetes, registro de graduados por código de evento, agenda pública de reservaciones y CMS administrativo en tiempo real.",
        tecnologias_utilizadas: ["React", "TypeScript", "Firebase", "CMS Tiempo Real", "Tailwind CSS"],
        url_demo: "https://gradframe-graduation.com/",
        url_repositorio: "https://github.com/JPflores20/gradframe-zacatecas-captures",
      },
      {
        nombre_proyecto: "Montse Elite Fitness",
        descripcion_proyecto:
          "Aplicación web de fitness equipada con motor de cálculo metabólico (Mifflin-St Jeor, TDEE y macronutrientes), catálogo de 1,324 ejercicios y panel administrativo CMS Studio en vivo con exportación JSON.",
        tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "CMS Studio", "Framer Motion"],
        url_demo: "https://montseelitefitness.web.app/",
        url_repositorio: "https://github.com/JPflores20/montse-elite-fitness",
      },
    ],
  },
  {
    role: "Investigador de Tesis (Machine Learning)",
    company: "Universidad Autónoma de Zacatecas",
    period: "Ago 2025 - Presente",
    description:
      "Desarrollo de un modelo predictivo para la detección temprana de cáncer de pulmón mediante algoritmos de Machine Learning y análisis de conjuntos de datos clínicos y patrones médicos.",
  },
  {
    role: "Desarrollador de Software (Líder de Proyecto)",
    company: "REDECO",
    period: "Jul 2025 - Dic 2025",
    description:
      "Liderazgo en el desarrollo de un sistema web full-stack para la gestión de quejas financieras en Zacatecas.",
  },
  {
    role: "Desarrollador Móvil y Frontend",
    company: "Taxaf (Google Play & App Store)",
    period: "Ene 2020 - Dic 2023",
    description:
      "Liderazgo en diseño UI/UX, desarrollo móvil frontend en Flutter, pruebas QA y gestión de bases de datos para aplicaciones de movilidad (ride-hailing) en Google Play y App Store.",
  },
  {
    role: "Técnico en Sistemas Digitales",
    company: "XL Creatividad Textil",
    period: "Dic 2019 - Ene 2021",
    description:
      "Desarrollo y mantenimiento de scripts de automatización y software de control especializado para maquinaria textil industrial.",
  },
];
