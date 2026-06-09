'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import Image from 'next/image';

const notes = [
  {
    titre: 'Année 1 – SAS Heal Process',
    description: "Reconstruction du portfolio avec une interface moderne et narration de mon évolution.",
    lien: '/Note_de_synthese_1er_Joseph_akilabana.pdf',
    logo: '/images/logo-saas-heal-process.png',
    couleurBase: 'pink',
  },
  {
    titre: 'Année 2 – W3TEL',
    description: "Application web de gestion sécurisée de serveurs distants avec JWT et accès SSH en temps réel.",
    lien: '/Note_de_synthèse_2 eme Btssio_Akilabana_joseph.pdf',
    logo: '/images/logo-w3tel.jpeg',
    couleurBase: 'green',
  },
];

export default function NotesSynthese() {
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
            Notes de{' '}
          </span>
          <span className="bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
            Synthèse
          </span>
        </h2>
        
        {/* Ligne décorative */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.6)]" />
          <div className="h-px w-6 bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-green-500/40 to-transparent" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {notes.map((note, index) => {
          const isPink = note.couleurBase === 'pink';
          const glowColor = isPink ? 'bg-pink-500/10' : 'bg-green-500/10';
          const borderColor = isPink ? 'border-pink-500/20' : 'border-green-500/20';
          const hoverBorderColor = isPink ? 'hover:border-pink-500/50' : 'hover:border-green-500/50';
          const textColor = isPink ? 'text-pink-400' : 'text-green-400';
          const gradientLine = isPink ? 'from-pink-400 to-pink-300' : 'from-green-400 to-emerald-300';
          
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.6 }} 
              className={`
                relative group flex flex-col items-center sm:items-start p-8 rounded-3xl cursor-pointer overflow-hidden 
                bg-neutral-900/60 backdrop-blur-xl border ${borderColor} ${hoverBorderColor} 
                shadow-lg transition-all duration-500
              `}
              onClick={() => window.open(note.lien, '_blank')}
            >
              {/* Glow background */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${glowColor}`} />
              
              {/* Animated top line */}
              <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${gradientLine} group-hover:w-full transition-all duration-700 ease-in-out`} />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full z-10 relative">
                {/* Logo */}
                {note.logo && (
                  <div className={`
                    flex-shrink-0 w-24 h-24 rounded-2xl bg-white/5 border ${borderColor} 
                    flex items-center justify-center p-3 overflow-hidden shadow-xl
                    group-hover:scale-105 transition-transform duration-500
                  `}>
                    <div className="relative w-full h-full">
                      <Image src={note.logo} alt={note.titre} fill className="object-contain" sizes="96px" />
                    </div>
                  </div>
                )}

                {/* Contenu */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border ${borderColor} mb-3`}>
                    <FileText size={12} className={textColor} />
                    <span className={`text-[10px] uppercase tracking-wider font-bold ${textColor}`}>PDF Disponible</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-gray-200 transition-colors">
                    {note.titre}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {note.description}
                  </p>

                  <div className="mt-auto">
                    <span className={`inline-flex items-center gap-2 font-semibold text-sm ${textColor} group-hover:underline underline-offset-4 decoration-2 transition-all`}>
                      Voir la note
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
