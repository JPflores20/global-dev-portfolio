/**
 * @file seccion_experiencia.tsx
 * @description Sección de trayectoria profesional presentada como una línea de tiempo vertical alternada y animada.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { use_idioma } from "@/contextos/contexto_idioma";
import { TarjetaPuestoExperiencia } from "@/componentes/experiencia/tarjeta_puesto_experiencia";

/**
 * Renderiza la línea de tiempo de experiencia laboral con tarjetas animadas alternadas a izquierda y derecha.
 *
 * @returns {JSX.Element} Sección de Experiencia Profesional.
 */
export function SeccionExperiencia(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const referencia_seccion = useRef<HTMLElement | null>(null);
  const esta_en_vista = useInView(referencia_seccion, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-secondary/30"
      ref={referencia_seccion}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{textos_traducidos.experience.title}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Línea central de la cronología */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--gradient-purple))] via-[hsl(var(--gradient-blue))] to-[hsl(var(--gradient-cyan))]" />

          <div className="space-y-12">
            {textos_traducidos.experience.positions.map(
              (puesto_experiencia, indice_posicion) => (
                <TarjetaPuestoExperiencia
                  key={indice_posicion}
                  puesto_experiencia={puesto_experiencia}
                  indice_posicion={indice_posicion}
                  alinear_a_izquierda={indice_posicion % 2 === 0}
                  esta_en_vista={esta_en_vista}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
