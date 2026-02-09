import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, IMAGES } from '../constants';
import { updateMetaTags } from '../utils/seo';
import { generateWhatsAppProductURL } from '../utils/whatsapp';

// Hoist static JSX outside component (Vercel rule: rendering-hoist-jsx)
// This prevents recreation on every render
const HERO_SLIDES = [
  {
    id: 0,
    title: "OBSIDIAN",
    subtitle: "Flame",
    description: "Una erupción volcánica de pimienta negra y bergamota, enfriándose en un corazón eterno de vetiver ahumado y ámbar crudo.",
    image: IMAGES.hero1,
    bottle: PRODUCTS[0].image,
    accent: "La Firma Noir"
  },
  {
    id: 1,
    title: "CRIMSON",
    subtitle: "Essence",
    description: "El sensual azafrán se encuentra con las profundidades aterciopeladas de la rosa damascena, entrelazado con madera de ámbar carbonizada para un final audaz y especiado.",
    image: IMAGES.hero2,
    bottle: PRODUCTS[1].image,
    accent: "Elegancia Líquida"
  }
] as const;

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // WhatsApp number from environment variables
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  // Memoize navigation functions (Vercel rule: rerender-dependencies)
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Memoize indicator click handler (Vercel rule: rerender-functional-setstate)
  const handleIndicatorClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const idx = parseInt(e.currentTarget.dataset.index || '0', 10);
    setCurrentSlide(idx);
  }, []);

  // Auto slide with correct dependencies
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Update meta tags for SEO
  useEffect(() => {
    updateMetaTags({
      title: 'Pocion Fire | Luxury Handcrafted Perfumes & Fragrances',
      description: 'Discover exclusive luxury perfumes from Pocion Fire. Handcrafted fragrances including Midnight Flame, Crimson Essence, Arctic Hearth and more. Premium artisanal perfumery.',
      canonical: 'https://pociónfire.com/',
      ogImage: IMAGES.hero1,
      twitterImage: IMAGES.hero1,
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hidden H1 for SEO - only one H1 per page */}
      <h1 className="sr-only">Pocion Fire - Luxury Handcrafted Perfumes</h1>

      {/* Hero Carousel */}
      <section className="relative h-screen w-full overflow-hidden bg-background-dark group/carousel">
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-white/10 text-white rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-110">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-white/10 text-white rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-110">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
               <img
                 src={slide.image}
                 alt={`${slide.title} ${slide.subtitle} - luxury perfume background`}
                 className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-background-dark/60"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-transparent to-background-dark/20"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col md:flex-row items-center justify-center relative z-20  pt-24 lg:pt-20">
               {/* Text Content */}
               <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-fade-in">
                    <p className="font-brand text-primary text-[10px] tracking-[0.4em] uppercase font-bold">{slide.accent}</p>
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-6 tracking-tight text-glow animate-slide-up">
                    {slide.title} <br/>
                    <span className="italic font-serif font-light text-silver opacity-80">{slide.subtitle}</span>
                  </h2>
                  <p className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed font-light animate-fade-in animation-delay-300">
                    {slide.description}
                  </p>
                  <div className="flex flex-row gap-3 sm:gap-6 justify-center md:justify-start animate-fade-in animation-delay-500 mb-8">
                    <a
                      href={generateWhatsAppProductURL(PRODUCTS[index], whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-6 sm:px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-brand text-[10px] tracking-[0.3em] font-bold hover:shadow-[0_0_25px_rgba(236,19,19,0.4)] transition-all text-center flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <span className="hidden sm:inline">LO QUIERO</span>
                      <span className="sm:hidden">QUIERO</span>
                      <span className="material-symbols-outlined text-sm">send</span>
                    </a>
                    <Link to={`/product/${PRODUCTS[index].id}`} className="flex-1 sm:flex-none px-6 sm:px-10 py-4 border border-white/30 text-white font-brand text-[10px] tracking-[0.3em] font-bold hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                      <span className="hidden sm:inline">EXPLORAR FRAGANCIA</span>
                      <span className="sm:hidden">EXPLORAR</span>
                    </Link>
                  </div>
               </div>

               {/* Bottle Image */}
               <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-12 md:mb-0 h-[50vh] md:h-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 group-hover:scale-110 transition-transform duration-1000 opacity-60"></div>
                    <img 
                      src={slide.bottle} 
                      alt={slide.title} 
                      className="relative z-10 h-[350px] md:h-[550px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] animate-fade-in"
                    />
                 </div>
               </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-30">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              data-index={idx}
              onClick={handleIndicatorClick}
              className={`h-[2px] transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-primary' : 'w-6 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-32 bg-background-dark relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0 border-b border-white/5 pb-10">
            <div>
              <span className="text-primary font-brand text-[10px] tracking-[0.4em] block mb-2 font-bold">Curado</span>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">La Selección de los Alquimistas</h2>
            </div>
            <p className="text-slate-400 max-w-md font-light text-md leading-relaxed">
                Nuestros maestros destiladores han capturado la transición de la llama a la ceniza en tres perfiles distintos y sofisticados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {PRODUCTS.slice(0, 3).map((product, idx) => (
               <Link to={`/product/${product.id}`} key={product.id} className={`group block ${idx === 1 ? 'md:mt-16' : ''}`}>
                  <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:shadow-[0_10px_40px_-10px_rgba(236,19,19,0.15)]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-white/90 text-black px-8 py-3 text-[10px] font-brand tracking-widest font-bold uppercase hover:bg-primary hover:text-white transition-colors">Descubrir</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-center md:text-left">
                    <p className="text-[9px] tracking-[0.3em] text-primary font-bold uppercase">{product.tagline}</p>
                    <h3 className="font-display text-2xl text-white group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    <p className="text-lg font-medium text-white/90 mt-2">${product.price.toFixed(2)}</p>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-surface-dark relative overflow-hidden">
         {/* Abstract BG */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse" style={{animationDuration: '10s'}}></div>
         </div>

         <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div className="relative group">
              <div className="aspect-square bg-[#0c0c0c] border border-white/5 relative z-10 p-16 flex items-center justify-center transition-all duration-500 group-hover:border-primary/30">
                <img src={IMAGES.monogram} alt="Pocion Fire Monogram" className="w-2/3 opacity-20 grayscale brightness-200 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="font-display italic text-6xl md:text-7xl text-white/30 select-none group-hover:text-white/50 transition-colors duration-500">Pocion Fire</p>
                </div>
              </div>
              {/* Decorative Border Box */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 -z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>

            <div>
               <span className="font-brand text-[10px] tracking-[0.5em] text-primary uppercase font-bold block mb-6">Nuestra Historia</span>
               <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-none mb-8">
                 El Arte de la<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Perfumería de Fuego.</span>
               </h2>
               <p className="text-slate-400 font-light leading-relaxed mb-6 text-lg max-w-lg">
                  Pocion Fire nace de la fusión entre el poder elemental del fuego y el sofisticado arte de la perfumería francesa. Cada fragancia es una obra maestra artesanal que captura la esencia de la transformación.
               </p>
               <p className="text-slate-400 font-light leading-relaxed mb-12 text-lg max-w-lg">
                  Nuestros maestros perfumistas trabajan con ingredientes raros y preciosos, destilando aromas que evocan desde la intensidad de una llama hasta la serenidad de sus brasas. Cada botella representa una experiencia olfativa única y memorable.
               </p>
               <Link to="/catalog" className="inline-block px-12 py-5 border border-primary text-primary hover:bg-primary hover:text-white transition-all font-brand text-[10px] tracking-[0.3em] font-bold">
                 EXPLORAR COLECCIÓN
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;