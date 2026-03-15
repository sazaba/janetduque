"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import google from "@/app/assets/logo.svg";

const reviews = [
  {
    id: 1,
    name: "Johana Fernández Restrepo",
    date: "Hace 2 semanas",
    text: "Excelente su trabajo 👌 trabajando no solo la mente sino también las emociones y lo que esto genera en el cuerpo, ayudando a llegar a un propósito de vida.",
    rating: 5,
    color: "bg-[#4a675e]" 
  },
  {
    id: 2,
    name: "Pilar Gutierrez Tabares",
    date: "Hace 3 meses",
    text: "En varias ocasiones que he requerido los servicios profesionales de la Dra. Janet, mis clientes han quedado satisfechos con los resultados de su trabajo.",
    rating: 5,
    color: "bg-amber-500" 
  },
  {
    id: 3,
    name: "Gladis Toro L",
    date: "Hace 2 meses",
    text: "Excelente profesional, sus técnicas son maravillosas, me ayudó mucho durante todo mi proceso. La recomiendo.",
    rating: 5,
    color: "bg-stone-700" 
  },
  {
    id: 4,
    name: "Edwin Gaviria Cárdenas",
    date: "Hace 2 meses",
    text: "Una experiencia grata y útil para mi bienestar integral con la profesional Janet!",
    rating: 5,
    color: "bg-[#384e47]" 
  },
  {
    id: 5,
    name: "Mauricio",
    date: "Hace 3 semanas",
    text: "Un servicio que puede ayudar a mejorar tu vida para el presente y futuro. Gracias.",
    rating: 5,
    color: "bg-amber-600"
  },
  {
    id: 6,
    name: "Nathaly Gil",
    date: "Hace 3 meses",
    text: "Súper recomendada, muy buena profesional.",
    rating: 5,
    color: "bg-stone-600"
  }
];

const infiniteReviews = [...reviews, ...reviews];

// La conexión al backend (dbReviewCount) se mantiene intacta aquí
interface TestimonialsProps {
  dbReviewCount?: number;
}

export default function Testimonials({ dbReviewCount = 88 }: TestimonialsProps) {
  return (
    <section className="py-24 md:py-32 relative w-full overflow-hidden bg-[#fcfdfa] selection:bg-amber-200 selection:text-[#4a675e]">
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* --- CABECERA (TÍTULO Y CAJA DE GOOGLE) --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-10 w-full">
            
            {/* Izquierda: Títulos */}
            <motion.div 
                className="max-w-2xl w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[1px] bg-amber-500"></span>
                  <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase">
                    Experiencias Reales
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4a675e] leading-tight mb-6">
                    Historias de <span className="text-amber-500 italic">transformación.</span>
                </h2>
                <p className="text-stone-500 text-lg font-light leading-relaxed">
                    El mayor respaldo de mi trabajo es el bienestar recuperado de quienes han confiado en este proceso. Estas son algunas de sus palabras.
                </p>
            </motion.div>

            {/* Derecha: Google Badge Premium (AJUSTADO PARA MÓVILES) */}
            <motion.div 
                /* Se agregó self-center en móvil y self-auto en escritorio, además de un max-w para que no se deforme */
                className="shrink-0 relative group w-full max-w-[320px] sm:max-w-[360px] self-center lg:self-auto lg:w-auto mx-auto lg:mx-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white border border-amber-100 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center w-full">
                    
                    <div className="mb-4 relative w-24 h-8 opacity-90 hover:opacity-100 transition-opacity">
                        <Image src={google} alt="Google Logo" fill className="object-contain" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-4xl font-serif font-bold text-[#4a675e]">5.0</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} className="text-amber-400 fill-amber-400 drop-shadow-sm" />
                            ))}
                        </div>
                    </div>
                    
                    <p className="text-stone-500 font-light text-sm mb-6">
                        Basado en <strong className="text-[#4a675e] font-semibold">{dbReviewCount} reseñas</strong>
                    </p>

                    <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#4a675e] hover:bg-[#384e47] text-white text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Ver en Google
                        <ArrowRight size={16} />
                    </a>
                </div>
            </motion.div>

        </div>
      </div>

      {/* --- SLIDER DE RESEÑAS INFINITO --- */}
      <div className="w-full max-w-full overflow-hidden relative z-10">
        <div 
            className="relative w-full overflow-hidden py-8"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
        >
            <motion.div 
                className="flex gap-6 md:gap-8 w-max px-4"
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                whileHover={{ animationPlayState: "paused" }} 
            >
                {infiniteReviews.map((review, index) => (
                    <div 
                        key={`${review.id}-${index}`} 
                        className="w-[300px] sm:w-[360px] md:w-[420px] flex-shrink-0 bg-white p-8 md:p-10 rounded-[2rem] border border-stone-100 relative group hover:border-amber-200 hover:shadow-[0_20px_40px_-15px_rgba(74,103,94,0.1)] transition-all duration-500 flex flex-col"
                    >
                        <Quote className="absolute top-8 right-8 text-amber-500/10 w-24 h-24 rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0" />

                        <div className="flex items-center gap-2 mb-6 relative z-10">
                            <div className="flex gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <CheckCircle2 size={16} className="text-[#4a675e] ml-2 opacity-80" />
                            <span className="text-xs text-[#4a675e] font-semibold opacity-80">Verificada</span>
                        </div>

                        <p className="text-stone-600 leading-relaxed mb-10 font-light text-base md:text-lg min-h-[100px] relative z-10">
                            "{review.text}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto relative z-10">
                            <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-serif text-xl shrink-0 shadow-md`}>
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-base font-bold text-[#4a675e] leading-tight line-clamp-1">{review.name}</p>
                                <p className="text-sm text-stone-400 mt-1 font-light">{review.date}</p>
                            </div>
                            <div className="ml-auto opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.5 12.28c0-.86-.07-1.7-.22-2.5H12v4.86h6.47c-.28 1.48-1.12 2.73-2.4 3.58v3h3.86c2.26-2.09 3.57-5.17 3.57-8.94z" fill="#4285F4"/>
                                    <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.3v3.12C3.32 21.43 7.37 24 12 24z" fill="#34A853"/>
                                    <path d="M5.27 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.6H1.3A11.97 11.97 0 000 12c0 1.93.47 3.76 1.3 5.4l3.97-3.12z" fill="#FBBC05"/>
                                    <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.32 2.57 1.3 6.6l3.97 3.12c.95-2.85 3.6-4.96 6.73-4.96z" fill="#EA4335"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}