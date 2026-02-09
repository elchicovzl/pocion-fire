import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    updateMetaTags({
      title: 'Contacto | Pocion Fire',
      description: 'Contacta con Pocion Fire. Estamos aquí para ayudarte con preguntas sobre nuestras fragancias de lujo.',
      canonical: 'https://pociónfire.com/contact',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    // Show success message or handle error
  };

  return (
    <div className="pt-20 pb-20 bg-background-dark min-h-screen">
      {/* Header */}
      <div className="bg-surface-dark border-b border-white/5 pt-16 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 mb-8 font-brand font-bold">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-white">Contacto</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-primary font-brand text-[10px] tracking-[0.4em] block mb-4 font-bold">Estamos Aquí</span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Contáctanos</h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              Nuestro equipo está disponible para asistirte con cualquier consulta sobre nuestras fragancias.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl text-white mb-8">Envíanos un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-3 font-brand font-bold">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-dark border border-white/10 px-6 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-3 font-brand font-bold">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-dark border border-white/10 px-6 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-3 font-brand font-bold">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-dark border border-white/10 px-6 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="product">Consulta sobre Productos</option>
                    <option value="order">Estado de Pedido</option>
                    <option value="shipping">Información de Envío</option>
                    <option value="return">Devoluciones y Cambios</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-3 font-brand font-bold">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-surface-dark border border-white/10 px-6 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-brand text-[10px] tracking-[0.3em] font-bold py-5 transition-all shadow-[0_0_20px_rgba(236,19,19,0.3)] hover:shadow-[0_0_30px_rgba(236,19,19,0.5)]"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-white mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">mail</span>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2 font-brand font-bold">Email</p>
                      <a href="mailto:contact@pociónfire.com" className="text-white hover:text-primary transition-colors">
                        contact@pociónfire.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">phone</span>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2 font-brand font-bold">Teléfono</p>
                      <a href="tel:+1234567890" className="text-white hover:text-primary transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">schedule</span>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2 font-brand font-bold">Horario</p>
                      <p className="text-white text-sm">Lunes - Viernes</p>
                      <p className="text-slate-400 text-sm">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-white/5">
                <h4 className="font-brand text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-6 font-bold">Síguenos</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group">
                    <span className="text-white group-hover:text-primary transition-colors text-sm">IG</span>
                  </a>
                  <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group">
                    <span className="text-white group-hover:text-primary transition-colors text-sm">TW</span>
                  </a>
                  <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group">
                    <span className="text-white group-hover:text-primary transition-colors text-sm">PI</span>
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="pt-8 border-t border-white/5">
                <h4 className="font-brand text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-4 font-bold">Respuestas Rápidas</h4>
                <div className="space-y-3 text-sm">
                  <Link to="/shipping" className="block text-slate-400 hover:text-primary transition-colors">
                    → Información de Envíos
                  </Link>
                  <Link to="/returns" className="block text-slate-400 hover:text-primary transition-colors">
                    → Política de Devoluciones
                  </Link>
                  <Link to="/privacy" className="block text-slate-400 hover:text-primary transition-colors">
                    → Política de Privacidad
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
