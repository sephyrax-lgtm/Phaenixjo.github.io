'use client';

import { motion } from 'framer-motion';
import React from 'react';

const experiences = [
  {
    date: "12 janvier 2026 - 20 février 2026",
    description: `Stage chez W3TEL • Les Ulis

• Containerisation avec Docker : création d’images, gestion de conteneurs 
• Orchestration avec Kubernetes : déploiement et gestion de services, pods et configurations de base
• Bases de données relationnelles (MariaDB) : conception, connexion et manipulation de données
• Développement d’applications avec base de données : création d’un formulaire connecté à une base MariaDB`,
  },
  {
    date: "19 mai 2025 - 21 juin 2025",
    description: `Stage chez SAS HealProcess • Mitry-Mory

• Gestion de versions avec Git et GitHub
• Développement front-end avec React
• JavaScript : utilisation avancée des propriétés (notation point et notation crochets)
• Montée en compétences sur Node.js pour le backend
• Notions de SQL : manipulation et requêtes de données`,
  },
  {
    date: "07 juillet 2025 - 02 juillet 2025",
    description: `Agent de propreté urbaine • Brétigny-sur-Orge

• Chargement et déchargement des bennes à ordures
• Tri sélectif et respect des consignes de recyclage
• Nettoyage et désinfection des conteneurs, bacs et véhicules de collecte`,
  },
  {
    date: "Mars 2024",
    description: `Bénévole - Carnaval • Brétigny-sur-Orge

• Aide à l’accueil des participants
• Organisation des repas et des pauses
• Accompagnement du groupe pendant le défilé`,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="relative min-h-screen px-12 py-20 rounded-3xl text-white
                 bg-gradient-to-br from-[#0e0e12] via-[#15151a] to-[#1b1b20]
                 border border-neutral-700
                 shadow-[0_0_40px_rgba(80,200,120,0.12)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-4xl font-extrabold tracking-wide
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-green-300 via-blue-300 to-white"
      >
        Expériences Professionnelles
      </motion.h2>

      <div className="relative z-10 mt-20">
        <div className="absolute left-4 top-0 bottom-0 w-[4px]
                        bg-gradient-to-b from-green-400 via-blue-400 to-transparent"></div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={item} className="relative pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full
                              bg-[#1a1a1f] border border-green-400/60
                              flex items-center justify-center">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>

              <div className="backdrop-blur-lg bg-[#111216]/70 p-7 rounded-2xl
                              border border-neutral-700
                              hover:border-green-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-300">
                  {exp.date}
                </h3>

                <p className="mt-4 text-neutral-300 leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
