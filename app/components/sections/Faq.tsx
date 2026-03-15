"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  Sparkles, 
  BrainCircuit, 
  Target, 
  Clock, 
  Globe2,
  Wallet, 
  SunMedium, 
  Plus, 
  Minus,
  ArrowRight
} from "lucide-react";

// --- DATOS ACTUALIZADOS ---
const faqData = [
  {
    id: "profesional",
    question: "¿Quién es la profesional a cargo y cuál es su experiencia?",
    icon: <UserCheck size={24} strokeWidth={1.5} />,
    answer: (
      <>
        El proceso es liderado por la <strong>Dra. Janet Maritza Duque</strong>, psicóloga clínica egresada de la <strong>Universidad Libre de Pereira</strong> con <span className="text-[#4a675e] font-bold">18 años de experiencia clínica</span>.
        <br /><br />
        Su enfoque se especializa en <strong>Terapias de Tercera Generación</strong>, garantizando un acompañamiento que integra la rigurosidad científica con una profunda empatía humana.
      </>
    )
  },
  {
    id: "diferencia",
    question: "¿Qué hace que este enfoque sea diferente a otros?",
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    answer: (
      <>
        A diferencia de los enfoques tradicionales que solo se centran en hablar del pasado, mi propuesta es pasar del <em>"¿Por qué me pasa esto?"</em> al <strong>"¿Cómo lo soluciono?"</strong>.
        <br /><br />
        Mi objetivo es brindarte un espacio de trabajo activo. No vienes solo a ser escuchado, sino a entrenar tu mente con herramientas y estrategias concretas que puedas aplicar de inmediato en tu vida real para generar cambios sostenibles.
      </>
    )
  },
  {
    id: "metodologia",
    question: "¿Qué metodologías se utilizan en las sesiones?",
    icon: <BrainCircuit size={24} strokeWidth={1.5} />,
    answer: (
      <>
        El trabajo se fundamenta en las <strong>Terapias Contextuales (Tercera Generación)</strong>, con un fuerte énfasis en:
        <ul className="list-disc pl-5 mt-3 space-y-2 text-stone-600">
          <li><strong>Mindfulness y Conciencia Plena.</strong></li>
          <li><strong>Terapia de Aceptación y Compromiso (ACT).</strong></li>
        </ul>
        <p className="mt-4">
            Estos métodos cuentan con el mayor respaldo científico en la actualidad para generar resultados sostenibles a largo plazo.
        </p>
      </>
    )
  },
  {
    id: "publico",
    question: "¿A quién va dirigido este servicio?",
    icon: <Target size={24} strokeWidth={1.5} />,
    answer: (
      <>
        Está diseñado para <strong>adultos, profesionales y estudiantes</strong> que lidian con altas exigencias en su día a día.
        <br /><br />
        Es el espacio ideal si sientes que el estrés te supera, si tus emociones toman el control, o si simplemente buscas un crecimiento personal profundo y estructurado.
      </>
    )
  },
  {
    id: "duracion",
    question: "¿Cuánto dura cada sesión y qué frecuencia tienen?",
    icon: <Clock size={24} strokeWidth={1.5} />,
    answer: (
      <>
        La salud mental no se trabaja con cronómetro en mano. Cada encuentro es una inmersión que dura entre <strong>60 y 90 minutos</strong>.
        <br /><br />
        Este margen de tiempo nos permite profundizar realmente en la raíz de la situación y estructurar soluciones efectivas desde el primer día. La frecuencia se acuerda según tus necesidades (semanal o quincenal).
      </>
    )
  },
  {
    id: "ubicacion",
    question: "¿Dónde es la consulta y qué horarios manejan?",
    icon: <Globe2 size={24} strokeWidth={1.5} />,
    answer: (
      <>
        Mi consultorio es <strong>100% Virtual</strong>. 
        <br /><br />
        Esto nos permite conectar desde la comodidad y privacidad de tu hogar u oficina, sin importar en qué ciudad o país te encuentres. Los horarios se coordinan directamente contigo para encontrar el espacio que mejor se adapte a tu rutina y zona horaria.
      </>
    )
  },
  {
    id: "costo",
    question: "¿Cuál es el valor de la inversión?",
    icon: <Wallet size={24} strokeWidth={1.5} />,
    answer: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-white border border-stone-100 p-5 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Colombia</p>
                <p className="text-2xl font-serif text-[#4a675e]">$130.000 <span className="text-sm font-sans text-stone-400">COP</span></p>
            </div>
            <div className="bg-white border border-stone-100 p-5 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Exterior</p>
                <p className="text-2xl font-serif text-[#4a675e]">$70 <span className="text-sm font-sans text-stone-400">USD</span></p>
            </div>
        </div>
        <p className="text-center text-xs text-stone-400 mt-4 font-light">
            * Consulta por los planes de acompañamiento continuo.
        </p>
      </>
    )
  },
  {
    id: "resultados",
    question: "¿Qué resultados puedo esperar del proceso?",
    icon: <SunMedium size={24} strokeWidth={1.5} />,
    answer: (
      <>
        El objetivo es que dejes de "sobrevivir" y empieces a vivir con intención. Al comprometerte con el proceso, lograrás:
        <ul className="list-disc pl-5 mt-3 space-y-2 text-stone-600">
          <li>Desarrollar una <strong>resiliencia activa</strong> frente a las crisis.</li>
          <li>Aprender a gestionar la ansiedad y la rumiación mental.</li>
          <li>Tomar decisiones desde la claridad y no desde el miedo o el desborde emocional.</li>
        </ul>
      </>
    )
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 relative bg-white selection:bg-amber-200 selection:text-[#4a675e]">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --- COLUMNA IZQUIERDA: STICKY HEADER --- */}
          <div className="lg:w-1/3 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[1px] bg-amber-500"></span>
                  <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase">
                    Transparencia Total
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif text-[#4a675e] leading-[1.1] mb-6">
                  Preguntas <span className="text-amber-500 italic">Frecuentes.</span>
                </h2>
                
                <p className="text-stone-500 font-light leading-relaxed mb-10 text-lg">
                  Entiendo que iniciar un proceso terapéutico genera dudas. Aquí tienes respuestas claras y directas sobre mi forma de trabajo, sin letra pequeña.
                </p>

                <div className="hidden lg:block p-8 bg-[#4a675e]/5 rounded-3xl border border-[#4a675e]/10">
                    <p className="text-sm text-[#4a675e] font-medium mb-6">¿Aún tienes dudas específicas sobre tu caso?</p>
                    <a 
                        href="https://wa.link/2x3i8s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#4a675e] hover:bg-[#384e47] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full justify-center group"
                    >
                        Escríbeme al WhatsApp
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: ACORDEÓN --- */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => toggleFAQ(item.id)}
                  className={`group cursor-pointer rounded-[2rem] border transition-all duration-500 overflow-hidden relative
                    ${isOpen 
                      ? "bg-white border-amber-200 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]" 
                      : "bg-stone-50/50 hover:bg-white border-stone-100 hover:border-amber-200/50 hover:shadow-md"
                    }
                  `}
                >
                  {/* Decoración lateral en estado activo */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400 transition-transform duration-500 origin-top
                    ${isOpen ? "scale-y-100" : "scale-y-0"}
                  `} />

                  {/* Header de la Pregunta */}
                  <div className="p-6 md:p-8 flex items-center gap-5 md:gap-6">
                    
                    {/* Icono */}
                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform-gpu
                      ${isOpen ? "bg-amber-100 text-amber-600 scale-110" : "bg-white text-stone-400 shadow-sm group-hover:text-[#4a675e]"}
                    `}>
                      {item.icon}
                    </div>

                    {/* Texto Pregunta */}
                    <div className="flex-grow pr-4">
                      <h3 className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-[#4a675e]" : "text-stone-700 group-hover:text-stone-900"}`}>
                        {item.question}
                      </h3>
                    </div>

                    {/* Botón +/- */}
                    <div className="shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 transform
                        ${isOpen ? "bg-[#4a675e] text-white rotate-180" : "bg-stone-100 text-stone-400 group-hover:bg-amber-100 group-hover:text-amber-600"}
                      `}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </div>

                  </div>

                  {/* Respuesta Desplegable */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Curva suave tipo Apple
                      >
                        <div className="px-6 pb-8 md:px-8 md:pl-[5.5rem] md:pb-10 text-stone-500 leading-relaxed text-base font-light">
                          <div className="border-t border-stone-100 pt-6">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

            {/* CTA Mobile (Aparece abajo si estás en celular) */}
            <div className="lg:hidden mt-8 p-8 bg-[#4a675e]/5 rounded-3xl border border-[#4a675e]/10 text-center">
                <p className="text-sm text-[#4a675e] font-medium mb-6">¿Aún tienes dudas específicas?</p>
                <a 
                    href="https://wa.link/2x3i8s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4a675e] text-white font-bold text-sm transition-all shadow-lg active:scale-95 w-full justify-center"
                >
                    Escríbeme al WhatsApp
                </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}