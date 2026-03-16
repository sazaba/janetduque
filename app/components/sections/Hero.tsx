'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';
import HeroJanet from '@/app/assets/HeroJanet.webp'; 

export default function Hero() {
  
  const handleScrollToEnfoque = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    const element = document.getElementById('proceso');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90dvh] flex items-center pt-28 md:pt-32 lg:pt-32 pb-20 overflow-hidden w-full bg-transparent">
      
      {/* Luces de fondo (Optimizadas con Radial Gradient en lugar de blur) */}
      <div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(74,103,94,0.1)_0%,_transparent_60%)] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(245,158,11,0.1)_0%,_transparent_60%)] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            
          {/* COLUMNA 1: TEXTO (Animaciones puras de CSS con Tailwind) */}
          <div className="text-center md:text-left z-10 relative animate-[fadeInUp_1s_ease-out_forwards]">
              
            {/* TÍTULO PRINCIPAL REDUCIDO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-tight text-stone-800 leading-[1.15] mb-6 relative">
              Encuentra tu equilibrio y vuelve a <br className="hidden lg:block" />
              
              <span className="relative inline-block mt-2 md:mt-0 whitespace-nowrap">
                <span className="invisible px-1 italic">vivir el presente</span>
                
                <span className="absolute top-0 left-0 px-1 italic text-[#4a675e] w-full h-full animate-[textReveal_1s_ease-out_0.4s_forwards] opacity-0">
                  vivir el presente
                </span>
                
                <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-amber-400 -z-10 opacity-0 animate-[draw_1s_ease-out_1.2s_forwards]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* PÁRRAFO DESCRIPTIVO REDUCIDO */}
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium mb-10 max-w-lg mx-auto md:mx-0 relative">
              Un espacio seguro y profesional donde encontrarás las herramientas para construir tu{' '}
              
              <span className="relative inline-block font-bold text-xl md:text-2xl whitespace-nowrap">
                 <span className="invisible px-1 italic">tranquilidad duradera.</span>
                 
                 <span className="absolute top-0 left-0 px-1 italic text-[#4a675e] w-full h-full animate-[textReveal_1s_ease-out_1.6s_forwards] opacity-0">
                   tranquilidad duradera.
                 </span>
                 
                 <svg className="absolute w-full h-2 md:h-3 -bottom-0.5 left-0 text-amber-400 -z-10 opacity-0 animate-[draw_1s_ease-out_2.4s_forwards]" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                 </svg>
              </span>
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center opacity-0 animate-[fadeInUp_1s_ease-out_2.6s_forwards]">
              <a 
                href="https://wa.link/6vc76u" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#2b3d38] font-bold text-lg overflow-hidden shadow-lg shadow-amber-500/10 w-full sm:w-auto text-center cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-0"
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

          {/* COLUMNA 2: IMAGEN (Optimizada sin drop-shadow pesado) */}
          <div className="relative flex justify-center lg:justify-end mt-8 md:mt-0 opacity-0 animate-[fadeInRight_1s_ease-out_0.3s_forwards]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#4a675e]/20 to-amber-200/30 rounded-full -z-10"></div>
            <div className="relative w-full max-w-[450px] aspect-[4/5] md:aspect-auto md:h-[600px]"> 
              <Image
                src={HeroJanet} 
                alt="Psicóloga Janet Duque"
                fill
                className="object-contain object-bottom [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] mask-image-safe" 
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