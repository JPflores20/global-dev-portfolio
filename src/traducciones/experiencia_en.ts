/**
 * @file experiencia_en.ts
 * @description Professional experience and commercial projects catalog in English aligned with the 2026 CV.
 */

import type { PuestoExperiencia } from "@/traducciones/tipos_traducciones";
import {
  sistemas_analista_datos_en,
  sistemas_practicante_software_en,
} from "@/traducciones/sistemas_grupo_modelo_en";

/**
 * Lista de posiciones laborales y proyectos comerciales en inglés ordenados cronológicamente.
 */
export const lista_experiencia_en: PuestoExperiencia[] = [
  {
    role: "Software Engineer & Industrial Data Analyst",
    company: "Grupo Modelo (AB InBev • Compañía Cervecera de Zacatecas)",
    period: "Apr 2026 - Present",
    description:
      "Leading operational digitalization, industrial analytics, and web/mobile platform engineering across 4 strategic pillars: (1) Process Control in Cold Block, Brewhouse & Packaging; (2) TPM, Operational Excellence & SKAP Matrix; (3) Continuous Improvement & VPO Methodologies (PDCA & RDA); and (4) Quality, Statistical Process Control (SPC / Six Sigma) & Industrial Safety.",
    proyectos_destacados: sistemas_analista_datos_en,
  },
  {
    role: "Software Engineering Intern",
    company: "Compañía Cervecera de Zacatecas (Grupo Modelo)",
    period: "Jan 2026 - Apr 2026",
    description:
      "Developed and deployed 'Brew Insights' for production data analytics in the Brewhouse block with Siemens Braumat (.DBF) ingestion, and engineered VBA & SAP GUI Scripting automation suites to streamline inventory movements and manufacturing orders in SAP.",
    proyectos_destacados: sistemas_practicante_software_en,
  },
  {
    role: "Full-Stack Developer & SaaS Architect",
    company: "Featured Commercial Projects (Production)",
    period: "2024 - Present",
    description:
      "Designed, architected, and deployed cloud-native commercial SaaS platforms using React, TypeScript, TanStack Start/Router, and Firebase across the dental, optical, event logistics, photography, and fitness industries.",
    proyectos_destacados: [
      {
        nombre_proyecto: "DentaFlow PRO",
        descripcion_proyecto:
          "Multi-clinic dental platform featuring online booking, electronic health records with medical alerts, PDF prescriptions, financial tracking, and automated WhatsApp/email CRM.",
        tecnologias_utilizadas: ["React", "TypeScript", "TanStack Router", "Firebase", "WhatsApp CRM"],
        url_demo: "https://dentalflow-802ca.web.app/",
        url_repositorio: "https://github.com/JPflores20/pixel-perfect-replica",
      },
      {
        nombre_proyecto: "ONE Event Flow",
        descripcion_proyecto:
          "Real-time guest management platform (RSVP, QR door check-in, WhatsApp/Google Calendar integration), interactive drag-and-drop floor plan designer, and accounting module.",
        tecnologias_utilizadas: ["React", "TypeScript", "Firebase", "Drag & Drop Canvas", "QR Check-in"],
        url_demo: "https://one-wedding-planner.web.app/",
        url_repositorio: "https://github.com/JPflores20/one-event-flow",
      },
      {
        nombre_proyecto: "Vision Hub",
        descripcion_proyecto:
          "Comprehensive optical management platform for clinical records, lens prescriptions, multi-branch inventory control, Point of Sale (POS), and executive financial reporting.",
        tecnologias_utilizadas: ["React", "TypeScript", "Firebase", "Multi-Branch POS", "Tailwind CSS"],
        url_demo: "https://opticas-vision-2000.web.app/",
        url_repositorio: "https://github.com/JPflores20/visionflow-hub",
      },
      {
        nombre_proyecto: "GradFrame",
        descripcion_proyecto:
          "Commercial photography studio platform with dynamic package calculator, event-code graduate registration, public booking schedule, and real-time administrative CMS.",
        tecnologias_utilizadas: ["React", "TypeScript", "Firebase", "Real-Time CMS", "Tailwind CSS"],
        url_demo: "https://gradframe-graduation.com/",
        url_repositorio: "https://github.com/JPflores20/gradframe-zacatecas-captures",
      },
      {
        nombre_proyecto: "Montse Elite Fitness",
        descripcion_proyecto:
          "Fitness web application featuring a metabolic calculation engine (Mifflin-St Jeor, TDEE, and macronutrients), a 1,324-exercise catalog, and a live CMS Studio admin panel with JSON export.",
        tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "CMS Studio", "Framer Motion"],
        url_demo: "https://montseelitefitness.web.app/",
        url_repositorio: "https://github.com/JPflores20/montse-elite-fitness",
      },
    ],
  },
  {
    role: "Thesis Researcher (Machine Learning)",
    company: "Universidad Autónoma de Zacatecas",
    period: "Aug 2025 - Present",
    description:
      "Developing a predictive Machine Learning model for early lung cancer detection by analyzing clinical datasets and medical patterns.",
  },
  {
    role: "Software Developer (Project Lead)",
    company: "REDECO",
    period: "Jul 2025 - Dec 2025",
    description:
      "Led the development of a web-based financial complaint management system in Zacatecas.",
  },
  {
    role: "Mobile & Frontend Developer",
    company: "Taxaf (Google Play & App Store)",
    period: "Jan 2020 - Dec 2023",
    description:
      "Led UI/UX design, Flutter frontend mobile development, QA testing, and database management for ride-hailing apps on Google Play and App Store.",
  },
  {
    role: "Digital Systems Technician",
    company: "XL Creatividad Textil",
    period: "Dec 2019 - Jan 2021",
    description:
      "Developed and maintained automation scripts and specialized control software for industrial textile machinery.",
  },
];
