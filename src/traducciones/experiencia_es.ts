/**
 * @file experiencia_es.ts
 * @description Catálogo de experiencia profesional en español alineado con el CV 2026, incluyendo los 2 cargos en Grupo Modelo.
 */

import type { PuestoExperiencia } from "@/traducciones/tipos_traducciones";
import {
  sistemas_analista_datos_es,
  sistemas_practicante_software_es,
} from "@/traducciones/sistemas_grupo_modelo_es";

/**
 * Lista de posiciones laborales en español ordenadas cronológicamente.
 */
export const lista_experiencia_es: PuestoExperiencia[] = [
  {
    role: "Analista de Datos & Desarrollador de Software Industrial",
    company: "Grupo Modelo (Compañía Cervecera de Zacatecas)",
    period: "Abr 2026 - Presente",
    description:
      "Liderazgo en digitalización operativa, analítica industrial y desarrollo de plataformas web/móviles en 4 pilares estratégicos: (1) Control de Procesos en Bloque Frío, Cocimientos y Envasado; (2) TPM, Excelencia Operacional y Matriz SKAP; (3) Mejora Continua y Metodologías VPO (PDCA & RDA); y (4) Calidad, Control Estadístico de Procesos (SPC / Seis Sigma) y Seguridad Industrial.",
    proyectos_destacados: sistemas_analista_datos_es,
  },
  {
    role: "Becario de Ingeniería de Software (Practicante)",
    company: "Compañía Cervecera de Zacatecas (Grupo Modelo)",
    period: "Ene 2026 - Abr 2026",
    description:
      "Desarrollo e implementación de 'Brew Insights' para el análisis de datos de producción en el bloque de cocimientos e ingesta de archivos .DBF de Siemens Braumat, así como creación y optimización de suites de automatización en VBA y SAP GUI Scripting para agilizar el flujo de inventario y órdenes en SAP.",
    proyectos_destacados: sistemas_practicante_software_es,
  },
  {
    role: "Investigador de Tesis (Machine Learning)",
    company: "Universidad Autónoma de Zacatecas",
    period: "Ago 2025 - Presente",
    description:
      "Desarrollo de un modelo predictivo para la identificación de cáncer de pulmón en el sector salud, mediante algoritmos de Aprendizaje Automático (Machine Learning) y redes neuronales para el análisis de datos clínicos y patrones médicos.",
  },
  {
    role: "Desarrollador de Software (Líder de Proyecto)",
    company: "REDECO",
    period: "Jul 2025 - Dic 2025",
    description:
      "Líder de proyecto en la creación e implementación de un sistema web de gestión de quejas financieras para REDECO en la ciudad de Zacatecas.",
  },
  {
    role: "Desarrollador Móvil",
    company: "Taxaf",
    period: "Ene 2020 - Dic 2023",
    description:
      "Desarrollador móvil del proyecto Taxaf (publicado en Google Play y App Store) con responsabilidades en diseño de interfaz, desarrollo frontend en Flutter, pruebas QA y gestión de bases de datos.",
  },
  {
    role: "Técnico en Sistemas Digitales",
    company: "XL Creatividad Textil",
    period: "Dic 2019 - Ene 2021",
    description:
      "Programación y Automatización Operativa: desarrollo y mantenimiento de scripts y software especializado para el control de maquinaria textil.",
  },
];
