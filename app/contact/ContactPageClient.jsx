'use client';

import Contact from './Contact';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

// Ligne décorative réutilisable
function DecorativeLine() {
  return (
    <div className="flex items-center justify-center gap-3 py-2 mt-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent via-green-500/40 to-transparent" />
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-black text-white relative overflow-hidden">
      
      {/* Fond décoratif ambiant */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Animation d'introduction */}
      <motion.header
        className="max-w-3xl text-center space-y-5 mb-16 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-2"
        >
          <Mail size={14} className="text-green-400" />
          <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Contact</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent">
            Bonjour, je suis{' '}
          </span>
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent block mt-2 sm:inline sm:mt-0">
            Joseph Akilabana
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
          Développeur Web & étudiant en BTS SIO SLAM
        </p>

        <DecorativeLine />
      </motion.header>

      {/* Formulaire de contact */}
      <motion.div
        className="w-full flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      >
        <Contact />
      </motion.div>
      
    </main>
  );
}
