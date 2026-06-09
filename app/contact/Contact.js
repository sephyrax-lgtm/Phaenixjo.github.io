'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, XCircle, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSent(true);
        setError(false);
        form.reset();
        // Hide success message after 5 seconds
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "07 44 85 59 14",
      href: "tel:+33744855914",
    },
    {
      icon: Mail,
      label: "Email",
      value: "akilabanajoseph@gmail.com",
      href: "mailto:akilabanajoseph@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "91220 Brétigny-sur-Orge",
      href: null,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        
        {/* Colonne de gauche : Informations de contact */}
        <motion.div 
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Travaillons{' '}
              </span>
              <span className="text-green-400 block sm:inline">ensemble</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter via ce formulaire ou directement via mes coordonnées.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const CardContent = (
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-green-500/30 hover:bg-neutral-800/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                    <Icon className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium mb-1">{info.label}</p>
                    <p className="text-neutral-200 font-semibold group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={idx} href={info.href} className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-2xl">
                  {CardContent}
                </a>
              ) : (
                <div key={idx}>
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Décoration */}
          <div className="hidden lg:block w-32 h-32 bg-green-500/5 rounded-full blur-3xl mt-10" />
        </motion.div>

        {/* Colonne de droite : Formulaire */}
        <motion.div 
          className="lg:col-span-3 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Glow derrière le formulaire */}
          <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 via-emerald-500/5 to-transparent rounded-[2rem] blur-xl opacity-50 pointer-events-none" />
          
          <div className="relative bg-neutral-900/80 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Ligne lumineuse */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

            {/* Feedback messages */}
            <AnimatePresence mode="wait">
              {sent && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-3 text-green-400 bg-green-500/10 border border-green-500/20 p-4 rounded-xl font-medium">
                    <CheckCircle size={20} className="flex-shrink-0" /> 
                    <span>Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                  </div>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-3 text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl font-medium">
                    <XCircle size={20} className="flex-shrink-0" /> 
                    <span>Une erreur est survenue lors de l'envoi. Veuillez réessayer.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-400 pl-1">Prénom</label>
                <input
                  name="prenom"
                  type="text"
                  required
                  placeholder="John"
                  className="w-full p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-400 pl-1">Nom</label>
                <input
                  name="nom"
                  type="text"
                  required
                  placeholder="Doe"
                  className="w-full p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-medium text-neutral-400 pl-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john.doe@exemple.com"
                  className="w-full p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-medium text-neutral-400 pl-1">Service souhaité</label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    className="w-full p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected className="text-neutral-600">Sélectionnez un service</option>
                    <option value="Développement Web" className="bg-neutral-900 text-white">Développement Web</option>
                    <option value="Design UI/UX" className="bg-neutral-900 text-white">Design UI/UX</option>
                    <option value="Autre demande" className="bg-neutral-900 text-white">Autre demande</option>
                  </select>
                  {/* Flèche personnalisée pour le select */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-medium text-neutral-400 pl-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 resize-y"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`
                  md:col-span-2 mt-2 w-full p-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg
                  ${loading
                    ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed border border-neutral-700'
                    : 'bg-gradient-to-r from-green-500 to-emerald-400 text-black hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] border border-transparent'
                  }
                `}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
