'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import HeroJanet from '@/app/assets/HeroJanet.webp'; 

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // Activador de animaciones al cargar la página
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToEnfoque = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    const element = document.getElementById('proceso');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // CORRECCIÓN AQUÍ: pt-28 para móviles, md:pt-32 para tablets, lg:pt-32 para escritorio
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 lg:pt-32 pb-20 overflow-hidden w-full bg-transparent">
      
      {/* OPTIMIZACIÓN SAFARI 1: Luces de fondo con translate3d para evitar parpadeos (flickering) en iOS */}
      <div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] bg-[#4a675e]/10 rounded-full blur-[100px] -z-10 pointer-events-none transform-gpu translate-z-0" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-amber-500/10 rounded-full blur-[120px] -z-10 pointer-events-none transform-gpu translate-z-0" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* COLUMNA 1: TEXTO */}
            <div className={`text-center md:text-left z-10 relative transition-all duration-1000 ease-out transform-gpu ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                
                {/* Título Principal */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-tight text-stone-800 mb-6 leading-[1.15] font-serif">
                    Encuentra el equilibrio y transforma tu forma de <br className="hidden lg:block" />
                    <span className="relative inline-block text-[#4a675e] italic mt-2 md:mt-0">
                        vivir el presente
                        {/* Subrayado SVG dorado optimizado */}
                        <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-amber-400 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                        </svg>
                    </span>
                </h1>

                {/* Párrafo Descriptivo */}
                <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans font-medium">
                    Un espacio terapéutico seguro, empático y profesional, diseñado para brindarte las herramientas que necesitas para alcanzar una{' '}
                    <span className="relative group inline-block whitespace-nowrap">
                        <span className="relative z-10 font-serif italic font-bold text-amber-600 text-xl md:text-2xl px-1">
                            tranquilidad duradera.
                        </span>
                        <span className="absolute bottom-1 left-0 w-full h-2 bg-amber-100 -z-0 transition-all duration-300 group-hover:h-full group-hover:bottom-0 rounded-sm"></span>
                    </span>
                </p>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                    <a 
                        href="https://wa.link/6vc76u" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#2b3d38] font-bold text-lg overflow-hidden shadow-xl shadow-amber-500/20 w-full sm:w-auto text-center cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-0"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Agendar mi primera sesión
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[#2b3d38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-amber-300/50"></div>
                    </a>
                    
                    <a 
                        href="#proceso" 
                        onClick={handleScrollToEnfoque} 
                        className="cursor-pointer px-8 py-4 rounded-full border-2 border-stone-200 hover:border-amber-400 bg-transparent text-stone-600 hover:text-[#4a675e] font-bold transition-colors w-full sm:w-auto text-center"
                    >
                        Descubrir mi enfoque
                    </a>
                </div>
            </div>

            {/* COLUMNA 2: IMAGEN */}
            <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out transform-gpu mt-8 md:mt-0 ${
              isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
                
                {/* Círculo de fondo detrás de la psicóloga */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#4a675e]/20 to-amber-200/30 rounded-full -z-10"></div>

                <div className="relative w-full max-w-[450px] aspect-[4/5] md:aspect-auto md:h-[600px]"> 
                    <Image
                        src={HeroJanet} 
                        alt="Psicóloga Janet Duque"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] mask-image-safe" 
                        priority={true} 
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}