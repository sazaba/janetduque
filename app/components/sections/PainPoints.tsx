"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- ICONO PREMIUM ---
const PremiumIcon = ({ Icon, isCollapsed }: { Icon: React.ElementType, isCollapsed: boolean }) => (
  <div className={`relative flex items-center justify-center transition-all duration-500 ease-out z-10 ${isCollapsed ? 'w-10 h-10' : 'w-16 h-16 mb-4'}`}>
    {!isCollapsed && (
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-amber-200 bg-amber-50/50"
      />
    )}
    <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)] transition-all duration-500 ${isCollapsed ? 'scale-100' : 'scale-75'}`}></div>
    <Icon className={`relative z-20 text-[#2b3d38] transition-all duration-500 ${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={2.5} />
  </div>
);

const painPoints = [
  { icon: Activity, title: "Ansiedad Constante", desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y una opresión en el pecho." },
  { icon: Cloud, title: "Depresión Silenciosa", desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y una tristeza profunda." },
  { icon: Flame, title: "Burnout Total", desc: "El límite se rompió. Sientes que las demandas te superan y el agotamiento mental no desaparece." },
  { icon: Waves, title: "Desregulación", desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que asusta y cuesta volver a la calma." }
];

export default function PainPointsHybrid() {
  const [isStacked, setIsStacked] = useState(true);
  const [activeCard, setActiveCard] = useState(0);

  // Físicas de resorte: fluidas y sin rebotes bruscos
  const springConfig = { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.9 };

  return (
    <div className="relative w-full bg-[#4a675e] overflow-hidden py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white tracking-tight leading-[1.05] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Señales para <span className="text-amber-400 italic">pausar.</span>
          </motion.h2>
          <motion.p className="text-lg text-stone-200 font-sans font-light leading-relaxed">
            {isStacked ? "Toca el mazo para descubrir las señales." : "Selecciona una carta para expandirla, o la carta activa para apilar de nuevo."}
          </motion.p>
        </div>

        {/* CONTENEDOR HÍBRIDO: MAZO Y ACORDEÓN */}
        <div className={`relative w-full min-h-[500px] flex transition-all duration-500 ${isStacked ? 'items-center justify-center' : 'flex-col md:flex-row gap-4'}`}>
          {painPoints.map((item, index) => {
            const isActiveAccordion = !isStacked && activeCard === index;
            const isInactiveAccordion = !isStacked && activeCard !== index;

            // Cálculos para el efecto visual del Mazo
            const reverseIndex = painPoints.length - 1 - index;
            const rotate = isStacked ? (index - 1.5) * 5 : 0;
            const yOffset = isStacked ? reverseIndex * 12 : 0;
            const scale = isStacked ? 1 - (reverseIndex * 0.04) : 1;

            return (
              <motion.div
                layout // LA MAGIA OCURRE AQUÍ: Anima de absolute a flex-item
                key={index}
                initial={false}
                animate={{ rotate, y: yOffset, scale }}
                transition={springConfig}
                onClick={() => {
                  if (isStacked) {
                    setIsStacked(false);
                    setActiveCard(index); // Abre el acordeón enfocando la que tocaste
                  } else {
                    if (activeCard === index) setIsStacked(true); // Vuelve al mazo
                    else setActiveCard(index); // Cambia de carta en el acordeón
                  }
                }}
                style={{ zIndex: isStacked ? index : (isActiveAccordion ? 10 : 1) }}
                className={`
                  group overflow-hidden rounded-[2rem] cursor-pointer origin-center
                  ${isStacked ? 'absolute w-[80vw] max-w-[320px] h-[400px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.3)]' : ''}
                  ${isActiveAccordion ? 'relative flex-[4] bg-white h-[450px] shadow-[0_12px_30px_rgba(0,0,0,0.15)]' : ''}
                  ${isInactiveAccordion ? 'relative flex-[1] bg-white/10 hover:bg-white/20 h-[80px] md:h-[450px] backdrop-blur-sm' : ''}
                `}
              >
                {/* Acento de color superior */}
                <AnimatePresence>
                  {(isStacked || isActiveAccordion) && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4a675e] to-amber-400" 
                    />
                  )}
                </AnimatePresence>

                {/* Icono fantasma de fondo */}
                <item.icon 
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700
                    ${isInactiveAccordion ? 'w-24 h-24 text-white/5 scale-50' : 'w-64 h-64 text-[#4a675e]/[0.03] scale-100 rotate-6'}
                  `} 
                />

                {/* CONTENIDO INTERNO DE LA CARTA */}
                <div className={`relative z-10 flex w-full h-full p-6 md:p-8 transition-all duration-500 ${isInactiveAccordion ? 'flex-row md:flex-col items-center justify-start md:justify-center' : 'flex-col items-center justify-center text-center'}`}>
                  
                  <PremiumIcon Icon={item.icon} isCollapsed={isInactiveAccordion} />
                  
                  {isInactiveAccordion ? (
                    // VISTA COLAPSADA (Acordeón inactivo)
                    <div className="md:absolute md:bottom-8 ml-4 md:ml-0 flex items-center justify-center">
                      <h3 className="text-lg md:text-xl font-serif text-white/80 whitespace-nowrap md:-rotate-90 origin-center tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                  ) : (
                    // VISTA EXPANDIDA (Mazo o Acordeón activo)
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-[#4a675e] mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 text-base font-sans font-light leading-relaxed max-w-sm mx-auto">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}