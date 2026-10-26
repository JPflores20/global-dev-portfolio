/**
 * @file sistemas_grupo_modelo_en.ts
 * @description English catalog of the industrial systems and automations developed at Grupo Modelo (Data Analyst and Software Engineering Intern).
 */

import type { ProyectoDestacadoExperiencia } from "@/traducciones/tipos_traducciones";

/**
 * Sistemas desarrollados en el puesto de Data Analyst (April 2026 - Present) organizados por los 4 pilares del CV.
 */
export const sistemas_analista_datos_en: ProyectoDestacadoExperiencia[] = [
  {
    nombre_proyecto: "ROUTING CONTROL — BBT ASSISTANT (golden-route-assistant)",
    descripcion_proyecto:
      "Real-time operator interface optimizing Bright Beer Tank (BBT) allocation to packaging lines, preventing unplanned downtime, calculating brand deficit/consumption rates, and projecting the Master Schedule.",
    tecnologias_utilizadas: ["React", "TypeScript", "Real-Time", "Master Schedule"],
  },
  {
    nombre_proyecto: "BREWHOUSE VERIFICATION SCHEDULE (brewman-dashboard)",
    descripcion_proyecto:
      "Web application for planning, controlling, and tracking CIP cleanings and preventive maintenance in the Hot Block (Brewhouse) by shift, featuring critical alerts, densities, and attenuation curves.",
    tecnologias_utilizadas: ["React", "TypeScript", "Tailwind CSS", "CIP & Brewhouse"],
  },
  {
    nombre_proyecto: "CRAFT BREW INSIGHT & COLD BLOCK SCHEDULE (craft-brew-insight)",
    descripcion_proyecto:
      "Operational management and digitalization of the Cold Block fermentation process: general tracking schedule, strict 24/48/72-hour purge control, and plate verification.",
    tecnologias_utilizadas: ["React", "TypeScript", "Cold Block", "Fermentation Control"],
  },
  {
    nombre_proyecto: "YEAST CONTROL PANEL (levadura-ccz)",
    descripcion_proyecto:
      "Analytical HMI for yeast process control, tracking cell viability, fermentation kinetics, brewing rest periods, and automated PDF technical reporting.",
    tecnologias_utilizadas: ["React", "TypeScript", "Recharts", "jsPDF", "Quality HMI"],
  },
  {
    nombre_proyecto: "BREW BOARD — CROSS-PLATFORM DIGITAL VPO (brew-board)",
    descripcion_proyecto:
      "Cross-platform application (Web and Android mobile via Capacitor with TanStack Start, Firebase, and AI copilot) for comprehensive plant brewing management.",
    tecnologias_utilizadas: ["React", "TypeScript", "Capacitor Android", "TanStack Start", "Firebase"],
  },
  {
    nombre_proyecto: "AUTONOMY DASHBOARD / BREWERY DASHBOARD PRO",
    descripcion_proyecto:
      "TPM brewing dashboard monitoring real-time operational autonomy, SKAP Matrix, multi-skill technical guides (L6, L7, L8), training progress, and autonomous team rankings across Brewhouse, Cold Block, and Maintenance.",
    tecnologias_utilizadas: ["React", "TypeScript", "TPM & SKAP", "SheetJS (XLSX)", "Recharts"],
  },
  {
    nombre_proyecto: "BREWING OPERATOR CONTROL (dayflow-dex)",
    descripcion_proyecto:
      "Platform for shift role administration (ShiftGrid), attendance tracking, operator profiles, and plant relief assignment.",
    tecnologias_utilizadas: ["React", "TypeScript", "ShiftGrid", "Shift Management"],
  },
  {
    nombre_proyecto: "PML CLEAN PRO — MASTER CLEANING SCHEDULE",
    descripcion_proyecto:
      "Management and real-time tracking of the Master Cleaning Schedule (PML) and operational tasks for Cold Block and Brewhouse, with operator assignment and compliance history.",
    tecnologias_utilizadas: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    nombre_proyecto: "PYTHON SKAP MATRIX AUTOMATION & PROCESSING",
    descripcion_proyecto:
      "Automated Python (Pandas) script for evaluating SKAP matrices, cross-referencing official headcount positions, deduplicating records, and generating Gap Closure 2.0 plans.",
    tecnologias_utilizadas: ["Python", "Pandas", "ETL Automation", "SKAP Matrix"],
  },
  {
    nombre_proyecto: "MAZ HUB — CONTINUOUS IMPROVEMENT & VPO (PDCA & RDA)",
    descripcion_proyecto:
      "Corporate platform for comprehensive management of continuous improvement methodologies (PDCA, RDA, KPI trees, and Kanban boards) for the Young Talents program and operational staff.",
    tecnologias_utilizadas: ["React", "TypeScript", "VPO (PDCA & RDA)", "Kanban", "Framer Motion"],
  },
  {
    nombre_proyecto: "PRECISION BREWING / CECY — STATISTICAL PROCESS CONTROL (SPC) & SIX SIGMA",
    descripcion_proyecto:
      "Advanced analytics dashboard focused on Statistical Process Control (SPC) and Six Sigma: capability index calculation (Cp, Cpk, Pp, Ppk), shrinkage evaluation, temperatures, optical attenuation, and special cause detection.",
    tecnologias_utilizadas: ["React", "TypeScript", "SPC & Six Sigma", "Recharts", "Analytics"],
  },
  {
    nombre_proyecto: "PRP ONE VIEW — INDUSTRIAL SAFETY MAP (industrial-safety-map)",
    descripcion_proyecto:
      "Interactive plant floor plan visualization for Prerequisite Program (PRP) audits, risk maps across operational areas (Brewhouse, Cold Block), and safety compliance rankings.",
    tecnologias_utilizadas: ["React", "TypeScript", "Interactive Floor Plans", "PRP Audits"],
  },
  {
    nombre_proyecto: "MONTHLY SAFETY BREW BOARD (trascendencia-360 • Guardians Pillar)",
    descripcion_proyecto:
      "Executive dashboard (Guardians Pillar) for monthly monitoring of industrial safety KPIs, incident tracking, and preventive compliance.",
    tecnologias_utilizadas: ["React", "TypeScript", "Safety KPIs", "Recharts"],
  },
  {
    nombre_proyecto: "MODELO HELP DESK (modelo-help-desk)",
    descripcion_proyecto:
      "Internal ticketing and help desk system featuring Grupo Modelo corporate branding for routing and resolving technical and operational incidents.",
    tecnologias_utilizadas: ["React", "TypeScript", "Help Desk", "Tailwind CSS"],
  },
];

