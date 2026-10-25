/**
 * @file proyectos_es.ts
 * @description Lista consolidada de proyectos destacados del portafolio en idioma español.
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";
import { proyectos_industriales_es } from "@/traducciones/proyectos_industriales_es";

/**
 * Arreglo completo de proyectos destacados (9 sistemas industriales de Grupo Modelo + 4 proyectos externos) en español.
 */
export const lista_proyectos_es: ProyectoPortafolio[] = [
  ...proyectos_industriales_es,
  {
    title: "App Móvil Taxaf",
    short_desc: "Aplicación integral de gestión fiscal publicada en Google Play y App Store",
    full_desc:
      "Aplicación móvil desarrollada en Flutter para gestión fiscal. Incluye diseño de interfaz, autenticación, cálculo de impuestos y sincronización de datos en la nube con Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "SQL"],
    github: "https://github.com/JPflores20",
    demo: null,
    play_store: "https://play.google.com/store/apps/details?id=com.taxaf.user&pcampaignid=web_share",
    app_store: "https://apps.apple.com/mx/app/taxaf/id6748660857",
    youtube: "https://youtu.be/TKlX189a_J4?si=AoLnTHjgEfsv9lVS",
  },
  {
    title: "Web Golden English Zac",
    short_desc: "Sitio web oficial para escuela de inglés en producción",
    full_desc:
      "Landing page moderna para Golden English Zacatecas. Incluye animaciones al hacer scroll, contadores dinámicos de estadísticas y formularios de contacto. Desarrollada con React, TypeScript y Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/JPflores20/golden-english-zac-landing",
    demo: "https://goldenenglishzac.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Sistema de Quejas REDECO",
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
    short_desc: "Modelo de deep learning para detección de cáncer de pulmón",
    full_desc:
      "Una solución integral de machine learning para detectar cáncer de pulmón a partir de tomografías computarizadas usando redes neuronales convolucionales (CNN).",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/joseluisfc",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
];
