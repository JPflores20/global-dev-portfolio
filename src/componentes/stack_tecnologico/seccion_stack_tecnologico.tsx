/**
 * @file seccion_stack_tecnologico.tsx
 * @description Sección interactiva del Stack Tecnológico con filtrado por categorías y tarjetas con giro 3D.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { use_idioma } from "@/contextos/contexto_idioma";
import type { ClaveCategoriaTecnologia } from "@/traducciones/indice_traducciones";
import { CATALOGO_TECNOLOGIAS_STACK } from "@/componentes/stack_tecnologico/catalogo_stack_tecnologico";
import { BarraFiltrosCategoria } from "@/componentes/stack_tecnologico/barra_filtros_categoria";
import { ModalTarjetaTecnologia3d } from "@/componentes/stack_tecnologico/modal_tarjeta_tecnologia_3d";

/**
 * Renderiza la galería filtrable de tecnologías y gestiona la apertura de la tarjeta 3D informativa.
 *
 * @returns {JSX.Element} Sección de Stack Tecnológico.
 */
export function SeccionStackTecnologico(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const [categoria_activa, establecer_categoria_activa] =
    useState<ClaveCategoriaTecnologia>("All");
  const [nombre_tecnologia_seleccionada, establecer_nombre_tecnologia_seleccionada] = useState<
    string | null
  >(null);

  const tecnologias_filtradas = CATALOGO_TECNOLOGIAS_STACK.filter(
    (elemento_tecnologia) =>
      categoria_activa === "All" ||
      elemento_tecnologia.categoria_tecnologia === categoria_activa
  );

  const objeto_tecnologia_activa = CATALOGO_TECNOLOGIAS_STACK.find(
    (elemento_tecnologia) =>
      elemento_tecnologia.nombre_tecnologia === nombre_tecnologia_seleccionada
  );

  const descripcion_tecnologia_activa = objeto_tecnologia_activa
    ? textos_traducidos.tech_stack.tech_descriptions[
        objeto_tecnologia_activa.nombre_tecnologia
      ] || "A powerful tool in my development stack."
    : "";

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{textos_traducidos.tech_stack.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {textos_traducidos.tech_stack.description}
          </p>
        </div>

        {/* Barra de filtros por categoría */}
        <BarraFiltrosCategoria
          categoria_activa={categoria_activa}
          al_seleccionar_categoria={establecer_categoria_activa}
          etiquetas_categorias={textos_traducidos.tech_stack.categories}
        />

        {/* Cuadrícula animada de tecnologías */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {tecnologias_filtradas.map((elemento_tecnologia) => {
              const IconoTecnologia = elemento_tecnologia.componente_icono;
              return (
                <motion.div
                  key={elemento_tecnologia.nombre_tecnologia}
                  layoutId={`card-${elemento_tecnologia.nombre_tecnologia}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={() =>
                    establecer_nombre_tecnologia_seleccionada(
                      elemento_tecnologia.nombre_tecnologia
                    )
                  }
                  className="group relative bg-secondary/30 border border-border/50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div
                    className={`p-3 rounded-lg bg-background/50 shadow-sm group-hover:shadow-[0_0_15px_currentColor] transition-all duration-300 ${elemento_tecnologia.clase_color_icono}`}
                  >
                    <IconoTecnologia className="w-8 h-8" />
                  </div>

                  <span className="font-medium text-sm text-center text-foreground/80 group-hover:text-foreground transition-colors">
                    {elemento_tecnologia.nombre_tecnologia}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal con tarjeta 3D giratoria */}
      <ModalTarjetaTecnologia3d
        tecnologia_seleccionada={objeto_tecnologia_activa}
        descripcion_tecnologia={descripcion_tecnologia_activa}
        al_cerrar_tarjeta={() => establecer_nombre_tecnologia_seleccionada(null)}
      />

      {/* Utilidades CSS para perspectiva 3D */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
}
