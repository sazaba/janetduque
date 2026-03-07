"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, Cloud, Flame, Moon, Waves } from 'lucide-react';

// --- CONFIGURACIÓN DE ACTIVACIÓN ---
const drawViewportConfig = { once: true, amount: 0.2 };

// --- ICONO PREMIUM CENTRADO CON LATIDO DORADO ---
const IconWrapper = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="w-20 h-20 mb-8 mx-auto relative flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
    {/* Latido exterior sutil (Dorado suave) */}
    <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-amber-300/40 rounded-full" 
        style={{ willChange: "transform, opacity" }} 
    />
    {/* Esfera dorada sólida (Dorado intenso a suave) */}
    <div className="absolute inset-2.5 bg-gradient-to-tr from-amber-500 to-amber-200 rounded-full shadow-[0_4px_12px_rgba(251,191,36,0.3)] border border-amber-100/50"></div>
    {/* Icono Lucide (Verde oscuro para contraste) */}
    <Icon className="w-7 h-7 text-[#2b3d38] relative z-10" strokeWidth={2} />
  </div>
);

// --- DATOS CURADOS (5 Motivos Clave) ---
const painPoints = [
  { icon: Activity, title: "Ansiedad y Pánico", desc: "Sensación de alerta permanente, miedos repentinos o una opresión en el pecho que aparece sin aviso previo." },
  { icon: Cloud, title: "Depresión y Vacío", desc: "Falta de vitalidad, desconexión profunda con lo que antes disfrutabas o una tristeza que cuesta explicar." },
  { icon: Flame, title: "Estrés y Burnout", desc: "Sientes que las demandas te superan. El agotamiento físico y mental no desaparece ni siquiera al descansar." },
  { icon: Moon, title: "Insomnio y Rumiación", desc: "La mente no se apaga de noche. Das vueltas a los mismos pensamientos una y otra vez, impidiendo dormir." },
  { icon: Waves, title: "Desregulación Emocional", desc: "Tus emociones toman el control rápidamente. Reaccionas con intensidad y te cuesta mucho volver a la calma." },
];

export default function PainPoints() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Movimiento responsive suave
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.82 + 20 : 360;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    // CONTENEDOR RAIZ: bg-transparent para que la onda beige funcione
    <div className="relative z-10 w-full bg-transparent overflow-hidden">
      
      {/* --- 1. SEPARADOR DE ONDA BRUTAL (Parte Superior) --- */}
      {/* Esta onda debe ser rellenada con el color beige de tu layout para 'comerse' el inicio del bloque verde */}
      <div className="relative w-full overflow-hidden" style={{ lineHeight: '0' }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-28 lg:h-32" // Smart responsive height
        >
          <path
            // Trazado SVG asimétrico y orgánico (Pintado con el color beige del layout: #fffcf8)
            d="M0 64C480 224 960 -32 1440 64V120H0V64Z"
            fill="#fffcf8" // Color de fondo del layout beige para que la onda se vea
          />
        </svg>
      </div>

      {/* --- 2. BLOQUE OSCURO INMERSIVO (bg-[#4a675e]) --- */}
      <section className="pb-24 md:pb-32 w-full bg-[#4a675e] -mt-px relative">
         {/* -mt-px asegura que no haya una línea de luz entre la onda y el bloque */}

        {/* Estilo para ocultar scrollbar nativa */}
        <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            
            {/* CABECERA (Oscura para contraste) */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white mb-4 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        ¿Te identificas con <span className="text-amber-400 italic">esto?</span>
                    </motion.h2>
                    
                    <motion.p
                        className="text-lg md:text-xl text-stone-300 font-sans font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Reconocer el agotamiento es el primer paso. <br className="hidden md:block"/>
                        <span className="text-white font-bold font-serif mt-2 inline-block">Validemos lo que sientes.</span>
                    </motion.p>
                </div>

                {/* BOTONES DE NAVEGACIÓN ( Desktop ) */}
                <div className="hidden md:flex gap-4">
                    <button onClick={() => scroll('left')} aria-label="Anterior" className="w-14 h-14 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-[#4a675e] transition-colors duration-300 active:scale-95">
                        <ChevronLeft size={28} />
                    </button>
                    <button onClick={() => scroll('right')} aria-label="Siguiente" className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-[#2b3d38] hover:bg-amber-400 transition-colors duration-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)] active:scale-95">
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            {/* CARRUSEL HORIZONTAL CON SCROLL SNAP NATIVO (Safari Safe) */}
            <div className="relative -mx-4 md:mx-0">
                {/* Sombras laterales para indicar scroll */}
                <div className="absolute top-0 left-0 w-8 md:w-20 h-full bg-gradient-to-r from-[#4a675e] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-[#4a675e] to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    ref={carouselRef}
                    className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 md:px-0 py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {painPoints.map((item, index) => (
                        <div 
                            key={index}
                            className="group relative flex flex-col items-center text-center shrink-0 w-[82vw] md:w-[340px] snap-center rounded-[2.5rem] bg-[#3a524a] p-8 md:p-10 border border-white/5 shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <IconWrapper Icon={item.icon} />
                            <h3 className="text-2xl font-bold font-serif text-white mb-4">
                                {item.title}
                            </h3>
                            <p className="text-stone-300 text-base leading-relaxed font-sans font-light">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
      </section>
    </div>
  );
}