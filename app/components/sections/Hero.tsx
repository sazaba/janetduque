'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import HeroJanet from '@/app/assets/HeroJanet.webp'; 

// Hook personalizado para el efecto de escritura
function useTypewriter(text: string, speed: number, start: boolean) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!start || isComplete) return;

    let currentIndex = 0;
    const timeout = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timeout);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(timeout);
  }, [text, speed, start, isComplete]);

  return { displayedText, isComplete };
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fragmentos de texto para la animación en cadena
  const titlePart1 = "Encuentra el equilibrio y transforma tu forma de ";
  const titlePart2 = "vivir el presente";
  const textPart1 = "Un espacio terapéutico seguro, empático y profesional, diseñado para brindarte las herramientas que necesitas para alcanzar una ";
  const textPart2 = "tranquilidad duradera.";

  // Cadena de eventos: Cada uno empieza cuando termina el anterior
  const { displayedText: dispTitle1, isComplete: title1Done } = useTypewriter(titlePart1, 35, isMounted);
  const { displayedText: dispTitle2, isComplete: title2Done } = useTypewriter(titlePart2, 45, title1Done);
  // El párrafo va más rápido (15ms) para que el usuario no tenga que esperar demasiado
  const { displayedText: dispText1, isComplete: text1Done } = useTypewriter(textPart1, 15, title2Done); 
  const { displayedText: dispText2, isComplete: text2Done } = useTypewriter(textPart2, 40, text1Done);

  const handleScrollToEnfoque = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    const element = document.getElementById('proceso');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 lg:pt-32 pb-20 overflow-hidden w-full bg-transparent">
      
      {/* Luces de fondo */}
      <div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] bg-[#4a675e]/10 rounded-full blur-[100px] -z-10 pointer-events-none transform-gpu translate-z-0" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-amber-500/10 rounded-full blur-[120px] -z-10 pointer-events-none transform-gpu translate-z-0" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            
          {/* COLUMNA 1: TEXTO */}
          <div className={`text-center md:text-left z-10 relative transition-all duration-1000 ease-out transform-gpu ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
              
            {/* TÍTULO PRINCIPAL ANIMADO */}
            <div className="relative mb-6">
              {/* Texto Fantasma (Invisible) para mantener el layout estático y evitar saltos */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-tight leading-[1.15] font-serif invisible" aria-hidden="true">
                Encuentra el equilibrio y transforma tu forma de <br className="hidden lg:block" />
                <span className="relative inline-block italic mt-2 md:mt-0 px-1">vivir el presente</span>
              </h1>
              
              {/* Texto Real Escribiéndose */}
              <h1 className="absolute top-0 left-0 w-full text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-tight text-stone-800 leading-[1.15] font-serif">
                {dispTitle1}
                {title1Done && <br className="hidden lg:block" />}
                <span className="relative inline-block text-[#4a675e] italic mt-2 md:mt-0">
                  {dispTitle2}
                  {/* El SVG se dibuja (.animate-draw) sólo cuando termina de escribir la palabra */}
                  <svg className={`absolute w-full h-3 md:h-4 -bottom-1 left-0 text-amber-400 -z-10 opacity-60 ${title2Done ? 'animate-draw' : 'hidden'}`} viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                {/* Cursor parpadeante brutal para el título */}
                {!title2Done && isMounted && <span className="inline-block w-[3px] h-[0.9em] bg-[#4a675e] animate-pulse align-middle ml-1"></span>}
              </h1>
            </div>

            {/* PÁRRAFO DESCRIPTIVO ANIMADO */}
            <div className="relative mb-10 max-w-lg mx-auto md:mx-0">
              {/* Texto Fantasma */}
              <p className="text-lg md:text-xl leading-relaxed font-sans font-medium invisible" aria-hidden="true">
                Un espacio terapéutico seguro, empático y profesional, diseñado para brindarte las herramientas que necesitas para alcanzar una{' '}
                <span className="italic font-serif font-bold text-xl md:text-2xl px-1">tranquilidad duradera.</span>
              </p>

              {/* Texto Real Escribiéndose */}
              <p className="absolute top-0 left-0 w-full text-lg md:text-xl text-stone-600 leading-relaxed font-sans font-medium">
                {dispText1}
                {title2Done && (
                  <span className="relative inline-block text-[#4a675e] italic font-serif font-bold text-xl md:text-2xl px-1">
                    {dispText2}
                    <svg className={`absolute w-full h-2 md:h-3 -bottom-0.5 left-0 text-amber-400 -z-10 opacity-60 ${text2Done ? 'animate-draw' : 'hidden'}`} viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
                {/* Cursor del párrafo */}
                {title2Done && !text2Done && <span className="inline-block w-[2px] h-[0.9em] bg-stone-400 animate-pulse align-middle ml-1"></span>}
              </p>
            </div>

            {/* Botones de Acción */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center transition-all duration-1000 ${text1Done ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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