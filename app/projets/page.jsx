'use client';

import { motion } from 'framer-motion';
import ProjectSlide from './ProjectSlide';
import { FaProjectDiagram } from 'react-icons/fa';

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-black pt-24 px-6 md:px-12 text-white flex flex-col items-center">

      {/* TITRE AVEC ICÔNE ET ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14 space-y-3"
      >
        <div className="flex items-center justify-center gap-3">
          <FaProjectDiagram className="text-cyan-400 text-3xl md:text-4xl animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-extrabold
                          text-transparent bg-clip-text
                          bg-gradient-to-r from-cyan-400 to-teal-300 drop-shadow-lg">
            Mes Projets
          </h1>
        </div>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          Découvrez une sélection de mes projets personnels et professionnels, démontrant mes compétences en développement web, applications et technologies modernes.
        </p>
      </motion.div>

      {/* SLIDER DES PROJETS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl bg-neutral-900/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4 md:p-6 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
      >
        <ProjectSlide />
      </motion.div>

      {/* FOOTER / NOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-400 text-sm mt-6 text-center"
      >
        Tous les projets sont réalisés dans un cadre pédagogique ou personnel, et utilisent les dernières technologies web.
      </motion.p>
    </main>
  );
}
