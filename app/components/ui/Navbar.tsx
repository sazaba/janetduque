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
  // Si se hace scroll o se abre el menú móvil, el fondo será verde oscuro
  const isDarkBg = isScrolled || isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b will-change-transform ${
          isDarkBg 
            ? "bg-[#4a675e]/95 backdrop-blur-md border-[#3a524a] shadow-lg py-3" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          
          {/* LOGO */}
          <Link href="#inicio" onClick={(e) => handleScrollToSection(e, "#inicio")} className="relative z-50 flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src={logoImg} 
                alt="Logo Psicóloga Janet Duque" 
                fill 
                className="object-contain"
                priority
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>
            
            <div className="leading-tight hidden sm:block">
              <span className={`block font-bold tracking-wide text-sm md:text-base font-serif transition-colors ${
                isDarkBg ? "text-white group-hover:text-amber-300" : "text-stone-800 group-hover:text-[#4a675e]"
              }`}>
                Janet Duque
              </span>
              <span className={`block text-xs font-medium tracking-wider font-sans transition-colors ${
                isDarkBg ? "text-amber-300" : "text-amber-600"
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
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ring-1 ${
                isDarkBg 
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-[#2b3d38] hover:from-amber-300 hover:to-amber-400 ring-amber-300/50" 
                  : "bg-[#4a675e] hover:bg-[#384e47] text-white ring-amber-500/30"
              }`}
            >
              Solicitar Información
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${
                isDarkBg ? "text-[#2b3d38]" : "text-amber-400"
              }`} />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            aria-label="Toggle Menu"
            className={`md:hidden relative z-50 p-1 transition-colors active:scale-95 ${
              isDarkBg ? "text-white hover:text-amber-300" : "text-stone-700 hover:text-[#4a675e]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OPTIMIZADO */}
      <div
        className={`fixed inset-0 z-40 bg-[#4a675e]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden h-[100dvh] supports-[height:100dvh]:h-screen w-full transform-gpu will-change-transform
        ${isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 p-4 w-full">
            {navLinks.map((link, i) => (
            <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`text-3xl font-serif text-white hover:text-amber-300 transition-all duration-500 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
            >
                {link.name}
            </a>
            ))}
            
            <div 
                className={`mt-8 transition-all duration-700 delay-300 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                <a
                href="https://wa.link/6vc76u"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex px-10 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#2b3d38] font-bold shadow-xl shadow-black/20 active:scale-95 transition-transform border border-amber-300/50"
                >
                Agendar Sesión
                </a>
            </div>
        </div>
      </div>
    </>
  );
}