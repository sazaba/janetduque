"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Waves, Compass, ShieldCheck, Sparkles } from "lucide-react";

const profiles = [
  {
    id: "01",
    title: "Enfoque en Etapa Productiva",
    desc: "Diseñado para adultos, profesionales y estudiantes. Personas que lidian con altas exigencias del día a día y buscan equilibrar su rendimiento con su bienestar mental.",
    icon: Briefcase,
  },
  {
    id: "02",
    title: "Agotamiento y Desborde",
    desc: "Sientes que el estrés superó tu capacidad de respuesta. Vives con opresión en el pecho, alerta constante o una sensación de que tus emociones han tomado el control.",
    icon: Waves,
  },
  {
    id: "03",
    title: "Búsqueda de Raíces",
    desc: "No te conformas con aliviar el síntoma superficial. Estás dispuesto(a) a indagar en la raíz de tus patrones para generar un cambio genuino y duradero.",
    icon: Compass,
  },
  {
    id: "04",
    title: "Rigor y Contención",
    desc: "Valoras un espacio estructurado, confidencial y basado en evidencia clínica, donde te sientas validado pero también desafiado a crecer.",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "Deseo de Transformación",
    desc: "Has reconocido que necesitas ayuda. Quizás has intentado otras vías, pero ahora buscas un proceso terapéutico profundo y comprometido.",
    icon: Sparkles,
  }
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-[#fcfdfa] relative selection:bg-amber-200 selection:text-[#2b3d38]">
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100/40 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#2b3d38]/5 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Sticky Content */}
          <div className="lg:w-5/12 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32 lg:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-amber-500"></span>
                  <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase">
                    Perfil del Consultante
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2b3d38] leading-[1.1] mb-6">
                  ¿Es este el espacio indicado <span className="text-amber-500 italic">para ti?</span>
                </h2>
                
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-10 max-w-md">
                  La terapia es un trabajo en equipo. Para que este proceso sea realmente efectivo, es fundamental que nos encontremos en la misma sintonía. Este espacio está pensado para ti si te identificas con estas señales.
                </p>

                <div className="hidden lg:flex items-center gap-3 text-stone-400 text-sm font-medium tracking-widest uppercase animate-pulse">
                  <span>Desliza para explorar</span>
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Scrolling Cards */}
          <div className="lg:w-7/12 flex flex-col gap-6 md:gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-stone-100 hover:border-amber-200/50 transition-colors duration-500 overflow-hidden"
              >
                {/* Resplandor hover dorado */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                  
                  {/* Icono con animación dorada */}
                  <div className="relative shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2b3d38] shadow-lg shadow-[#2b3d38]/20">
                    <motion.div 
                      className="absolute inset-0 border-2 border-amber-400/30 rounded-2xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <profile.icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold text-amber-500/50 font-serif">{profile.id}</span>
                      <h3 className="text-2xl font-serif text-[#2b3d38]">{profile.title}</h3>
                    </div>
                    <p className="text-stone-600 font-light leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* CTA Final Integrado en el flujo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-10 md:p-12 rounded-[2rem] bg-[#2b3d38] text-center relative overflow-hidden shadow-2xl shadow-[#2b3d38]/30"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-4">¿Te reconoces en estas palabras?</h4>
                <p className="text-emerald-100/70 font-light mb-8 max-w-lg mx-auto">
                  Si sientes que este es el enfoque que necesitas, el siguiente paso es agendar tu primera sesión de evaluación.
                </p>
                <a 
                  href="https://wa.link/2x3i8s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-[#2b3d38] font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20"
                >
                  Solicitar Evaluación Inicial
                  <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}