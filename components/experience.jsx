'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    date: "12 janvier 2026 - 20 février 2026",
    role: "Stage chez W3TEL",
    lieu: "Les Ulis",
    description: `• Containerisation avec Docker\n• Orchestration avec Kubernetes\n• Bases de données MariaDB\n• Développement d’applications connectées à une base de données`,
  },
  {
    date: "19 mai 2025 - 21 juin 2025",
    role: "Stage chez SAS HealProcess",
    lieu: "Mitry-Mory",
    description: `• Git & GitHub\n• Développement React\n• JavaScript avancé\n• Initiation au backend Node.js\n• Bases du SQL`,
  },
  {
    date: "07 juillet 2024 - 02 août 2024",
    role: "Agent de propreté urbaine",
    lieu: "Brétigny-sur-Orge",
    description: `• Collecte et tri des déchets\n• Respect des consignes de sécurité\n• Nettoyage du matériel`,
  },
  {
    date: "Mars 2024",
    role: "Bénévole – Carnaval",
    lieu: "Brétigny-sur-Orge",
    description: `• Accueil du public\n• Organisation logistique\n• Accompagnement des participants`,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <div className="space-y-12">
      
      {/* Titre */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
            Expériences{' '}
          </span>
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Professionnelles
          </span>
        </h2>
        
        {/* Ligne décorative */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]" />
          <div className="h-px w-6 bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-green-500/40 to-transparent" />
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl mx-auto space-y-8 pl-6 sm:pl-0"
      >
        {/* Ligne verticale (desktop & mobile) */}
        <div className="absolute left-0 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-green-500/30 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div key={index} variants={item} className="relative sm:pl-16">
            
            {/* Point timeline */}
            <div className="absolute left-[-29px] sm:left-0 top-4 w-12 h-12 rounded-full bg-neutral-900 border-2 border-neutral-800 flex items-center justify-center z-10 group-hover:border-blue-400/60 transition-colors">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            </div>

            {/* Carte */}
            <div className="
              group bg-neutral-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl 
              border border-neutral-800 hover:border-blue-500/30 hover:bg-neutral-800/60 
              transition-all duration-300 relative overflow-hidden ml-4 sm:ml-0
            ">
              {/* Glow interne au hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold mb-3">
                  {exp.date}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300">
                  {exp.role}
                </h3>
                
                <p className="text-neutral-400 text-sm font-medium mb-4">
                  <span className="text-neutral-300">@ </span>{exp.lieu}
                </p>

                <div className="w-8 h-px bg-neutral-800 mb-4 group-hover:w-16 group-hover:bg-blue-500/50 transition-all duration-300" />
                
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed whitespace-pre-line group-hover:text-neutral-300 transition-colors">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
