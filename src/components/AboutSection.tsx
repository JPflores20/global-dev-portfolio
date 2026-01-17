import { motion, useInView, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, GraduationCap } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 1. Variantes para el CONTENEDOR PRINCIPAL
  // Controla el orden de aparición de los hijos (staggerChildren)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Retraso entre cada elemento que aparece
        delayChildren: 0.2,    // Retraso inicial antes de empezar
      },
    },
  };

  // 2. Variantes para los ÍTEMS (Bloques de texto, tarjetas, etc.)
  // Efecto de deslizamiento suave hacia arriba (Slide Up)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20 
      } 
    },
  };

  // 3. Variantes específicas para las BADGES (Certificaciones)
  // Efecto de "Pop" (Escala)
  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100 } 
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor animado principal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* TÍTULO */}
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">{t.about.title}</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="glass-card p-8 md:p-12">
            
            {/* DESCRIPCIÓN */}
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t.about.description}
            </motion.p>

            <div className="flex flex-col items-center">
              <div className="space-y-8 w-full max-w-lg">
                
                {/* --- SECCIÓN EDUCACIÓN --- */}
                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {t.about.educationTitle}
                  </h3>
                  <div className="space-y-4">
                    {t.about.education.map((edu: any, index: number) => (
                      // Cada tarjeta de educación se anima individualmente
                      <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="bg-background/50 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-primary/80">{edu.school}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-muted-foreground">{edu.period}</p>
                          {edu.license && (
                            <Badge variant="outline" className="text-[10px] h-5">
                              {edu.license}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* --- SECCIÓN CERTIFICACIONES --- */}
                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {t.about.certificationsTitle}
                  </h3>
                  {/* Contenedor interno para animar las badges en secuencia rápida */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                  >
                    {t.about.certifications.map((cert: string, index: number) => (
                      <motion.div key={index} variants={badgeVariants}>
                        <Badge variant="secondary" className="text-sm py-1 px-3">
                            {cert}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* --- SECCIÓN IDIOMAS --- */}
                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    {t.about.languagesTitle}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {t.about.languages.map((lang: string, index: number) => (
                      <motion.div key={index} variants={itemVariants} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        <span>{lang}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}