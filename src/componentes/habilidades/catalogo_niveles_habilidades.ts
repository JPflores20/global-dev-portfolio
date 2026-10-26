/**
 * @file catalogo_niveles_habilidades.ts
 * @description Datos estáticos de porcentajes de dominio técnico e insignias de competencias clave.
 */

/**
 * Representa una habilidad técnica con su nombre y porcentaje de dominio.
 */
export interface NivelHabilidadTecnica {
  nombre_habilidad: string;
  porcentaje_dominio: number;
}

/**
 * Agrupación de habilidades por categoría técnica.
 */
export interface CatalogoHabilidadesPorCategoria {
  lenguajes_programacion: NivelHabilidadTecnica[];
  entornos_trabajo: NivelHabilidadTecnica[];
  herramientas_tecnologias: NivelHabilidadTecnica[];
}

/**
 * Niveles de competencia técnica clasificados en lenguajes, frameworks y herramientas.
 */
export const CATALOGO_HABILIDADES_POR_CATEGORIA: CatalogoHabilidadesPorCategoria = {
  lenguajes_programacion: [
    { nombre_habilidad: "TypeScript / JavaScript", porcentaje_dominio: 90 },
    { nombre_habilidad: "Python", porcentaje_dominio: 90 },
    { nombre_habilidad: "Dart", porcentaje_dominio: 85 },
    { nombre_habilidad: "Java", porcentaje_dominio: 80 },
    { nombre_habilidad: "SQL", porcentaje_dominio: 85 },
    { nombre_habilidad: "C++", porcentaje_dominio: 75 },
    { nombre_habilidad: "HTML/CSS", porcentaje_dominio: 90 },
  ],
  entornos_trabajo: [
    { nombre_habilidad: "React", porcentaje_dominio: 90 },
    { nombre_habilidad: "Flutter", porcentaje_dominio: 90 },
    { nombre_habilidad: "Tailwind CSS", porcentaje_dominio: 90 },
    { nombre_habilidad: "Django", porcentaje_dominio: 85 },
    { nombre_habilidad: "TensorFlow", porcentaje_dominio: 80 },
  ],
  herramientas_tecnologias: [
    { nombre_habilidad: "Supabase / PostgreSQL", porcentaje_dominio: 85 },
    { nombre_habilidad: "Firebase", porcentaje_dominio: 85 },
    { nombre_habilidad: "Google Gemini / OpenAI API", porcentaje_dominio: 85 },
    { nombre_habilidad: "Git", porcentaje_dominio: 90 },
    { nombre_habilidad: "MySQL / MariaDB", porcentaje_dominio: 80 },
    { nombre_habilidad: "MongoDB", porcentaje_dominio: 75 },
  ],
};

/**
 * Lista de competencias transversales y áreas de especialización mostradas como píldoras.
 */
export const ETIQUETAS_COMPETENCIAS_CLAVE: string[] = [
  "SPC & Six Sigma (Cp, Cpk)",
  "VPO (PDCA & RDA)",
  "TPM & Matriz SKAP",
  "SAP GUI Scripting & VBA",
  "Machine Learning",
  "Mobile Development",
  "Process Leadership",
];
