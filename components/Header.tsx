import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Extract nav items as constant (optimization: prevent recreation on every render)
const NAV_ITEMS = [
  { name: 'Colecciones', path: '/catalog' },
  { name: 'La Casa', path: '#' },
  { name: 'Bespoke', path: '#' },
  { name: 'Revista', path: '#' }
] as const;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    // Throttle scroll events: max 10 updates/second instead of 60+
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 100);
    };
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Always show background on non-home pages
  const isHome = location.pathname === '/';
  const headerClass = `fixed w-full z-50 transition-all duration-500 ${
    isScrolled || !isHome ? 'bg-background-dark/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-4 group cursor-pointer z-50">
           <div className="relative w-10 h-10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined text-4xl drop-shadow-[0_0_15px_rgba(236,19,19,0.5)]">local_fire_department</span>
           </div>
           <div className="flex flex-col">
             <span className="font-display text-xl tracking-[0.2em] leading-none text-white uppercase group-hover:text-primary transition-colors">Pocion</span>
             <span className="font-brand text-[10px] tracking-[0.4em] text-primary font-bold">FIRE</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="relative text-xs tracking-[0.25em] font-medium uppercase text-white/80 hover:text-white transition-colors group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6 text-white z-50">
          <button aria-label="Buscar" className="hover:text-primary transition-colors duration-300">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          <button aria-label="Carrito de Compras" className="hover:text-primary transition-colors duration-300 relative">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg shadow-primary/40">0</span>
          </button>
          <button aria-label="Cuenta" className="hover:text-primary transition-colors duration-300 hidden sm:block">
            <span className="material-symbols-outlined text-xl">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};

// Memoize to prevent unnecessary re-renders (Vercel rule: rerender-memo)
export default memo(Header);