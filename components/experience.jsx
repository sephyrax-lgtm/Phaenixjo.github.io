'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    date: "12 janvier 2026 - 20 février 2026",
    description: `Stage chez W3TEL • Les Ulis

• Containerisation avec Docker
• Orchestration avec Kubernetes
• Bases de données MariaDB
• Développement d’applications connectées à une base de données`,
  },
  {
    date: "19 mai 2025 - 21 juin 2025",
    description: `Stage chez SAS HealProcess • Mitry-Mory

• Git & GitHub
• Développement React
• JavaScript avancé
• Initiation au backend Node.js
• Bases du SQL`,
  },
  {
    date: "07 juillet 2025 - 02 juillet 2025",
    description: `Agent de propreté urbaine • Brétigny-sur-Orge

• Collecte et tri des déchets
• Respect des consignes de sécurité
• Nettoyage du matériel`,
  },
  {
    date: "Mars 2024",
    description: `Bénévole – Carnaval • Brétigny-sur-Orge

• Accueil du public
• Organisation logistique
• Accompagnement des participants`,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="
        relative
        w-full
        px-4 sm:px-6 md:px-10
        py-10 sm:py-14
        rounded-2xl
        bg-gradient-to-br from-[#0e0e12] via-[#15151a] to-[#1b1b20]
        border border-neutral-700
        shadow-[0_0_40px_rgba(80,200,120,0.12)]
      "
    >
      {/* Titre */}
      <motion.h2
        variants={item}
        className="
          text-center
          text-3xl sm:text-4xl
          font-extrabold
          mb-10
          bg-clip-text text-transparent
          bg-gradient-to-r from-green-300 via-blue-300 to-white
        "
      >
        Expériences professionnelles
      </motion.h2>

      {/* Timeline */}
      <div className="relative space-y-10 sm:space-y-14">
        {/* Ligne verticale (desktop seulement) */}
        <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-400 via-blue-400 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div key={index} variants={item} className="relative sm:pl-16">
            {/* Point timeline (desktop seulement) */}
            <div className="hidden sm:flex absolute left-0 top-4 w-12 h-12 rounded-full bg-[#1a1a1f] border border-green-400/60 items-center justify-center">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            {/* Carte */}
            <div className="
              bg-[#111216]/70
              backdrop-blur-lg
              p-5 sm:p-6
              rounded-2xl
              border border-neutral-700
              hover:border-green-400/50
              transition-all duration-300
            ">
              <h3 className="text-lg sm:text-xl font-bold text-green-300">{exp.date}</h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
