'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const notes = [
  {
    titre: 'Année 1 – SAS Heal Process',
    description: "Reconstruction du portfolio avec une interface moderne et narration de mon évolution.",
    lien: '/Note_de_synthese_1er_Joseph_akilabana.pdf',
    logo: '/images/logo-saas-heal-process.png',
    couleur: 'from-pink-500 via-pink-400 to-pink-300',
  },
  {
    titre: 'Année 2 – W3TEL',
    description: "Application web de gestion sécurisée de serveurs distants avec JWT et accès SSH en temps réel.",
    lien: '/Note_de_synthèse_2 eme Btssio_Akilabana_joseph.pdf',
    logo: '/images/logo-w3tel.jpeg',
    couleur: 'from-green-600 via-green-500 to-green-400',
  },
];

export default function NotesSynthese() {
  return (
    <div className="space-y-16 px-4 md:px-0">
      <motion.h2 initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-400 drop-shadow-lg text-center">
        📝 Notes de synthèse
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {notes.map((note, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }} className={`relative p-8 rounded-3xl cursor-pointer overflow-hidden shadow-2xl bg-gradient-to-r ${note.couleur} group`}>
            
            {note.logo && <div className="mb-6 flex justify-center"><Image src={note.logo} alt={note.titre} width={180} height={180} className="object-contain drop-shadow-2xl" /></div>}

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 drop-shadow-lg text-center">{note.titre}</h3>
            <p className="text-gray-200 mb-6 text-center md:text-left leading-relaxed">{note.description}</p>

            <div className="flex justify-center md:justify-start">
              <a href={note.lien} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-semibold hover:text-pink-300 transition-all z-10">
                🔗 Voir la note
                <motion.span className="inline-block" whileHover={{ x: 6, scale: 1.3 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <ArrowUpRight size={18} />
                </motion.span>
              </a>
            </div>

            <motion.div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-20 rounded-3xl transition-all pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
