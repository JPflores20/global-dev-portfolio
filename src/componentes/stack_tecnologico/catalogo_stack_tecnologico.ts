/**
 * @file catalogo_stack_tecnologico.ts
 * @description Catálogo estático de categorías y tecnologías con sus respectivos iconos y colores para la sección Tech Stack.
 */

import type { ComponentType } from "react";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Wand2,
  Cpu,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
  SiPostman,
  SiGrafana,
  SiSap,
  SiTensorflow,
  SiPandas,
  SiGooglegemini,
  SiOpenai,
} from "react-icons/si";
import type { ClaveCategoriaTecnologia } from "@/traducciones/indice_traducciones";

/**
 * Definición de una categoría de filtrado del stack tecnológico.
 */
export interface ConfiguracionCategoriaStack {
  identificador_categoria: ClaveCategoriaTecnologia;
  componente_icono: ComponentType<{ className?: string }>;
}

/**
 * Definición de una herramienta o lenguaje dentro del catálogo del stack tecnológico.
 */
export interface ElementoStackTecnologico {
  nombre_tecnologia: string;
  categoria_tecnologia: Exclude<ClaveCategoriaTecnologia, "All">;
  componente_icono: ComponentType<{ className?: string }>;
  clase_color_icono: string;
}

/**
 * Lista ordenada de categorías disponibles en la barra de filtrado.
 */
export const CONFIGURACION_CATEGORIAS_STACK: ConfiguracionCategoriaStack[] = [
  { identificador_categoria: "All", componente_icono: Globe },
  { identificador_categoria: "Frontend", componente_icono: Layout },
  { identificador_categoria: "Backend", componente_icono: Server },
  { identificador_categoria: "Mobile", componente_icono: Smartphone },
  { identificador_categoria: "Database", componente_icono: Database },
  { identificador_categoria: "DevOps", componente_icono: Terminal },
  { identificador_categoria: "AI", componente_icono: Wand2 },
  { identificador_categoria: "Tools", componente_icono: Code2 },
];

/**
 * Catálogo completo de tecnologías mostradas en la cuadrícula interactiva.
 */
export const CATALOGO_TECNOLOGIAS_STACK: ElementoStackTecnologico[] = [
  { nombre_tecnologia: "React", categoria_tecnologia: "Frontend", componente_icono: SiReact, clase_color_icono: "text-cyan-400" },
  { nombre_tecnologia: "TypeScript", categoria_tecnologia: "Frontend", componente_icono: SiTypescript, clase_color_icono: "text-blue-500" },
  { nombre_tecnologia: "Tailwind CSS", categoria_tecnologia: "Frontend", componente_icono: SiTailwindcss, clase_color_icono: "text-cyan-300" },
  { nombre_tecnologia: "JavaScript", categoria_tecnologia: "Frontend", componente_icono: SiJavascript, clase_color_icono: "text-yellow-400" },
  { nombre_tecnologia: "HTML5", categoria_tecnologia: "Frontend", componente_icono: SiHtml5, clase_color_icono: "text-orange-500" },
  { nombre_tecnologia: "Python", categoria_tecnologia: "Backend", componente_icono: SiPython, clase_color_icono: "text-yellow-300" },
  { nombre_tecnologia: "Django", categoria_tecnologia: "Backend", componente_icono: SiDjango, clase_color_icono: "text-green-600" },
  { nombre_tecnologia: "Java", categoria_tecnologia: "Backend", componente_icono: FaJava, clase_color_icono: "text-red-500" },
  { nombre_tecnologia: "Node.js", categoria_tecnologia: "Backend", componente_icono: SiNodedotjs, clase_color_icono: "text-green-500" },
  { nombre_tecnologia: "Flutter", categoria_tecnologia: "Mobile", componente_icono: SiFlutter, clase_color_icono: "text-blue-400" },
  { nombre_tecnologia: "Dart", categoria_tecnologia: "Mobile", componente_icono: SiDart, clase_color_icono: "text-blue-600" },
  { nombre_tecnologia: "PostgreSQL", categoria_tecnologia: "Database", componente_icono: SiPostgresql, clase_color_icono: "text-blue-400" },
  { nombre_tecnologia: "Supabase", categoria_tecnologia: "Database", componente_icono: SiSupabase, clase_color_icono: "text-emerald-400" },
  { nombre_tecnologia: "MySQL", categoria_tecnologia: "Database", componente_icono: SiMysql, clase_color_icono: "text-blue-500" },
  { nombre_tecnologia: "Firebase", categoria_tecnologia: "Database", componente_icono: SiFirebase, clase_color_icono: "text-yellow-500" },
  { nombre_tecnologia: "MongoDB", categoria_tecnologia: "Database", componente_icono: SiMongodb, clase_color_icono: "text-green-500" },
  { nombre_tecnologia: "Google Gemini", categoria_tecnologia: "AI", componente_icono: SiGooglegemini, clase_color_icono: "text-blue-400" },
  { nombre_tecnologia: "OpenAI API", categoria_tecnologia: "AI", componente_icono: SiOpenai, clase_color_icono: "text-teal-400" },
  { nombre_tecnologia: "Machine Learning", categoria_tecnologia: "AI", componente_icono: Cpu, clase_color_icono: "text-purple-500" },
  { nombre_tecnologia: "TensorFlow", categoria_tecnologia: "AI", componente_icono: SiTensorflow, clase_color_icono: "text-orange-500" },
  { nombre_tecnologia: "Pandas", categoria_tecnologia: "AI", componente_icono: SiPandas, clase_color_icono: "text-indigo-600" },
  { nombre_tecnologia: "Git", categoria_tecnologia: "DevOps", componente_icono: SiGit, clase_color_icono: "text-orange-600" },
  { nombre_tecnologia: "Docker", categoria_tecnologia: "DevOps", componente_icono: SiDocker, clase_color_icono: "text-blue-500" },
  { nombre_tecnologia: "Linux", categoria_tecnologia: "DevOps", componente_icono: SiLinux, clase_color_icono: "text-yellow-200" },
  { nombre_tecnologia: "Figma", categoria_tecnologia: "Tools", componente_icono: SiFigma, clase_color_icono: "text-purple-400" },
  { nombre_tecnologia: "Grafana", categoria_tecnologia: "Tools", componente_icono: SiGrafana, clase_color_icono: "text-orange-400" },
  { nombre_tecnologia: "SAP Scripting", categoria_tecnologia: "Tools", componente_icono: SiSap, clase_color_icono: "text-sky-400" },
  { nombre_tecnologia: "Postman", categoria_tecnologia: "Tools", componente_icono: SiPostman, clase_color_icono: "text-orange-500" },
  { nombre_tecnologia: "VS Code", categoria_tecnologia: "Tools", componente_icono: VscVscode, clase_color_icono: "text-blue-400" },
];
