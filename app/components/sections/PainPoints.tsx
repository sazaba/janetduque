// "use client";

// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Activity, Cloud, Flame, Moon, Waves } from 'lucide-react';

// // --- CONFIGURACIÓN DE ACTIVACIÓN ---
// const drawViewportConfig = { once: true, amount: 0.2 };

// // --- ICONO PREMIUM CENTRADO CON LATIDO DORADO ---
// const IconWrapper = ({ Icon }: { Icon: React.ElementType }) => (
//   <div className="w-20 h-20 mb-8 mx-auto relative flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
//     {/* Latido exterior sutil */}
//     <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute inset-0 bg-amber-300/40 rounded-full" 
//         style={{ willChange: "transform, opacity" }} 
//     />
//     {/* Esfera dorada sólida */}
//     <div className="absolute inset-2.5 bg-gradient-to-tr from-amber-500 to-amber-200 rounded-full shadow-[0_4px_12px_rgba(251,191,36,0.3)] border border-amber-100/50"></div>
//     {/* Icono Lucide */}
//     <Icon className="w-7 h-7 text-[#2b3d38] relative z-10" strokeWidth={2} />
//   </div>
// );

// // --- DATOS CURADOS (5 Motivos Clave) ---
// const painPoints = [
//   { icon: Activity, title: "Ansiedad y Pánico", desc: "Sensación de alerta permanente, miedos repentinos o una opresión en el pecho que aparece sin aviso previo." },
//   { icon: Cloud, title: "Depresión y Vacío", desc: "Falta de vitalidad, desconexión profunda con lo que antes disfrutabas o una tristeza que cuesta explicar." },
//   { icon: Flame, title: "Estrés y Burnout", desc: "Sientes que las demandas te superan. El agotamiento físico y mental no desaparece ni siquiera al descansar." },
//   { icon: Moon, title: "Insomnio y Rumiación", desc: "La mente no se apaga de noche. Das vueltas a los mismos pensamientos una y otra vez, impidiendo dormir." },
//   { icon: Waves, title: "Desregulación Emocional", desc: "Tus emociones toman el control rápidamente. Reaccionas con intensidad y te cuesta mucho volver a la calma." },
// ];

// export default function PainPoints() {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (carouselRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.82 + 20 : 360;
//       carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative z-10 w-full bg-transparent overflow-hidden">
      
//       {/* --- 1. SEPARADOR DE ONDA (AHORA EN VERDE OSCURO) --- */}
//       {/* Esta onda se dibuja hacia arriba, creando la ilusión perfecta de corte orgánico */}
//       <div className="w-full leading-[0] border-none -mb-[1px]">
//         <svg
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//           className="w-full h-16 md:h-24 lg:h-36 block"
//         >
//           <path
//             d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,121L1392,121C1344,121,1248,121,1152,121C1056,121,960,121,864,121C768,121,672,121,576,121C480,121,384,121,288,121C192,121,96,121,48,121L0,121Z"
//             fill="#4a675e"
//           />
//         </svg>
//       </div>

//       {/* --- 2. BLOQUE OSCURO INMERSIVO --- */}
//       <section className="pb-24 md:pb-32 w-full bg-[#4a675e] relative pt-6 md:pt-10">

//         {/* Estilo para ocultar scrollbar nativa */}
//         <style dangerouslySetInnerHTML={{__html: `
//             .hide-scrollbar::-webkit-scrollbar { display: none; }
//             .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         `}} />

//         <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            
//             {/* CABECERA */}
//             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//                 <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
//                     <motion.h2
//                         className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white mb-4 tracking-tight leading-tight"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         ¿Te identificas con <span className="text-amber-400 italic">esto?</span>
//                     </motion.h2>
                    
//                     <motion.p
//                         className="text-lg md:text-xl text-stone-300 font-sans font-light leading-relaxed"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         Reconocer el agotamiento es el primer paso. <br className="hidden md:block"/>
//                         <span className="text-white font-bold font-serif mt-2 inline-block">Validemos lo que sientes.</span>
//                     </motion.p>
//                 </div>

//                 {/* BOTONES DE NAVEGACIÓN */}
//                 <div className="hidden md:flex gap-4">
//                     <button onClick={() => scroll('left')} aria-label="Anterior" className="w-14 h-14 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-[#4a675e] transition-colors duration-300 active:scale-95">
//                         <ChevronLeft size={28} />
//                     </button>
//                     <button onClick={() => scroll('right')} aria-label="Siguiente" className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-[#2b3d38] hover:bg-amber-400 transition-colors duration-300 shadow-[0_4px_12px_rgba(251,191,36,0.3)] active:scale-95">
//                         <ChevronRight size={28} />
//                     </button>
//                 </div>
//             </div>

