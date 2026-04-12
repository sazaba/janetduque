"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe2, Laptop, ShieldCheck, Coffee, ArrowRight } from "lucide-react";
import createGlobe from "cobe";

// --- DATOS DE LOS BENEFICIOS VIRTUALES ---
const VIRTUAL_BENEFITS = [
  {
    id: "comfort",
    icon: <Coffee size={22} />,
    title: "Desde tu Refugio",
    description: "Conéctate desde la comodidad de tu hogar u oficina. Tu espacio, tus reglas."
  },
  {
    id: "time",
    icon: <Laptop size={22} />,
    title: "Optimización de Tiempo",
    description: "Cero tráfico, cero estrés por desplazamientos. Integrar la terapia es sencillo."
  },
  {
    id: "privacy",
    icon: <ShieldCheck size={22} />,
    title: "Privacidad Absoluta",
    description: "Plataformas encriptadas para garantizar un espacio 100% confidencial."
  }
];

// --- COMPONENTE DEL GLOBO 3D ---
const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 4.7; // Rotación inicial centrada en Colombia
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize(); 

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2, 
      height: width * 2, 
      phi: 0,
      theta: 0.15,
      dark: 0, 
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 6,
      // CONVERSIÓN: Verde #4a675e
      baseColor: [0.29, 0.40, 0.37], 
      // CONVERSIÓN: Dorado amber-400
      markerColor: [0.98, 0.75, 0.14], 
      // CONVERSIÓN: Verde #4a675e para un aura limpia
      glowColor: [0.29, 0.40, 0.37], 
      markers: [
        // Marcador en Pereira, Colombia
        { location: [4.8133, -75.6961], size: 0.08 } 
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003; 
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: "1/1",
      }}
      className="mx-auto cursor-grab active:cursor-grabbing relative z-10 opacity-90 transition-opacity duration-500 hover:opacity-100"
    />
  );
};

export default function VirtualLocation() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#4a675e] selection:bg-amber-400 selection:text-[#4a675e]">
      
      {/* Luz de fondo sutil premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* --- COLUMNA IZQUIERDA: CONTENIDO --- */}
        <div className="lg:col-span-6 flex flex-col justify-center text-white relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-amber-400/60"></span>
                  <span className="text-amber-400 font-semibold tracking-[0.2em] text-xs uppercase flex items-center gap-2">
                    <Globe2 size={16} />
                    Consultorio Global
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6">
                  Tu bienestar no tiene <span className="text-amber-400 italic">fronteras.</span>
                </h2>
                
                <p className="text-white/80 font-light text-lg mb-12 leading-relaxed">
                  La terapia debe adaptarse a tu vida, no al revés. A través de mi consultorio 100% virtual, te brindo un espacio de contención profesional y cálido, sin importar en qué lugar del mundo te encuentres.
                </p>
            </motion.div>

            {/* Lista de Beneficios con diseño Glassmorphism */}
            <div className="flex flex-col gap-6 mb-12">
                {VIRTUAL_BENEFITS.map((benefit, index) => (
                    <motion.div
                        key={benefit.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                        className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-colors duration-300 group backdrop-blur-sm"
                    >
                        <div className="p-3 rounded-xl bg-[#3e564e] text-amber-400 group-hover:scale-110 transition-transform duration-300 transform-gpu shrink-0 shadow-inner">
                            {benefit.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-serif font-bold text-white mb-1 tracking-wide">
                                {benefit.title}
                            </h3>
                            <p className="text-white/70 font-light text-sm md:text-base leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                  href="https://wa.link/2x3i8s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-[#4a675e] font-bold text-sm tracking-wide transition-all hover:bg-amber-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(251,191,36,0.25)] w-fit"
              >
                  Agendar Sesión Virtual
                  <ArrowRight size={18} />
              </a>
            </motion.div>

        </div>

        {/* --- COLUMNA DERECHA: GLOBO 3D --- */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full min-h-[400px]">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative w-full max-w-[450px] lg:max-w-none lg:w-[120%] flex items-center justify-center"
            >
                {/* Aura detrás del globo para resaltar el modelo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />
                
                <Globe />
            </motion.div>
        </div>

      </div>
    </section>
  );
}