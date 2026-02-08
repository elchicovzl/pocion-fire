import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-8 gap-3 group">
              <span className="material-symbols-outlined text-3xl text-primary transition-transform group-hover:rotate-12">local_fire_department</span>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-widest uppercase text-white">Pocion</span>
                <span className="font-brand text-[8px] tracking-[0.4em] text-primary font-bold">FIRE</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
              Redefiniendo el lujo a través del poder elemental del fuego y el sofisticado arte de la perfumería francesa.
            </p>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="font-brand text-[10px] tracking-[0.3em] uppercase mb-8 text-slate-500 font-bold">Navegación</h4>
            <ul className="space-y-4 text-xs font-light uppercase tracking-widest text-slate-300">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Catálogo</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Tarjetas de Regalo</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Tiendas</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Revista</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-brand text-[10px] tracking-[0.3em] uppercase mb-8 text-slate-500 font-bold">Atención al Cliente</h4>
            <ul className="space-y-4 text-xs font-light uppercase tracking-widest text-slate-300">
              <li><Link to="#" className="hover:text-primary transition-colors">Envíos</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Devoluciones</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-brand text-[10px] tracking-[0.3em] uppercase mb-8 text-slate-500 font-bold">Boletín</h4>
            <p className="text-[11px] text-slate-400 mb-6 uppercase tracking-[0.1em] font-light">Únete a nuestro círculo de conocedores.</p>
            <div className="flex border-b border-white/20 pb-2 group focus-within:border-primary transition-colors">
              <input
                type="email"
                placeholder="TU CORREO"
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-600 text-white uppercase tracking-widest p-0"
              />
              <button className="text-primary hover:text-white transition-colors transform hover:translate-x-1 duration-300">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] tracking-[0.2em] text-slate-500 uppercase">
          <p>© 2026 Pocion Fire. Todos los derechos reservados.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;