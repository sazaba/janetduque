import type { Metadata } from "next";
// 1. Importamos las nuevas fuentes elegantes
import { Lora, Nunito } from "next/font/google"; 
import "./globals.css";
import { Providers } from "./providers";

// --- IMPORTACIÓN DE IMÁGENES ---
import iconImage from "./icon.webp"; 

// 2. Configuramos Lora para los títulos (Serif)
const lora = Lora({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// 3. Configuramos Nunito para los textos (Sans-serif)
const nunito = Nunito({ 
  weight: ["300", "400", "600", "700"],
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
        // 4. Limpiamos las clases de Tailwind para que tome los colores de globals.css
        className={`${lora.variable} ${nunito.variable} min-h-screen antialiased overflow-x-hidden`}
      >
        <Providers>
            
            {/* FONDO DE LUCES PASTEL - Ajustado a verde sutil y dorado pálido */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-50">
                <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#e6efe9] blur-[100px] transform-gpu will-change-transform"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#fbf3d6] blur-[100px] transform-gpu will-change-transform"></div>
            </div>
            
            {children}
            
        </Providers>
      </body>
    </html>
  );
}