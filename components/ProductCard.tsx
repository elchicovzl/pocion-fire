import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  hoverImage?: string;
  isLimited?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Contenedor de imagen */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-5 border border-white/5">
        {/* Badge limitado */}
        {product.isLimited && (
          <div className="absolute top-3 left-3 z-20 bg-primary text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider font-brand">
            Limitado
          </div>
        )}

        {/* Imágenes con lazy loading (Vercel best practices) */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />
        <img
          src={product.hoverImage || product.image}
          alt={`${product.name} Detail`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-in-out"
        />

        {/* Overlay de añadir rápido */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 text-[10px] tracking-[0.2em] font-brand uppercase shadow-lg shadow-black/50 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
            Añadir Rápido
          </button>
        </div>
      </div>

      {/* Info del producto */}
      <div className="flex justify-between items-start px-1">
        <div>
          <h3 className="text-lg font-display text-white group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">
            {product.tagline}
          </p>
        </div>
        <p className="font-display text-lg text-white/90">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

// Memoize to prevent unnecessary re-renders (Vercel rule: rerender-memo)
// Only re-renders when product prop changes
export default React.memo(ProductCard);
