'use client';

import { motion } from 'framer-motion';

const certifications = [
  { id: 1, nom: "Concevoir votre site web avec PHP et MySQL", organisme: "OpenClassrooms", date: "2025" },
  { id: 2, nom: "Apprendre les bases du langage Python", organisme: "OpenClassrooms", date: "2025" },
  { id: 3, nom: "Créez votre site web avec HTML5 et CSS3", organisme: "OpenClassrooms", date: "2025" },
  { id: 4, nom: "Apprendre à programmer avec JavaScript", organisme: "OpenClassrooms", date: "2025" },
  { id: 5, nom: "PIX", organisme: "PIX", date: "2023" },
  { id: 6, nom: "Certification ANSSI", organisme: "ANSSI", date: "2024" },
  { id: 7, nom: "Atelier RGPD", organisme: "CNIL", date: "2025" }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150 } },
};

export default function Certification() {
  return (
    <div className="relative z-0 bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00ff90_1%,_transparent_80%)] opacity-10 animate-pulse" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-400 animate-glow"
      >
        <span className="inline-block tracking-wide animate-text-glow">⚡ Certifications</span>
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
            whileHover={{
              scale: 1.05,
              rotate: [0, 0.5, -0.5, 0],
              boxShadow: '0 0 30px #00ff90',
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/5 border border-green-400/30 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 bg-grid-small-white pointer-events-none" />
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              {cert.nom}
            </h3>
            <p className="text-gray-300 text-sm">{cert.organisme} • {cert.date}</p>

            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-400 via-white to-green-400 opacity-0 group-hover:opacity-100 animate-scanner" />
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
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
          0%, 100% { text-shadow: 0 0 10px #00ff90, 0 0 20px #00ff90; }
          50% { text-shadow: 0 0 20px #00ff90, 0 0 40px #00ff90; }
        }

        .bg-grid-small-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
