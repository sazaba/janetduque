"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- ICONO PREMIUM ---
const PremiumIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative flex items-center justify-center w-14 h-14 mb-6 z-10 transition-transform duration-500 ease-out">
    <motion.div 
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full border border-amber-200 bg-amber-50/50"
    />
    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)]"></div>
    <Icon className="relative z-20 w-5 h-5 text-[#2b3d38]" strokeWidth={2.5} />
  </div>
);

// --- DATOS CURADOS ---
const painPoints = [
  { 
    icon: Activity, 
    title: "Ansiedad Constante", 
    desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y una opresión en el pecho que no te deja respirar." 
  },
  { 
    icon: Cloud, 
    title: "Depresión Silenciosa", 
    desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y una tristeza profunda que cuesta explicar." 
  },
  { 
    icon: Flame, 
    title: "Burnout Total", 
    desc: "El límite se rompió. Sientes que las demandas te superan y el agotamiento mental no desaparece ni siquiera después de dormir." 
  },
  { 
    icon: Waves, 
    title: "Desregulación", 
    desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que te asusta y cuesta muchísimo volver a la calma." 
  }
];

// --- COMPONENTE INTERNO DE LA CARTA (Para no repetir código) ---
const CardContent = ({ item }: { item: typeof painPoints[0] }) => (
  <div className="relative z-10 flex flex-col items-center text-center h-full">
    <PremiumIcon Icon={item.icon} />
    <h3 className="text-2xl font-serif text-[#4a675e] mb-3 tracking-tight">
      {item.title}
    </h3>
    <p className="text-stone-600 text-base font-sans font-light leading-relaxed">
      {item.desc}
    </p>
  </div>
);

export default function PainPointsDeck() {
  // Estado que controla si estamos viendo el mazo apilado o el carrusel expandido
  const [isStacked, setIsStacked] = useState(true);

  return (
    <div className="relative w-full bg-[#4a675e] overflow-hidden py-16">
      
      {/* Estilos para el scroll en Safari/Chrome */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10 px-6 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white tracking-tight leading-[1.05] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Señales para <span className="text-amber-400 italic">pausar.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-stone-200 font-sans font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {isStacked ? "Toca el mazo para descubrir las señales." : "Desliza para ver más. Toca una carta para volver a apilar."}
          </motion.p>
        </div>

        {/* CONTENEDOR ANIMADO */}
        <div className="min-h-[400px] md:min-h-[450px] flex flex-col justify-center">
          <AnimatePresence mode="popLayout">
            
            {isStacked ? (
              // ==========================================
              // ESTADO 1: EL MAZO (Apilado en el centro)
              // ==========================================
              <motion.div 
                key="deck"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-[380px] w-full flex items-center justify-center cursor-pointer group"
                onClick={() => setIsStacked(false)}
                // Fix para el parpadeo táctil en Safari Mobile
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {painPoints.map((item, index) => {
                  // Matemáticas para el efecto mazo realista
                  const reverseIndex = painPoints.length - 1 - index; // 0 es la carta superior
                  const rotate = (index - 1.5) * 4; // Rota un poco a la izquierda y derecha
                  const yOffset = reverseIndex * 12; // Las cartas de atrás bajan un poco
                  const scale = 1 - (reverseIndex * 0.04); // Las cartas de atrás se ven más pequeñas

                  return (
                    <motion.div
                      key={`card-${index}`}
                      layoutId={`shared-card-${index}`}
                      style={{ zIndex: index }} // Asegura que la última carta del array esté arriba
                      initial={false}
                      animate={{ rotate, y: yOffset, scale }}
                      transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.8 }}
                      className="absolute w-[85vw] max-w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.2)] group-hover:-translate-y-4 transition-transform duration-500 ease-out"
                    >
                      {/* Fondo fantasma solo decorativo */}
                      <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.03] rotate-12 pointer-events-none" />
                      
                      <CardContent item={item} />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (

              // ==========================================
              // ESTADO 2: EL CARRUSEL (Expandido y scrolleable)
              // ==========================================
              <motion.div 
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 py-8 hide-scrollbar w-full items-center"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {/* Espaciador inicial para que la primera carta no pegue al borde en pantallas grandes */}
                <div className="shrink-0 w-4 md:w-[calc(50vw-180px)]"></div>

                {painPoints.map((item, index) => (
                  <motion.div
                    key={`card-${index}`}
                    layoutId={`shared-card-${index}`}
                    initial={false}
                    // Forzamos que se enderecen a 0 al entrar al carrusel
                    animate={{ rotate: 0, y: 0, scale: 1 }} 
                    transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.8 }}
                    onClick={() => setIsStacked(true)}
                    className="relative shrink-0 w-[85vw] max-w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)] snap-center cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                  >
                    <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.03] rotate-12 pointer-events-none" />
                    
                    <CardContent item={item} />
                  </motion.div>
                ))}

                {/* Espaciador final */}
                <div className="shrink-0 w-4 md:w-[calc(50vw-180px)]"></div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}