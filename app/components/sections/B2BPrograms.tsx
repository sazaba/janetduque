"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building, Shield, Activity, Target } from "lucide-react";

const programs = [
  {
    id: "prog-1",
    title: "Liderazgo con Emoción y Acción",
    desc: "Formamos líderes capaces de gestionar sus emociones y las de su equipo, fomentando un clima laboral de alta confianza y comunicación asertiva.",
    icon: Target,
    tag: "Liderazgo"
  },
  {
    id: "prog-2",
    title: "Empresas Emocionalmente Sostenibles",
    desc: "Un enfoque integral para reducir el estrés laboral, prevenir el burnout y construir una cultura organizacional donde el bienestar impulsa la rentabilidad.",
    icon: Building,
    tag: "Cultura"
  },
  {
    id: "prog-3",
    title: "Del Desgaste al Bienestar Productivo",
    desc: "Intervenciones directas para equipos con alto nivel de agotamiento, enfocadas en disminuir el ausentismo, la rotación y reactivar el compromiso.",
    icon: Activity,
    tag: "Intervención"
  },
  {
    id: "prog-4",
    title: "Del Ser al Hacer en la Organización",
    desc: "Nuestro programa insignia que integra la Inteligencia Emocional y el Método RISOTA® para transformar la dinámica interna y reconectar a los colaboradores con su propósito.",
    icon: Shield,
    tag: "Integral"
  }
];

export default function CorporatePrograms() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#2b3d38] relative overflow-hidden selection:bg-amber-400 selection:text-[#2b3d38]">
      {/* Fondo Premium (Estilo Aura) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(251,191,36,0.03)_0%,_transparent_60%)] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(74,103,94,0.2)_0%,_transparent_60%)] translate-y-1/3 -translate-x-1/3" />
        
        {/* Patrón de puntos sutil (Opcional, añade textura) */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-8 h-[1px] bg-amber-400/50"></span>
            <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase">
              Soluciones Corporativas
            </span>
            <span className="w-8 h-[1px] bg-amber-400/50"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6"
          >
            Programas <span className="text-amber-400 italic">Premium</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-lg font-light"
          >
            Intervenciones estructuradas con enfoque terapéutico y práctico, diseñadas para transformar el agotamiento emocional en resultados medibles y un liderazgo más humano.
          </motion.p>
        </div>

        {/* GRID DE PROGRAMAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#314640] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-amber-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Brillo dinámico en hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#25342f] flex items-center justify-center text-amber-400 shadow-inner border border-white/5 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#2b3d38] transition-all duration-500 transform-gpu">
                    <prog.icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-amber-400/20 group-hover:text-amber-300 transition-colors">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-stone-400 font-light leading-relaxed mb-8 flex-grow">
                  {prog.desc}
                </p>

                {/* Botón sutil interactivo */}
                <div className="flex items-center gap-2 text-stone-300 font-medium text-sm group-hover:text-amber-400 transition-colors mt-auto w-fit cursor-pointer">
                  <span>Explorar programa</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL DE SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-stone-400 font-serif italic mb-6">"Más que una capacitación, es una experiencia vivencial."</p>
          <a 
            href="https://wa.link/2x3i8s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-amber-400/50 hover:border-amber-400 hover:bg-amber-400 text-white hover:text-[#2b3d38] font-bold text-sm tracking-wide transition-all duration-300"
          >
            Agendar diagnóstico empresarial
          </a>
        </motion.div>

      </div>
    </section>
  );
}