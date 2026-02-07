'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, XCircle } from 'lucide-react';

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
      const res = await fetch('https://formspree.io/f/mgvkglen', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSent(true);
        setError(false);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-16 w-full max-w-4xl bg-black/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl flex flex-col gap-8 border border-gray-800">
      
      {/* Titre */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-2">Travaillons ensemble</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Vous avez un projet ou une question ? Remplissez le formulaire ci-dessous pour me contacter.
        </p>
      </div>

      {/* Feedback messages */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-green-400 bg-green-900/20 p-3 rounded-lg font-semibold shadow-md"
          >
            <CheckCircle size={20} /> Message envoyé avec succès !
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-red-400 bg-red-900/20 p-3 rounded-lg font-semibold shadow-md"
          >
            <XCircle size={20} /> Une erreur est survenue. Veuillez réessayer.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="prenom"
          type="text"
          required
          placeholder="Prénom"
          className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <input
          name="nom"
          type="text"
          required
          placeholder="Nom"
          className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition md:col-span-2"
        />
        <select
          name="service"
          className="p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition md:col-span-2"
        >
          <option value="">Choisir un service</option>
          <option>Développement Web</option>
          <option>Design UI/UX</option>
        </select>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Votre message"
          className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition md:col-span-2"
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          type="submit"
          disabled={loading}
          className={`md:col-span-2 p-4 font-bold rounded-xl transition ${
            loading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-green-400 text-black hover:bg-green-300'
          }`}
        >
          {loading ? 'Envoi en cours...' : 'Envoyer le message'}
        </motion.button>
      </form>

      {/* Coordonnées */}
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 text-gray-300 mt-6">
        <p className="flex items-center gap-2"><Phone size={18} className="text-green-400" /> 07 44 85 59 14</p>
        <p className="flex items-center gap-2"><Mail size={18} className="text-green-400" /> akilabanajoseph@gmail.com</p>
        <p className="flex items-center gap-2"><MapPin size={18} className="text-green-400" /> 91220 Brétigny-sur-Orge</p>
      </div>
    </section>
  );
}
