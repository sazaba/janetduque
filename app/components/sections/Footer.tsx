"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; 
import { Globe2, Lock, LayoutDashboard, LogOut } from "lucide-react"; 

export default function Footer() {
  const { data: session } = useSession(); 
  const currentYear = new Date().getFullYear();

  // Enlaces alineados a la propuesta dual
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Para Mujeres", href: "#mujeres" },
    { name: "Para Empresas", href: "#empresas" },
    { name: "Acerca de Mí", href: "#sobre-mi" },
  ];

  return (
    // Fondo ultra oscuro premium con borde superior sutil estilo cristal
    <footer className="w-full bg-[#121b18] text-stone-300 pt-24 pb-8 overflow-hidden border-t border-white/[0.05] relative">
      
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white mb-2">
                Janet <br /> Duque
              </h2>
              <p className="text-stone-400 text-base md:text-lg font-sans font-light mt-4 max-w-sm leading-relaxed">
                Transformación emocional con impacto en la vida y el trabajo. <br />
                <span className="text-[#8ba89d] italic font-serif">Del Ser al Hacer.</span>
              </p>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div className="md:col-span-2 md:pl-4">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">
              Explorar
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-stone-400 hover:text-[#8ba89d] transition-colors duration-300 text-sm md:text-base font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO & UBICACIÓN */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">
              Atención
            </h3>
            <div className="space-y-6">
              
              {/* Dirección / Modalidad */}
              <div className="flex items-start gap-4">
                {/* Icono Apple Style (Caja semitransparente) */}
                <div className="p-2.5 bg-white/[0.03] rounded-xl border border-white/5 text-[#8ba89d]">
                   <Globe2 size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-stone-200 font-medium font-sans">Consultorio 100% Virtual</p>
                  <p className="text-stone-500 text-sm mt-1 font-light">
                    Intervenciones clínicas y corporativas<br />Colombia y Exterior
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR (Estilo Apple: Línea fina, textos pequeños) --- */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-stone-500 font-medium font-sans">
          <p className="order-2 lg:order-1 font-light">
            &copy; {currentYear} Janet Duque. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 order-1 lg:order-2 font-light">
            <Link href="#" className="hover:text-stone-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-stone-300 transition-colors">
              Términos de Servicio
            </Link>
            
            {/* --- ZONA DE ACCESO ADMINISTRATIVO --- */}
            {session ? (
                // OPCIÓN A: SI HAY SESIÓN (Logueado)
                <div className="flex items-center gap-2 border-l border-white/10 pl-6 ml-2">
                    {/* Botón ir al Dashboard */}
                    <Link 
                        href="/admin" 
                        className="text-stone-500 hover:text-[#8ba89d] transition-colors p-2"
                        title="Ir al Panel Administrativo"
                    >
                        <LayoutDashboard size={16} strokeWidth={1.5} />
                    </Link>
                    
                    {/* Botón Cerrar Sesión */}
                    <button 
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="text-stone-500 hover:text-red-400 transition-colors p-2"
                        title="Cerrar Sesión"
                    >
                        <LogOut size={16} strokeWidth={1.5} />
                    </button>
                </div>
            ) : (
                // OPCIÓN B: NO HAY SESIÓN (Candado original, ahora más sutil)
                <Link 
                    href="/login" 
                    className="text-stone-600 hover:text-[#8ba89d] transition-colors duration-300 p-2 ml-2"
                    aria-label="Admin Login"
                    title="Acceso Privado"
                >
                    <Lock size={14} strokeWidth={1.5} />
                </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Elemento Decorativo Gigante (JD) */}
      <div className="absolute -bottom-12 right-0 translate-x-1/4 text-[16rem] font-serif font-medium text-white pointer-events-none select-none leading-none opacity-[0.015] whitespace-nowrap">
        JD
      </div>
    </footer>
  );
}