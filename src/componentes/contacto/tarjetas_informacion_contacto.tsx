/**
 * @file tarjetas_informacion_contacto.tsx
 * @description Columna de tarjetas de contacto directo (WhatsApp con mensaje dinámico, Correo, LinkedIn y GitHub).
 */

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { construir_url_whatsapp } from "@/utilidades/validacion_contacto";
import { IconoWhatsApp } from "@/componentes/proyectos/iconos_tiendas_aplicaciones";

/**
 * Renderiza las tarjetas de canales directos de comunicación con enlaces externos.
 *
 * @param {{ esta_en_vista: boolean }} propiedades_tarjetas - Determina si la animación de entrada debe activarse.
 * @returns {JSX.Element} Columna animada de medios de contacto.
 */
export function TarjetasInformacionContacto({
  esta_en_vista,
}: {
  esta_en_vista: boolean;
}): JSX.Element {
  const { textos_traducidos, idioma_actual } = use_idioma();
  const url_dinamica_whatsapp = construir_url_whatsapp(idioma_actual);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={esta_en_vista ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col justify-center space-y-6"
    >
      {/* Tarjeta de WhatsApp */}
      <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
        <div className="p-4 rounded-xl gradient-bg text-white">
          <IconoWhatsApp className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {textos_traducidos.contact.info.phone}
          </p>
          <a
            href={url_dinamica_whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            +52 492-195-4970
          </a>
        </div>
      </div>

      {/* Tarjeta de Correo Electrónico */}
      <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
        <div className="p-4 rounded-xl gradient-bg text-white">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {textos_traducidos.contact.info.email}
          </p>
          <a
            href="mailto:ingsoftjoseflores@gmail.com"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            ingsoftjoseflores@gmail.com
          </a>
        </div>
      </div>

      {/* Tarjeta de LinkedIn */}
      <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
        <div className="p-4 rounded-xl gradient-bg text-white">
          <Linkedin className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {textos_traducidos.contact.info.linkedin}
          </p>
          <a
            href="https://www.linkedin.com/in/jlfc2302/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            linkedin.com/in/jlfc2302
          </a>
        </div>
      </div>

      {/* Tarjeta de GitHub */}
      <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
        <div className="p-4 rounded-xl gradient-bg text-white">
          <Github className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {textos_traducidos.contact.info.github}
          </p>
          <a
            href="https://github.com/JPflores20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            github.com/JPflores20
          </a>
        </div>
      </div>
    </motion.div>
  );
}
