/**
 * @file sistemas_grupo_modelo_es.ts
 * @description Catálogo en español de los sistemas y automatizaciones desarrollados en Grupo Modelo (Analista de Datos y Practicante de Ingeniería de Software).
 */

import type { ProyectoDestacadoExperiencia } from "@/traducciones/tipos_traducciones";

/**
 * Sistemas desarrollados en el puesto de Analista de Datos (Abril 2026 - Actualidad) organizados por los 4 pilares del CV.
 */
export const sistemas_analista_datos_es: ProyectoDestacadoExperiencia[] = [
  {
    nombre_proyecto: "CONTROL DE RUTEO — GOBIERNO / ASISTENTE BBT (golden-route-assistant)",
    descripcion_proyecto:
      "Interfaz en tiempo real para operadores que optimiza la asignación de tanques de cerveza brillante (BBT) hacia envasado, previniendo paros, calculando déficit por marca y proyectando el Master Schedule.",
    tecnologias_utilizadas: ["React", "TypeScript", "Tiempo Real", "Master Schedule"],
  },
  {
    nombre_proyecto: "AGENDA DE VERIFICACIÓN DE COCIMIENTOS (brewman-dashboard)",
    descripcion_proyecto:
      "Aplicación web para la planificación, control y seguimiento de limpiezas CIP y mantenimientos preventivos en Bloque Caliente (Cocimientos) por turnos, con alertas críticas, densidades y curvas de atenuación.",
    tecnologias_utilizadas: ["React", "TypeScript", "Tailwind CSS", "CIP & Cocimientos"],
  },
  {
    nombre_proyecto: "CRAFT BREW INSIGHT & AGENDA BLOQUE FRÍO (craft-brew-insight)",
    descripcion_proyecto:
      "Gestión operativa y digitalización del proceso de fermentación en Bloque Frío: agenda general de seguimiento, control estricto de purgas a 24, 48 y 72 horas y verificación de platos.",
    tecnologias_utilizadas: ["React", "TypeScript", "Bloque Frío", "Control de Fermentación"],
  },
  {
    nombre_proyecto: "PANEL LEVADURA (levadura-ccz)",
    descripcion_proyecto:
      "HMI para el control analítico del proceso de levaduras, seguimiento de viabilidad celular, cinéticas de fermentación, reposo cervecero y exportación de reportes técnicos PDF.",
    tecnologias_utilizadas: ["React", "TypeScript", "Recharts", "jsPDF", "HMI Calidad"],
  },
  {
    nombre_proyecto: "BREW BOARD — VPO DIGITAL MULTIPLATAFORMA (brew-board)",
    descripcion_proyecto:
      "Aplicación multiplataforma (Web y móvil Android vía Capacitor con TanStack Start, Firebase y copiloto IA) para la gestión cervecera integral en planta.",
    tecnologias_utilizadas: ["React", "TypeScript", "Capacitor Android", "TanStack Start", "Firebase"],
  },
  {
    nombre_proyecto: "DASHBOARD DE AUTONOMÍA / BREWERY DASHBOARD PRO",
    descripcion_proyecto:
      "Tablero TPM de elaboración para monitoreo en tiempo real de autonomía operativa, Matriz SKAP, multi-habilidad técnica (guías L6, L7 y L8), capacitación y rankings en Cocimientos, Bloque Frío y Mantenimiento.",
    tecnologias_utilizadas: ["React", "TypeScript", "TPM & SKAP", "SheetJS (XLSX)", "Recharts"],
  },
  {
    nombre_proyecto: "BREWING OPERATOR CONTROL (dayflow-dex)",
    descripcion_proyecto:
      "Plataforma para la administración de roles de turnos (ShiftGrid), control de asistencia, perfiles de operadores y asignación de relevos en planta.",
    tecnologias_utilizadas: ["React", "TypeScript", "ShiftGrid", "Gestión de Turnos"],
  },
  {
    nombre_proyecto: "PML CLEAN PRO — PLAN MAESTRO DE LIMPIEZA",
    descripcion_proyecto:
      "Gestión y seguimiento del Plan Maestro de Limpieza (PML) y tareas operativas para Bloque Frío y Cocimientos, con asignación por operador e historial de cumplimiento en tiempo real.",
    tecnologias_utilizadas: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    nombre_proyecto: "AUTOMATIZACIÓN Y PROCESAMIENTO SKAP EN PYTHON",
    descripcion_proyecto:
      "Script automatizado en Python (Pandas) para la evaluación de matrices SKAP, cruce con posiciones de plantilla oficial, depuración de duplicados y generación de planes de cierre de brechas 2.0.",
    tecnologias_utilizadas: ["Python", "Pandas", "Automatización ETL", "Matriz SKAP"],
  },
  {
    nombre_proyecto: "MAZ HUB — MEJORA CONTINUA Y METODOLOGÍAS VPO (PDCA & RDA)",
    descripcion_proyecto:
      "Plataforma corporativa para la gestión integral de metodologías de mejora continua (PDCA, RDA, árbol de KPIs y tableros Kanban) para el programa Young Talents y personal operativo.",
    tecnologias_utilizadas: ["React", "TypeScript", "VPO (PDCA & RDA)", "Kanban", "Framer Motion"],
  },
  {
    nombre_proyecto: "PRECISION BREWING / CECY — CONTROL ESTADÍSTICO (SPC) & SEIS SIGMA",
    descripcion_proyecto:
      "Tablero avanzado enfocado en Control Estadístico de Procesos (SPC) y Seis Sigma: cálculo de índices de capacidad (Cp, Cpk, Pp, Ppk), evaluación de mermas, temperaturas, atenuación óptica y causas especiales.",
    tecnologias_utilizadas: ["React", "TypeScript", "SPC & Six Sigma", "Recharts", "Analítica"],
  },
  {
    nombre_proyecto: "PRP ONE VIEW — MAPA DE SEGURIDAD INDUSTRIAL (industrial-safety-map)",
    descripcion_proyecto:
      "Visualización de planos de planta interactivos para auditoría de Programas de Prerrequisitos (PRP), mapas de riesgo por áreas operativas (Cocimientos, Bloque Frío) y ranking de cumplimiento.",
    tecnologias_utilizadas: ["React", "TypeScript", "Planos Interactivos", "Auditoría PRP"],
  },
  {
    nombre_proyecto: "BREW BOARD DE SEGURIDAD MENSUAL (trascendencia-360 • Pilar Guardianes)",
    descripcion_proyecto:
      "Tablero ejecutivo del Pilar Guardianes para el monitoreo mensual de indicadores de seguridad industrial, incidentes y cumplimiento preventivo en planta.",
    tecnologias_utilizadas: ["React", "TypeScript", "KPIs Seguridad", "Recharts"],
  },
  {
    nombre_proyecto: "MODELO HELP DESK (modelo-help-desk)",
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
    nombre_proyecto: "BREW INSIGHTS — ANALÍTICA INDUSTRIAL Y TIEMPOS DE CICLO",
    descripcion_proyecto:
      "Plataforma que ingesta archivos .DBF de Siemens Braumat y Excel para auditar el Bloque Caliente. Incluye diagramas Gantt interactivos de tiempos de ciclo por receta, detección de cuellos de botella, control estadístico (Cp, Cpk) de mosto/última agua y asistente con IA (Google Gemini) para análisis de causas raíz en lotes atípicos.",
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
    nombre_proyecto: "SUITE DE AUTOMATIZACIÓN SAP Y MACROS DE COCIMIENTOS",
    descripcion_proyecto:
      "Automatización de movimientos e inventarios en SAP mediante VBA y SAP GUI Scripting para eliminar capturas manuales y rezagos contables. Calcula balances de materias primas/mosto, genera transportes masivos (VT01N), extrae reportes de inventario/calidad (MB51, QA33) y notifica órdenes de fabricación en tiempo real.",
    tecnologias_utilizadas: [
      "VBA",
      "SAP GUI Scripting",
      "SAP (VT01N, MB51, QA33)",
      "Excel (.xlsb/.xlsm)",
    ],
  },
];
