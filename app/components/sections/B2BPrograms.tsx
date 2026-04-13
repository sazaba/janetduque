"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building, Shield, Activity, Target, X, CheckCircle2 } from "lucide-react";

// Base de datos enriquecida con redacción enfocada en resultados organizacionales
const programs = [
  {
    id: "prog-1",
    title: "Liderazgo con Emoción y Acción",
    desc: "Formamos líderes capaces de gestionar sus emociones y las de su equipo, fomentando un clima laboral de alta confianza y comunicación asertiva.",
    icon: Target,
    tag: "Liderazgo",
    details: {
      target: "Líderes de área, gerentes medios y directivos.",
      benefits: [
        "Regulación emocional del líder ante situaciones de crisis o alta presión.",
        "Reducción de conductas reactivas y mejora en la validación del equipo.",
        "Construcción de entornos de seguridad psicológica que retienen el talento.",
        "Toma de decisiones estratégicas basadas en claridad mental, no en estrés."
      ]
    }
  },
  {
    id: "prog-2",
    title: "Empresas Emocionalmente Sostenibles",
    desc: "Un enfoque integral para reducir el estrés laboral, prevenir el burnout y construir una cultura organizacional donde el bienestar impulsa la rentabilidad.",
    icon: Building,
    tag: "Cultura",
    details: {
      target: "Organizaciones completas o departamentos con alta carga operativa.",
      benefits: [
        "Mapeo temprano y mitigación de estresores psicosociales en el entorno.",
        "Alineación práctica entre los valores del colaborador y los de la empresa.",
        "Implementación de protocolos preventivos contra el Síndrome de Burnout.",
        "Aumento de la productividad sostenida gracias al bienestar integral."
      ]
    }
  },
  {
    id: "prog-3",
    title: "Del Desgaste al Bienestar Productivo",
    desc: "Intervenciones directas para equipos con alto nivel de agotamiento, enfocadas en disminuir el ausentismo, la rotación y reactivar el compromiso.",
    icon: Activity,
    tag: "Intervención",
    details: {
      target: "Equipos de trabajo que evidencian fatiga crónica, cinismo o baja eficacia.",
      benefits: [
        "Desactivación de la reactividad fisiológica y emocional en el grupo.",
        "Restauración del compromiso mediante la reconexión con el propósito.",
        "Dotación de herramientas prácticas de afrontamiento in situ.",
        "Disminución drástica del ausentismo asociado a causas psicológicas."
      ]
    }
  },
  {
    id: "prog-4",
    title: "Del Ser al Hacer en la Organización",
    desc: "Nuestro programa insignia que integra la Inteligencia Emocional y el Método RISOTA® para transformar la dinámica interna y reconectar a los colaboradores con su propósito.",
    icon: Shield,
    tag: "Integral",
    details: {
      target: "Toda la estructura organizacional (intervención multinivel).",
      benefits: [
        "Aplicación del Método RISOTA® para liberar tensión acumulada sistémica.",
        "Creación de nuevos repertorios de comunicación y cohesión grupal.",
        "Fomento de la innovación mediante la reducción del miedo al error.",
        "Transformación observable y medible de la cultura de trabajo."
      ]
    }
  }
];

