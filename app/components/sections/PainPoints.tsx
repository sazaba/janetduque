"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

const PremiumIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative flex items-center justify-center w-16 h-16 mb-6 z-10">
    <motion.div 
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full border border-amber-200 bg-amber-50/50"
    />
    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)]"></div>
    <Icon className="relative z-20 w-6 h-6 text-[#2b3d38]" strokeWidth={2.5} />
  </div>
);

const painPoints = [
  { id: 'first', icon: Activity, title: "Ansiedad Constante", desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y opresión en el pecho." },
  { id: 'second', icon: Cloud, title: "Depresión Silenciosa", desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y tristeza profunda." },
  { id: 'third', icon: Flame, title: "Burnout Total", desc: "El límite se rompió. Sientes que las demandas te superan y el agotamiento mental no desaparece." },
  { id: 'fourth', icon: Waves, title: "Desregulación", desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que te asusta." }
];

const rotations = [0, -5, 4, -3];

export default function PainPointsSafariFix() {
  const [isStacked, setIsStacked] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Físicas de 120fps (ágiles y ligeras)
  const springConfig = { type: "spring" as const, stiffness: 90, damping: 20, mass: 0.6 };

  // --- EL FIX MAESTRO PARA SAFARI ---
  useEffect(() => {
    if (!isStacked && carouselRef.current) {
      const container = carouselRef.current;
      
      // Reset inmediato (Frame 0)
      container.scrollLeft = 0;

      // Reset durante la animación (Frame 1)
      const scrollReset = () => {
        if (container) container.scrollLeft = 0;
      };
      
      const frameId = requestAnimationFrame(scrollReset);
      
      // Reset final cuando las cartas ya se acomodaron (Frame Final)
      const timeoutId = setTimeout(scrollReset, 100);

      return () => {
        cancelAnimationFrame(frameId);
        clearTimeout(timeoutId);
      };
    }
  }, [isStacked]);

  return (
    <div className="relative w-full bg-[#4a675e] overflow-hidden py-16">
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-12 max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white tracking-tight leading-[1.05] mb-4"
            layout
          >
            Señales para <span className="text-amber-400 italic">pausar.</span>
          </motion.h2>
          <motion.p layout className="text-lg text-stone-200 font-sans font-light">
            {isStacked ? "Toca el mazo para descubrir las señales." : "Explora las señales. Toca una para apilar."}
          </motion.p>
        </div>

        <div className="min-h-[460px] flex flex-col justify-center relative w-full px-4">
          
          <motion.div 
            layout
            ref={carouselRef}
            // Cambiamos justify-center por justify-start en móvil para que el scroll 0 sea el inicio real
            className={`flex w-full items-center min-h-[440px] hide-scrollbar overscroll-x-contain
              ${isStacked 
                ? 'justify-center overflow-visible' 
                : 'overflow-x-auto snap-x snap-mandatory justify-start md:justify-center px-4 md:px-12 py-8 gap-5'
              }
            `}
            style={{ WebkitTapHighlightColor: 'transparent', WebkitOverflowScrolling: 'touch' }}
          >
            {painPoints.map((item, index) => {
              // Primera carta (Ansiedad) siempre al frente (z-index y escala)
              const rot = isStacked ? rotations[index] : 0;
              const yOff = isStacked ? index * 14 : 0; 
              const scl = isStacked ? 1 - (index * 0.05) : 1;
              const zInd = isStacked ? painPoints.length - index : 10;

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
                    shrink-0 bg-white rounded-[2.5rem] p-8 cursor-pointer transform-gpu will-change-transform flex flex-col justify-center items-center text-center
                    ${isStacked
                      ? 'absolute w-[300px] h-[380px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]'
                      : 'relative w-[82vw] md:w-[300px] lg:w-[320px] min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] snap-center snap-always'
                    }
                  `}
                >
                  <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.02] -rotate-6 pointer-events-none" />
                  
                  <div className="relative z-10 w-full">
                    <PremiumIcon Icon={item.icon} />
                    <h3 className="text-2xl md:text-3xl font-serif text-[#4a675e] mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-base md:text-lg font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}