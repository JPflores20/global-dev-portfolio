/**
 * @file seccion_sobre_mi.tsx
 * @description Sección Sobre Mí que presenta el resumen profesional, formación académica, certificaciones e idiomas.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, GraduationCap } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { Badge } from "@/componentes/ui/insignia";
import {
  variantes_contenedor_sobre_mi,
  variantes_bloque_sobre_mi,
  variantes_insignia_certificacion,
} from "@/componentes/sobre_mi/variantes_animacion_sobre_mi";

/**
 * Renderiza la sección informativa Sobre Mí con animaciones activadas al entrar en el viewport.
 *
 * @returns {JSX.Element} Sección Sobre Mí completa.
 */
export function SeccionSobreMi(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const referencia_seccion = useRef<HTMLElement | null>(null);
  const esta_en_vista = useInView(referencia_seccion, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30" ref={referencia_seccion}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={variantes_contenedor_sobre_mi}
          initial="hidden"
          animate={esta_en_vista ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Título de la sección */}
          <motion.h2
            variants={variantes_bloque_sobre_mi}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">{textos_traducidos.about.title}</span>
          </motion.h2>

          <motion.div variants={variantes_bloque_sobre_mi} className="glass-card p-8 md:p-12">
            {/* Descripción profesional */}
            <motion.p
              variants={variantes_bloque_sobre_mi}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              {textos_traducidos.about.description}
            </motion.p>

            <div className="flex flex-col items-center">
              <div className="space-y-8 w-full max-w-lg">
                {/* Bloque de Educación */}
                <motion.div variants={variantes_bloque_sobre_mi}>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {textos_traducidos.about.education_title}
                  </h3>
                  <div className="space-y-4">
                    {textos_traducidos.about.education.map(
                      (registro_educacion, indice_educacion) => (
                        <motion.div
                          key={indice_educacion}
                          variants={variantes_bloque_sobre_mi}
                          className="bg-background/50 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground">
                            {registro_educacion.degree}
                          </h4>
                          <p className="text-sm text-primary/80">{registro_educacion.school}</p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-muted-foreground">
                              {registro_educacion.period}
                            </p>
                            {registro_educacion.license && (
                              <Badge variant="outline" className="text-[10px] h-5">
                                {registro_educacion.license}
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* Bloque de Certificaciones */}
                <motion.div variants={variantes_bloque_sobre_mi}>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {textos_traducidos.about.certifications_title}
                  </h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {textos_traducidos.about.certifications.map(
                      (nombre_certificacion, indice_certificacion) => (
                        <motion.div
                          key={indice_certificacion}
                          variants={variantes_insignia_certificacion}
                        >
                          <Badge variant="secondary" className="text-sm py-1 px-3">
                            {nombre_certificacion}
                          </Badge>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </motion.div>

                {/* Bloque de Idiomas */}
                <motion.div variants={variantes_bloque_sobre_mi}>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    {textos_traducidos.about.languages_title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {textos_traducidos.about.languages.map((idioma_hablado, indice_idioma) => (
                      <motion.div
                        key={indice_idioma}
                        variants={variantes_bloque_sobre_mi}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        <span>{idioma_hablado}</span>
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