export default function CorporatePrograms() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  // Control de scroll
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProgram]);

  return (
    <section className="py-24 md:py-32 bg-[#2b3d38] relative overflow-hidden selection:bg-amber-400 selection:!text-[#2b3d38]">
      
      {/* Fondo Decorativo Sutil Oscuro */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(251,191,36,0.03)_0%,_transparent_60%)] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(74,103,94,0.2)_0%,_transparent_60%)] translate-y-1/3 -translate-x-1/3" />
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
            <span className="!text-amber-400 font-bold tracking-[0.2em] text-xs uppercase text-center">
              Soluciones Corporativas
            </span>
            <span className="w-8 h-[1px] bg-amber-400/50"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif !text-white leading-tight mb-6"
          >
            Programas <span className="!text-amber-400 italic">Premium</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="!text-stone-300 text-lg font-light"
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
              onClick={() => setSelectedProgram(prog)}
              className="group relative bg-[#314640] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-amber-400/30 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`} />

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#25342f] flex items-center justify-center text-amber-400 shadow-inner border border-white/5 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#2b3d38] transition-all duration-500 transform-gpu shrink-0">
                    <prog.icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold !text-stone-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-amber-400/20 group-hover:!text-amber-300 transition-colors ml-4 text-right">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif !text-white mb-4 group-hover:!text-amber-400 transition-colors">
                  {prog.title}
                </h3>
                
                <p className="!text-stone-400 font-light leading-relaxed mb-8 flex-grow">
                  {prog.desc}
                </p>

                <div className="flex items-center gap-2 !text-stone-300 font-medium text-sm group-hover:!text-amber-400 transition-colors mt-auto w-fit">
                  <span className="!text-inherit">Explorar programa</span>
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
          <p className="!text-stone-400 font-serif italic mb-6">"Más que una capacitación, es una experiencia vivencial."</p>
          <a 
            href="https://wa.link/6vc76u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-amber-400/50 hover:border-amber-400 hover:bg-amber-400 !text-white hover:!text-[#2b3d38] font-bold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto"
          >
            Agendar diagnóstico empresarial
          </a>
        </motion.div>
      </div>

      {/* MODAL / OVERLAY EXPANDIDO */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Overlay background */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProgram(null)}
            />

            {/* Modal Content - Dark Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#2b3d38] border border-amber-400/20 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh]"
            >
              {/* Cierre */}
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 md:w-10 md:h-10 bg-black/20 hover:bg-black/40 !text-stone-300 hover:!text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>

              {/* Encabezado del Modal (shrink-0 asegura que no colapse) */}
              <div className="p-6 md:p-10 pb-5 md:pb-8 bg-[#314640] border-b border-white/5 relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(251,191,36,0.1)_0%,_transparent_70%)] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative z-10 pr-6 md:pr-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#25342f] flex items-center justify-center text-amber-400 mb-4 md:mb-6 border border-white/10">
                    <selectedProgram.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold !text-amber-400 mb-2 md:mb-3 block">
                    {selectedProgram.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif !text-white mb-2 md:mb-3">
                    {selectedProgram.title}
                  </h3>
                  <p className="!text-stone-300 font-light leading-relaxed text-sm md:text-base">
                    {selectedProgram.desc}
                  </p>
                </div>
              </div>

              {/* Cuerpo del Modal (Scrollable - flex-1 asegura que tome el espacio disponible) */}
              <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1">
                <div className="mb-6 md:mb-8">
                  <h4 className="text-xs md:text-sm uppercase tracking-widest font-bold !text-stone-400 mb-3">Dirigido a</h4>
                  <p className="!text-stone-200 font-light bg-black/20 p-4 md:p-5 rounded-xl border border-white/5 text-sm md:text-base">
                    {selectedProgram.details.target}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs md:text-sm uppercase tracking-widest font-bold !text-stone-400 mb-4 md:mb-5">Qué logrará la empresa</h4>
                  <ul className="space-y-4">
                    {selectedProgram.details.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 md:gap-4 !text-stone-200 font-light text-sm md:text-base">
                        <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5 md:w-5 md:h-5" />
                        <span className="leading-relaxed !text-inherit">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer del Modal (shrink-0 asegura que el botón siempre se vea) */}
              <div className="p-4 md:p-6 bg-[#25342f] border-t border-white/5 flex justify-end shrink-0">
                <a 
                  href="https://wa.link/6vc76u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 !text-[#2b3d38] font-bold text-sm tracking-wide transition-all shadow-sm w-full md:w-auto"
                >
                  Solicitar cotización
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}