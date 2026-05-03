'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      {/* Glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
          Page introuvable
        </h2>

        <p className="text-gray-400 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Bouton retour */}
        <Link
          href="/"
          className="inline-block mt-4 px-8 py-3 rounded-lg bg-green-400 text-black font-bold hover:bg-green-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-400/20"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </main>
  );
}
