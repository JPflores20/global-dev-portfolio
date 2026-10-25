/**
 * @file experiencia_es.ts
 * @description Catálogo de puestos laborales y proyectos desarrollados en Grupo Modelo para la sección de Experiencia (Español).
 */

import type { PuestoExperiencia } from "@/traducciones/tipos_traducciones";

/**
 * Historial cronológico de experiencia profesional en español.
 */
export const lista_experiencia_es: PuestoExperiencia[] = [
  {
    role: "Ingeniero de Software",
    company: "Grupo Modelo (AB InBev • Cervecería de Zacatecas)",
    period: "2026 - Presente",
    description:
      "Diseño, arquitectura y desarrollo de 9 plataformas web y móviles industriales de misión crítica para las áreas de Cocimientos (Bloque Caliente), Bloque Frío, Calidad, Seguridad y Mejora Continua (VPO/TPM):",
    proyectos_destacados: [
      {
        nombre_proyecto: "Brew Insights",
        descripcion_proyecto:
          "Plataforma de analítica industrial con ingesta binaria .DBF/.xlsx, diagramas Gantt de ciclos, capacidad de proceso (Cp/Cpk), mantenimiento predictivo (RUL) y OCR con Gemini Vision.",
        tecnologias_utilizadas: ["React", "TypeScript", "Recharts", "Firebase", "Gemini AI"],
      },
      {
        nombre_proyecto: "Levadura CCZ (HMI Cervecería)",
        descripcion_proyecto:
          "Sistema HMI de control estadístico (SPC) para propagación de levadura, cinética de fermentación, comparativa de generaciones 1V–4V y validación de equipos Aber vs. Laboratorio LAC.",
        tecnologias_utilizadas: ["Next.js", "React 19", "TypeScript", "Recharts", "Firestore"],
      },
      {
        nombre_proyecto: "MAZ HUB (Plataforma PDCA y RDA)",
        descripcion_proyecto:
          "Plataforma corporativa de mejora continua con flujo PDCA de 18 pasos, reportes de anomalía RDA en 5 fases, árbol interactivo de KPIs, Kanban y exportación PDF ejecutiva.",
        tecnologias_utilizadas: ["React 19", "TanStack Start", "Tailwind v4", "React Flow", "Firebase"],
      },
      {
        nombre_proyecto: "Dashboard de Autonomía TPM (SKAP y Guías Técnicas)",
        descripcion_proyecto:
          "Tablero operacional para seguimiento de Matriz SKAP, edición inline de Matriz BPRE, banco dinámico de metas (IPs), cursos y habilitación técnica (L6, L7 y L8).",
        tecnologias_utilizadas: ["React 19", "TanStack Start", "SheetJS", "Firestore", "Recharts"],
      },
      {
        nombre_proyecto: "PML CleanPro (Cocimientos & Bloque Frío Clean Hub)",
        descripcion_proyecto:
          "Sistema progresivo para ejecución y auditoría en tiempo real del Programa Maestro de Limpieza con evidencia fotográfica, validación de supervisores, ranking y alertas en Telegram.",
        tecnologias_utilizadas: ["React 19", "Zustand v5", "Firebase", "Tailwind v4", "Telegram API"],
      },
      {
        nombre_proyecto: "PRP One View (Industrial Safety Map)",
        descripcion_proyecto:
          "Mapa interactivo de seguridad industrial y evaluación de riesgos para Cocimientos y Bloque Frío con checklists, alertas de inspecciones vencidas e impresión de etiquetas QR.",
        tecnologias_utilizadas: ["React 19", "TanStack Router", "Cloudinary", "Firebase", "SheetJS"],
      },
      {
        nombre_proyecto: "Agenda de Verificación de Cocimientos (Brewman Dashboard)",
        descripcion_proyecto:
          "Calendario interactivo Drag & Drop con gestión por turnos (T1, T2, T3) para planificar limpiezas CIP, mantenimientos preventivos e inventario de equipos.",
        tecnologias_utilizadas: ["React 19", "dnd-kit", "Zustand", "TanStack Query", "Firebase"],
      },
      {
        nombre_proyecto: "Farol de Indicadores (Farol KPIs)",
        descripcion_proyecto:
          "Plataforma de inteligencia de negocios con Modo TV 4K, gráficos Waterfall, compendio de planes de acción y diagramas de causa raíz Ishikawa (6M) en tiempo real.",
        tecnologias_utilizadas: ["React 18", "TypeScript", "Recharts", "SheetJS", "Firestore"],
      },
      {
        nombre_proyecto: "Brew Board (VPO Digital)",
        descripcion_proyecto:
          "Hub centralizado multiplataforma (Web y Android con Capacitor) para la gestión visual de los 7 pilares VPO (Seguridad, Gente, Calidad, Elaboración, Mantenimiento, Logística y Ambiental).",
        tecnologias_utilizadas: ["React 19", "Capacitor Android", "TanStack Router", "Firebase"],
      },
    ],
  },
  {
    role: "Líder de Proyecto y Desarrollador",
    company: "REDECO",
    period: "Jul 2025 - Dic 2025",
    description:
      "Lideré la creación de un sistema de quejas financiero para la página web de REDECO en la ciudad de Zacatecas.",
  },
  {
    role: "Investigador de Tesis (Machine Learning)",
    company: "Universidad Autónoma de Zacatecas",
    period: "Ago 2025 - Presente",
    description:
      "Desarrollo de un modelo predictivo para la identificación de cáncer de pulmón en el sector salud, mediante algoritmos de Aprendizaje Automático.",
  },
  {
    role: "Desarrollador Móvil",
    company: "Taxaf",
    period: "Ene 2020 - Dic 2023",
    description:
      "Desarrollador móvil del proyecto Taxaf. Responsable del diseño de interfaz, desarrollo frontend y backend, y gestión de bases de datos.",
  },
  {
    role: "Programación y Automatización Operativa",
    company: "XL Textile creativity",
    period: "Dic 2019 - Ene 2021",
    description:
      "Desarrollo y mantenimiento de scripts y software especializado para el control de maquinaria textil.",
  },
];
