import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// --- SEO OPTIMIZADO PARA JANET DUQUE ---
export const metadata: Metadata = {
  title: {
    default: "Janet Duque | Psicóloga Clínica y Psicoterapeuta Online",
    template: "%s | Janet Duque",
  },
  description: "Atención psicológica online y presencial. Psicoterapia enfocada en el bienestar emocional mediante terapias contextuales de tercera generación y Terapia de Aceptación y Compromiso (ACT).",
  alternates: {
    canonical: 'https://psicologajanetduque.com',
  },
  keywords: [
    "Psicóloga",
    "Psicóloga Clínica",
    "Psicóloga Online",
    "Psicoterapia Online",
    "Janet Duque",
    "Salud Mental",
    "Terapia de Aceptación y Compromiso",
    "Psicóloga Colombia", 
    "Tratamiento Ansiedad",
    "Consulta psicológica virtual",
    "Terapias de tercera generación",
    "Bienestar emocional"
  ],
  authors: [{ name: "Janet Duque" }],
  creator: "Janet Duque",
  openGraph: {
    title: "Janet Duque | Psicóloga Clínica y Psicoterapeuta",
    description: "Psicoterapia presencial y online mediante terapias contextuales de tercera generación y Terapia de Aceptación y Compromiso.",
    url: "https://psicologajanetduque.com",
    siteName: "Janet Duque Psicóloga",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        /* IMPORTANTE: Se eliminó 'overflow-x-hidden'. 
           Esta propiedad en el body anula los elementos 'sticky' en toda la página.
        */
        className="font-sans min-h-screen antialiased"
      >
        <Providers>
            
            {/* FONDO DE LUCES PASTEL OPTIMIZADO PARA MÓVILES */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-50">
                <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_#e6efe9_0%,_transparent_60%)]"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_#fbf3d6_0%,_transparent_60%)]"></div>
            </div>
            
            {/* Si necesitas evitar el scroll horizontal por animaciones, 
                usa un contenedor hijo con overflow-clip o maneja el overflow 
                directamente en las secciones que causen el problema.
            */}
            <div className="relative flex flex-col min-h-screen">
              {children}
            </div>
            
        </Providers>
      </body>
    </html>
  );
}