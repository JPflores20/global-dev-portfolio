import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X, Download} from "lucide-react";
import { 
  SiReact, 
  SiPython, 
  SiFlutter, 
  SiJavascript, 
  SiHtml5 
} from "react-icons/si"; 
import { FaJava } from "react-icons/fa";

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

  /**
   * Componente de Órbita (Full Animado)
   */
  const EllipticalOrbit = ({ angle, icons, orbitDuration = "10s", rotateClass, reverseRotateClass }: any) => {
    // Definimos el camino de la elipse
    const pathData = "M 10 50 A 140 40 0 1 1 290 50 A 140 40 0 1 1 10 50";

    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] pointer-events-none">
        {/* Contenedor que gira todo el plano (si se usa rotateClass) */}
        <div className="w-full h-full" style={{ transform: `rotate(${angle}deg)` }}>
          <div className={`w-full h-full ${rotateClass}`}>
            
            {/* Dibujo de la elipse (visible) */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <path d={pathData} fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20" />
            </svg>

            {/* Íconos viajando por el path */}
            {icons.map((item: any, i: number) => (
              <div
                key={i}
                className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-background/90 rounded-full border border-white/10 shadow-sm z-20"
                style={{
                  offsetPath: `path('${pathData}')`, // Define el camino
                  offsetRotate: "0deg", // IMPORTANTE: Mantiene el ícono vertical mientras viaja
                  animation: `orbit ${orbitDuration} linear infinite`, // Usa la animación global definida en index.css
                  animationDelay: item.delay || "0s",
                }}
              >
                {/* Contra-rotación para compensar el giro del plano padre */}
                <div className={`w-full h-full flex items-center justify-center ${reverseRotateClass}`}>
                    {/* Contra-rotación estática para compensar el ángulo inicial */}
                    <div style={{ transform: `rotate(-${angle}deg)` }}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Modal Foto */}
      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <button onClick={() => setIsPhotoOpen(false)} className="absolute top-6 right-6 text-white/80 hover:text-white p-2">
              <X className="h-8 w-8" />
            </button>
            <motion.img
              src="/perfil.jpg"
              alt="Profile Full"
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* --- SISTEMA DE ÁTOMOS --- */}
          {/* Usamos Flexbox para centrar todo el sistema sin posiciones absolutas conflictivas */}
          <div className="relative flex justify-center items-center w-80 h-80 mb-8 mt-12 md:mt-0 mx-auto">
            
            {/* 1. React & Java */}
            <EllipticalOrbit 
              angle={0} 
              orbitDuration="12s"
              rotateClass="animate-spin-slower" 
              reverseRotateClass="animate-spin-reverse-slower"
              icons={[
                { icon: SiReact, color: "text-cyan-400", delay: "0s" },
                { icon: FaJava, color: "text-red-500", delay: "-6s" }
              ]} 
            />

            {/* 2. Python & HTML */}
            <EllipticalOrbit 
              angle={60} 
              orbitDuration="15s"
              rotateClass="animate-spin-reverse-slow" 
              reverseRotateClass="animate-spin-slow" 
              icons={[
                { icon: SiPython, color: "text-yellow-400", delay: "-2s" },
                { icon: SiHtml5, color: "text-orange-500", delay: "-9.5s" }
              ]} 
            />

            {/* 3. Flutter & JS */}
            <EllipticalOrbit 
              angle={-60} 
              orbitDuration="18s"
              rotateClass="animate-spin-slower" 
              reverseRotateClass="animate-spin-reverse-slower"
              icons={[
                { icon: SiFlutter, color: "text-blue-400", delay: "-5s" },
                { icon: SiJavascript, color: "text-yellow-300", delay: "-14s" }
              ]} 
            />

            {/* FOTO CENTRAL (Centrada por Flexbox) */}
            <motion.div 
              className="relative z-30 cursor-zoom-in group"
              onClick={() => setIsPhotoOpen(true)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-2xl relative">
                <AvatarImage src="/perfil.jpg" className="object-cover" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
            </motion.div>

          </div>
          {/* ------------------------- */}

          <motion.p className="text-xl text-muted-foreground mb-4">{t.hero.greeting}</motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t.hero.name}</span>
          </motion.h1>
          <motion.h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.hero.role}</motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t.hero.tagline}</motion.p>
          
          <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg" onClick={scrollToContact}>
            {t.hero.cta}
          </Button>

        </motion.div>
        
        <motion.div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="text-muted-foreground" />
        </motion.div>

      </div>
    </section>
  );
}