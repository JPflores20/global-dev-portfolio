/**
 * @file sistemas_grupo_modelo_en.ts
 * @description English catalog of the industrial systems and automations developed at Grupo Modelo (Software Engineer and Software Engineering Intern).
 */

import type { ProyectoDestacadoExperiencia } from "@/traducciones/tipos_traducciones";

/**
 * Sistemas desarrollados en el puesto de Software Engineer (April 2026 - Present) organizados por los 4 pilares del CV.
 */
export const sistemas_analista_datos_en: ProyectoDestacadoExperiencia[] = [
  {
    nombre_proyecto: "Routing Control",
    descripcion_proyecto:
      "Real-time operator interface optimizing FIFO allocation of 88 Bright Beer Tanks (BBT) to 8 packaging lines, preventing unplanned downtime, calculating brand deficit/consumption rates, and projecting the Master Schedule with multi-level caching.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Zod"],
    url_repositorio: "https://github.com/JPflores20/golden-route-assistant",
  },
  {
    nombre_proyecto: "Brewhouse Verification Schedule",
    descripcion_proyecto:
      "Web application for planning, controlling, and tracking CIP cleanings and preventive maintenance in the Hot Block (Brewhouse) by shift, featuring critical alerts, densities, and attenuation curves.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "Firebase"],
    url_demo: "https://agenda-de-control-de-procesos.web.app/",
    url_repositorio: "https://github.com/JPflores20/brewman-dashboard",
  },
  {
    nombre_proyecto: "Craft Brew Insight",
    descripcion_proyecto:
      "Operational management and digitalization of the Cold Block fermentation process: general tracking schedule, strict 24/48/72-hour purge control, and plate verification.",
    tecnologias_utilizadas: ["React", "TypeScript", "Cold Block", "Fermentation Control"],
  },
  {
    nombre_proyecto: "Panel Levadura",
    descripcion_proyecto:
      "Analytical HMI built with Next.js (App Router) and Firestore for yeast process control, tracking cell viability, fermentation kinetics, 1V–4V generation comparison, Aber vs. LAC validation, and PDF reporting.",
    tecnologias_utilizadas: ["Next.js 16", "React 19", "TypeScript", "Recharts", "Firebase"],
    url_demo: "https://levadura-7427a.web.app/",
    url_repositorio: "https://github.com/JPflores20/levadura-ccz",
  },
  {
    nombre_proyecto: "Brew Board",
    descripcion_proyecto:
      "Cross-platform application (Web and Android mobile via Capacitor with TanStack Start, Firebase, and AI copilot) for comprehensive plant brewing management.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "Capacitor Android", "TanStack Start", "Firebase"],
    url_demo: "https://brew-f4449.web.app/",
    url_repositorio: "https://github.com/JPflores20/brew-board",
  },
  {
    nombre_proyecto: "Autonomy Dashboard",
    descripcion_proyecto:
      "TPM brewing dashboard monitoring real-time operational autonomy, SKAP Matrix, multi-skill technical guides (L6, L7, L8), training progress, and autonomous team rankings across Brewhouse, Cold Block, and Maintenance.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "SheetJS (XLSX)", "Firebase"],
    url_demo: "https://preview-bbe71.web.app/",
    url_repositorio: "https://github.com/ingsoftcecy-svg/dashboardDesaarrllo",
  },
  {
    nombre_proyecto: "Brewing Operator Control",
    descripcion_proyecto:
      "Platform for shift role administration (ShiftGrid), overtime calculation, attendance tracking, operator profiles, and Excel roster import/export across the plant.",
    tecnologias_utilizadas: ["React", "TypeScript", "TanStack Router", "Firebase", "SheetJS"],
    url_demo: "https://breawing-operator-control.web.app/",
  },
  {
    nombre_proyecto: "PML Clean Pro",
    descripcion_proyecto:
      "Real-time management and tracking of the Master Cleaning Schedule (PML) for Cold Block and Brewhouse, featuring photographic evidence, smart duplicate task merging, routine rotation, and 172 automated tests.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Zustand"],
    url_demo: "https://pml-cleanpro.web.app/",
    url_repositorio: "https://github.com/JPflores20/cocimientos-clean-hub",
  },
  {
    nombre_proyecto: "SKAP Matrix Automation",
    descripcion_proyecto:
      "Automated Python (Pandas) script for evaluating SKAP matrices, cross-referencing official headcount positions, deduplicating records, and generating Gap Closure 2.0 plans.",
    tecnologias_utilizadas: ["Python", "Pandas", "ETL Automation", "SKAP Matrix"],
  },
  {
    nombre_proyecto: "MAZ HUB",
    descripcion_proyecto:
      "Corporate platform for comprehensive management of continuous improvement methodologies (PDCA, RDA, KPI trees, and Kanban boards) for the Young Talents program and operational staff.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Playwright"],
    url_demo: "https://maz-pdca-hub.web.app/",
    url_repositorio: "https://github.com/JPflores20/MAZ-HUB",
  },
  {
    nombre_proyecto: "Precision Brewing",
    descripcion_proyecto:
      "Advanced analytics dashboard focused on Statistical Process Control (SPC) and Six Sigma: capability index calculation (Cp, Cpk, Pp, Ppk), shrinkage evaluation, temperatures, optical attenuation, and special cause detection.",
    tecnologias_utilizadas: ["React", "TypeScript", "SPC & Six Sigma", "Recharts", "Analytics"],
  },
  {
    nombre_proyecto: "PRP One View",
    descripcion_proyecto:
      "Interactive plant floor plan visualization for Prerequisite Program (PRP) audits, QR territories, risk maps across operational areas (Brewhouse, Cold Block), and safety compliance rankings.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Interactive Floor Plans"],
    url_demo: "https://safety-map-907c2.web.app/",
    url_repositorio: "https://github.com/JPflores20/industrial-safety-map",
  },
  {
    nombre_proyecto: "Safety Brew Board",
    descripcion_proyecto:
      "Executive dashboard (Guardians Pillar) for monthly monitoring of industrial safety KPIs, incident tracking, and preventive compliance.",
    tecnologias_utilizadas: ["React", "TypeScript", "Safety KPIs", "Recharts"],
  },
  {
    nombre_proyecto: "Modelo Help Desk",
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
    nombre_proyecto: "Brew Insights",
    descripcion_proyecto:
      "Platform that ingests Siemens Braumat .DBF and Excel files to audit the Hot Block and Cold Block. Features interactive cycle-time Gantt charts, bottleneck monitoring, SPC (Cp, Cpk), predictive maintenance (RUL), and a Google Gemini AI assistant.",
    tecnologias_utilizadas: [
      "React",
      "TypeScript",
      "Firebase",
      "Gemini AI",
      "Siemens Braumat (.DBF)",
      "SPC (Cp, Cpk)",
    ],
    url_demo: "https://brew-insights.web.app/",
    url_repositorio: "https://github.com/JPflores20/brew-insights",
  },
  {
    nombre_proyecto: "SAP Automation Suite",
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
