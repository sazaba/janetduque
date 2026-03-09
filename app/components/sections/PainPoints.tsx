"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- ICONO PREMIUM ---
const PremiumIcon = ({ Icon, isActive }: { Icon: React.ElementType, isActive: boolean }) => (
  <div className={`relative flex items-center justify-center transition-all duration-500 ease-out z-10 ${isActive ? 'w-16 h-16 mb-4' : 'w-12 h-12'}`}>
    {isActive && (
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-amber-200 bg-amber-50/50"
      />
    )}
    <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)] transition-all duration-500 ${isActive ? 'scale-75' : 'scale-100'}`}></div>
    <Icon className={`relative z-20 text-[#2b3d38] transition-all duration-500 ${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} strokeWidth={2.5} />
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
    desc: "El límite se rompió. Sientes que las demandas te superan y el agotamiento mental no desaparece ni durmiendo." 
  },
  { 
    icon: Waves, 
    title: "Desregulación", 
    desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que asusta y cuesta volver a la calma." 
  }
];

export default function PainPoints() {
  // Estado para controlar qué carta está expandida. Empezamos con la primera (0).
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <div className="relative z-10 w-full bg-transparent overflow-hidden">
      
      {/* --- ONDA ORGÁNICA --- */}
      <div className="w-full leading-[0] border-none -mb-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 lg:h-28 block">
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,121L1360,121C1280,121,1120,121,960,121C800,121,640,121,480,121C320,121,160,121,80,121L0,121Z" 
            fill="#4a675e" 
          />
        </svg>
      </div>

      {/* --- SECCIÓN VERDE INMERSIVA --- */}
      <section className="pb-24 w-full bg-[#4a675e] relative pt-6">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          {/* HEADER */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white tracking-tight leading-[1.05] mb-6"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            >
              Las señales de que es momento de <span className="text-amber-400 italic">pausar.</span>
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-stone-200 font-sans font-light leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              El cuerpo y la mente hablan cuando el peso se vuelve insostenible. Validar lo que sientes es el primer paso.
            </motion.p>
          </div>

          {/* CONTENEDOR DE CARTAS APILADAS / EXPANDIBLES */}
          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[450px] gap-4">
            {painPoints.map((item, index) => {
              const isActive = activeCard === index;

              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => setActiveCard(index)}
                  className={`group relative overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center justify-center
                    ${isActive 
                      ? 'bg-white flex-[4] shadow-[0_12px_30px_rgba(0,0,0,0.15)]' 
                      : 'bg-white/10 hover:bg-white/20 flex-[1] shadow-none backdrop-blur-sm'
                    }
                  `}
                >
                  {/* BARRA DE ACENTO SUPERIOR (Solo en activa) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4a675e] to-amber-400" 
                      />
                    )}
                  </AnimatePresence>

                  {/* ICONO FANTASMA DE FONDO */}
                  <item.icon 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out pointer-events-none
                      ${isActive ? 'w-64 h-64 text-[#4a675e]/[0.03] scale-100 rotate-6' : 'w-24 h-24 text-white/5 scale-50'}
                    `} 
                  />
                  
                  {/* CONTENIDO DE LA CARTA */}
                  <div className={`relative z-10 flex w-full h-full p-6 md:p-8 transition-all duration-500 ${isActive ? 'flex-col items-center justify-center text-center' : 'flex-row md:flex-col items-center justify-start md:justify-center'}`}>
                    
                    {/* Icono (Se ajusta solo con su prop isActive) */}
                    <PremiumIcon Icon={item.icon} isActive={isActive} />
                    
                    {/* TITULO Y DESCRIPCIÓN */}
                    {isActive ? (
                      // --- VISTA ACTIVA (Expandida) ---
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex flex-col items-center"
                      >
                        <h3 className="text-2xl md:text-3xl font-serif text-[#4a675e] mb-3 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-stone-600 text-base md:text-lg font-sans font-light leading-relaxed max-w-sm mx-auto">
                          {item.desc}
                        </p>
                      </motion.div>
                    ) : (
                      // --- VISTA INACTIVA (Colapsada) ---
                      <div className="md:absolute md:bottom-8 ml-4 md:ml-0 flex items-center justify-center">
                        <h3 className="text-lg md:text-xl font-serif text-white/80 whitespace-nowrap md:-rotate-90 origin-center tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}