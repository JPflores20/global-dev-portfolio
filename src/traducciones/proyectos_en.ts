/**
 * @file proyectos_en.ts
 * @description Consolidated list of all 19 featured portfolio projects in English (9 commercial/AI + 10 industrial).
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";
import { proyectos_industriales_en } from "@/traducciones/proyectos_industriales_en";

/**
 * Arreglo completo de proyectos destacados (encabezado por los Featured Commercial Projects + sistemas de Grupo Modelo).
 */
export const lista_proyectos_en: ProyectoPortafolio[] = [
  {
    title: "DentaFlow PRO",
    short_desc: "Online booking, electronic health records, PDF prescriptions & WhatsApp/email CRM",
    full_desc:
      "Multi-clinic dental platform featuring online booking, electronic health records with medical alerts, PDF prescriptions, financial tracking, and automated WhatsApp/email CRM.",
    tech: ["React", "TypeScript", "TanStack Router", "Firebase", "Tailwind CSS"],
    github: "https://github.com/JPflores20/pixel-perfect-replica",
    demo: "https://dentalflow-802ca.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "ONE Event Flow",
    short_desc: "Real-time guest management (RSVP, QR check-in), drag-and-drop floor plans & accounting",
    full_desc:
      "Real-time guest management platform (RSVP, QR door check-in, WhatsApp/Google Calendar integration), interactive drag-and-drop floor plan designer, and accounting module.",
    tech: ["React", "TypeScript", "Firebase", "Drag & Drop Canvas", "Tailwind CSS"],
    github: "https://github.com/JPflores20/one-event-flow",
    demo: "https://one-wedding-planner.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Vision Hub",
    short_desc: "Clinical records, lens prescriptions, multi-branch inventory & Point of Sale",
    full_desc:
      "Comprehensive optical management platform for clinical records, lens prescriptions, multi-branch inventory control, Point of Sale (POS), and executive financial reporting.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com/JPflores20/visionflow-hub",
    demo: "https://opticas-vision-2000.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "GradFrame",
    short_desc: "Dynamic package calculator, event-code registration & real-time admin CMS",
    full_desc:
      "Commercial photography studio platform with dynamic package calculator, event-code graduate registration, public booking schedule, and real-time administrative CMS.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Real-Time CMS"],
    github: "https://github.com/JPflores20/gradframe-zacatecas-captures",
    demo: "https://gradframe-graduation.com/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Montse Elite Fitness",
    short_desc: "Metabolic calculation engine (Mifflin-St Jeor, TDEE, macros) & live CMS Studio",
    full_desc:
      "Fitness web application featuring a metabolic calculation engine (Mifflin-St Jeor, TDEE, and macronutrients), a 1,324-exercise catalog, and a live CMS Studio admin panel with JSON export.",
    tech: ["React 19", "TypeScript", "TanStack Start", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/JPflores20/montse-elite-fitness",
    demo: "https://montseelitefitness.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Golden English Zac",
    short_desc: "Official commercial website for English Academy",
    full_desc:
      "Modern, responsive commercial landing page for Golden English, the #1 English school in Zacatecas. Features scroll animations, dynamic counters for stats, and contact forms. Hosted on Firebase.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/JPflores20/golden-english-zac-landing",
    demo: "https://goldenenglishzac.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Taxaf",
    short_desc: "Ride-hailing mobile application published on Google Play & App Store",
    full_desc:
      "Led UI/UX design, Flutter frontend mobile development, QA testing, and real-time database management for ride-hailing applications on Google Play and App Store.",
    tech: ["Flutter", "Dart", "Firebase", "SQL"],
    github: "https://github.com/JPflores20",
    demo: null,
    play_store: "https://play.google.com/store/apps/details?id=com.taxaf.user&pcampaignid=web_share",
    app_store: "https://apps.apple.com/mx/app/taxaf/id6748660857",
    youtube: "https://youtu.be/TKlX189a_J4?si=AoLnTHjgEfsv9lVS",
  },
  {
    title: "REDECO System",
    short_desc: "Full-stack web platform for financial complaint management",
    full_desc:
      "Led the development of a web-based financial complaint management system in Zacatecas built with Django, React, and PostgreSQL.",
    tech: ["Django", "React", "PostgreSQL", "Git"],
    github: "https://github.com/JPflores20/api_redeco_reune",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Lung Cancer ML Model",
    short_desc: "Predictive Machine Learning model for early lung cancer detection",
    full_desc:
      "Developing a predictive Machine Learning and Deep Learning model for early lung cancer detection by analyzing clinical datasets and medical patterns.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/JPflores20",
    demo: null,
    play_store: null,
    app_store: null,
    youtube: null,
  },
  ...proyectos_industriales_en,
];
