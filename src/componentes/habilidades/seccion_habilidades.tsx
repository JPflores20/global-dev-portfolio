/**
 * @file seccion_habilidades.tsx
 * @description Sección de barras de progreso de habilidades técnicas organizadas por categoría y píldoras de competencias.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { use_idioma } from "@/contextos/contexto_idioma";
import {
  CATALOGO_HABILIDADES_POR_CATEGORIA,
  ETIQUETAS_COMPETENCIAS_CLAVE,
  type NivelHabilidadTecnica,
} from "@/componentes/habilidades/catalogo_niveles_habilidades";

/**
 * Renderiza la sección de habilidades técnicas con barras animadas de porcentaje y etiquetas interactivas.
 *
 * @returns {JSX.Element} Sección de Habilidades.
 */
export function SeccionHabilidades(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const referencia_seccion = useRef<HTMLElement | null>(null);
  const esta_en_vista = useInView(referencia_seccion, { once: true, margin: "-100px" });

  /**
   * Construye una tarjeta de grupo de habilidades con barras de progreso animadas.
   *
   * @param {string} titulo_categoria - Nombre traducido de la categoría.
   * @param {NivelHabilidadTecnica[]} lista_habilidades - Arreglo de habilidades y sus porcentajes.
   * @param {number} retraso_base_segundos - Tiempo de espera antes de iniciar la animación del grupo.
   * @returns {JSX.Element} Tarjeta animada con barras de dominio.
   */
  const renderizar_grupo_habilidades = (
    titulo_categoria: string,
    lista_habilidades: NivelHabilidadTecnica[],
    retraso_base_segundos: number
  ): JSX.Element => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: retraso_base_segundos }}
      className="glass-card p-6"
    >
      <h3 className="text-xl font-bold mb-6 gradient-text">{titulo_categoria}</h3>
      <div className="space-y-4">
        {lista_habilidades.map((habilidad_actual, indice_habilidad) => (
          <motion.div
            key={habilidad_actual.nombre_habilidad}
            initial={{ opacity: 0, x: -20 }}
            animate={esta_en_vista ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: retraso_base_segundos + indice_habilidad * 0.1,
            }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-foreground">
                {habilidad_actual.nombre_habilidad}
              </span>
              <span className="text-sm text-muted-foreground">
                {habilidad_actual.porcentaje_dominio}%
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-bg rounded-full"
                initial={{ width: 0 }}
                animate={
                  esta_en_vista ? { width: `${habilidad_actual.porcentaje_dominio}%` } : {}
                }
                transition={{
                  duration: 1,
                  delay: retraso_base_segundos + indice_habilidad * 0.1,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 md:py-32" ref={referencia_seccion}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{textos_traducidos.skills.title}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderizar_grupo_habilidades(
            textos_traducidos.skills.categories.languages,
            CATALOGO_HABILIDADES_POR_CATEGORIA.lenguajes_programacion,
            0.2
          )}
          {renderizar_grupo_habilidades(
            textos_traducidos.skills.categories.frameworks,
            CATALOGO_HABILIDADES_POR_CATEGORIA.entornos_trabajo,
            0.3
          )}
          {renderizar_grupo_habilidades(
            textos_traducidos.skills.categories.tools,
            CATALOGO_HABILIDADES_POR_CATEGORIA.herramientas_tecnologias,
            0.4
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {ETIQUETAS_COMPETENCIAS_CLAVE.map((nombre_competencia, indice_competencia) => (
            <motion.span
              key={nombre_competencia}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={esta_en_vista ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.7 + indice_competencia * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground hover:gradient-bg hover:text-white transition-all cursor-default"
            >
              {nombre_competencia}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
