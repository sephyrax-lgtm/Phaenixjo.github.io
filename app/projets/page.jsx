'use client';

import { motion } from 'framer-motion';
import ProjectSlide from './ProjectSlide';

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-black pt-28 px-6 text-white flex flex-col items-center">
      
      {/* TITRE AVEC ANIMATION */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 md:mb-20"
      >
        Mes Projets
      </motion.h1>

      {/* SLIDER DES PROJETS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-6xl"
      >
        <ProjectSlide />
      </motion.div>

    </main>
  );
}
