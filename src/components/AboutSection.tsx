import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, GraduationCap } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t.about.description}
            </p>

            <div className="flex flex-col items-center">
              
              <div className="space-y-8 w-full max-w-lg">
                
                {/* Nueva Sección: Formación Académica */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {t.about.educationTitle}
                  </h3>
                  <div className="space-y-4">
                    {t.about.education.map((edu, index) => (
                      <div key={index} className="bg-background/50 p-4 rounded-lg border border-border/50">
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificaciones */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {t.about.certificationsTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {t.about.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Idiomas */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    {t.about.languagesTitle}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {t.about.languages.map((lang, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}