"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe2, Laptop, ShieldCheck, Coffee, ArrowRight } from "lucide-react";
import createGlobe from "cobe";

// --- DATOS DE LOS BENEFICIOS VIRTUALES ---
const VIRTUAL_BENEFITS = [
  {
    id: "comfort",
    icon: <Coffee size={24} />,
    title: "Desde tu Refugio",
    description: "Conéctate desde la comodidad de tu hogar, tu oficina o durante un viaje. Tu espacio, tus reglas."
  },
  {
    id: "time",
    icon: <Laptop size={24} />,
    title: "Optimización de Tiempo",
    description: "Cero tráfico, cero estrés por desplazamientos. Integrar la terapia en tu agenda nunca fue tan sencillo."
  },
  {
    id: "privacy",
    icon: <ShieldCheck size={24} />,
    title: "Privacidad Absoluta",
    description: "Plataformas encriptadas y seguras para garantizar que nuestra conversación sea un espacio 100% confidencial."
  }
];

// --- COMPONENTE DEL GLOBO 3D (100% Responsive & Tamaño Ajustable) ---
const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 4.7; // Rotación inicial centrada en Colombia
    let width = 0;

    // FIX MÓVIL: Calculamos el ancho real del contenedor en la pantalla
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize(); // Llamada inicial

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2, // Ancho inicial dinámico
      height: width * 2, // Alto inicial dinámico
      phi: 0,
      theta: 0.15,
      dark: 0, 
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 6,
      // CONVERSIÓN EXACTA: Verde #4a675e a RGB normalizado
      baseColor: [0.29, 0.40, 0.37], 
      // CONVERSIÓN EXACTA: Dorado amber-400 a RGB normalizado
      markerColor: [0.98, 0.75, 0.14], 
      glowColor: [0.29, 0.40, 0.37], 
      markers: [
        // Marcador en Pereira
        { location: [4.8133, -75.6961], size: 0.1 } 
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003; 
        
        // FIX MÓVIL: Mantiene la proporción correcta en WebGL en cada frame
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
        width: "100%", // Obliga al canvas a respetar el contenedor
        height: "auto",
        aspectRatio: "1/1",
      }}
      className="mx-auto cursor-grab active:cursor-grabbing relative z-10 drop-shadow-2xl"
    />
  );
};


export default function VirtualLocation() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#4a675e] selection:bg-amber-400 selection:text-[#4a675e]">
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#4a675e] to-transparent blur-[100px]" />
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
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[1px] bg-amber-500"></span>
                  <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase flex items-center gap-2">
                    <Globe2 size={14} />
                    Consultorio Global
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6">
                  Tu bienestar no tiene <span className="text-amber-400 italic">fronteras.</span>
                </h2>
                
                <p className="text-white/80 font-light text-lg mb-10 leading-relaxed">
                  La terapia debe adaptarse a tu vida, no al revés. A través de mi consultorio 100% virtual, te brindo un espacio de contención profesional y cálido, sin importar en qué lugar del mundo te encuentres.
                </p>
            </motion.div>

            {/* Lista de Beneficios */}
            <div className="flex flex-col gap-8 mb-10">
                {VIRTUAL_BENEFITS.map((benefit, index) => (
                    <motion.div
                        key={benefit.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                        className="flex items-start gap-5 group"
                    >
                        {/* Hover usa el verde #4a675e */}
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-[#4a675e] transition-colors duration-300 transform-gpu shrink-0">
                            {benefit.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-white mb-1">
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
              {/* Botón con texto #4a675e */}
              <a 
                  href="https://wa.link/2x3i8s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-[#4a675e] font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(251,191,36,0.2)] w-fit"
              >
                  Agendar Sesión Virtual
                  <ArrowRight size={20} />
              </a>
            </motion.div>

        </div>

        {/* --- COLUMNA DERECHA: GLOBO 3D INMENSO --- */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full min-h-[400px]">
            
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: "easeOut" }}
               // UPGRADE: max-w-[400px] en móvil para controlarlo, scale-125 y traslación en desktop para hacerlo masivo
               className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-none lg:w-full lg:scale-125 lg:-ml-12 flex items-center justify-center"
            >
                {/* Aura de luz */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-amber-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" />
                
                <Globe />

            </motion.div>

        </div>

      </div>
    </section>
  );
}