//             {/* CARRUSEL HORIZONTAL */}
//             <div className="relative -mx-4 md:mx-0">
//                 <div className="absolute top-0 left-0 w-8 md:w-20 h-full bg-gradient-to-r from-[#4a675e] to-transparent z-10 pointer-events-none"></div>
//                 <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-[#4a675e] to-transparent z-10 pointer-events-none"></div>

//                 <motion.div 
//                     ref={carouselRef}
//                     className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 md:px-0 py-8"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     {painPoints.map((item, index) => (
//                         <div 
//                             key={index}
//                             className="group relative flex flex-col items-center text-center shrink-0 w-[82vw] md:w-[340px] snap-center rounded-[2.5rem] bg-[#3a524a] p-8 md:p-10 border border-white/5 shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
//                         >
//                             <IconWrapper Icon={item.icon} />
//                             <h3 className="text-2xl font-bold font-serif text-white mb-4">
//                                 {item.title}
//                             </h3>
//                             <p className="text-stone-300 text-base leading-relaxed font-sans font-light">
//                                 {item.desc}
//                             </p>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>

//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, Cloud, Flame, Waves } from 'lucide-react';

// --- DATOS CURADOS (Enfoque en Tarjetas Gigantes) ---
const painPoints = [
  { 
    icon: Activity, 
    title: "Ansiedad Constante", 
    desc: "El cuerpo reacciona a un peligro invisible. Alertas, miedos repentinos y una opresión en el pecho que no te deja respirar." 
  },
  { 
    icon: Cloud, 
    title: "Depresión Silenciosa", 
    desc: "Desconexión con lo que antes te apasionaba. Una falta de vitalidad pesada y una tristeza que cuesta explicar con palabras." 
  },
  { 
    icon: Flame, 
    title: "Burnout Total", 
    desc: "El límite se rompió. Sientes que las demandas te superan y el agotamiento mental no desaparece ni siquiera durmiendo." 
  },
  { 
    icon: Waves, 
    title: "Desregulación", 
    desc: "Tus emociones toman el control del volante. Reaccionas con una intensidad que te asusta y cuesta mucho volver a la calma." 
  }
];

// --- VARIANTES DE ANIMACIÓN APPLE (Blur Reveal + Spring) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  // Apple usa mucho el desenfoque para revelar elementos al hacer scroll
  hidden: { filter: "blur(20px)", opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    filter: "blur(0px)", 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 }
  },
};

export default function PainPoints() {
  return (
    <div className="relative z-10 w-full bg-transparent overflow-hidden">
      
      {/* --- 1. ONDA ORGÁNICA (Transición brutal) --- */}
      {/* Pintada en el color super oscuro para que se "coma" el fondo beige del Hero */}
      <div className="w-full leading-[0] border-none -mb-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 lg:h-36 block">
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,121L1360,121C1280,121,1120,121,960,121C800,121,640,121,480,121C320,121,160,121,80,121L0,121Z" 
            fill="#121b18" 
          />
        </svg>
      </div>

      {/* --- 2. SECCIÓN SUPER OSCURA TIPO "PRO" --- */}
      <section className="pb-32 w-full bg-[#121b18] relative pt-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          {/* HEADER APPLE STYLE (Textos masivos y degradados) */}
          <div className="text-center md:text-left mb-20 max-w-4xl mx-auto md:mx-0">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium font-serif text-white tracking-tighter leading-[1.05] mb-8"
              initial={{ filter: "blur(20px)", opacity: 0, y: 30 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Curva de aceleración suave
            >
              Las señales de que es momento de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic">pausar.</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-3xl text-stone-400 font-sans font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              El cuerpo y la mente hablan cuando el peso se vuelve insostenible.
            </motion.p>
          </div>

          {/* GRID TIPO BENTO (Tarjetas Gigantes 2x2) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[2.5rem] bg-[#1a2521] border border-white/5 p-10 md:p-12 transition-all duration-700 hover:bg-[#1e2a26] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-default"
              >
                {/* ICONO DE FONDO GIGANTE (Efecto clásico de Apple que sangra por el borde) */}
                <item.icon className="absolute -bottom-10 -right-10 w-64 h-64 text-amber-500/5 group-hover:text-amber-500/10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 ease-out pointer-events-none" />
                
                {/* CONTENIDO SUPERIOR */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Icono Principal Brillante */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center shadow-lg mb-10 md:mb-16 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-[#121b18]" strokeWidth={2.5} />
                  </div>
                  
                  {/* Textos */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-tight group-hover:text-amber-300 transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 text-lg md:text-xl font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}