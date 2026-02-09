import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const Returns: React.FC = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Devoluciones y Cambios | Pocion Fire',
      description: 'Política de devoluciones y cambios para fragancias Pocion Fire. Garantía de satisfacción.',
      canonical: 'https://pociónfire.com/returns',
    });
  }, []);

  return (
    <div className="pt-20 pb-20 bg-background-dark min-h-screen">
      {/* Header */}
      <div className="bg-surface-dark border-b border-white/5 pt-16 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 mb-8 font-brand font-bold">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-white">Devoluciones</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-primary font-brand text-[10px] tracking-[0.4em] block mb-4 font-bold">Política de Devoluciones</span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Devoluciones y Cambios</h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              Tu satisfacción es nuestra prioridad. Si no estás completamente satisfecho con tu compra, estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Return Period */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Plazo de Devolución</h2>
            <div className="bg-surface-dark p-8 border border-white/5">
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                Aceptamos devoluciones dentro de los <span className="text-primary font-bold">30 días</span> posteriores
                a la recepción de tu pedido.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                Para ser elegible para una devolución, el producto debe estar sin abrir, sin usar y en su empaque original.
              </p>
            </div>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Proceso de Devolución</h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="text-primary font-brand text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-brand text-sm tracking-widest text-white mb-2 uppercase">Contacta nuestro equipo</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Envía un correo a <span className="text-primary">devoluciones@pociónfire.com</span> con tu número
                    de pedido y motivo de devolución.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="text-primary font-brand text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-brand text-sm tracking-widest text-white mb-2 uppercase">Recibe autorización</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Te enviaremos un número de autorización de devolución (RMA) e instrucciones de envío en un plazo de 24 horas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="text-primary font-brand text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-brand text-sm tracking-widest text-white mb-2 uppercase">Envía el producto</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Empaca el producto de forma segura en su empaque original e incluye el número RMA. El cliente es
                    responsable de los costos de envío de devolución.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="text-primary font-brand text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-brand text-sm tracking-widest text-white mb-2 uppercase">Recibe tu reembolso</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Una vez recibido e inspeccionado el producto, procesaremos tu reembolso en 5-7 días hábiles al
                    método de pago original.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Exchanges */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Cambios</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                Si deseas cambiar tu fragancia por otra, el proceso es el mismo que una devolución. Te reembolsaremos
                el producto devuelto y podrás realizar un nuevo pedido para la fragancia deseada.
              </p>
              <p>
                <span className="text-white font-medium">Productos dañados o defectuosos:</span> Si recibiste un
                producto dañado o defectuoso, contáctanos inmediatamente. Cubriremos todos los costos de envío y te
                enviaremos un reemplazo de inmediato.
              </p>
            </div>
          </section>

          {/* Exclusions */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Excepciones</h2>
            <div className="bg-surface-dark p-8 border border-white/5">
              <p className="text-slate-400 font-light leading-relaxed mb-4">
                Los siguientes artículos no son elegibles para devolución:
              </p>
              <ul className="space-y-3 text-slate-400 font-light">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-1">cancel</span>
                  <span>Productos abiertos o usados (excepto productos defectuosos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-1">cancel</span>
                  <span>Productos sin empaque original o etiquetas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-1">cancel</span>
                  <span>Productos en oferta final o liquidación (cuando se indique)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-1">cancel</span>
                  <span>Tarjetas de regalo</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-primary/10 to-transparent p-8 border-l-2 border-primary">
            <h3 className="font-brand text-sm tracking-widest text-white mb-4 uppercase">¿Necesitas ayuda con una devolución?</h3>
            <p className="text-slate-400 font-light mb-6">
              Nuestro equipo de atención al cliente está listo para asistirte en el proceso.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all font-brand text-[10px] tracking-[0.3em] font-bold"
            >
              CONTACTAR
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Returns;
