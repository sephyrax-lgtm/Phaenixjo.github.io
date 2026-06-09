'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

export default function DiplomeFormation({ data = [] }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  // Icônes personnalisées selon le niveau de diplôme
  const getIcon = (titre) => {
    if (titre.includes('BTS')) return GraduationCap;
    if (titre.includes('Baccalauréat')) return School;
    return BookOpen;
  };

  return (
    <div className="space-y-16 py-8">
      
      {/* Titre */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-2">
          <GraduationCap size={14} className="text-green-400" />
          <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Parcours Scolaire</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
            Diplômes &{' '}
          </span>
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Formations
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

      {/* Cartes Bannières - Design Premium Horizontal */}
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="max-w-5xl mx-auto space-y-8"
      >
        {data.map((diplome, index) => {
          const Icon = getIcon(diplome.titre);
          const isLatest = index === 0; // Met en évidence le diplôme le plus récent/actuel
          
          return (
            <motion.div
              key={index}
              variants={item}
              className={`
                group relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-8 md:p-10 rounded-[2.5rem] 
                backdrop-blur-xl border transition-all duration-500 overflow-hidden cursor-default
                ${isLatest 
                  ? 'bg-gradient-to-br from-green-900/20 via-neutral-900/80 to-neutral-900/60 border-green-500/40 shadow-[0_0_40px_rgba(74,222,128,0.1)]' 
                  : 'bg-[#0a0a0c]/80 border-neutral-800 hover:border-green-500/20 hover:bg-neutral-900/80'
                }
              `}
            >
              {/* Année en filigrane géant */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[150px] font-black italic tracking-tighter opacity-[0.02] text-white pointer-events-none select-none transition-all duration-700 group-hover:opacity-[0.04] group-hover:scale-110">
                {diplome.annee.split(' ')[0]}
              </div>

              {/* Glow au hover */}
              <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-0 transition-opacity duration-700 pointer-events-none ${isLatest ? 'bg-green-500/20 opacity-100' : 'bg-green-500/10 group-hover:opacity-100'}`} />

              {/* Bloc Icône Gauche */}
              <div className={`
                relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] flex items-center justify-center
                border shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10
                ${isLatest 
                  ? 'bg-gradient-to-br from-green-400 to-emerald-600 border-green-300/50' 
                  : 'bg-neutral-900 border-neutral-700 group-hover:border-green-500/50 group-hover:bg-neutral-800'
                }
              `}>
                {/* Lueur derrière l'icône si actuel */}
                {isLatest && <div className="absolute inset-0 bg-white/20 blur-md rounded-[1.5rem]" />}
                
                <Icon size={isLatest ? 56 : 48} className={isLatest ? 'text-black drop-shadow-md' : 'text-neutral-400 group-hover:text-green-400 transition-colors'} />
              </div>

              {/* Contenu Central */}
              <div className="flex-1 text-center md:text-left z-10 space-y-4">
                <div className="space-y-1">
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black leading-tight ${isLatest ? 'text-white' : 'text-gray-200 group-hover:text-white transition-colors'}`}>
                    {diplome.titre}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-base md:text-lg text-neutral-400 font-medium">
                    <span className="text-neutral-200">{diplome.etablissement}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    <span className="italic">{diplome.lieu}</span>
                  </div>
                </div>
              </div>

              {/* Bloc Année Droite */}
              <div className="flex-shrink-0 z-10">
                <div className={`
                  px-6 py-3 rounded-full border backdrop-blur-md shadow-inner font-mono font-bold text-sm md:text-base transition-colors duration-500
                  ${isLatest 
                    ? 'bg-green-400/10 border-green-400/30 text-green-400' 
                    : 'bg-neutral-900 border-neutral-800 text-neutral-500 group-hover:border-green-500/20 group-hover:text-green-400 group-hover:bg-green-400/5'
                  }
                `}>
                  {diplome.annee}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
