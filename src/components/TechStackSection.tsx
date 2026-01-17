import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Wand2, 
  Cpu
} from "lucide-react";

// --- ICONOS ---
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, 
  SiPython, SiDjango, SiNodedotjs, SiExpress,
  SiFlutter, SiDart, SiKotlin,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiSupabase,
  SiGit, SiDocker, SiGithubactions, SiLinux,
  SiFigma, SiPostman,
  SiTensorflow, SiPytorch, SiOpenai, SiPandas, SiScikitlearn 
} from "react-icons/si";

// Tipos para las claves de categorías (según translations.ts)
type CategoryKey = "All" | "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "AI" | "Tools";

// Estructura de categorías estática (solo ID e ícono)
const CATEGORIES_CONFIG: { id: CategoryKey; icon: any }[] = [
  { id: "All", icon: Globe },
  { id: "Frontend", icon: Layout },
  { id: "Backend", icon: Server },
  { id: "Mobile", icon: Smartphone },
  { id: "Database", icon: Database },
  { id: "DevOps", icon: Terminal },
  { id: "AI", icon: Wand2 },
  { id: "Tools", icon: Code2 },
];

export function TechStackSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("All");

  // Lista de Habilidades (Skills)
  // Nota: Las categorías aquí (category: "Frontend") deben coincidir con los IDs de CategoryKey
  const skills = [
    // --- FRONTEND ---
    { name: "React", category: "Frontend", icon: SiReact, color: "text-cyan-400" },
    { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "text-yellow-400" },
    { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "text-orange-500" },
    
    // --- BACKEND ---
    { name: "Python", category: "Backend", icon: SiPython, color: "text-yellow-300" },
    { name: "Django", category: "Backend", icon: SiDjango, color: "text-green-600" },
    { name: "Java", category: "Backend", icon: FaJava, color: "text-red-500" },
    { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "text-green-500" },

    // --- MOBILE ---
    { name: "Flutter", category: "Mobile", icon: SiFlutter, color: "text-blue-400" },
    { name: "Dart", category: "Mobile", icon: SiDart, color: "text-blue-600" },

    // --- DATABASE ---
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MySQL", category: "Database", icon: SiMysql, color: "text-blue-500" },
    { name: "Firebase", category: "Database", icon: SiFirebase, color: "text-yellow-500" },
    { name: "MongoDB", category: "Database", icon: SiMongodb, color: "text-green-500" },

    // --- AI & DATA ---
    { name: "Machine Learning", category: "AI", icon: Cpu, color: "text-purple-500" },
    { name: "TensorFlow", category: "AI", icon: SiTensorflow, color: "text-orange-500" },
    { name: "Pandas", category: "AI", icon: SiPandas, color: "text-indigo-600" },
    
    // --- DEVOPS ---
    { name: "Git", category: "DevOps", icon: SiGit, color: "text-orange-600" },
    { name: "Docker", category: "DevOps", icon: SiDocker, color: "text-blue-500" },
    { name: "Linux", category: "DevOps", icon: SiLinux, color: "text-yellow-200" },

    // --- TOOLS ---
    { name: "Figma", category: "Tools", icon: SiFigma, color: "text-purple-400" },
    { name: "Postman", category: "Tools", icon: SiPostman, color: "text-orange-500" },
    { name: "VS Code", category: "Tools", icon: VscVscode, color: "text-blue-400" },
  ];

  // Filtrado
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="tech-stack" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con Textos Traducidos */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t.techStack.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.techStack.description}
          </p>
        </div>

        {/* --- FILTER BAR --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES_CONFIG.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${activeCategory === category.id 
                  ? "text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                {/* Aquí obtenemos la etiqueta traducida usando el ID */}
                {t.techStack.categories[category.id]}
              </span>
            </button>
          ))}
        </div>

        {/* --- GRID DE SKILLS --- */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-secondary/30 border border-border/50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors cursor-default"
              >
                <div className={`p-3 rounded-lg bg-background/50 shadow-sm group-hover:shadow-[0_0_15px_currentColor] transition-all duration-300 ${skill.color}`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                
                <span className="font-medium text-sm text-center text-foreground/80 group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}