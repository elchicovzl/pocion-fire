import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { searchProducts } from '../utils/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Memoize filtered results for performance
  const filteredResults = useMemo(() => {
    return searchProducts(searchQuery, PRODUCTS);
  }, [searchQuery]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isClosing) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isClosing]);

  // Handle closing with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setSearchQuery(''); // Reset search
      onClose();
    }, 300); // Match animation duration
  };

  // Handle click outside modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle product selection
  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    handleClose();
  };

  // Prevent body scroll when modal is open
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

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xl transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100 animate-fadeIn'
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div
        ref={modalRef}
        className={`w-full max-w-2xl bg-surface-dark border border-white/10 rounded-sm shadow-2xl transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100 animate-scaleIn'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-white/5">
          <span className="material-symbols-outlined text-2xl text-primary">search</span>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar perfumes..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-lg text-white placeholder:text-slate-500 font-light p-0"
            aria-label="Buscar perfumes por nombre o tipo"
          />
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Cerrar búsqueda"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {searchQuery.trim() === '' ? (
            <div className="p-12 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-700 mb-4 block">search</span>
              <p className="text-slate-500 text-sm uppercase tracking-widest">
                Escribe para buscar perfumes
              </p>
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="p-4 space-y-2">
              {filteredResults.slice(0, 8).map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="w-full flex items-center gap-4 p-3 rounded-sm hover:bg-white/5 transition-all duration-200 group"
                  style={{
                    animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`
                  }}
                >
                  {/* Product Image */}
                  <div className="w-16 h-20 flex-shrink-0 bg-zinc-900 border border-white/5 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 text-left">
                    <h3 className="font-display text-base text-white group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex-shrink-0">
                    <p className="font-display text-lg text-white/90">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-700 mb-4 block">sentiment_dissatisfied</span>
              <p className="text-slate-500 text-sm uppercase tracking-widest">
                No se encontraron perfumes
              </p>
              <p className="text-slate-600 text-xs mt-2">
                Intenta con otro término de búsqueda
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Use portal to render at document.body level
  return createPortal(modalContent, document.body);
};

export default SearchModal;
