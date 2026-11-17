/**
 * @file sistemas_grupo_modelo_es.ts
 * @description Catálogo en español de los sistemas y automatizaciones desarrollados en Grupo Modelo (Ingeniero de Software y Practicante de Ingeniería de Software).
 */

import type { ProyectoDestacadoExperiencia } from "@/traducciones/tipos_traducciones";

/**
 * Sistemas desarrollados en el puesto de Ingeniero de Software (Abril 2026 - Actualidad) organizados por los 4 pilares del CV.
 */
export const sistemas_analista_datos_es: ProyectoDestacadoExperiencia[] = [
  {
    nombre_proyecto: "Control de Ruteo",
    descripcion_proyecto:
      "Interfaz en tiempo real para operadores que optimiza la asignación FIFO de 88 tanques de cerveza brillante (BBT) hacia 8 líneas de envasado, previniendo paros, calculando déficit por marca y proyectando el Master Schedule con caché multi-nivel.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Zod"],
    url_repositorio: "https://github.com/JPflores20/golden-route-assistant",
  },
  {
    nombre_proyecto: "Agenda de Verificación de Cocimientos",
    descripcion_proyecto:
      "Aplicación web para la planificación, control y seguimiento de limpiezas CIP y mantenimientos preventivos en Bloque Caliente (Cocimientos) por turnos, con alertas críticas, densidades y curvas de atenuación.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "Firebase"],
    url_demo: "https://agenda-de-control-de-procesos.web.app/",
    url_repositorio: "https://github.com/JPflores20/brewman-dashboard",
  },
  {
    nombre_proyecto: "Craft Brew Insight",
    descripcion_proyecto:
      "Gestión operativa y digitalización del proceso de fermentación en Bloque Frío: agenda general de seguimiento, control estricto de purgas a 24, 48 y 72 horas y verificación de platos.",
    tecnologias_utilizadas: ["React", "TypeScript", "Bloque Frío", "Control de Fermentación"],
  },
  {
    nombre_proyecto: "Panel Levadura",
    descripcion_proyecto:
      "HMI con Next.js (App Router) y Firestore para el control analítico de levaduras, viabilidad celular, cinéticas de fermentación, comparación de generaciones 1V–4V, validación Aber vs. LAC y exportación PDF.",
    tecnologias_utilizadas: ["Next.js 16", "React 19", "TypeScript", "Recharts", "Firebase"],
    url_demo: "https://levadura-7427a.web.app/",
    url_repositorio: "https://github.com/JPflores20/levadura-ccz",
  },
  {
    nombre_proyecto: "Brew Board",
    descripcion_proyecto:
      "Aplicación multiplataforma (Web y móvil Android vía Capacitor con TanStack Start, Firebase y copiloto IA) para la gestión cervecera integral en planta.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "Capacitor Android", "TanStack Start", "Firebase"],
    url_demo: "https://brew-f4449.web.app/",
    url_repositorio: "https://github.com/JPflores20/brew-board",
  },
  {
    nombre_proyecto: "Dashboard de Autonomía",
    descripcion_proyecto:
      "Tablero TPM de elaboración para monitoreo en tiempo real de autonomía operativa, Matriz SKAP, multi-habilidad técnica (guías L6, L7 y L8), capacitación y rankings en Cocimientos, Bloque Frío y Mantenimiento.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "SheetJS (XLSX)", "Firebase"],
    url_demo: "https://preview-bbe71.web.app/",
    url_repositorio: "https://github.com/ingsoftcecy-svg/dashboardDesaarrllo",
  },
  {
    nombre_proyecto: "Brewing Operator Control",
    descripcion_proyecto:
      "Plataforma para la administración de roles de turnos (ShiftGrid), cálculo de tiempo extra, control de asistencia, perfiles de operadores e importación/exportación de plantillas en planta.",
    tecnologias_utilizadas: ["React", "TypeScript", "TanStack Router", "Firebase", "SheetJS"],
    url_demo: "https://breawing-operator-control.web.app/",
  },
  {
    nombre_proyecto: "PML Clean Pro",
    descripcion_proyecto:
      "Gestión y seguimiento en tiempo real del Plan Maestro de Limpieza (PML) para Bloque Frío y Cocimientos, con evidencia fotográfica, fusión inteligente de duplicados, rotación de rutinas y 172 tests automatizados.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Zustand"],
    url_demo: "https://pml-cleanpro.web.app/",
    url_repositorio: "https://github.com/JPflores20/cocimientos-clean-hub",
  },
  {
    nombre_proyecto: "Automatización Matriz SKAP",
    descripcion_proyecto:
      "Script automatizado en Python (Pandas) para la evaluación de matrices SKAP, cruce con posiciones de plantilla oficial, depuración de duplicados y generación de planes de cierre de brechas 2.0.",
    tecnologias_utilizadas: ["Python", "Pandas", "Automatización ETL", "Matriz SKAP"],
  },
  {
    nombre_proyecto: "MAZ HUB",
    descripcion_proyecto:
      "Plataforma corporativa para la gestión integral de metodologías de mejora continua (PDCA, RDA, árbol de KPIs y tableros Kanban) para el programa Young Talents y personal operativo.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Playwright"],
    url_demo: "https://maz-pdca-hub.web.app/",
    url_repositorio: "https://github.com/JPflores20/MAZ-HUB",
  },
  {
    nombre_proyecto: "Precision Brewing",
    descripcion_proyecto:
      "Tablero avanzado enfocado en Control Estadístico de Procesos (SPC) y Seis Sigma: cálculo de índices de capacidad (Cp, Cpk, Pp, Ppk), evaluación de mermas, temperaturas, atenuación óptica y causas especiales.",
    tecnologias_utilizadas: ["React", "TypeScript", "SPC & Six Sigma", "Recharts", "Analítica"],
  },
  {
    nombre_proyecto: "PRP One View",
    descripcion_proyecto:
      "Visualización de planos de planta interactivos para auditoría de Programas de Prerrequisitos (PRP), territorios QR, mapas de riesgo por áreas operativas (Cocimientos, Bloque Frío) y ranking de cumplimiento.",
    tecnologias_utilizadas: ["React 19", "TypeScript", "TanStack Start", "Firebase", "Planos Interactivos"],
    url_demo: "https://safety-map-907c2.web.app/",
    url_repositorio: "https://github.com/JPflores20/industrial-safety-map",
  },
  {
    nombre_proyecto: "Brew Board de Seguridad",
    descripcion_proyecto:
      "Tablero ejecutivo del Pilar Guardianes para el monitoreo mensual de indicadores de seguridad industrial, incidentes y cumplimiento preventivo en planta.",
    tecnologias_utilizadas: ["React", "TypeScript", "KPIs Seguridad", "Recharts"],
  },
  {
    nombre_proyecto: "Modelo Help Desk",
    descripcion_proyecto:
      "Sistema de tickets y mesa de ayuda interna con branding corporativo de Grupo Modelo para la canalización y resolución de incidencias técnicas y operativas.",
    tecnologias_utilizadas: ["React", "TypeScript", "Mesa de Ayuda", "Tailwind CSS"],
  },
];

/**
 * Sistemas desarrollados en el puesto de Becario de Ingeniería de Software (Enero 2026 - Abril 2026).
 */
export const sistemas_practicante_software_es: ProyectoDestacadoExperiencia[] = [
  {
    nombre_proyecto: "Brew Insights",
    descripcion_proyecto:
      "Plataforma que ingesta archivos .DBF de Siemens Braumat y Excel para auditar Bloque Caliente y Bloque Frío. Incluye diagramas Gantt interactivos, detección de cuellos de botella, SPC (Cp, Cpk), mantenimiento predictivo (RUL) y asistente con IA (Google Gemini).",
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
    nombre_proyecto: "Suite de Automatización SAP",
    descripcion_proyecto:
      "Automatización de movimientos e inventarios en SAP mediante VBA y SAP GUI Scripting para eliminar capturas manuales y rezagos contables. Calcula balances de materias primas/mosto, genera transportes masivos (VT01N), extrae reportes (MB51, QA33) y notifica órdenes en tiempo real.",
    tecnologias_utilizadas: [
      "VBA",
      "SAP GUI Scripting",
      "SAP (VT01N, MB51, QA33)",
      "Excel (.xlsb/.xlsm)",
    ],
  },
];
