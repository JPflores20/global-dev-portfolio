/**
 * @file proyectos_en.ts
 * @description Consolidated list of featured portfolio projects in English.
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";
import { proyectos_industriales_en } from "@/traducciones/proyectos_industriales_en";

/**
 * Arreglo completo de proyectos destacados (9 sistemas industriales de Grupo Modelo + 4 proyectos externos) en inglés.
 */
export const lista_proyectos_en: ProyectoPortafolio[] = [
  ...proyectos_industriales_en,
  {
    title: "Taxaf Mobile App",
    short_desc: "Comprehensive tax management app published on Google Play & App Store",
    full_desc:
      "A feature-rich mobile application built with Flutter that simplifies tax calculations. Includes interface design, authentication, frontend/backend development, and Firebase cloud synchronization.",
    tech: ["Flutter", "Dart", "Firebase", "SQL"],
    github: "https://github.com/JPflores20",
    demo: null,
    play_store: "https://play.google.com/store/apps/details?id=com.taxaf.user&pcampaignid=web_share",
    app_store: "https://apps.apple.com/mx/app/taxaf/id6748660857",
    youtube: "https://youtu.be/TKlX189a_J4?si=AoLnTHjgEfsv9lVS",
  },
  {
    title: "Golden English Zac Landing",
    short_desc: "Official production website for English School",
    full_desc:
      "A modern, responsive landing page for Golden English, the #1 English school in Zacatecas. Features scroll animations, dynamic counters for stats, and contact forms. Hosted on Firebase.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/JPflores20/golden-english-zac-landing",
    demo: "https://goldenenglishzac.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "REDECO Complaint System",
    short_desc: "Full-stack web platform for financial complaint management",
    full_desc:
      "A full-stack web system designed to handle and report financial complaints for REDECO. Built with Django, React, and PostgreSQL to ensure efficiency and regulatory compliance.",
    tech: ["Django", "React", "PostgreSQL", "Git"],
    github: "https://github.com/JPflores20/api_redeco_reune",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Lung Cancer ML Model",
    short_desc: "Deep learning model for lung cancer detection from medical imaging",
    full_desc:
      "A comprehensive machine learning solution for detecting lung cancer from CT scans using convolutional neural networks (CNN). The model achieves high accuracy in identifying malignant nodules.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/joseluisfc",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
];
