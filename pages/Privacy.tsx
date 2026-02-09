import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const Privacy: React.FC = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Política de Privacidad | Pocion Fire',
      description: 'Política de privacidad de Pocion Fire. Cómo recopilamos, usamos y protegemos tu información personal.',
      canonical: 'https://pociónfire.com/privacy',
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
            <span className="text-white">Privacidad</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-primary font-brand text-[10px] tracking-[0.4em] block mb-4 font-bold">Última actualización: Febrero 2026</span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Política de Privacidad</h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              En Pocion Fire, respetamos tu privacidad y nos comprometemos a proteger tu información personal.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Information Collection */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Información que Recopilamos</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                Recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">fiber_manual_record</span>
                  <span>Creas una cuenta o realizas una compra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">fiber_manual_record</span>
                  <span>Te suscribes a nuestro boletín</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">fiber_manual_record</span>
                  <span>Contactas nuestro servicio al cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">fiber_manual_record</span>
                  <span>Participas en encuestas o promociones</span>
                </li>
              </ul>
              <p className="pt-4">
                Esta información puede incluir: nombre, dirección de correo electrónico, dirección de envío, número de
                teléfono e información de pago.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Cómo Utilizamos tu Información</h2>
            <div className="space-y-6">
              <div className="bg-surface-dark p-6 border-l-2 border-primary">
                <h3 className="font-brand text-sm tracking-widest text-white mb-3 uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">shopping_bag</span>
                  Procesamiento de Pedidos
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  Para procesar y entregar tus compras, comunicarte sobre el estado de tu pedido y proporcionar servicio al cliente.
                </p>
              </div>

              <div className="bg-surface-dark p-6 border-l-2 border-primary">
                <h3 className="font-brand text-sm tracking-widest text-white mb-3 uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  Comunicaciones
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  Para enviarte actualizaciones sobre productos, ofertas exclusivas y novedades (solo si te has suscrito).
                </p>
              </div>

              <div className="bg-surface-dark p-6 border-l-2 border-primary">
                <h3 className="font-brand text-sm tracking-widest text-white mb-3 uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  Mejora del Servicio
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  Para analizar tendencias, administrar nuestro sitio web y mejorar tu experiencia de compra.
                </p>
              </div>

              <div className="bg-surface-dark p-6 border-l-2 border-primary">
                <h3 className="font-brand text-sm tracking-widest text-white mb-3 uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">shield</span>
                  Seguridad
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  Para detectar, prevenir y abordar fraudes, problemas técnicos y proteger los derechos de Pocion Fire.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Protección de Datos</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra
                acceso no autorizado, alteración, divulgación o destrucción.
              </p>
              <div className="bg-surface-dark p-8 border border-white/5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">lock</span>
                    <span>Encriptación SSL para todas las transacciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">verified_user</span>
                    <span>Servidores seguros y bases de datos protegidas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">key</span>
                    <span>Acceso limitado solo a personal autorizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">update</span>
                    <span>Auditorías de seguridad regulares</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Cookies y Tecnologías Similares</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el
                tráfico y personalizar el contenido.
              </p>
              <p>
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
              </p>
            </div>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Compartir Información con Terceros</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                <span className="text-white font-medium">No vendemos</span> tu información personal. Solo compartimos
                información cuando es necesario para:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">local_shipping</span>
                  <span>Proveedores de servicios de envío y logística</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">credit_card</span>
                  <span>Procesadores de pagos seguros</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">analytics</span>
                  <span>Servicios de análisis web (datos anónimos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">gavel</span>
                  <span>Cumplimiento de obligaciones legales</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-display text-3xl text-white mb-8 pb-4 border-b border-white/5">Tus Derechos</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>Tienes derecho a:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-surface-dark p-6 border border-white/5">
                  <h4 className="text-white font-medium mb-2">Acceder</h4>
                  <p className="text-sm">Solicitar una copia de tu información personal</p>
                </div>
                <div className="bg-surface-dark p-6 border border-white/5">
                  <h4 className="text-white font-medium mb-2">Rectificar</h4>
                  <p className="text-sm">Corregir información inexacta o incompleta</p>
                </div>
                <div className="bg-surface-dark p-6 border border-white/5">
                  <h4 className="text-white font-medium mb-2">Eliminar</h4>
                  <p className="text-sm">Solicitar la eliminación de tus datos personales</p>
                </div>
                <div className="bg-surface-dark p-6 border border-white/5">
                  <h4 className="text-white font-medium mb-2">Oponerte</h4>
                  <p className="text-sm">Darte de baja de comunicaciones de marketing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-primary/10 to-transparent p-8 border-l-2 border-primary">
            <h3 className="font-brand text-sm tracking-widest text-white mb-4 uppercase">¿Preguntas sobre privacidad?</h3>
            <p className="text-slate-400 font-light mb-6">
              Para ejercer tus derechos o si tienes preguntas sobre nuestra política de privacidad, contáctanos.
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

export default Privacy;
