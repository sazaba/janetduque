"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Heart, Leaf, Briefcase, Star } from "lucide-react";

const profiles = [
  {
    id: "01",
    category: "Para Mujeres",
    title: "El peso de 'poder con todo'",
    desc: "A ti, que por fuera pareces fuerte pero por dentro sientes un cansancio que no se quita durmiendo. Si te vas dejando para después mientras sostienes a otros, este espacio es para ti.",
    icon: Heart,
    color: "text-rose-400",
    bgIcon: "bg-rose-400/10",
    borderIcon: "border-rose-400/30",
  },
  {
    id: "02",
    category: "Para Empresas",
    title: "El costo del desgaste",
    desc: "Personas agotadas equivalen a empresas que pierden dinero. Diseñado para organizaciones que enfrentan ausentismo, bajo rendimiento, rotación y conflictos internos.",
    icon: Building2,
    color: "text-amber-400",
    bgIcon: "bg-amber-400/10",
    borderIcon: "border-amber-400/30",
  },
  {
    id: "03",
    category: "Para Mujeres",
    title: "Del aguantar al habitarte",
    desc: "No te acompaño para que 'aguantes más'. El objetivo es que sueltes la carga que no te corresponde, aprendas a decir 'no' sin culpa y calmes esa mente que nunca descansa.",
    icon: Leaf,
    color: "text-emerald-400",
    bgIcon: "bg-emerald-400/10",
    borderIcon: "border-emerald-400/30",
  },
  {
    id: "04",
    category: "Para Empresas",
    title: "Bienestar Productivo",
    desc: "Transformamos el agotamiento en resultados medibles. Elevamos la productividad, mejoramos la comunicación asertiva y consolidamos un liderazgo humano y efectivo.",
    icon: Briefcase,
    color: "text-amber-400",
    bgIcon: "bg-amber-400/10",
    borderIcon: "border-amber-400/30",
  },
  {
    id: "05",
    category: "El Diferencial",
    title: "Método RISOTA®",
    desc: "Más que una capacitación, es una experiencia de transformación vivencial. Unimos psicología clínica, gerencia del talento humano, inteligencia emocional y risoterapia.",
    icon: Star,
    color: "text-amber-500",
    bgIcon: "bg-amber-500/10",
    borderIcon: "border-amber-500/30",
  }
];

export default function DualServicesTarget() {
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
                    Del Ser al Hacer
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2b3d38] leading-[1.1] mb-6">
                  Transformación emocional para <span className="text-amber-500 italic">la vida y el trabajo.</span>
                </h2>
                
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-10 max-w-md">
                  No viniste a este mundo solo a resistir, ni las organizaciones pueden sostenerse con equipos agotados. Este espacio une el enfoque clínico y empresarial para generar cambios reales.
                </p>

                <div className="hidden lg:flex items-center gap-3 text-stone-400 text-sm font-medium tracking-widest uppercase animate-pulse">
                  <span>Descubre cómo te acompaño</span>
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
                {/* Resplandor hover dinámico */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${profile.bgIcon}`}></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                  
                  {/* Icono animado */}
                  <div className="relative shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2b3d38] shadow-lg shadow-[#2b3d38]/20">
                    <motion.div 
                      className={`absolute inset-0 border-2 rounded-2xl ${profile.borderIcon}`}
                      animate={{ scale: [1, 1.15, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <profile.icon className={`w-8 h-8 ${profile.color}`} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col items-start gap-2 mb-3">
                      {/* Badge de Categoría Dual */}
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                        profile.category === 'Para Mujeres' ? 'bg-rose-50 text-rose-600 border border-rose-100' : 
                        profile.category === 'Para Empresas' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 
                        'bg-[#2b3d38]/5 text-[#2b3d38] border border-[#2b3d38]/10'
                      }`}>
                        {profile.category}
                      </span>
                      
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-bold text-stone-300 font-serif">{profile.id}</span>
                        <h3 className="text-2xl font-serif text-[#2b3d38]">{profile.title}</h3>
                      </div>
                    </div>
                    <p className="text-stone-600 font-light leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* CTA Final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-10 md:p-12 rounded-[2rem] bg-[#2b3d38] text-center relative overflow-hidden shadow-2xl shadow-[#2b3d38]/30"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-4">El verdadero cambio comienza aquí</h4>
                <p className="text-emerald-100/70 font-light mb-8 max-w-lg mx-auto">
                  Ya sea para encontrar espacios reales para ti, o para transformar tu organización en un entorno sostenible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://wa.link/6vc76u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-[#2b3d38] font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20 w-full sm:w-auto"
                  >
                    Hablemos de ti
                  </a>
                  <a 
                    href="https://wa.link/6vc76u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all hover:scale-105 active:scale-95 w-full sm:w-auto backdrop-blur-sm"
                  >
                    Servicios Corporativos
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}