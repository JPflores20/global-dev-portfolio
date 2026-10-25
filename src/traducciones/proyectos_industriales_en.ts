/**
 * @file proyectos_industriales_en.ts
 * @description English catalog of the 9 industrial systems developed for Grupo Modelo (AB InBev • Zacatecas Brewery).
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";

/**
 * Lista de proyectos industriales de Grupo Modelo para la galería de Proyectos en inglés.
 */
export const proyectos_industriales_en: ProyectoPortafolio[] = [
  {
    title: "Brew Insights — AI Brewing Analytics",
    short_desc: "Brewing intelligence platform & Google Gemini AI assistant",
    full_desc:
      "Brewing data analytics platform built for Zacatecas Brewery (Grupo Modelo) featuring Google Gemini AI integration. Monitors brewhouse and fermentation batches, detects physicochemical anomalies, and provides a real-time intelligent assistant.",
    tech: ["React 19", "TypeScript", "Google Gemini AI", "Tailwind CSS", "Recharts"],
    github: "https://github.com/JPflores20/brew-insights",
    demo: "https://brew-insights.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Brewing Management — Digital VPO (Brew Board)",
    short_desc: "Digital VPO board with voice recognition & OpenAI copilot",
    full_desc:
      "Comprehensive Voyager Plant Optimization (VPO) management platform featuring voice commands (Web Speech API), an OpenAI-powered operational copilot, and real-time Supabase cloud synchronization.",
    tech: ["React", "TypeScript", "OpenAI API", "Web Speech API", "Supabase"],
    github: "https://github.com/JPflores20/brew-board",
    demo: "https://brew-f4449.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PML Clean Pro — Brewhouse Sanitation Hub",
    short_desc: "Real-time master cleaning schedules & sanitation compliance",
    full_desc:
      "Real-time full-stack platform powered by Supabase (PostgreSQL) to digitize deep-cleaning compliance, scheduled maintenance shutdowns, microbiological validations, and visual reporting in the Brewhouse area.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/JPflores20/cocimientos-clean-hub",
    demo: "https://pml-cleanpro.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Levadura CCZ — Yeast Quality Control",
    short_desc: "Cell viability monitoring, fermentation tracking & PDF reports",
    full_desc:
      "Web system for yeast management quality control and traceability at Zacatecas Brewery. Automates cell count logging, viability tracking, dosing calculations, and automated PDF technical report generation.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "jsPDF"],
    github: "https://github.com/JPflores20/levadura-ccz",
    demo: "https://levadura-7427a.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PRP One View — Industrial Safety Map",
    short_desc: "Interactive plant hazard mapping & safety audit dashboard",
    full_desc:
      "Interactive geospatial application for industrial hazard mapping, facility risk-point tracking, and real-time visualization of operational safety compliance across brewery zones.",
    tech: ["React", "TypeScript", "Interactive Canvas", "Recharts", "Tailwind CSS"],
    github: "https://github.com/JPflores20/industrial-safety-map",
    demo: "https://safety-map-907c2.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Farol KPIs — Process Intelligence",
    short_desc: "Executive traffic-light dashboard for critical plant KPIs",
    full_desc:
      "Traffic-light (Farol) visualization system for monitoring operational and quality KPIs across the plant, supporting bulk spreadsheet ingestion (SheetJS), variance analysis, and monthly target tracking.",
    tech: ["React", "TypeScript", "Recharts", "SheetJS (XLSX)", "Tailwind CSS"],
    github: "https://github.com/ingsoftcecy-svg/farol-kpis",
    demo: "https://farol-aa906.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "MAZ HUB — Plant Digitalization Portal",
    short_desc: "Centralized hub for operational dashboards & engineering tools",
    full_desc:
      "Centralized digital ecosystem unifying access to engineering, maintenance, quality, and production web applications across the Middle Americas Zone (MAZ) in a modern, responsive interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/JPflores20/MAZ-HUB",
    demo: "https://maz-pdca-hub.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Operational Autonomy Dashboard",
    short_desc: "Technical maturity assessment & operator training analytics",
    full_desc:
      "Analytical dashboard to evaluate and track technical skill development and operational autonomy across plant teams, automatically parsing Excel matrices and rendering progress charts by shift and area.",
    tech: ["React", "TypeScript", "SheetJS (XLSX)", "Recharts", "Tailwind CSS"],
    github: "https://github.com/ingsoftcecy-svg/dashboardDesaarrllo",
    demo: "https://preview-bbe71.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Brewhouse Schedule (BrewMan Dashboard)",
    short_desc: "Operational routine & shift planning for brewhouse teams",
    full_desc:
      "Digital daily, weekly, and monthly scheduling dashboard for brewhouse supervisors and operators, streamlining critical task assignment, operational checklists, and shift handovers.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lucide Icons"],
    github: "https://github.com/JPflores20/brewman-dashboard",
    demo: "https://agenda-de-control-de-procesos.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
];
