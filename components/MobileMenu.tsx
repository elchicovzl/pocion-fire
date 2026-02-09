import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Navigation items structure
const MAIN_NAV = [
  { name: 'Inicio', path: '/' },
  { name: 'Colecciones', path: '/catalog' },
  { name: 'La Casa', path: '#' },
  { name: 'Bespoke', path: '#' },
  { name: 'Revista', path: '#' }
] as const;

const SECONDARY_NAV = [
  { name: 'Envíos', path: '/shipping' },
  { name: 'Devoluciones', path: '/returns' },
  { name: 'Privacidad', path: '/privacy' },
  { name: 'Contacto', path: '/contact' }
] as const;

const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#' },
  { name: 'Pinterest', url: '#' },
  { name: 'Twitter', url: '#' }
] as const;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      handleClose();
    }
  }, [location.pathname]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isClosing) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isClosing]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const menuContent = (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        onClick={handleBackdropClick}
      />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm
          bg-surface-dark/95 backdrop-blur-2xl border-l border-white/10
          shadow-2xl transform transition-transform duration-500 ease-out ${
          isClosing ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-primary drop-shadow-[0_0_10px_rgba(236,19,19,0.5)]">
              local_fire_department
            </span>
            <div className="flex flex-col">
              <span className="font-display text-base tracking-[0.2em] text-white uppercase">
                Pocion
              </span>
              <span className="font-brand text-[8px] tracking-[0.4em] text-primary font-bold">
                FIRE
              </span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Navigation Content - Scrollable */}
        <div className="overflow-y-auto h-[calc(100%-80px)] px-6 py-8">
          {/* Main Navigation */}
          <nav className="mb-10">
            <p className="font-brand text-[9px] tracking-[0.3em] uppercase text-slate-500 mb-6 font-bold">
              Navegación Principal
            </p>
            <ul className="space-y-1">
              {MAIN_NAV.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-sm text-base font-light tracking-wide
                      transition-all duration-300 group
                      ${location.pathname === item.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <span className="material-symbols-outlined text-lg opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                        arrow_forward
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

          {/* Secondary Navigation */}
          <nav className="mb-10">
            <p className="font-brand text-[9px] tracking-[0.3em] uppercase text-slate-500 mb-6 font-bold">
              Atención al Cliente
            </p>
            <ul className="space-y-1">
              {SECONDARY_NAV.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 px-4 text-sm font-light tracking-wide text-slate-300
                      hover:text-primary transition-colors"
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${(index + 5) * 0.05}s both`
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="pt-6 border-t border-white/5">
            <p className="font-brand text-[9px] tracking-[0.3em] uppercase text-slate-500 mb-6 font-bold">
              Síguenos
            </p>
            <div className="flex flex-col space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-sm font-light tracking-wide text-slate-300
                    hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  aria-label={social.name}
                >
                  <span className="w-1 h-1 rounded-full bg-slate-500 group-hover:bg-primary transition-colors"></span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
};

export default MobileMenu;
