/**
 * @file experiencia_en.ts
 * @description Catálogo de puestos laborales y proyectos desarrollados en Grupo Modelo para la sección de Experiencia (Inglés).
 */

import type { PuestoExperiencia } from "@/traducciones/tipos_traducciones";

/**
 * Historial cronológico de experiencia profesional en inglés.
 */
export const lista_experiencia_en: PuestoExperiencia[] = [
  {
    role: "Software Engineer",
    company: "Grupo Modelo (AB InBev • Cervecería de Zacatecas)",
    period: "2026 - Present",
    description:
      "Design, architecture, and development of 9 mission-critical industrial web & mobile platforms for Hot Block (Brewhouse), Cold Block, Quality, Safety, and Continuous Improvement (VPO/TPM):",
    proyectos_destacados: [
      {
        nombre_proyecto: "Brew Insights",
        descripcion_proyecto:
          "Industrial analytics platform with binary .DBF/.xlsx ingestion, Gantt cycle analysis, process capability (Cp/Cpk), predictive maintenance (RUL), and Gemini Vision OCR.",
        tecnologias_utilizadas: ["React", "TypeScript", "Recharts", "Firebase", "Gemini AI"],
      },
      {
        nombre_proyecto: "Levadura CCZ (Brewery HMI)",
        descripcion_proyecto:
          "Statistical Process Control (SPC) HMI for yeast propagation, fermentation kinetics, 1V–4V generation comparison, and inline Aber vs. LAC lab validation.",
        tecnologias_utilizadas: ["Next.js", "React 19", "TypeScript", "Recharts", "Firestore"],
      },
      {
        nombre_proyecto: "MAZ HUB (PDCA & RDA Platform)",
        descripcion_proyecto:
          "Corporate continuous improvement platform featuring an 18-step PDCA workflow, 5-phase RDA anomaly reports, interactive KPI trees, Kanban boards, and landscape PDF export.",
        tecnologias_utilizadas: ["React 19", "TanStack Start", "Tailwind v4", "React Flow", "Firebase"],
      },
      {
        nombre_proyecto: "TPM Autonomy Dashboard (SKAP & Technical Guides)",
        descripcion_proyecto:
          "Mission-critical dashboard tracking SKAP autonomy matrices, BPRE inline scoring, dynamic IP goal banks, training courses, and L6/L7/L8 technical certifications.",
        tecnologias_utilizadas: ["React 19", "TanStack Start", "SheetJS", "Firestore", "Recharts"],
      },
      {
        nombre_proyecto: "PML CleanPro (Master Cleaning Program Hub)",
        descripcion_proyecto:
          "Progressive web system for executing and auditing daily cleaning tasks with photo evidence, supervisor approval workflows, operator rankings, and Telegram bot alerts.",
        tecnologias_utilizadas: ["React 19", "Zustand v5", "Firebase", "Tailwind v4", "Telegram API"],
      },
      {
        nombre_proyecto: "PRP One View (Industrial Safety Map)",
        descripcion_proyecto:
          "Interactive plant safety map and risk evaluation platform for Brewhouse and Cold Block with checklists, overdue inspection alerts, and batch QR label printing.",
        tecnologias_utilizadas: ["React 19", "TanStack Router", "Cloudinary", "Firebase", "SheetJS"],
      },
      {
        nombre_proyecto: "Brewhouse Verification Agenda (Brewman Dashboard)",
        descripcion_proyecto:
          "Shift-based (T1/T2/T3) drag-and-drop scheduling calendar for Clean-in-Place (CIP) routines, preventive maintenance logs, and equipment inventory.",
        tecnologias_utilizadas: ["React 19", "dnd-kit", "Zustand", "TanStack Query", "Firebase"],
      },
      {
        nombre_proyecto: "Farol KPIs (Business Intelligence & Ishikawa)",
        descripcion_proyecto:
          "Real-time KPI monitoring board with 4K Smart TV scaling, Waterfall charts, action plan compendium, and interactive 6M Ishikawa root-cause diagrams.",
        tecnologias_utilizadas: ["React 18", "TypeScript", "Recharts", "SheetJS", "Firestore"],
      },
      {
        nombre_proyecto: "Brew Board (VPO Digital)",
        descripcion_proyecto:
          "Cross-platform central hub (Web & Android via Capacitor) organizing the 7 VPO pillars (Safety, People, Quality, Brewing, Maintenance, Logistics, Environment).",
        tecnologias_utilizadas: ["React 19", "Capacitor Android", "TanStack Router", "Firebase"],
      },
    ],
  },
  {
    role: "Project Lead & Software Developer",
    company: "REDECO",
    period: "Jul 2025 - Dec 2025",
    description:
      "Led the development of a financial complaint system for the REDECO website. Managed the project lifecycle and implemented web solutions.",
  },
  {
    role: "Thesis Researcher (Machine Learning)",
    company: "Universidad Autónoma de Zacatecas",
    period: "Aug 2025 - Present",
    description:
      "Developing a predictive model for lung cancer identification using Machine Learning algorithms to analyze clinical data and medical patterns.",
  },
  {
    role: "Mobile Developer",
    company: "Taxaf",
    period: "Jan 2020 - Dec 2023",
    description:
      "Mobile Developer responsible for interface design, frontend/backend development, and database management. Created the Taxaf mobile application.",
  },
  {
    role: "Operational Programming & Automation",
    company: "XL Textile creativity",
    period: "Dec 2019 - Jan 2021",
    description:
      "Development and maintenance of specialized scripts and software for textile machinery control.",
  },
];