/**
 * Sistemas desarrollados en el puesto de Software Engineering Intern (January 2026 - April 2026).
 */
export const sistemas_practicante_software_en: ProyectoDestacadoExperiencia[] = [
  {
    nombre_proyecto: "BREW INSIGHTS — INDUSTRIAL ANALYTICS & CYCLE TIMES",
    descripcion_proyecto:
      "Platform that ingests Siemens Braumat .DBF and Excel files to audit the Hot Block. Features interactive recipe cycle-time Gantt charts, equipment bottleneck monitoring, statistical process control (Cp, Cpk) for wort/last water, and a Google Gemini AI assistant for root-cause detection in atypical batches.",
    tecnologias_utilizadas: [
      "React",
      "TypeScript",
      "Firebase",
      "Gemini AI",
      "Siemens Braumat (.DBF)",
      "SPC (Cp, Cpk)",
    ],
  },
  {
    nombre_proyecto: "SAP AUTOMATION SUITE & BREWHOUSE VBA MACROS",
    descripcion_proyecto:
      "Automated SAP inventory movements via VBA and SAP GUI Scripting to eliminate manual data entry and accounting backlogs. Calculates raw material/wort balances, generates mass transports (VT01N), extracts inventory/quality reports (MB51, QA33), and notifies manufacturing orders in real time.",
    tecnologias_utilizadas: [
      "VBA",
      "SAP GUI Scripting",
      "SAP (VT01N, MB51, QA33)",
      "Excel (.xlsb/.xlsm)",
    ],
  },
];
