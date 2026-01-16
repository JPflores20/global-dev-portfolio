import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
// NUEVO: Importamos los íconos de tecnologías
import { SiReact, SiPython, SiFlutter } from "react-icons/si"; 

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  const { t } = useLanguage();
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- MODAL DE FOTO PANTALLA COMPLETA (Sin cambios) --- */}
      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setIsPhotoOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all"
            >
              <X className="h-8 w-8" />
            </button>

            <motion.img
              src="/perfil.jpg"
              alt="José Luis Flores Carrillo Full"
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Animado (Sin cambios) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--gradient-purple))] opacity-20 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[hsl(var(--gradient-blue))] opacity-20 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[hsl(var(--gradient-cyan))] opacity-15 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* --- INICIO SECCIÓN ÁTOMO CON ÍCONOS --- */}
          <div className="relative inline-flex justify-center items-center w-72 h-72 mb-8">
            
            {/* Orbital 1 (Lento, Cian) -> REACT */}
            <div className="absolute w-full h-full rounded-full animate-orbit-slow border border-cyan-500/30">
               {/* Contenedor de posición */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  {/* Ícono con contra-rotación */}
                  <div className="animate-counter-slow bg-background/80 rounded-full p-1.5 shadow-[0_0_15px_cyan]">
                    <SiReact className="w-6 h-6 text-[#61DAFB]" /> {/* Color oficial de React */}
                  </div>
               </div>
            </div>

            {/* Orbital 2 (Medio, Inverso, Violeta, Inclinado) -> PYTHON */}
            <div className="absolute w-[85%] h-[85%] rounded-full animate-orbit-medium border border-purple-500/30 rotate-45">
               <div className="absolute top-0 left-1/2 -translate-x-1/2">
                 {/* Contra-rotación media (nota: counter-medium usa spin-orbit normal porque el padre es inverso) */}
                  <div className="animate-counter-medium bg-background/80 rounded-full p-1.5 shadow-[0_0_15px_purple]">
                    {/* Usamos un gradiente o color sólido para Python */}
                    <SiPython className="w-5 h-5 text-[#FFD43B]" /> 
                  </div>
               </div>
            </div>

            {/* Orbital 3 (Rápido, Azul, Inclinado opuesto) -> FLUTTER */}
            <div className="absolute w-[115%] h-[115%] rounded-full animate-orbit-fast border border-blue-500/30 -rotate-45">
              <div className="absolute top-[10%] left-[10%]">
                 <div className="animate-counter-fast bg-background/80 rounded-full p-1.5 shadow-[0_0_15px_blue]">
                    <SiFlutter className="w-5 h-5 text-[#02569B]" /> {/* Color oficial de Flutter */}
                 </div>
              </div>
            </div>

            {/* FOTO DE PERFIL CENTRAL (Sin cambios) */}
            <motion.div 
              className="relative z-10 cursor-zoom-in group"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              onClick={() => setIsPhotoOpen(true)}
            >
              {/* Efecto de brillo detrás de la foto */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <Avatar className="h-40 w-40 border-4 border-background shadow-xl relative transition-transform duration-300 group-hover:scale-105">
                <AvatarImage 
                  src="/perfil.jpg" 
                  alt="José Luis Flores Carrillo" 
                  className="object-cover" 
                />
                <AvatarFallback className="text-2xl font-bold">JL</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
          {/* --- FIN SECCIÓN ÁTOMO --- */}

          {/* Textos y Botones (Sin cambios) */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t.hero.greeting}
          </motion.p>
          
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">{t.hero.name}</span>
          </motion.h1>
          
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.hero.role}
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {t.hero.tagline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="gradient-bg text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              onClick={scrollToContact}
            >
              {t.hero.cta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}