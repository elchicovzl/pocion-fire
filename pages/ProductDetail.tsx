import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, IMAGES } from '../constants';
import { updateMetaTags } from '../utils/seo';
import { generateWhatsAppProductURL } from '../utils/whatsapp';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Default to Midnight Flame if not found, for demo purposes
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  // Use high res detail hero image for midnight flame specifically, else product image
  const heroImage = product.id === 'midnight-flame' ? IMAGES.detailHero : product.image;

  // WhatsApp number from environment variables
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  // Update meta tags and add Product + Breadcrumb schema
  useEffect(() => {
    // Update meta tags
    updateMetaTags({
      title: `${product.name} - ${product.tagline} | Pocion Fire`,
      description: `${product.description} - $${product.price.toFixed(2)} | Luxury eau de parfum from Pocion Fire. ${product.notes ? 'Notes: ' + product.notes.top : ''}`,
      canonical: `https://pociónfire.com/product/${product.id}`,
      ogImage: product.image,
      twitterImage: product.image,
    });

    // Generate Product schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.image,
      "brand": {
        "@type": "Brand",
        "name": "Pocion Fire"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://pociónfire.com/product/${product.id}`,
        "priceCurrency": "USD",
        "price": product.price.toFixed(2),
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Pocion Fire"
        }
      },
      ...(product.notes && {
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Top Notes",
            "value": product.notes.top
          },
          {
            "@type": "PropertyValue",
            "name": "Heart Notes",
            "value": product.notes.heart
          },
          {
            "@type": "PropertyValue",
            "name": "Base Notes",
            "value": product.notes.base
          }
        ]
      })
    };

    // Generate Breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pociónfire.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Catalog",
          "item": "https://pociónfire.com/catalog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": product.name,
          "item": `https://pociónfire.com/product/${product.id}`
        }
      ]
    };

    // Add schemas to page head
    const productScript = document.createElement('script');
    productScript.type = 'application/ld+json';
    productScript.text = JSON.stringify(productSchema);
    document.head.appendChild(productScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(productScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, [product.id]);

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 flex flex-col pt-20">
       <div className="flex-1 flex flex-col lg:flex-row">
          
          {/* Left Side: Visuals */}
          <div className="lg:w-1/2 relative h-[60vh] lg:h-auto overflow-hidden bg-black">
             <div className="absolute inset-0 w-full h-full">
                <img 
                  src={heroImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-[2000ms] hover:scale-105"
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-background-dark/20 via-transparent to-background-dark pointer-events-none"></div>
             
             <div className="absolute bottom-12 left-12 hidden lg:block pointer-events-none">
                {product.isLimited && (
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold font-brand block mb-2">Edición Limitada</span>
                )}
                <p className="text-white/60 text-sm font-light italic">Capturado en el corazón de la noche.</p>
             </div>
          </div>

          {/* Right Side: Details */}
          <div className="lg:w-1/2 px-8 lg:px-24 py-16 lg:py-24 bg-surface-dark/50 flex flex-col justify-center overflow-y-auto">
             
             {/* Breadcrumbs */}
             <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-10 font-brand">
               <Link to="/catalog" className="hover:text-primary transition-colors">Colección</Link>
               <span>/</span>
               <span className="hover:text-primary cursor-pointer">Eau de Parfum</span>
               <span>/</span>
               <span className="text-primary font-bold">{product.name}</span>
             </div>

             {/* Header */}
             <div className="mb-12 border-b border-white/5 pb-10">
                <h1 className="font-display text-5xl lg:text-7xl mb-6 tracking-tight text-white">{product.name}</h1>
                <div className="flex items-center gap-6 mb-8">
                   <span className="text-2xl font-light text-primary font-sans">${product.price.toFixed(2)}</span>
                   <div className="h-px w-16 bg-white/20"></div>
                   <span className="text-xs uppercase tracking-widest text-slate-400">100ml / 3.4 fl.oz</span>
                </div>
                <p className="font-display italic text-xl text-slate-300 leading-relaxed font-light">
                  "{product.description}"
                </p>
             </div>

             {/* Notes */}
             {product.notes && (
               <section className="mb-14">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-brand font-bold mb-8 text-primary flex items-center gap-4">
                     Viaje Olfativo
                     <span className="h-px flex-1 bg-white/10"></span>
                  </h3>
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start group">
                        <div className="flex-none w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                           <span className="material-symbols-outlined text-lg">science</span>
                        </div>
                        <div>
                           <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Notas de Salida</h4>
                           <p className="font-display text-lg text-white/90">{product.notes.top}</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start group">
                        <div className="flex-none w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                           <span className="material-symbols-outlined text-lg">local_florist</span>
                        </div>
                        <div>
                           <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Notas de Corazón</h4>
                           <p className="font-display text-lg text-white/90">{product.notes.heart}</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start group">
                        <div className="flex-none w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                           <span className="material-symbols-outlined text-lg">forest</span>
                        </div>
                        <div>
                           <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Notas de Fondo</h4>
                           <p className="font-display text-lg text-white/90">{product.notes.base}</p>
                        </div>
                     </div>
                  </div>
               </section>
             )}

             {/* Actions */}
             <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a
                   href={generateWhatsAppProductURL(product, whatsappNumber)}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white py-5 rounded-sm font-brand text-[10px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_25px_rgba(236,19,19,0.4)] transition-all duration-300 flex justify-center items-center gap-3"
                >
                   <span>Lo Quiero</span>
                   <span className="material-symbols-outlined text-sm">send</span>
                </a>
                <button className="px-8 py-5 border border-white/10 text-white font-brand text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                   Lista de Deseos
                </button>
             </div>

             {/* Footer Extra */}
             <div className="border-t border-white/5 pt-8 flex flex-wrap gap-8 text-[10px] uppercase tracking-widest text-slate-500 font-brand">
                <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><span className="material-symbols-outlined text-sm">verified</span> Autenticidad</span>
                <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><span className="material-symbols-outlined text-sm">local_shipping</span> Envío Gratis</span>
                <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><span className="material-symbols-outlined text-sm">eco</span> Vegano</span>
             </div>

          </div>
       </div>

       {/* Decorative Footer Overlay */}
       <div className="fixed bottom-0 left-0 w-full p-6 pointer-events-none z-0 hidden xl:block mix-blend-overlay">
          <div className="flex justify-between items-end opacity-10">
             <span className="font-display text-[120px] leading-none select-none tracking-tighter text-white">FIRE</span>
             <span className="font-display text-[120px] leading-none select-none tracking-tighter text-white">POCION</span>
          </div>
       </div>
    </div>
  );
};

export default ProductDetail;