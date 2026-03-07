"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, Cloud, Flame, Moon, Waves } from 'lucide-react';

// --- DATOS CURADOS CON TAMAÑOS ASIMÉTRICOS (BENTO GRID) ---
const painPoints = [
  { 
    id: "ansiedad",
    icon: Activity, 
    title: "Ansiedad y Pánico", 
    desc: "Esa sensación de alerta permanente, miedos repentinos o una opresión en el pecho que aparece sin aviso. El cuerpo reacciona a un peligro que la mente no puede apagar.",
    colSpan: "md:col-span-2", 
    layout: "horizontal"
  },
  { 
    id: "depresion",
    icon: Cloud, 
    title: "Depresión y Vacío", 
    desc: "Falta de vitalidad, desconexión profunda con lo que antes disfrutabas o una tristeza que cuesta explicar con palabras.",
    colSpan: "md:col-span-1", 
    layout: "vertical"
  },
  { 
    id: "burnout",
    icon: Flame, 
    title: "Estrés y Burnout", 
    desc: "Sientes que las demandas te superan. El agotamiento físico y mental no desaparece ni siquiera después de intentar descansar.",
    colSpan: "md:col-span-1", 
    layout: "vertical"
  },
  { 
    id: "insomnio",
    icon: Moon, 
    title: "Insomnio y Rumiación", 
    desc: "La mente no se apaga de noche. Das vueltas a los mismos pensamientos una y otra vez, impidiendo que alcances un sueño verdaderamente reparador.",
    colSpan: "md:col-span-2", 
    layout: "horizontal"
  },
  { 
    id: "desregulacion",
    icon: Waves, 
    title: "Desregulación Emocional", 
    desc: "Tus emociones toman el control rápidamente. Reaccionas con una intensidad que te sorprende y te cuesta mucho volver a tu centro de calma.",
    colSpan: "md:col-span-3 lg:col-span-3", 
    layout: "horizontal"
  },
];

// --- VARIANTES DE ANIMACIÓN ESTILO APPLE (Ahora con tipado estricto) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15, mass: 1 },
  },
};

export default function PainPoints() {
  return (
    <section className="py-32 relative z-10 w-full bg-[#1a2521] overflow-hidden">
      
      {/* Luces de ambiente (Glow effects traseros) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[#4a675e]/20 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* CABECERA MINIMALISTA */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-medium font-serif text-white mb-6 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          >
            Las señales de que <br className="hidden md:block"/>
            es momento de <span className="text-amber-400 italic">pausar.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-2xl text-stone-400 font-sans font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            El cuerpo y la mente hablan cuando el peso se vuelve insostenible. <br/>
            <span className="text-white font-medium mt-2 inline-block">Validar lo que sientes es el primer paso.</span>
          </motion.p>
        </div>

        {/* BENTO GRID (Cuadrícula Asimétrica) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((item) => (
            <motion.div 
              key={item.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/[0.08] p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.06] hover:border-amber-400/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)] ${item.colSpan}`}
            >
              {/* Reflejo superior estilo cristal */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className={`flex h-full ${item.layout === 'horizontal' ? 'flex-col md:flex-row md:items-center gap-8' : 'flex-col items-start gap-6'}`}>
                
                {/* Icono Premium */}
                <div className="shrink-0 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3a524a] to-[#253630] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out z-10 relative">
                    <item.icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                  </div>
                  {/* Resplandor trasero del icono */}
                  <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Contenido de texto */}
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-base md:text-lg leading-relaxed font-sans font-light group-hover:text-stone-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}