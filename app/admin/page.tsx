// app/admin/page.tsx
import { prisma } from "@/lib/prisma";
import { FileText, TrendingUp, Activity } from "lucide-react";
import ReviewWidget from "./components/ReviewWidget"; 
import PostsChart from "./components/PostsChart"; 

export const dynamic = 'force-dynamic';

async function getStats() {
  const postsCount = await prisma.post.count();
  const config = await prisma.siteConfig.findFirst();

  // --- LÓGICA PARA EL GRÁFICO (Últimos 6 meses) ---
  const posts = await prisma.post.findMany({
    select: { createdAt: true }
  });

  const chartData: { name: string; posts: number; month: number; year: number }[] = [];
  const now = new Date();
  
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = d.toLocaleString('es-ES', { month: 'short' });
    chartData.push({
      name: monthName.charAt(0).toUpperCase() + monthName.slice(1),
      posts: 0,
      month: d.getMonth(),
      year: d.getFullYear()
    });
  }

  // --- FIX DE TYPESCRIPT APLICADO AQUÍ ---
  posts.forEach((post: { createdAt: Date }) => {
    const date = new Date(post.createdAt);
    const entry = chartData.find(d => d.month === date.getMonth() && d.year === date.getFullYear());
    if (entry) {
        entry.posts += 1;
    }
  });

  return { 
    postsCount,
    reviewCount: config?.reviewCount ?? 88,
    chartData 
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="animate-in fade-in duration-700">
      
      {/* Cabecera Premium */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[1px] bg-amber-500"></span>
          <span className="text-amber-600 font-bold tracking-[0.2em] text-[10px] uppercase">
            Resumen General
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2b3d38] mb-3 tracking-tight">
            Panel de Control
        </h1>
        <p className="text-stone-500 text-lg font-light">
            Gestiona tu conocimiento y analiza el crecimiento de tu contenido.
        </p>
      </header>

      {/* GRID DE MÉTRICAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Artículos Totales */}
        <div className="bg-white p-7 rounded-[2rem] border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center gap-6 relative overflow-hidden group hover:border-[#4a675e]/30 hover:shadow-lg transition-all duration-500">
          <div className="w-16 h-16 rounded-2xl bg-[#4a675e]/10 flex items-center justify-center text-[#4a675e] shadow-sm group-hover:scale-110 transition-transform duration-500">
            <FileText size={28} strokeWidth={1.5} />
          </div>
          <div className="relative z-10">
            <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-1">Total Artículos</p>
            <p className="text-4xl font-serif font-bold text-[#2b3d38] group-hover:text-[#4a675e] transition-colors">{stats.postsCount}</p>
          </div>
          {/* Brillo de fondo sutil */}
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#4a675e]/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-all duration-500 group-hover:bg-[#4a675e]/10"></div>
        </div>

        {/* Card 2: Widget de Reseñas */}
        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-[2rem] overflow-hidden border border-stone-100 hover:border-amber-200/50 hover:shadow-lg transition-all duration-500">
            <ReviewWidget initialCount={stats.reviewCount} />
        </div>

        {/* Card 3: Estado del Sistema */}
        <div className="bg-white p-7 rounded-[2rem] border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center gap-6 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-emerald-600 transition-colors duration-500">
                <Activity size={28} strokeWidth={1.5} />
                <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></div>
            </div>
            <div className="relative z-10">
                <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-1">Base de Datos</p>
                <p className="text-xl font-bold text-[#2b3d38]">En Línea</p>
            </div>
        </div>

      </div>

      {/* SECCIÓN DEL GRÁFICO */}
      <div className="bg-white rounded-[2rem] p-8 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all duration-500 relative overflow-hidden group">
        
        <div className="flex items-center justify-between mb-8 relative z-10">
            <div>
                <h2 className="text-2xl font-serif font-bold text-[#2b3d38] group-hover:text-[#4a675e] transition-colors">Crecimiento de Publicaciones</h2>
                <p className="text-sm text-stone-500 mt-1 font-light">Histórico de artículos escritos en los últimos 6 meses.</p>
            </div>
            {/* Etiqueta Activo en color Dorado Premium */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-amber-200/50 shadow-sm">
                <TrendingUp size={14} strokeWidth={2.5} />
                <span>Activo</span>
            </div>
        </div>
        
        {/* Renderizamos el Gráfico Cliente */}
        <div className="relative z-10">
            <PostsChart data={stats.chartData} />
        </div>

      </div>

    </div>
  );
}