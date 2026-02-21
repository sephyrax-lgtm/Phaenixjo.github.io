'use client';

import { motion } from 'framer-motion';

const certifications = [
  { id: 1, nom: "Concevoir votre site web avec PHP et MySQL", organisme: "OpenClassrooms", date: "2025", file: "/images/cert1.png" },
  { id: 2, nom: "Apprendre les bases du langage Python", organisme: "OpenClassrooms", date: "2025", file: "/images/cert2.png" },
  { id: 3, nom: "Créez votre site web avec HTML5 et CSS3", organisme: "OpenClassrooms", date: "2025", file: "/images/cert3.png" },
  { id: 4, nom: "Apprendre à programmer avec JavaScript", organisme: "OpenClassrooms", date: "2025", file: "/images/cert4.png" },
  { id: 5, nom: "PIX", organisme: "PIX", date: "2023", file: "/Note_PIX.pdf" },
  { id: 6, nom: "Certification ANSSI", organisme: "ANSSI", date: "2024", file: "/images/cert7.png" },
  { id: 7, nom: "Atelier RGPD", organisme: "CNIL", date: "2025", file: "/images/cert6.png" },
  { id: 8, nom: "Initiez-vous à Linux", organisme: "OpenClassrooms", date: "2025", file: "/images/cert8.png" },
  { id: 9, nom: "Concevez votre réseau TCP/IP", organisme: "OpenClassrooms", date: "2025", file: "/images/cert9.png" },
  { id: 10, nom: "Maîtrisez vos applications et réseaux TCP/IP", organisme: "OpenClassrooms", date: "2026", file: "/images/cert10.png" },
  { id: 11, nom: "Administrez un système Linux", organisme: "OpenClassrooms", date: "2026", file: "/images/cert11.png" },
];

const container = { 
  hidden: {}, 
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
};

const item = { 
  hidden: { opacity: 0, y: 40, scale: 0.9 }, 
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 160, damping: 20 } } 
};

export default function Certification() {
  return (
    <motion.section className="relative z-0 py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden rounded-3xl shadow-2xl border border-green-700/20">
      
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-300 mb-12"
      >
        Mes Certifications
      </motion.h2>

      {/* Grille des certifications */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certifications.map(cert => (
          <motion.div
            key={cert.id}
            variants={item}
            whileHover={{ scale: 1.07, boxShadow: '0 0 40px #00ff90, 0 0 80px #00ff90/30' }}
            whileTap={{ scale: 0.97 }}
            className="group bg-white/5 border border-green-400/40 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
            onClick={() => window.open(cert.file, "_blank")}
          >
            <h3 className="text-xl font-semibold text-green-300 mb-2">{cert.nom}</h3>
            <p className="text-gray-300 text-sm">{cert.organisme} • {cert.date}</p>

            {/* Ligne animée au survol */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-green-400 via-white to-green-400 opacity-0 group-hover:opacity-100 animate-scanner" />
          </motion.div>
        ))}
      </motion.div>

      {/* Styles animation */}
      <style jsx>{`
        .animate-scanner {
          animation: scan 2s infinite linear;
        }
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </motion.section>
  );
}
