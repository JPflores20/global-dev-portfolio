/**
 * @file experiencia_en.ts
 * @description Professional experience catalog in English aligned with the 2026 CV, including both roles at Grupo Modelo.
 */

import type { PuestoExperiencia } from "@/traducciones/tipos_traducciones";
import {
  sistemas_analista_datos_en,
  sistemas_practicante_software_en,
} from "@/traducciones/sistemas_grupo_modelo_en";

/**
 * Lista de posiciones laborales en inglés ordenadas cronológicamente.
 */
export const lista_experiencia_en: PuestoExperiencia[] = [
  {
    role: "Data Analyst & Industrial Software Developer",
    company: "Grupo Modelo (Compañía Cervecera de Zacatecas)",
    period: "Apr 2026 - Present",
    description:
      "Leading operational digitalization, industrial analytics, and web/mobile platform engineering across 4 strategic pillars: (1) Process Control in Cold Block, Brewhouse & Packaging; (2) TPM, Operational Excellence & SKAP Matrix; (3) Continuous Improvement & VPO Methodologies (PDCA & RDA); and (4) Quality, Statistical Process Control (SPC / Six Sigma) & Industrial Safety.",
    proyectos_destacados: sistemas_analista_datos_en,
  },
  {
    role: "Software Engineering Intern",
    company: "Compañía Cervecera de Zacatecas (Grupo Modelo)",
    period: "Jan 2026 - Apr 2026",
    description:
      "Developed and deployed 'Brew Insights' for production data analytics in the Brewhouse block with Siemens Braumat (.DBF) ingestion, and engineered VBA & SAP GUI Scripting automation suites to streamline inventory movements and manufacturing orders in SAP.",
    proyectos_destacados: sistemas_practicante_software_en,
  },
  {
    role: "Thesis Researcher (Machine Learning)",
    company: "Universidad Autónoma de Zacatecas",
    period: "Aug 2025 - Present",
    description:
      "Developing a predictive model for lung cancer identification in the healthcare sector using Machine Learning algorithms and neural networks to analyze clinical data and medical patterns.",
  },
  {
    role: "Software Developer (Project Lead)",
    company: "REDECO",
    period: "Jul 2025 - Dec 2025",
    description:
      "Project Lead for the design and implementation of a financial complaint management web system for REDECO in Zacatecas.",
  },
  {
    role: "Mobile Developer",
    company: "Taxaf",
    period: "Jan 2020 - Dec 2023",
    description:
      "Mobile developer for the Taxaf project (published on Google Play and App Store), responsible for UI design, Flutter frontend development, QA testing, and database management.",
  },
  {
    role: "Digital Systems Technician",
    company: "XL Creatividad Textil",
    period: "Dec 2019 - Jan 2021",
    description:
      "Operational Programming & Automation: developed and maintained specialized scripts and control software for industrial textile machinery.",
  },
];
