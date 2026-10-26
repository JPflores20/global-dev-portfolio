/**
 * @file proyectos_industriales_es.ts
 * @description Catálogo en español de los 8 sistemas industriales con repositorio y demo desarrollados para Grupo Modelo (AB InBev).
 */

import type { ProyectoPortafolio } from "@/traducciones/tipos_traducciones";

/**
 * Lista de proyectos industriales de Grupo Modelo para la galería de Proyectos en español.
 */
export const proyectos_industriales_es: ProyectoPortafolio[] = [
  {
    title: "Brew Insights — Analítica Industrial y Tiempos de Ciclo",
    short_desc: "Auditoría de Bloque Caliente (.DBF Siemens Braumat), SPC y asistente Gemini AI",
    full_desc:
      "Plataforma que ingesta archivos .DBF de Siemens Braumat y Excel para auditar el Bloque Caliente en Cervecería de Zacatecas. Incluye diagramas Gantt interactivos de tiempos de ciclo por receta, monitoreo de cuellos de botella en equipos, control estadístico (Cp, Cpk) de mosto/última agua y un asistente con IA (Google Gemini) para detección de causas raíz en lotes atípicos.",
    tech: ["React", "TypeScript", "Gemini AI", "Siemens Braumat (.DBF)", "SPC (Cp, Cpk)"],
    github: "https://github.com/JPflores20/brew-insights",
    demo: "https://brew-insights.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Brew Board — Gestión Cervecera Multiplataforma",
    short_desc: "App Web y Android (Capacitor + TanStack Start) con copiloto de IA",
    full_desc:
      "Aplicación multiplataforma (Web y móvil Android vía Capacitor con TanStack Start y Firebase) para la gestión cervecera integral en planta, equipada con copiloto inteligente de voz e IA (OpenAI / Web Speech API).",
    tech: ["React", "TypeScript", "Capacitor Android", "TanStack Start", "Firebase"],
    github: "https://github.com/JPflores20/brew-board",
    demo: "https://brew-f4449.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PML Clean Pro — Plan Maestro de Limpieza",
    short_desc: "Seguimiento en tiempo real de PML para Bloque Frío y Cocimientos",
    full_desc:
      "Sistema en tiempo real con Supabase (PostgreSQL) para la gestión y seguimiento del Plan Maestro de Limpieza (PML) y tareas operativas de Bloque Frío y Cocimientos, con asignación por operador e historial de cumplimiento.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/JPflores20/cocimientos-clean-hub",
    demo: "https://pml-cleanpro.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Panel Levadura CCZ — HMI de Calidad",
    short_desc: "HMI para control analítico de levaduras, viabilidad y cinéticas",
    full_desc:
      "Interfaz humano-máquina (HMI) para el control analítico del proceso de levaduras en Cervecería de Zacatecas: seguimiento de viabilidad celular, cinéticas de fermentación, reposo cervecero y generación de reportes PDF.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "jsPDF"],
    github: "https://github.com/JPflores20/levadura-ccz",
    demo: "https://levadura-7427a.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "PRP One View — Mapa de Seguridad Industrial",
    short_desc: "Planos de planta interactivos para auditorías PRP y mapas de riesgo",
    full_desc:
      "Visualización de planos de planta interactivos para auditoría de Programas de Prerrequisitos (PRP), mapas de riesgo por áreas operativas (Cocimientos, Bloque Frío) y ranking de cumplimiento en seguridad.",
    tech: ["React", "TypeScript", "Planos Interactivos", "Recharts", "Tailwind CSS"],
    github: "https://github.com/JPflores20/industrial-safety-map",
    demo: "https://safety-map-907c2.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "MAZ HUB — Mejora Continua y VPO (PDCA & RDA)",
    short_desc: "Gestión integral de metodologías PDCA, RDA, árbol de KPIs y Kanban",
    full_desc:
      "Plataforma corporativa para la gestión integral de metodologías de mejora continua (PDCA, RDA, árbol de KPIs y tableros Kanban) diseñada para el programa Young Talents y personal operativo de planta.",
    tech: ["React", "TypeScript", "VPO (PDCA & RDA)", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/JPflores20/MAZ-HUB",
    demo: "https://maz-pdca-hub.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Dashboard de Autonomía / Brewery Dashboard Pro",
    short_desc: "Tablero TPM, Matriz SKAP, guías L6/L7/L8 y rankings autónomos",
    full_desc:
      "Tablero TPM de elaboración para monitoreo en tiempo real de niveles de autonomía operativa, Matriz SKAP, multi-habilidad técnica (guías L6, L7 y L8), avance en cursos de capacitación y rankings de equipos autónomos en Cocimientos, Bloque Frío y Mantenimiento.",
    tech: ["React", "TypeScript", "TPM & SKAP", "SheetJS (XLSX)", "Recharts"],
    github: "https://github.com/ingsoftcecy-svg/dashboardDesaarrllo",
    demo: "https://preview-bbe71.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
  {
    title: "Agenda de Verificación de Cocimientos",
    short_desc: "Planificación de limpiezas CIP, densidades y curvas de atenuación",
    full_desc:
      "Aplicación web para la planificación, control y seguimiento de limpiezas CIP y mantenimientos preventivos/rutinarios en el área de Bloque Caliente (Cocimientos), organizada por turnos con alertas críticas, densidades y curvas de atenuación.",
    tech: ["React", "TypeScript", "Tailwind CSS", "CIP & Cocimientos", "Lucide Icons"],
    github: "https://github.com/JPflores20/brewman-dashboard",
    demo: "https://agenda-de-control-de-procesos.web.app/",
    play_store: null,
    app_store: null,
    youtube: null,
  },
];
