"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Award, Quote, Sparkles } from "lucide-react";

// Importe corregido con el nuevo nombre
import janetprofessional from "../../assets/janetprofessional.webp"; 

const credentials = [
  {
    icon: <Award size={28} strokeWidth={1.5} />,
    title: "18 Años de Experiencia",
    text: "Trayectoria clínica consolidada acompañando procesos de transformación profunda y bienestar integral.",
  },
  {
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    title: "Universidad Libre de Pereira",
    text: "Psicóloga egresada con un sólido fundamento ético y científico en el abordaje del comportamiento humano.",
  },
  {
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    title: "Terapias de 3ra Generación",
    text: "Diplomado especializado. Enfoque en mindfulness, aceptación y compromiso (ACT) para resultados sostenibles.",
  }
];

export default function ProfessionalProfile() {
  return (
    <section 
      id="sobre-mi" 
      className="py-24 md:py-32 px-6 bg-[#fcfdfa] relative overflow-hidden selection:bg-amber-200 selection:text-[#2b3d38]"
    >
      
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#2b3d38]/5 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* --- COLUMNA IZQUIERDA: IMAGEN EDITORIAL --- */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-full lg:mx-0">
            
            {/* Marco dorado decorativo de fondo */}
            <motion.div 
              className="absolute -inset-4 md:-inset-6 border border-amber-500/30 rounded-t-full rounded-b-[3rem] z-0 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.div 
                className="relative rounded-t-full rounded-b-[3rem] overflow-hidden aspect-[4/5] group transform-gpu shadow-2xl shadow-[#2b3d38]/10 bg-stone-100 z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Variable de imagen actualizada */}
                <Image 
                    src={janetprofessional} 
                    alt="Dra. Janet Maritza Duque - Psicóloga Clínica"
                    fill
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                    priority={false} 
                    placeholder="blur"
                />
                
                {/* Overlay sutil para elegancia */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3d38]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>

            {/* --- SELLO DE ORO FLOTANTE (18 Años) --- */}
            <motion.div 
              className="absolute -bottom-8 -right-4 md:-right-12 z-20 bg-[#2b3d38] p-6 rounded-full w-36 h-36 flex flex-col items-center justify-center text-center shadow-xl border-4 border-[#fcfdfa] transform-gpu"
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <Sparkles className="text-amber-400 mb-1" size={20} />
              <span className="text-3xl font-serif text-white leading-none mb-1">18</span>
              <span className="text-[10px] text-amber-200 uppercase tracking-widest font-bold leading-tight">
                Años de<br/>Experiencia
              </span>
            </motion.div>
          
        </div>

        {/* --- COLUMNA DERECHA: CONTENIDO Y CREDENCIALES --- */}
        <div className="lg:col-span-7 mt-8 lg:mt-0 lg:pl-8">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[1px] bg-amber-500"></span>
                  <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase">
                    Conoce a tu Especialista
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2b3d38] mb-4 leading-tight">
                  Dra. Janet Maritza Duque
                </h2>
                <h3 className="text-xl md:text-2xl text-stone-500 font-serif italic mb-8">
                  Psicóloga Clínica
                </h3>
            </motion.div>

            <motion.div 
                className="prose prose-stone text-stone-600 mb-12 leading-relaxed text-base md:text-lg font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <p className="mb-4">
                  El verdadero cambio comienza cuando decides dejar de sobrevivir y empiezas a comprenderte. A lo largo de mi trayectoria clínica, he comprobado que el dolor emocional no es una debilidad, sino una señal de que algo en tu interior pide ser atendido.
                </p>
                <p>
                  Mi compromiso es brindarte un espacio seguro, estructurado y libre de juicios. Un lugar donde la experiencia clínica se une con la empatía más profunda para trazar una ruta clara hacia tu bienestar mental y emocional.
                </p>
            </motion.div>

            {/* --- LISTA DE CREDENCIALES PREMIUM --- */}
            <div className="flex flex-col gap-6 md:gap-8 mb-12 relative">
                {/* Línea conectora vertical sutil */}
                <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-amber-200/50 hidden md:block" />

                {credentials.map((cred, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row gap-5 items-start relative z-10 group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    >
                        {/* ICONO DORADO */}
                        <div className="w-12 h-12 rounded-full bg-white border border-amber-200 shadow-sm flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-50 group-hover:scale-110 transition-all duration-300 transform-gpu z-10 relative">
                            {cred.icon}
                        </div>
                        
                        {/* TEXTO */}
                        <div className="mt-1">
                            <h4 className="font-serif font-bold text-[#2b3d38] text-lg mb-1">
                                {cred.title}
                            </h4>
                            <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light">
                                {cred.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* --- CITA FINAL (ESTILO FIRMA) - CORREGIDA --- */}
            <motion.div 
                className="relative pl-8 border-l-2 border-amber-400"
                // Aquí estaba el error. Ahora entra sutilmente desde la izquierda.
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <Quote className="absolute -top-2 -left-3 text-[#fcfdfa] bg-amber-400 rounded-full p-1" size={24} />
                <p className="text-[#2b3d38] font-serif text-lg md:text-xl leading-relaxed">
                  "No se trata de borrar tu historia, sino de aprender a leerla con nuevos ojos para que deje de doler y empiece a impulsarte."
                </p>
            </motion.div>

        </div>

      </div>
    </section>
  );
}