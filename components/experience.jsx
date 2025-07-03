'use client'; // Pour App Router Next.js

import { motion } from 'framer-motion';
import React from 'react';

const experiences = [
  {
    date: "06 janvier 2026 - 14 février 2026",
    description: "Stage chez SAS HealProcess • Mitry-Mory",
  },
  {
    date: "19 mai 2025 - 21 juin 2025",
    description: "Stage chez SAS HealProcess • Mitry-Mory",
  },
  {
    date: "07 juillet 2025 - 02 juillet 2025",
    description: "Agent de propreté urbaine • Brétigny-sur-Orge",
  },
  {
    date: "Mars 2024",
    description: "Bénévole - Carnaval • Mairie de Brétigny-sur-Orge",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative isolate overflow-hidden min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] px-6 py-20 md:px-20 text-white rounded-lg shadow-xl border border-green-800/20"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[150%] h-80 bg-green-400 opacity-5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 blur-[100px] opacity-10" />
      </div>

      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-4xl md:text-5xl font-bold mb-20 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white animate-pulse"
      >
        Expériences Professionnelles
      </motion.h2>

      {/* Ligne temporelle */}
      <div className="relative z-10 border-l-2 border-green-500 pl-6 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="absolute -left-[12px] top-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black shadow-lg transition-transform group-hover:scale-125" />
            <div className="bg-[#1b1b1b]/60 backdrop-blur-md border border-green-500/20 shadow-inner p-6 rounded-lg transition-colors duration-300 hover:bg-[#1f1f1f]">
              <h3 className="text-lg font-semibold text-green-300 group-hover:text-green-400 transition-colors">
                {exp.date}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mt-1">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cercle lumineux */}
      <div className="absolute left-1/2 bottom-[-200px] w-[500px] h-[500px] bg-green-400 rounded-full opacity-10 blur-[160px] -translate-x-1/2" />
    </motion.section>
  );
};

export default Experience;
