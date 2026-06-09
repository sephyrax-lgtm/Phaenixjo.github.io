'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

const certifications = [
  { id: 1, nom: "Concevoir votre site web avec PHP et MySQL", organisme: "OpenClassrooms", date: "2025", file: "/images/cert1.png" },
  { id: 2, nom: "Apprendre les bases du langage Python", organisme: "OpenClassrooms", date: "2025", file: "/images/cert2.png" },
  { id: 3, nom: "Créez votre site web avec HTML5 et CSS3", organisme: "OpenClassrooms", date: "2025", file: "/images/cert3.png" },
  { id: 4, nom: "Apprendre à programmer avec JavaScript", organisme: "OpenClassrooms", date: "2025", file: "/images/cert4.png" },
  { id: 5, nom: "PIX", organisme: "PIX", date: "2023", file: "#" },
  { id: 6, nom: "Certification ANSSI", organisme: "ANSSI", date: "2024", file: "/images/cert7.png" },
  { id: 7, nom: "Atelier RGPD", organisme: "CNIL", date: "2025", file: "/images/cert6.png" },
  { id: 8, nom: "Initiez-vous à Linux", organisme: "OpenClassrooms", date: "2025", file: "/images/cert8.png" },
  { id: 9, nom: "Concevez votre réseau TCP/IP", organisme: "OpenClassrooms", date: "2025", file: "/images/cert9.png" },
  { id: 10, nom: "Maîtrisez vos applications et réseaux TCP/IP", organisme: "OpenClassrooms", date: "2026", file: "/images/cert10.png" },
  { id: 11, nom: "Administrez un système Linux", organisme: "OpenClassrooms", date: "2026", file: "/images/cert11.png" },
];

const container = { 
  hidden: {}, 
  show: { transition: { staggerChildren: 0.1 } } 
};

const item = { 
  hidden: { opacity: 0, y: 30, scale: 0.95 }, 
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } 
};

export default function Certification() {
  return (
    <div className="space-y-16">
      
      {/* Titre Premium */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-2">
          <Award size={14} className="text-green-400" />
          <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Validations d'acquis</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
            Mes{' '}
          </span>
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        
        {/* Ligne décorative animée */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-500/50 to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 bottom-0 w-8 bg-green-300/80 blur-sm"
              animate={{ x: [-50, 150] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent via-green-500/50 to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 bottom-0 w-8 bg-green-300/80 blur-sm"
              animate={{ x: [150, -50] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Grille des certifications - Design Badge/Award */}
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
      >
        {certifications.map(cert => (
          <motion.div
            key={cert.id}
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative bg-[#0a0a0c] backdrop-blur-xl p-8 rounded-[2rem] 
              border border-neutral-800 hover:border-green-500/40 
              shadow-xl hover:shadow-[0_20px_50px_rgba(74,222,128,0.15)] 
              transition-all duration-500 cursor-pointer overflow-hidden 
              flex flex-col justify-between h-full min-h-[220px]
            "
            onClick={() => window.open(cert.file, "_blank")}
          >
            {/* Effet de reflet (Sweep) */}
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:animate-sweep pointer-events-none" />

            {/* Icone en filigrane (Background) */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:text-green-400 transition-all duration-700 pointer-events-none">
              <Award size={180} />
            </div>
            
            {/* Glow interne au hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              {/* En-tête de la carte */}
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-bold text-neutral-400 group-hover:border-green-500/30 group-hover:text-green-300 transition-colors shadow-inner">
                  <CheckCircle2 size={14} className="text-green-500/50 group-hover:text-green-400 transition-colors" />
                  {cert.organisme}
                </div>
                
                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-green-400 group-hover:border-green-400 transition-all duration-300 shadow-md">
                  <ExternalLink size={18} className="text-neutral-500 group-hover:text-black transition-colors" />
                </div>
              </div>
              
              {/* Titre */}
              <h3 className="text-xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-green-200 transition-all duration-300 leading-tight mb-6 mt-auto">
                {cert.nom}
              </h3>
              
              {/* Pied de carte */}
              <div className="mt-auto flex items-center gap-2 pt-4 border-t border-neutral-800/50 group-hover:border-green-500/20 transition-colors">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Obtenu en</span>
                <span className="text-sm font-bold font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-md">
                  {cert.date}
                </span>
              </div>
            </div>

            {/* Ligne animée en haut */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-emerald-300 group-hover:w-full transition-all duration-700 ease-out" />
          </motion.div>
        ))}
      </motion.div>

      {/* Styles personnalisés pour les animations */}
      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(0) skewX(-45deg); }
          100% { transform: translateX(400%) skewX(-45deg); }
        }
        .animate-sweep {
          animation: sweep 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
