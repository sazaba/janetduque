"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "@/public/Logo.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- OPTIMIZACIÓN 1: Scroll Listener Pasivo y Eficiente ---
  useEffect(() => {
    const handleScroll = () => {
      const scrolledNow = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolledNow ? scrolledNow : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. BLOQUEO DE SCROLL EN BODY
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Acerca de Mí", href: "#sobre-mi" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Blog", href: "#blog" }, 
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 
    
    const targetId = href.replace("#", "");
    setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const headerOffset = 80; 
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
    }, 100); 
  };

  // --- ESTILOS DINÁMICOS PARA EL CONTRASTE ---
  const isDarkBg = isScrolled || isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b will-change-transform ${
          isDarkBg 
            ? "bg-[#4a675e]/95 backdrop-blur-md border-[#3a524a] shadow-lg py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          
          {/* LOGO MEJORADO (Burbuja Blanca) */}
          <Link href="#inicio" onClick={(e) => handleScrollToSection(e, "#inicio")} className="relative z-50 flex items-center gap-3 group shrink-0 outline-none">
            <div className="relative w-11 h-11 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-105 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-stone-100/50 overflow-hidden shrink-0">
              <Image 
                src={logoImg} 
                alt="Logo Psicóloga Janet Duque" 
                fill 
                className="object-contain p-1.5"
                priority
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>
            
            <div className="leading-tight hidden sm:block">
              <span className={`block font-bold tracking-wide text-sm md:text-base font-serif transition-colors duration-300 ${
                isDarkBg ? "text-white group-hover:text-amber-300" : "text-stone-800 group-hover:text-[#4a675e]"
              }`}>
                Janet Duque
              </span>
              <span className={`block text-xs font-medium tracking-wider font-sans transition-colors duration-300 ${
                isDarkBg ? "text-amber-300/90" : "text-amber-600"
              }`}>
                Psicóloga
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className={`text-sm font-bold transition-colors relative group tracking-wide font-sans cursor-pointer ${
                    isDarkBg ? "text-stone-100 hover:text-amber-300" : "text-stone-600 hover:text-[#4a675e]"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              ))}
            </div>
            
            <a
              href="https://wa.link/6vc76u"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ring-1 ${
                isDarkBg 
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-[#2b3d38] hover:from-amber-300 hover:to-amber-400 ring-amber-300/50" 
                  : "bg-[#4a675e] hover:bg-[#384e47] text-white ring-[#4a675e]/30"
              }`}
            >
              Solicitar Información
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${
                isDarkBg ? "text-[#2b3d38]" : "text-amber-400"
              }`} />
            </a>
          </div>

          {/* MOBILE TOGGLE (Siempre visible y accesible) */}
          <button
            aria-label="Toggle Menu"
            className={`md:hidden relative z-50 p-2 rounded-full transition-all duration-300 active:scale-95 ${
              isMobileMenuOpen 
                ? "text-white bg-white/10 rotate-90" // Botón de cerrar (X) resalta sobre el menú oscuro
                : isDarkBg ? "text-white hover:text-amber-300" : "text-stone-800 hover:text-[#4a675e]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU ESTILO APPLE (Pantalla completa, Glassmorphism, Mask Reveal) --- */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-700 md:hidden h-[100dvh] w-full transform-gpu will-change-transform
        ${isMobileMenuOpen 
            ? "opacity-100 visible bg-[#1b2622]/95 backdrop-blur-2xl" 
            : "opacity-0 invisible bg-transparent backdrop-blur-none delay-200"
        }`}
      >
        <div className="flex flex-col items-center w-full px-6 space-y-8 mt-10">
            {navLinks.map((link, i) => (
            // Contenedor con overflow-hidden para el efecto de máscara (las letras salen de la nada)
            <div key={link.name} className="overflow-hidden py-1">
                <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`block text-4xl md:text-5xl font-serif tracking-tight text-white hover:text-amber-400 transition-all duration-700 transform
                    ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"}`}
                    style={{ 
                        transitionDelay: `${150 + i * 100}ms`,
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" // Curva de animación Apple
                    }}
                >
                    {link.name}
                </a>
            </div>
            ))}
            
            {/* Separador elegante */}
            <div 
                className={`w-16 h-px bg-white/20 my-6 transition-all duration-1000 transform origin-center
                ${isMobileMenuOpen ? "scale-x-100 opacity-100 delay-500" : "scale-x-0 opacity-0"}`}
            ></div>

            {/* Botón CTA */}
            <div 
                className={`transition-all duration-1000 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100 delay-500" : "translate-y-8 opacity-0"}`}
            >
                <a
                    href="https://wa.link/6vc76u"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#2b3d38] font-bold text-lg shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95 transition-transform"
                >
                    Agendar Sesión
                    <ArrowRight size={20} strokeWidth={2.5} />
                </a>
            </div>
        </div>
      </div>
    </>
  );
}