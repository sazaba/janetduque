"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Clock, Star, BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- INTERFAZ INTACTA ---
interface Post {
  id: number;
  slug: string | null; 
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  createdAt: string;
  isFeatured: boolean;
}

// --- SKELETON PREMIUM ---
const CarouselSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className={`h-[480px] rounded-[2rem] bg-stone-50 animate-pulse border border-stone-100 ${i === 3 ? 'hidden lg:block' : ''} ${i === 2 ? 'hidden md:block' : ''}`}>
        <div className="h-56 bg-stone-200/50 rounded-t-[2rem]" />
        <div className="p-8 space-y-5">
          <div className="h-4 bg-stone-200/50 rounded w-1/3 mb-2" />
          <div className="h-6 bg-stone-200/50 rounded w-full" />
          <div className="h-6 bg-stone-200/50 rounded w-4/5" />
          <div className="h-20 bg-stone-200/50 rounded w-full mt-6" />
        </div>
      </div>
    ))}
  </div>
);

export default function BlogCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [posts, setPosts] = useState<Post[]>([]); 
  const [loading, setLoading] = useState(true);

  // --- LÓGICA DE FETCH INTACTA ---
  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/posts/list', { signal: controller.signal })
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
            setPosts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
            console.error("Error al cargar posts:", err);
            setLoading(false);
        }
      });

      return () => controller.abort();
  }, []);

  const formatDate = (dateString: string) => {
    try {
        return new Date(dateString).toLocaleDateString('es-CO', {
            day: '2-digit', month: 'short', year: 'numeric'
        });
    } catch (e) {
        return "";
    }
  };

  if (!loading && posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[#fcfdfa] relative w-full overflow-hidden selection:bg-amber-200 selection:text-[#4a675e]">
      
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-stone-100/50 to-transparent pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[10%] w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- CABECERA EDITORIAL --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-amber-500"></span>
              <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase flex items-center gap-2">
                <BookOpen size={14} />
                Recursos y Reflexiones
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4a675e] leading-[1.1] mb-6">
              Espacio de <span className="text-amber-500 italic">crecimiento.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg">
              Artículos, guías y reflexiones sobre psicología y bienestar integral para acompañar tu proceso personal.
            </p>
          </motion.div>

          {/* Botones de Navegación Custom */}
          <motion.div 
            className="flex gap-3 shrink-0 pb-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-400 hover:bg-[#4a675e] hover:text-white hover:border-[#4a675e] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-400 hover:bg-[#4a675e] hover:text-white hover:border-[#4a675e] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="w-full overflow-visible min-h-[500px]">
            {loading ? (
                <CarouselSkeleton />
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={32}
                    slidesPerView={1}
                    speed={800} 
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={posts.length > 3}
                    className="!pb-12 !pt-4 w-full overflow-visible" 
                >
                {posts.map((post: Post) => {
                    
                    let tags: string[] = [];
                    try {
                        if (post.category && post.category.startsWith("[")) {
                            tags = JSON.parse(post.category);
                        } else {
                            tags = [post.category || "General"];
                        }
                    } catch (e) {
                        tags = ["General"];
                    }

                    const visibleTags = tags.slice(0, 1); // Mostramos solo 1 tag principal para que se vea más limpio

                    return (
                        <SwiperSlide key={post.id} className="h-auto">
                        
                        {/* TARJETA PREMIUM */}
                        <article className={`group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border relative top-0 hover:-top-3 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(74,103,94,0.15)] ${post.isFeatured ? 'border-amber-200' : 'border-stone-100'}`}>
                            
                            {/* IMAGEN */}
                            <div className="relative h-56 overflow-hidden bg-stone-100 m-2 rounded-[1.5rem]">
                                <div className="absolute inset-0 bg-[#4a675e]/0 group-hover:bg-[#4a675e]/20 transition-colors duration-500 z-10" />
                                
                                {post.image ? (
                                    <Image 
                                        src={post.image} 
                                        alt={post.title} 
                                        fill 
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-stone-300 font-serif italic text-sm">Sin Imagen</div>
                                )}

                                {/* Tags Flotantes */}
                                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                    {visibleTags.map((tag, index) => (
                                        <span key={index} className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#4a675e] shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Estrella Destacada */}
                                {post.isFeatured && (
                                     <div className="absolute top-4 right-4 z-20 bg-amber-400 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md" title="Artículo Destacado">
                                        <Star size={14} fill="currentColor" />
                                     </div>
                                )}
                            </div>

                            {/* CONTENIDO */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                
                                <div className="flex items-center gap-4 text-xs text-stone-400 mb-4 font-medium uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5">
                                      <Calendar size={14} className="text-amber-500" />
                                      {formatDate(post.createdAt)}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <Clock size={14} className="text-amber-500" />
                                      {post.readTime || "5 min"}
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#4a675e] mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                                    <Link href={`/blog/${post.slug || post.id}`} className="focus:outline-none">
                                        <span className="absolute inset-0 z-0"></span>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-stone-500 text-sm md:text-base leading-relaxed line-clamp-3 mb-8 flex-1 font-light">
                                    {post.excerpt}
                                </p>

                                {/* Link "Leer más" Estilo Editorial */}
                                <div className="flex items-center text-[#4a675e] font-bold text-sm group/link z-10 relative pointer-events-none mt-auto pt-4 border-t border-stone-100">
                                    Leer artículo
                                    <div className="ml-3 w-8 h-8 rounded-full bg-[#4a675e]/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#4a675e] group-hover:text-white">
                                        <ArrowRight size={14} className="transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </article>

                        </SwiperSlide>
                    );
                })}
                </Swiper>
            )}
        </div>

        {/* --- BOTÓN FINAL --- */}
        <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <Link 
                href="/blog" 
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-transparent border border-stone-300 text-stone-600 font-bold hover:bg-[#4a675e] hover:border-[#4a675e] hover:text-white transition-all duration-300 hover:shadow-lg active:scale-95 group"
            >
                Explorar todos los artículos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>

      </div>
    </section>
  );
}