"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- CONFIGURACIÓN DE ACTIVACIÓN ---
const drawViewportConfig = { once: true, amount: 0.2 };

// --- ICONOS: Ahora con fondo Dorado y trazo Verde oscuro (Contraste Premium) ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 mb-8 relative flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out">
    <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-amber-400/30 rounded-full" 
        style={{ willChange: "transform, opacity" }} 
    />
    <div className="absolute inset-2 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.4)]"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#2b3d38] relative z-10" style={{ overflow: 'visible' }}>
      {children}
    </svg>
  </div>
);

// --- TRAZOS SVG ---
const ShieldAlertIcon = () => <IconWrapper><motion.path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.5 }} /><motion.path d="M12 8v4" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={drawViewportConfig} transition={{ duration: 0.5, delay: 1 }} /><motion.path d="M12 16h.01" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={drawViewportConfig} transition={{ duration: 0.3, delay: 1.2 }} /></IconWrapper>;
const HeartbeatBatteryIcon = () => <IconWrapper><motion.path d="M22 12h-4l-3 9L9 3l-3 9H2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 2 }} /></IconWrapper>;
const MoonThoughtsIcon = () => <IconWrapper><motion.path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.5 }} /></IconWrapper>;
const CloudRainIcon = () => <IconWrapper><motion.path d="M20 16.2A4.5 4.5 0 0 0 21 12a4.5 4.5 0 0 0-3.6-4.4 6 6 0 0 0-11 1.1 5 5 0 1 0 9 10.1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.5 }} />{[0.5, 0.7, 0.9].map((delay, i) => <motion.path key={i} d={`M${8 + i*4} 19v2`} initial={{ opacity: 0, y: -2 }} whileInView={{ opacity: 1, y: 0 }} viewport={drawViewportConfig} transition={{ duration: 0.5, delay: 1 + delay, repeat: Infinity, repeatType: "reverse" }} />)}</IconWrapper>;
const LightningBoltIcon = () => <IconWrapper><motion.path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.2 }} /></IconWrapper>;
const BrainIcon = () => <IconWrapper><motion.path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 2.96-3.08A2.5 2.5 0 0 1 9.5 2z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.8 }} /><motion.path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-2.96-3.08A2.5 2.5 0 0 0 14.5 2z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.8 }} /></IconWrapper>;
const BriefcaseIcon = () => <IconWrapper><motion.rect x="2" y="7" width="20" height="14" rx="2" ry="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.5 }} /><motion.path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.5, delay: 0.2 }} /></IconWrapper>;
const FlameIcon = () => <IconWrapper><motion.path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a1 1 0 0 1 .9.8z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.8 }} /></IconWrapper>;
const WaveIcon = () => <IconWrapper><motion.path d="M2 12c.5-5 2-9 4-9s4 9 7 9c3 0 2-7 5-7s4 6 4 12" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawViewportConfig} transition={{ duration: 1.8 }} /></IconWrapper>;

// --- DATOS ---
const painPoints = [
  { icon: ShieldAlertIcon, title: "Ansiedad y Pánico", desc: "Sensación de alerta permanente, miedos repentinos o una opresión en el pecho que aparece sin aviso." },
  { icon: HeartbeatBatteryIcon, title: "Estrés Crónico", desc: "Vives en modo supervivencia. El agotamiento físico y mental no desaparece ni siquiera al descansar." },
  { icon: MoonThoughtsIcon, title: "Insomnio y Rumiación", desc: "La mente no se apaga. Das vueltas a los mismos pensamientos una y otra vez, impidiendo dormir." },
  { icon: CloudRainIcon, title: "Depresión y Vacío", desc: "Falta de vitalidad, desconexión con lo que antes disfrutabas o una tristeza profunda difícil de explicar." },
  { icon: LightningBoltIcon, title: "Reactividad", desc: "Sientes que tienes la mecha corta. Pequeñas cosas te detonan emociones intensas o frustración." },
  { icon: BrainIcon, title: "Atención Dispersa", desc: "Te cuesta enfocarte, sientes una neblina mental constante o saltas de una tarea sin concretar." },
  { icon: BriefcaseIcon, title: "Estrés Laboral", desc: "Las demandas te superan. La presión y la carga mental no terminan al salir de la oficina." },
  { icon: FlameIcon, title: "Síndrome de Burnout", desc: "Agotamiento emocional profundo. Te sientes 'quemado', cínico respecto a tu labor y sin logros." },
  { icon: WaveIcon, title: "Desregulación", desc: "Tus emociones toman el control. Reaccionas con intensidad y te cuesta volver a la calma." },
];

export default function PainPoints() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Calcula el ancho de la pantalla para mover exactamente una tarjeta
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 420;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    // SECCIÓN OSCURA: Inversión de colores para causar impacto
    <section className="py-24 md:py-32 relative z-10 w-full bg-[#4a675e] overflow-hidden">
      
      {/* Estilo para ocultar la barra de scroll nativa pero mantener la funcionalidad */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* CABECERA ALINEADA A LA IZQUIERDA CON CONTROLES */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
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

            {/* BOTONES DE NAVEGACIÓN (Desktop) */}
            <div className="hidden md:flex gap-4">
                <button onClick={() => scroll('left')} aria-label="Anterior" className="w-14 h-14 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-[#4a675e] transition-colors duration-300">
                    <ChevronLeft size={28} />
                </button>
                <button onClick={() => scroll('right')} aria-label="Siguiente" className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-[#2b3d38] hover:bg-amber-400 transition-colors duration-300 shadow-lg shadow-amber-500/20">
                    <ChevronRight size={28} />
                </button>
            </div>
        </div>

        {/* CARRUSEL HORIZONTAL CON SCROLL SNAP NATIVO (Safari Safe) */}
        <div className="relative -mx-4 md:mx-0">
            {/* Gradientes laterales para indicar que hay más contenido */}
            <div className="absolute top-0 left-0 w-8 md:w-20 h-full bg-gradient-to-r from-[#4a675e] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-[#4a675e] to-transparent z-10 pointer-events-none"></div>

            <motion.div 
                ref={carouselRef}
                className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 md:px-0 py-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {painPoints.map((item, index) => (
                    <div 
                        key={index}
                        className="group relative shrink-0 w-[85vw] md:w-[380px] snap-center rounded-[2rem] bg-[#3a524a] p-8 md:p-10 border border-white/5 shadow-2xl hover:bg-[#334a42] transition-colors duration-300"
                    >
                        <item.icon />
                        <h3 className="text-2xl font-bold font-serif text-white mb-4">
                            {item.title}
                        </h3>
                        <p className="text-stone-300 text-base leading-relaxed font-sans">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
}