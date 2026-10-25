/**
 * @file seccion_contacto.tsx
 * @description Sección principal de contacto que integra el formulario de mensajes y las tarjetas de canales directos.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { use_idioma } from "@/contextos/contexto_idioma";
import { FormularioContacto } from "@/componentes/contacto/formulario_contacto";
import { TarjetasInformacionContacto } from "@/componentes/contacto/tarjetas_informacion_contacto";

/**
 * Renderiza la sección de contacto dividida en dos columnas: formulario interactivo y enlaces directos.
 *
 * @returns {JSX.Element} Sección de Contacto.
 */
export function SeccionContacto(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const referencia_seccion = useRef<HTMLElement | null>(null);
  const esta_en_vista = useInView(referencia_seccion, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32" ref={referencia_seccion}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{textos_traducidos.contact.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {textos_traducidos.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FormularioContacto esta_en_vista={esta_en_vista} />
          <TarjetasInformacionContacto esta_en_vista={esta_en_vista} />
        </div>
      </div>
    </section>
  );
}
