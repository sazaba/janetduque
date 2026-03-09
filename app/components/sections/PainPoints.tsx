"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- ICONO PREMIUM ---
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

// --- DATOS CURADOS ---
const painPoints = [
  { icon: Activity, title: "Ansiedad Constante", desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y opresión en el pecho." },
  { icon: Cloud, title: "Depresión Silenciosa", desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y tristeza profunda." },
  { icon: Flame, title: "Burnout Total", desc: "El límite se rompió. Sientes que las demandas te superan y el agotamiento mental no desaparece." },
  { icon: Waves, title: "Desregulación", desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que te asusta." }
];

// Rotaciones manuales para que el mazo se vea orgánico, pero con la primera carta recta
const rotations = [0, -5, 4, -3];

export default function PainPointsDealingOut() {
  const [isStacked, setIsStacked] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Físicas ágiles (120fps)
  const springConfig = { type: "spring" as const, stiffness: 85, damping: 18, mass: 0.8 };

  const handleToggle = () => {
    if (isStacked) {
      setIsStacked(false);
      // Cuando se abre, forzamos el scroll al inicio (izquierda) para móviles
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 50); // Pequeño retraso para que el DOM se actualice a flex-row
    } else {
      setIsStacked(true);
    }
  };

  return (
    <div className="relative w-full bg-[#4a675e] overflow-hidden py-16">
      
      {/* Ocultar scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12 max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white tracking-tight leading-[1.05] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Señales para <span className="text-amber-400 italic">pausar.</span>
          </motion.h2>
          <motion.p className="text-lg text-stone-200 font-sans font-light leading-relaxed">
            {isStacked ? "Toca el mazo para descubrir las señales." : "Desliza para explorar. Toca cualquier carta para apilar."}
          </motion.p>
        </div>

        {/* CONTENEDOR ANIMADO ÚNICO */}
        <div className="min-h-[460px] flex flex-col justify-center relative w-full">
          
          <motion.div 
            layout
            ref={carouselRef}
            className={`flex w-full items-center min-h-[440px] hide-scrollbar overscroll-x-contain
              ${isStacked 
                ? 'justify-center overflow-visible' 
                : 'overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-p-6 md:justify-center px-6 md:px-12 py-8 gap-5'
              }
            `}
            style={{ WebkitTapHighlightColor: 'transparent', WebkitOverflowScrolling: 'touch' }}
          >
            {painPoints.map((item, index) => {
              // --- NUEVA MATEMÁTICA DEL MAZO ---
              // La carta 0 ahora tiene z-index mayor, escala 1, y no baja (yOff = 0)
              const rot = isStacked ? rotations[index] : 0;
              const yOff = isStacked ? index * 12 : 0; // Se apilan hacia abajo
              const scl = isStacked ? 1 - (index * 0.04) : 1; // Se hacen más pequeñas hacia atrás
              const zInd = isStacked ? painPoints.length - index : 1; // Invertimos el Z-Index

              return (
                <motion.div
                  layout
                  key={index}
                  onClick={handleToggle}
                  initial={false}
                  animate={{
                    rotate: rot,
                    y: yOff,
                    scale: scl,
                    zIndex: zInd
                  }}
                  whileHover={{
                    y: isStacked ? yOff - 20 : -10,
                    scale: isStacked ? scl : 1.02,
                    zIndex: 50
                  }}
                  transition={springConfig}
                  className={`
                    shrink-0 bg-white rounded-[2rem] p-6 md:p-8 cursor-pointer transform-gpu will-change-transform flex flex-col justify-center items-center text-center
                    ${isStacked
                      ? 'absolute w-[300px] h-[380px] shadow-[0_15px_50px_rgba(0,0,0,0.3)]'
                      : 'relative w-[80vw] md:w-[280px] lg:w-[310px] min-h-[400px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] snap-center snap-always'
                    }
                  `}
                >
                  <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.02] -rotate-6 pointer-events-none" />
                  
                  <div className="relative z-10 w-full">
                    <PremiumIcon Icon={item.icon} />
                    <h3 className="text-2xl font-serif text-[#4a675e] mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-base font-sans font-light leading-relaxed">
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