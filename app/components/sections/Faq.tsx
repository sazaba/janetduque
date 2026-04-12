"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  Sparkles, 
  Target, 
  Users,
  Briefcase,
  Plus, 
  Minus,
  ArrowRight
} from "lucide-react";

const faqData = [
  {
    id: "profesional",
    question: "¿Quién lidera los procesos y cuál es su experiencia?",
    icon: <UserCheck size={24} strokeWidth={1.5} />,
    answer: (
      <>
        Soy <strong>Janet Duque</strong>, psicóloga, conferencista en bienestar emocional, especialista en Gerencia del Talento Humano y especialista en Gerencia en Seguridad y Salud en el Trabajo.
        <br /><br />
        Además, estoy certificada como <strong>Master Speaker International</strong> por la International Coaching & Speaker Federation de México. Mi perfil me permite unir la profundidad del enfoque clínico con la visión estratégica y de resultados del entorno empresarial.
      </>
    )
  },
  {
    id: "publico",
    question: "¿Para quién están diseñados exactamente estos servicios?",
    icon: <Users size={24} strokeWidth={1.5} />,
    answer: (
      <>
        Cuento con un acompañamiento dual diseñado para generar impacto real en dos escenarios:
        <br /><br />
        <span className="text-[#4a675e] font-semibold tracking-wide">PARA MUJERES:</span> A ti, que por fuera pareces fuerte, responsable, "la que puede con todo", pero por dentro sientes un cansancio que no se quita durmiendo. A ti, que sostienes a otros mientras te vas dejando siempre para después.
        <br /><br />
        <span className="text-[#4a675e] font-semibold tracking-wide">PARA EMPRESAS:</span> Organizaciones que están perdiendo dinero a causa de personas agotadas. Enfocado en combatir el ausentismo, el bajo rendimiento, el estrés laboral, los conflictos internos y la rotación de personal.
      </>
    )
  },
  {
    id: "metodologia",
    question: "¿Cuál es el diferencial y la metodología que utilizamos?",
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    answer: (
      <>
        Mi enfoque se basa en intervenciones emocionales con un carácter <strong>terapéutico + práctico</strong>.
        <br /><br />
        A nivel personal, mi propósito no es que "aguanten más", sino que vuelvan a escucharse, suelten la carga que no les corresponde y aprendan a decir "no" sin culpa. Porque el verdadero cambio no está en hacer más, está en dejar de abandonarte.
        <br /><br />
        A nivel empresarial, no ofrecemos una simple capacitación, sino experiencias vivenciales que incluyen Inteligencia Emocional aplicada, resolución de conflictos y nuestro sello único: el <strong>Método RISOTA®</strong> (emoción + risa + conciencia).
      </>
    )
  },
  {
    id: "resultados",
    question: "¿Qué resultados tangibles se logran tras la intervención?",
    icon: <Target size={24} strokeWidth={1.5} />,
    answer: (
      <>
        <span className="text-[#4a675e] font-semibold tracking-wide">VIDA PERSONAL:</span> Logras calmar esa mente que nunca descansa, sentirte en paz, habitarte y vivir con sentido. Es una transformación integral estructurada bajo mi filosofía <em>Del Ser al Hacer</em>.
        <br /><br />
        <span className="text-[#4a675e] font-semibold tracking-wide">ENTORNO ORGANIZACIONAL:</span> Transformamos el agotamiento emocional en bienestar, compromiso y resultados medibles. Ayudo a las empresas a disminuir el desgaste emocional de sus colaboradores, lo que se traduce en mayor productividad, mejor clima laboral y un liderazgo más humano y efectivo.
      </>
    )
  },
  {
    id: "programas",
    question: "¿Cómo se estructuran los programas corporativos?",
    icon: <Briefcase size={24} strokeWidth={1.5} />,
    answer: (
      <>
        Sabemos que <em>no hay resultados sostenibles en una empresa si las personas están emocionalmente agotadas</em>. Por eso, diseñamos opciones premium listas para implementar:
        <ul className="list-none pl-0 mt-4 space-y-3 text-stone-600">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> <strong>Liderazgo con Emoción y Acción</strong></li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> <strong>Empresas emocionalmente sostenibles</strong></li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> <strong>Del desgaste emocional al bienestar productivo</strong></li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> <strong>Del Ser al Hacer en la organización</strong></li>
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
    <section id="faq" className="py-24 md:py-32 px-6 relative bg-[#FAFAFA] selection:bg-[#4a675e]/20 selection:text-[#4a675e]">
      
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
                  <span className="w-8 h-[1px] bg-[#4a675e]"></span>
                  <span className="text-[#4a675e] font-bold tracking-[0.25em] text-xs uppercase">
                    Claridad Total
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-[1.1] mb-6">
                  Preguntas <span className="text-[#4a675e] italic">Frecuentes.</span>
                </h2>
                
                <p className="text-stone-500 font-light leading-relaxed mb-10 text-lg">
                  Respuestas directas sobre mi metodología, enfoque y cómo podemos estructurar una transformación emocional real para ti o para tu empresa.
                </p>

                <div className="hidden lg:block p-8 bg-white rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <p className="text-sm text-stone-600 font-medium mb-6">¿Quieres conversar sobre tu caso o tu equipo?</p>
                    <a 
                        href="https://wa.link/2x3i8s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#4a675e] hover:bg-[#384e47] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full justify-center group"
                    >
                        Contactar por WhatsApp
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
                  className={`group cursor-pointer rounded-2xl md:rounded-[2rem] border transition-all duration-500 overflow-hidden relative bg-white
                    ${isOpen 
                      ? "border-[#4a675e]/20 shadow-[0_20px_40px_-15px_rgba(74,103,94,0.1)]" 
                      : "border-stone-100 hover:border-[#4a675e]/30 hover:shadow-sm"
                    }
                  `}
                >
                  {/* Decoración lateral en estado activo */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#4a675e] transition-transform duration-500 origin-top
                    ${isOpen ? "scale-y-100" : "scale-y-0"}
                  `} />

                  {/* Header de la Pregunta */}
                  <div className="p-6 md:p-8 flex items-center gap-5 md:gap-6">
                    
                    {/* Icono */}
                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform-gpu
                      ${isOpen ? "bg-[#4a675e]/10 text-[#4a675e] scale-110" : "bg-stone-50 text-stone-400 group-hover:text-[#4a675e]"}
                    `}>
                      {item.icon}
                    </div>

                    {/* Texto Pregunta */}
                    <div className="flex-grow pr-4">
                      <h3 className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-stone-900" : "text-stone-700 group-hover:text-stone-900"}`}>
                        {item.question}
                      </h3>
                    </div>

                    {/* Botón +/- */}
                    <div className="shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 transform
                        ${isOpen ? "bg-[#4a675e] text-white rotate-180" : "bg-stone-50 text-stone-400 group-hover:bg-[#4a675e]/10 group-hover:text-[#4a675e]"}
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
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
            <div className="lg:hidden mt-8 p-8 bg-white rounded-3xl border border-stone-100 shadow-sm text-center">
                <p className="text-sm text-stone-600 font-medium mb-6">¿Aún tienes dudas específicas?</p>
                <a 
                    href="https://wa.link/2x3i8s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4a675e] text-white font-semibold text-sm transition-all shadow-md active:scale-95 w-full justify-center"
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