"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cloud, Flame, Waves, ArrowRight } from 'lucide-react';

// --- ICONO PREMIUM REDISEÑADO CON EFECTO VIDRIO ---
const PremiumIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-8 z-10 group-hover:scale-110 transition-transform duration-500">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-[-4px] rounded-full border border-amber-300/50 bg-amber-50"
    />
    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 shadow-[0_8px_16px_rgba(212,175,55,0.4)] border border-amber-100"></div>
    {/* EFECTO DE VIDRIO ESMERILADO (Glassmorphism) */}
    <div className="absolute inset-1.5 rounded-full bg-white/20 backdrop-blur-sm"></div>
    <Icon className="relative z-20 w-7 h-7 text-[#2b3d38] drop-shadow-sm" strokeWidth={2} />
  </div>
);

const painPoints = [
  { id: 'first', icon: Activity, title: "Ansiedad Constante", desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y opresión recurrente en el pecho." },
  { id: 'second', icon: Cloud, title: "Depresión Silenciosa", desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y una tristeza profunda." },
  { id: 'third', icon: Flame, title: "Burnout Total", desc: "El límite se rompió. Sientes que las demandas diarias te superan y el agotamiento mental no cede." },
  { id: 'fourth', icon: Waves, title: "Desregulación", desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que te desconoce y asusta." }
];

// Rotaciones más dramáticas para el mazo
const rotations = [0, -6, 5, -4];

export default function PainPointsSafariFix() {
  const [isStacked, setIsStacked] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const springConfig = { type: "spring" as const, stiffness: 80, damping: 20, mass: 0.8 };

  // --- FIX DE SCROLL MAESTRO PARA SAFARI/RESPONSIVE ---
  useEffect(() => {
    if (!isStacked && carouselRef.current) {
      const container = carouselRef.current;
      
      // Forzar scroll al inicio de forma abrupta antes de que el usuario interactúe
      container.scrollTo({ left: 0, behavior: 'instant' });

      // Doble chequeo por si la animación de Framer mueve el foco
      const timeoutId = setTimeout(() => {
        if (container) container.scrollTo({ left: 0, behavior: 'instant' });
      }, 50); // Justo cuando empieza la expansión

      return () => clearTimeout(timeoutId);
    }
  }, [isStacked]);

  return (
    <section className="relative w-full bg-[#4a675e] overflow-hidden py-24 md:py-32 selection:bg-amber-200 selection:text-[#2b3d38] full-viewport-fix">
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        /* Fix Layout Full Width */
        .full-viewport-fix { width: 100vw !important; max-width: 100vw !important; left: 50% !important; right: 50% !important; margin-left: -50vw !important; margin-right: -50vw !important; }
      `}} />

      {/* Brillo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Cabecera Centrada con Ancho Controlado */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-6">
          <motion.div layout className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-amber-500"></span>
              <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase">
                Autoevaluación
              </span>
              <span className="w-8 h-[1px] bg-amber-500"></span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6"
            layout
          >
            Señales para <span className="text-amber-400 italic">pausar.</span>
          </motion.h2>
          <motion.p layout className="text-lg text-emerald-50/70 font-light max-w-xl mx-auto">
            {isStacked 
                ? "Toca el mazo para descubrir las alertas que tu cuerpo te está enviando." 
                : "Explora las señales. Toca cualquier tarjeta para volver a apilar."}
          </motion.p>
        </div>

        {/* --- CAROUSEL / MAZO FULL WIDTH --- */}
        <div className="min-h-[500px] flex flex-col justify-center relative w-full overflow-hidden">
          
          <motion.div 
            layout
            ref={carouselRef}
            // Cambiamos justify-start en móvil para que el scroll 0 sea el inicio real
            className={`flex w-full items-center min-h-[480px] hide-scrollbar overscroll-x-contain
              ${isStacked 
                ? 'justify-center overflow-visible' 
                : 'overflow-x-auto snap-x snap-mandatory justify-start xl:justify-center md:px-8 py-8 gap-4 md:gap-6'
              }
            `}
            style={{ WebkitTapHighlightColor: 'transparent', WebkitOverflowScrolling: 'touch' }}
          >
            {painPoints.map((item, index) => {
              
              // Variables para el mazo (Stacked) con mayor profundidad vertical
              const rot = isStacked ? rotations[index] : 0;
              const yOff = isStacked ? index * 16 : 0; // Más separación vertical
              const scl = isStacked ? 1 - (index * 0.06) : 1;
              const zInd = isStacked ? painPoints.length - index : 10;
              
              // Efecto de sombreado volumétrico cuando están atrás (Stacked)
              const isBehind = isStacked && index > 0;

              return (
                <motion.div
                  layout
                  key={item.id}
                  onClick={() => setIsStacked(!isStacked)}
                  initial={false}
                  animate={{
                    rotate: rot,
                    y: yOff,
                    scale: scl,
                    zIndex: zInd
                  }}
                  transition={springConfig}
                  className={`
                    shrink-0 group cursor-pointer transform-gpu will-change-transform flex flex-col items-center text-center
                    ${isStacked
                      ? 'absolute w-[300px] md:w-[320px] h-[420px]'
                      : 'relative w-[85vw] sm:w-[300px] xl:w-[340px] min-h-[440px] snap-center snap-always'
                    }
                  `}
                >
                  {/* FONDO DE LA TARJETA PREMIUM (GRADIENTE Y SOMBRAS MEJORADAS) */}
                  <div className={`
                      absolute inset-0 rounded-[2.5rem] transition-all duration-700
                      ${isStacked 
                          ? 'bg-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-stone-200/50' 
                          : 'bg-gradient-to-b from-white to-stone-50 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white hover:border-amber-200/50 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]'
                      }
                  `}>
                      {/* UPGRADE MAZO CERRADO: Oscurecimiento para efecto de sombra volumétrica */}
                      {isBehind && (
                          <div className="absolute inset-0 bg-[#2b3d38]/10 rounded-[2.5rem] z-10 pointer-events-none" />
                      )}
                  </div>
                  
                  {/* Marca de agua SVG de fondo */}
                  <item.icon className="absolute top-10 right-10 w-40 h-40 text-stone-100 -rotate-12 pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" />
                  
                  {/* CONTENIDO DE LA TARJETA */}
                  <div className="relative z-20 w-full h-full flex flex-col p-10">
                    <PremiumIcon Icon={item.icon} />
                    
                    <div className="mt-auto pb-4">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2b3d38] mb-4 tracking-tight group-hover:text-[#4a675e] transition-colors leading-tight">
                        {item.title}
                        </h3>
                        {/* Texto con contraste mejorado */}
                        <p className="text-stone-500 text-base md:text-[17px] font-light leading-relaxed">
                        {item.desc}
                        </p>
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>

        {/* --- CTA FINAL DISCRETO --- */}
        <AnimatePresence>
            {!isStacked && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 text-center"
                >
                    <a 
                        href="https://wa.link/2x3i8s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#4a675e] font-bold text-sm transition-all hover:bg-stone-50 hover:shadow-lg hover:-translate-y-0.5 w-fit group shadow-md"
                    >
                        Solicitar Consulta Virtual
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
}