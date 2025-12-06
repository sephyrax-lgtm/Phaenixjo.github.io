'use client';

import { motion } from 'framer-motion';

const certifications = [
  { id: 1, nom: "Concevoir votre site web avec PHP et MySQL", organisme: "OpenClassrooms", date: "2025" },
  { id: 2, nom: "Apprendre les bases du langage Python", organisme: "OpenClassrooms", date: "2025" },
  { id: 3, nom: "Créez votre site web avec HTML5 et CSS3", organisme: "OpenClassrooms", date: "2025" },
  { id: 4, nom: "Apprendre à programmer avec JavaScript", organisme: "OpenClassrooms", date: "2025" },
  { id: 5, nom: "PIX", organisme: "PIX", date: "2023" },
  { id: 6, nom: "Certification ANSSI", organisme: "ANSSI", date: "2024" },
  { id: 7, nom: "Atelier RGPD", organisme: "CNIL", date: "2025" },
  { id: 8, nom: "Initiez-vous à Linux", organisme: "OpenClassrooms", date: "2025" },
  { id: 9, nom: "Concevez votre réseau TCP/IP", organisme: "OpenClassrooms", date: "2025" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 160, damping: 20 } },
};

export default function Certification() {
  return (
    <motion.section className="relative z-0 py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden rounded-3xl shadow-2xl border border-green-700/20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00ff90_1%,_transparent_70%)] opacity-20 animate-pulse-slow" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-300 animate-glow"
      >
        Mes Certifications
      </motion.h2>

      {/* Grid Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={item}
            whileHover={{ scale: 1.07, rotate: [0, 1, -1, 0], boxShadow: '0 0 40px #00ff90, 0 0 80px #00ff90/30' }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/5 border border-green-400/40 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 bg-grid-small-white pointer-events-none" />
            <h3 className="text-xl font-semibold text-green-300 mb-2 group-hover:text-white transition-colors duration-300">
              {cert.nom}
            </h3>
            <p className="text-gray-300 text-sm group-hover:text-green-200 transition-colors duration-300">{cert.organisme} • {cert.date}</p>

            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-green-400 via-white to-green-400 opacity-0 group-hover:opacity-100 animate-scanner" />
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .animate-glow {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }

        .animate-scanner {
          animation: scan 2s infinite linear;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 15px #00ff90, 0 0 30px #00ff90; }
          50% { text-shadow: 0 0 30px #00ff90, 0 0 60px #00ff90; }
        }

        .bg-grid-small-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </motion.section>
  );
}
