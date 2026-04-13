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
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden selection:bg-[#2b3d38] selection:text-white">
      
      {/* Fondo Decorativo Sutil */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(43,61,56,0.04)_0%,_transparent_60%)] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(245,158,11,0.05)_0%,_transparent_60%)] translate-y-1/3 -translate-x-1/3" />
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
            <span className="w-8 h-[1px] bg-[#2b3d38]/30"></span>
            <span className="text-[#2b3d38] font-bold tracking-[0.2em] text-xs uppercase">
              Soluciones Corporativas
            </span>
            <span className="w-8 h-[1px] bg-[#2b3d38]/30"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6"
          >
            Programas <span className="text-[#2b3d38] italic">Premium</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg font-light"
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
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#2b3d38]/20 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#2b3d38]/[0.02] to-transparent opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`} />

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2b3d38] border border-gray-100 group-hover:scale-110 group-hover:bg-[#2b3d38] group-hover:text-white transition-all duration-500 transform-gpu">
                    <prog.icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-[#2b3d38] transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                  {prog.desc}
                </p>

                <div className="flex items-center gap-2 text-[#2b3d38] font-bold text-sm group-hover:text-amber-500 transition-colors mt-auto w-fit">
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
          <p className="text-gray-500 font-serif italic mb-6">"Más que una capacitación, es una experiencia vivencial."</p>
          <a 
            href="https://wa.link/6vc76u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-[#2b3d38] hover:bg-[#2b3d38] text-[#2b3d38] hover:text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-sm"
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
            {/* Overlay background oscuro para resaltar el modal blanco */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProgram(null)}
            />

            {/* Modal Content - Ahora en Light Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Cierre */}
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded-full flex items-center justify-center transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Encabezado del Modal con acento Verde Corporativo */}
              <div className="p-8 md:p-10 pb-8 bg-[#2b3d38] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(251,191,36,0.15)_0%,_transparent_70%)] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 mb-6 border border-white/20 backdrop-blur-sm">
                    <selectedProgram.icon size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400 mb-3 block">
                    {selectedProgram.tag}
                  </span>
                  <h3 className="text-3xl font-serif text-white mb-3">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-stone-300 font-light leading-relaxed">
                    {selectedProgram.desc}
                  </p>
                </div>
              </div>

              {/* Cuerpo del Modal (Scrollable) */}
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar bg-white">
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-3">Dirigido a</h4>
                  <p className="text-gray-700 font-medium bg-gray-50 p-5 rounded-xl border border-gray-100">
                    {selectedProgram.details.target}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-5">Qué logrará la empresa</h4>
                  <ul className="space-y-4">
                    {selectedProgram.details.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-700 font-light">
                        <CheckCircle2 size={20} className="text-[#2b3d38] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer del Modal */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <a 
                  href={`https://wa.me/57XXXXXXXXX?text=Hola,%20me%20interesa%20información%20sobre%20el%20programa:%20${encodeURIComponent(selectedProgram.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm tracking-wide transition-all shadow-sm"
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