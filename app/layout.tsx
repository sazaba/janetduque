import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";
import { Providers } from "./providers";

// --- IMPORTACIÓN DE IMÁGENES ---
import iconImage from "./icon.webp"; 

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({ 
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
  },

  icons: {
    icon: iconImage.src, 
    apple: iconImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} min-h-screen antialiased bg-[#fffcf8] text-stone-700 overflow-x-hidden`}
      >
        <Providers>
            
            {/* FONDO DE LUCES PASTEL - Optimizado para GPU */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-60">
                <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#ccfbf1] blur-[100px] transform-gpu will-change-transform"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#fce7f3] blur-[100px] transform-gpu will-change-transform"></div>
            </div>
            
            {children}
            
        </Providers>
      </body>
    </html>
  );
}