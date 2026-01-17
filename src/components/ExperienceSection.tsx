import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line (Línea central) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--gradient-purple))] via-[hsl(var(--gradient-blue))] to-[hsl(var(--gradient-cyan))]" />

          <div className="space-y-12">
            {t.experience.positions.map((position, index) => {
              // Determinamos si es par (izquierda en desktop) o impar (derecha en desktop)
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot (Punto central animado) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-background z-10" 
                  />

                  {/* Content Card Wrapper */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      // --- AQUÍ ESTÁ EL CAMBIO PRINCIPAL (Clases hover) ---
                      className="glass-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-primary/50"
                      // ----------------------------------------------------
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.8, 
                        type: "spring", 
                        bounce: 0.4,
                        delay: 0.2 + index * 0.2 
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl gradient-bg text-white shrink-0">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{position.role}</h3>
                          <p className="text-primary font-semibold">{position.company}</p>
                          <p className="text-sm text-muted-foreground mb-3">{position.period}</p>
                          <p className="text-muted-foreground">{position.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Espacio vacío para alternar el layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}