/**
 * @file proyectos_industriales_en.ts
 * @description English catalog of the 8 industrial systems with repository and live demo built for Grupo Modelo (AB InBev).
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";

/**
 * Lista de proyectos industriales de Grupo Modelo para la galería de Proyectos en inglés.
 */
export const proyectos_industriales_en: ProyectoPortafolio[] = [
  {
    title: "Brew Insights — Industrial Analytics & Cycle Times",
    short_desc: "Hot Block audit (.DBF Siemens Braumat), SPC & Gemini AI assistant",
    full_desc:
      "Platform that ingests Siemens Braumat .DBF and Excel files to audit the Hot Block at Zacatecas Brewery. Features interactive recipe cycle-time Gantt charts, equipment bottleneck monitoring, statistical process control (Cp, Cpk) for wort/last water, and a Google Gemini AI assistant for root-cause detection in atypical batches.",
    tech: ["React", "TypeScript", "Gemini AI", "Siemens Braumat (.DBF)", "SPC (Cp, Cpk)"],
    github: "https://github.com/JPflores20/brew-insights",
    demo: "https://brew-insights.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Brew Board — Cross-Platform Brewing Management",
    short_desc: "Web & Android App (Capacitor + TanStack Start) with AI copilot",
    full_desc:
      "Cross-platform application (Web and Android mobile via Capacitor with TanStack Start and Firebase) for comprehensive plant brewing management, featuring a voice-enabled AI operational copilot (OpenAI / Web Speech API).",
    tech: ["React", "TypeScript", "Capacitor Android", "TanStack Start", "Firebase"],
    github: "https://github.com/JPflores20/brew-board",
    demo: "https://brew-f4449.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PML Clean Pro — Master Cleaning Schedule",
    short_desc: "Real-time PML tracking for Cold Block & Brewhouse",
    full_desc:
      "Real-time platform powered by Supabase (PostgreSQL) for managing and tracking the Master Cleaning Schedule (PML) and operational tasks across Cold Block and Brewhouse, with operator assignment and compliance history.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/JPflores20/cocimientos-clean-hub",
    demo: "https://pml-cleanpro.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Levadura CCZ — Yeast Quality Control HMI",
    short_desc: "Analytical HMI for yeast viability, fermentation kinetics & PDF reports",
    full_desc:
      "Human-Machine Interface (HMI) for analytical yeast process control at Zacatecas Brewery: tracking cell viability, fermentation kinetics, brewing rest periods, and automated PDF technical reporting.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "jsPDF"],
    github: "https://github.com/JPflores20/levadura-ccz",
    demo: "https://levadura-7427a.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PRP One View — Industrial Safety Map",
    short_desc: "Interactive plant floor plans for PRP audits & hazard mapping",
    full_desc:
      "Interactive plant floor plan visualization for Prerequisite Program (PRP) audits, risk maps across operational areas (Brewhouse, Cold Block), and safety compliance rankings.",
    tech: ["React", "TypeScript", "Interactive Floor Plans", "Recharts", "Tailwind CSS"],
    github: "https://github.com/JPflores20/industrial-safety-map",
    demo: "https://safety-map-907c2.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "MAZ HUB — Continuous Improvement & VPO (PDCA & RDA)",
    short_desc: "Comprehensive PDCA, RDA, KPI trees & Kanban management",
    full_desc:
      "Corporate platform for comprehensive management of continuous improvement methodologies (PDCA, RDA, KPI trees, and Kanban boards) designed for the Young Talents program and operational plant personnel.",
    tech: ["React", "TypeScript", "VPO (PDCA & RDA)", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/JPflores20/MAZ-HUB",
    demo: "https://maz-pdca-hub.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Autonomy Dashboard / Brewery Dashboard Pro",
    short_desc: "TPM dashboard, SKAP Matrix, L6/L7/L8 guides & autonomous rankings",
    full_desc:
      "TPM brewing dashboard monitoring real-time operational autonomy, SKAP Matrix, multi-skill technical guides (L6, L7, L8), training progress, and autonomous team rankings across Brewhouse, Cold Block, and Maintenance.",
    tech: ["React", "TypeScript", "TPM & SKAP", "SheetJS (XLSX)", "Recharts"],
    github: "https://github.com/ingsoftcecy-svg/dashboardDesaarrllo",
    demo: "https://preview-bbe71.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Brewhouse Verification Schedule (BrewMan)",
    short_desc: "CIP cleaning planning, densities & attenuation curves",
    full_desc:
      "Web application for planning, controlling, and tracking CIP cleanings and preventive/routine maintenance in the Hot Block (Brewhouse) by shift, featuring critical alerts, densities, and attenuation curves.",
    tech: ["React", "TypeScript", "Tailwind CSS", "CIP & Brewhouse", "Lucide Icons"],
    github: "https://github.com/JPflores20/brewman-dashboard",
    demo: "https://agenda-de-control-de-procesos.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
];
