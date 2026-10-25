/**
 * @file seccion_hero.tsx
 * @description Sección principal de bienvenida (Hero) con sistema orbital tecnológico, presentación animada y llamada a la acción.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { Button } from "@/componentes/ui/boton";
import { desplazar_hacia_seccion } from "@/utilidades/desplazamiento_suave";
import { TextoAnimadoPalabras } from "@/componentes/hero/texto_animado_palabras";
import { SistemaOrbitalHero } from "@/componentes/hero/sistema_orbital_hero";
import { ModalFotoPerfil } from "@/componentes/hero/modal_foto_perfil";

/**
 * Renderiza la portada principal del portafolio con animaciones de entrada y acceso directo a la sección de contacto.
 *
 * @returns {JSX.Element} Sección Hero completa.
 */
export function SeccionHero(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const [modal_foto_abierto, establecer_modal_foto_abierto] = useState<boolean>(false);

  /**
   * Desplaza suavemente la página hacia el formulario de contacto.
   *
   * @returns {void} No retorna ningún valor.
   */
  const ir_a_seccion_contacto = (): void => {
    desplazar_hacia_seccion("#contact");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Visor modal de foto de perfil */}
      <ModalFotoPerfil
        esta_abierto={modal_foto_abierto}
        al_cerrar_modal={() => establecer_modal_foto_abierto(false)}
      />

      {/* Fondo decorativo con destello difuminado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Átomo central con órbitas e imagen de perfil */}
        <SistemaOrbitalHero
          al_abrir_foto_perfil={() => establecer_modal_foto_abierto(true)}
        />

        {/* Textos de presentación animados palabra por palabra */}
        <div className="flex flex-col items-center">
          <TextoAnimadoPalabras
            texto_completo={textos_traducidos.hero.greeting}
            clase_contenedor="text-xl text-muted-foreground mb-4"
            retraso_inicial_segundos={0}
          />

          <div className="text-5xl md:text-7xl font-bold mb-6">
            <TextoAnimadoPalabras
              texto_completo={textos_traducidos.hero.name}
              aplicar_gradiente={true}
              retraso_inicial_segundos={0.5}
            />
          </div>

          <div className="text-2xl md:text-3xl font-semibold mb-4">
            <TextoAnimadoPalabras
              texto_completo={textos_traducidos.hero.role}
              retraso_inicial_segundos={1.2}
            />
          </div>

          <div className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <TextoAnimadoPalabras
              texto_completo={textos_traducidos.hero.tagline}
              retraso_inicial_segundos={1.8}
            />
          </div>

          {/* Botón de llamada a la acción (CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg"
              onClick={ir_a_seccion_contacto}
            >
              {textos_traducidos.hero.cta}
            </Button>
          </motion.div>
        </div>

        {/* Indicador visual de desplazamiento inferior */}
        <motion.div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 3 }}
        >
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
