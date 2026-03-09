"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- ICONO PREMIUM ---
const PremiumIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative flex items-center justify-center w-16 h-16 mb-6 z-10 transition-transform duration-500 ease-out">
    <motion.div 
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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

// --- COMPONENTE INTERNO DE LA CARTA ---
const CardContent = ({ item }: { item: typeof painPoints[0] }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full">
    <PremiumIcon Icon={item.icon} />
    <h3 className="text-2xl font-serif text-[#4a675e] mb-3 tracking-tight">
      {item.title}
    </h3>
    <p className="text-stone-600 text-base font-sans font-light leading-relaxed">
      {item.desc}
    </p>
  </div>
);

export default function PainPointsDeckSpread() {
  const [isStacked, setIsStacked] = useState(true);

  // Físicas de resorte fluidas y sin errores de tipado
  const springConfig = { type: "spring" as const, stiffness: 180, damping: 22, mass: 0.9 };

  return (
    <div className="relative w-full bg-[#4a675e] overflow-hidden py-16">
      
      {/* Estilos para ocultar scrollbar pero mantener funcionalidad */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* AQUÍ ESTÁ LA CLAVE: max-w-[1400px] para darle un lienzo súper ancho al 
        carrusel, permitiendo que las 4 cartas quepan en desktop sin cortarse. 
      */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
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
            {isStacked ? "Toca el mazo para descubrir las señales." : "Toca cualquier carta para volver a apilarlas."}
          </motion.p>
        </div>

        {/* CONTENEDOR ANIMADO */}
        <div className="min-h-[420px] flex flex-col justify-center relative w-full">
          <AnimatePresence mode="popLayout">
            
            {isStacked ? (
              // ==========================================
              // ESTADO 1: EL MAZO APILADO
              // ==========================================
              <motion.div 
                key="deck"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-[400px] w-full flex items-center justify-center cursor-pointer group"
                onClick={() => setIsStacked(false)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {painPoints.map((item, index) => {
                  const reverseIndex = painPoints.length - 1 - index;
                  const rotate = (index - 1.5) * 5; 
                  const yOffset = reverseIndex * 15; 
                  const scale = 1 - (reverseIndex * 0.05); 

                  return (
                    <motion.div
                      key={`card-${index}`}
                      layoutId={`shared-card-${index}`}
                      style={{ zIndex: index }}
                      initial={false}
                      animate={{ rotate, y: yOffset, scale }}
                      transition={springConfig}
                      // Tamaño fijo de la carta apilada
                      className="absolute w-[80vw] max-w-[300px] h-[380px] bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.3)] group-hover:-translate-y-4 transition-transform duration-500 ease-out flex flex-col justify-center"
                    >
                      <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.03] rotate-12 pointer-events-none" />
                      <CardContent item={item} />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (

              // ==========================================
              // ESTADO 2: MAZO DESPLEGADO / CARRUSEL
              // ==========================================
              <motion.div 
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // md:justify-center centra todas las cartas si la pantalla es grande
                className="flex overflow-x-auto md:justify-center snap-x snap-mandatory gap-4 md:gap-6 w-full hide-scrollbar items-center pb-8 px-4 md:px-0"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {painPoints.map((item, index) => (
                  <motion.div
                    key={`card-${index}`}
                    layoutId={`shared-card-${index}`}
                    initial={false}
                    animate={{ rotate: 0, y: 0, scale: 1 }} 
                    transition={springConfig}
                    onClick={() => setIsStacked(true)}
                    // AQUÍ ESTÁ EL CAMBIO: w-[280px] a lg:w-[300px]. 
                    // Ya no son w-full, mantienen su forma de naipe.
                    className="relative shrink-0 w-[85vw] md:w-[280px] lg:w-[300px] min-h-[380px] bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)] snap-center cursor-pointer flex flex-col justify-center hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300"
                  >
                    <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.02] -rotate-6 pointer-events-none" />
                    <CardContent item={item} />
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}