"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- ICONO PREMIUM CENTRADO (Escalado a un tamaño más sutil) ---
const PremiumIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative flex items-center justify-center w-16 h-16 mb-6 z-10 group-hover:-translate-y-1.5 transition-transform duration-500 ease-out">
    {/* Anillo exterior sutil que palpita */}
    <motion.div 
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full border border-amber-200 bg-amber-50/50"
    />
    {/* Círculo dorado sólido interior */}
    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)]"></div>
    {/* Icono Principal */}
    <Icon className="relative z-20 w-6 h-6 text-[#2b3d38]" strokeWidth={2.5} />
  </div>
);

// --- DATOS CURADOS ---
const painPoints = [
  { 
    icon: Activity, 
    title: "Ansiedad Constante", 
    desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y una opresión en el pecho que no te deja respirar con tranquilidad." 
  },
  { 
    icon: Cloud, 
    title: "Depresión Silenciosa", 
    desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y una tristeza profunda que cuesta explicar con palabras." 
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

// --- VARIANTES DE ANIMACIÓN ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 }
  },
};

export default function PainPoints() {
  return (
    <div className="relative z-10 w-full bg-transparent overflow-hidden">
      
      {/* Estilo para ocultar scrollbar en el carrusel móvil */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- 1. ONDA ORGÁNICA --- */}
      <div className="w-full leading-[0] border-none -mb-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 lg:h-28 block">
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,121L1360,121C1280,121,1120,121,960,121C800,121,640,121,480,121C320,121,160,121,80,121L0,121Z" 
            fill="#4a675e" 
          />
        </svg>
      </div>

      {/* --- 2. SECCIÓN VERDE INMERSIVA --- */}
      <section className="pb-24 w-full bg-[#4a675e] relative pt-6">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8">
          
          {/* HEADER */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
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

          {/* GRID (Desktop) / CARRUSEL (Móvil) */}
          <motion.div 
            className="flex md:grid md:grid-cols-2 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 py-6 -my-6 md:py-0 md:my-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                // Ajuste de padding, bordes redondeados y sombra
                className="group relative overflow-hidden rounded-[2rem] bg-white p-6 md:p-8 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] flex flex-col items-center text-center cursor-default transform-gpu shrink-0 w-[80vw] snap-center md:w-auto md:shrink"
              >
                {/* BARRA DE ACENTO PREMIUM */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4a675e] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* ICONO FANTASMA GIGANTE DE FONDO (Más pequeño) */}
                <item.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-[#4a675e]/[0.05] group-hover:text-[#4a675e]/[0.1] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out pointer-events-none" />
                
                {/* ICONO PRINCIPAL */}
                <PremiumIcon Icon={item.icon} />
                
                {/* TEXTOS (Tipografía reducida) */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#4a675e] mb-3 tracking-tight group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg font-sans font-light leading-relaxed max-w-sm mx-auto">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}