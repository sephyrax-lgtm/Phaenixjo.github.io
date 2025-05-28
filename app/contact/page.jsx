'use client';

import Contact from './Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen px-4 py-20 flex flex-col items-center text-white">
      
      {/* Animation d’intro */}
      <motion.div
        className="max-w-3xl text-center space-y-6 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Bonjour, je m'appelle <span className="text-green-400">Joseph Akilabana</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-light text-gray-300">
          Développeur Web & étudiant en BTS SIO SLAM
        </h2>
        
      </motion.div>

      {/* Formulaire de contact stylé */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="w-full flex justify-center"
      >
        <Contact />
      </motion.div>
    </main>
  );
}
