import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const Shipping: React.FC = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Envíos y Entregas | Pocion Fire',
      description: 'Información sobre envíos, tiempos de entrega y opciones de envío para tus fragancias de lujo Pocion Fire.',
      canonical: 'https://pociónfire.com/shipping',
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
            <span className="text-white">Envíos</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-primary font-brand text-[10px] tracking-[0.4em] block mb-4 font-bold">Información de Envío</span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Envíos y Entregas</h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              Cada fragancia de Pocion Fire viaja con el cuidado que merece una obra maestra artesanal.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Shipping Options */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Opciones de Envío</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 border border-white/5 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                  <div>
                    <h3 className="font-brand text-sm tracking-widest text-white mb-2 uppercase">Envío Estándar</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      Entrega en 5-7 días hábiles. Incluye seguimiento completo y empaque premium.
                    </p>
                    <p className="text-primary font-bold mt-3">Gratis en compras mayores a $200</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-dark p-8 border border-white/5 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                  <div>
                    <h3 className="font-brand text-sm tracking-widest text-white mb-2 uppercase">Envío Express</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      Entrega en 2-3 días hábiles. Prioridad en procesamiento y entrega acelerada.
                    </p>
                    <p className="text-primary font-bold mt-3">$25.00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Times */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Tiempos de Procesamiento</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                Todos los pedidos se procesan en <span className="text-white font-medium">1-2 días hábiles</span>.
                Los pedidos realizados durante el fin de semana se procesarán el siguiente día hábil.
              </p>
              <p>
                Recibirás un correo electrónico de confirmación con el número de seguimiento una vez que tu pedido haya sido enviado.
              </p>
            </div>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Envíos Internacionales</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                Actualmente realizamos envíos a países seleccionados en América del Norte, Europa y Asia.
                Los tiempos de entrega varían entre <span className="text-white font-medium">7-14 días hábiles</span> dependiendo del destino.
              </p>
              <p>
                Los aranceles aduaneros e impuestos de importación son responsabilidad del comprador.
                Estos cargos adicionales no están incluidos en el precio del producto ni en el costo de envío.
              </p>
            </div>
          </section>

          {/* Packaging */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Empaque Premium</h2>
            <div className="bg-surface-dark p-8 border border-white/5">
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                Cada fragancia de Pocion Fire llega en su empaque distintivo de lujo:
              </p>
              <ul className="space-y-3 text-slate-400 font-light">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>Caja de presentación negra con detalles en relieve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>Protección acolchada interior para garantizar la integridad del producto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>Tarjeta de autenticidad con notas olfativas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>Embalaje exterior discreto y seguro</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-primary/10 to-transparent p-8 border-l-2 border-primary">
            <h3 className="font-brand text-sm tracking-widest text-white mb-4 uppercase">¿Preguntas sobre tu envío?</h3>
            <p className="text-slate-400 font-light mb-6">
              Nuestro equipo de atención al cliente está disponible para asistirte.
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

export default Shipping;
