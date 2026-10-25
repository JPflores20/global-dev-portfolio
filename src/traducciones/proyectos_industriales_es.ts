/**
 * @file proyectos_industriales_es.ts
 * @description Catálogo en español de los 9 sistemas industriales desarrollados para Grupo Modelo (AB InBev • Cervecería de Zacatecas).
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";

/**
 * Lista de proyectos industriales de Grupo Modelo para la galería de Proyectos en español.
 */
export const proyectos_industriales_es: ProyectoPortafolio[] = [
  {
    title: "Brew Insights — Analítica Cervecera con IA",
    short_desc: "Plataforma de inteligencia cervecera y asistente Google Gemini AI",
    full_desc:
      "Plataforma de análisis de datos cerveceros para Cervecería de Zacatecas (Grupo Modelo) con integración de Google Gemini AI. Permite monitorear lotes de cocimiento y fermentación, detectar anomalías en variables físico-químicas y consultar un asistente inteligente en tiempo real.",
    tech: ["React 19", "TypeScript", "Google Gemini AI", "Tailwind CSS", "Recharts"],
    github: "https://github.com/JPflores20/brew-insights",
    demo: "https://brew-insights.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Gestión Cervecera — VPO Digital (Brew Board)",
    short_desc: "Tablero VPO Digital con copiloto de voz e IA (OpenAI)",
    full_desc:
      "Plataforma integral de gestión cervecera (Voyager Plant Optimization) con reconocimiento de voz (Web Speech API), copiloto inteligente impulsado por OpenAI y sincronización en la nube con Supabase para seguimiento operativo de planta.",
    tech: ["React", "TypeScript", "OpenAI API", "Web Speech API", "Supabase"],
    github: "https://github.com/JPflores20/brew-board",
    demo: "https://brew-f4449.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PML Clean Pro — Limpieza de Cocimientos",
    short_desc: "Gestión de programas maestros de limpieza y saneamiento en tiempo real",
    full_desc:
      "Sistema full-stack en tiempo real con Supabase (PostgreSQL) para digitalizar el cumplimiento de limpieza profunda, paros programados, validaciones microbiológicas y generación de reportes visuales en el área de Cocimientos.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/JPflores20/cocimientos-clean-hub",
    demo: "https://pml-cleanpro.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Levadura CCZ — Control de Calidad",
    short_desc: "Monitoreo de viabilidad celular, fermentación y reportes PDF",
    full_desc:
      "Sistema web para el control y trazabilidad del manejo de levadura en Cervecería de Zacatecas. Automatiza el registro de conteo celular, viabilidad, dosificación y exportación de reportes técnicos en formato PDF.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "jsPDF"],
    github: "https://github.com/JPflores20/levadura-ccz",
    demo: "https://levadura-7427a.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PRP One View — Mapa de Seguridad Industrial",
    short_desc: "Mapa interactivo de riesgos, auditorías y seguridad en planta",
    full_desc:
      "Aplicación interactiva para el mapeo de riesgos industriales, seguimiento de puntos de riesgo en instalaciones y visualización geoespacial del estado de seguridad operativa por zonas dentro de la cervecería.",
    tech: ["React", "TypeScript", "Canvas Interactivo", "Recharts", "Tailwind CSS"],
    github: "https://github.com/JPflores20/industrial-safety-map",
    demo: "https://safety-map-907c2.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Farol de KPIs — Inteligencia de Procesos",
    short_desc: "Semáforo ejecutivo de indicadores críticos de desempeño",
    full_desc:
      "Sistema de visualización tipo semáforo (Farol) para el control de KPIs operativos y de calidad en planta, con carga masiva de hojas de cálculo (SheetJS), análisis de desviaciones y seguimiento de metas mensuales.",
    tech: ["React", "TypeScript", "Recharts", "SheetJS (XLSX)", "Tailwind CSS"],
    github: "https://github.com/ingsoftcecy-svg/farol-kpis",
    demo: "https://farol-aa906.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "MAZ HUB — Digitalización de Planta",
    short_desc: "Portal centralizado de sistemas y tableros operativos",
    full_desc:
      "Ecosistema centralizado que unifica el acceso a las herramientas digitales de ingeniería, mantenimiento, calidad y producción de la zona Middle Americas (MAZ) en una interfaz moderna y responsiva.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/JPflores20/MAZ-HUB",
    demo: "https://maz-pdca-hub.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Dashboard de Autonomía Operativa",
    short_desc: "Evaluación de madurez técnica y capacitación de equipos",
    full_desc:
      "Tablero analítico para evaluar y dar seguimiento al desarrollo de habilidades técnicas y autonomía de los operadores de planta, procesando matrices Excel automáticamente y generando gráficas de progreso por turno y área.",
    tech: ["React", "TypeScript", "SheetJS (XLSX)", "Recharts", "Tailwind CSS"],
    github: "https://github.com/ingsoftcecy-svg/dashboardDesaarrllo",
    demo: "https://preview-bbe71.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Agenda de Cocimientos (BrewMan Dashboard)",
    short_desc: "Planificación de rutinas operativas y turnos en sala de cocimiento",
    full_desc:
      "Tablero digital de planificación diaria, semanal y mensual para supervisores y operadores de sala de cocimiento, optimizando la asignación de actividades críticas, checklists y relevos de turno.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lucide Icons"],
    github: "https://github.com/JPflores20/brewman-dashboard",
    demo: "https://agenda-de-control-de-procesos.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
];
