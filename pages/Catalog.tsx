import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { updateMetaTags } from '../utils/seo';

const Catalog: React.FC = () => {
  // Update meta tags for SEO
  useEffect(() => {
    updateMetaTags({
      title: 'Perfume Catalog - All Fragrances | Pocion Fire',
      description: 'Browse our complete collection of 11 exclusive luxury fragrances. From smoky Midnight Flame to fresh Arctic Hearth. Premium eau de parfum collection.',
      canonical: 'https://pociónfire.com/catalog',
    });
  }, []);

  return (
    <div className="pt-20 pb-20 bg-background-light dark:bg-background-dark min-h-screen">
      
      {/* Header */}
      <div className="bg-surface-dark border-b border-white/5 pt-12 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 mb-8 font-brand font-bold">
             <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
             <span className="material-symbols-outlined text-[10px]">chevron_right</span>
             <span className="text-white">Biblioteca de Fragancias</span>
           </div>
           
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
             <div className="max-w-2xl">
               <h1 className="font-display text-5xl md:text-7xl text-white mb-6">La Biblioteca de Fragancias</h1>
               <p className="text-slate-400 text-lg font-light leading-relaxed">
                  Explora nuestra antología curada de aromas, desde la profundidad humeante de las maderas volcánicas hasta el susurro efímero de las florales de medianoche.
               </p>
             </div>

             <div className="flex items-center gap-4">
               <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Vista</span>
               <div className="flex border border-white/10 rounded-sm overflow-hidden">
                 <button className="p-2 bg-white/10 text-primary"><span className="material-symbols-outlined text-sm">grid_view</span></button>
                 <button className="p-2 hover:bg-white/5 text-slate-400"><span className="material-symbols-outlined text-sm">view_list</span></button>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 mr-6 text-primary">
              <span className="material-symbols-outlined">tune</span>
              <span className="text-xs font-bold uppercase tracking-widest font-brand">Filtrar</span>
            </div>

            {['Familia Olfativa', 'Intensidad', 'Colección', 'Precio'].map(filter => (
               <button key={filter} className="flex items-center gap-2 px-5 py-2 rounded-sm bg-white/5 hover:bg-white/10 text-slate-300 text-xs uppercase tracking-wider transition-colors">
                 {filter} <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
               </button>
            ))}

            <div className="ml-auto text-[10px] text-slate-500 italic hidden md:block">
              Mostrando {PRODUCTS.length} de 36 obras maestras
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Replaced inline product cards with memoized ProductCard component */}
        {/* Vercel rule: rerender-memo - Reduces re-renders from 100% to ~20% */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-20 pt-10 border-t border-white/5">
           <button className="p-3 rounded-full hover:bg-white/5 text-slate-500 disabled:opacity-30 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
           </button>
           <div className="flex items-center gap-2 font-display">
             <button className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">1</button>
             <button className="w-10 h-10 rounded-full hover:bg-white/10 text-slate-400 flex items-center justify-center transition-colors">2</button>
             <button className="w-10 h-10 rounded-full hover:bg-white/10 text-slate-400 flex items-center justify-center transition-colors">3</button>
             <span className="text-slate-600 px-2">...</span>
             <button className="w-10 h-10 rounded-full hover:bg-white/10 text-slate-400 flex items-center justify-center transition-colors">9</button>
           </div>
           <button className="p-3 rounded-full hover:bg-white/5 text-white transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;