'use client';

import { motion } from 'framer-motion';

const notes = [
  {
    titre: 'Année 1 – Entreprise SAS Heal Process',
    description:
      "Reconstruction du portfolio avec une interface moderne, plus interactive et une narration de mon évolution.",
    lien: 'https://docs.google.com/document/d/1xJ-4qIuc-ab60JUCDPcsqkRAS0sVnl7S8rqSFJL7On8/edit?tab=t.0',
    couleur: 'from-green-400 via-blue-500 to-purple-500',
  },
  {
    titre: 'Année 2 – Portfolio évolutif',
    description:
      "Mise à jour du portfolio avec une interface encore plus moderne, interactive et responsive, illustrant mon parcours.",
    lien: 'https://docs.google.com/document/d/2emeLienGoogleDoc',
    couleur: 'from-purple-600 via-pink-500 to-red-400',
  },
];

export default function NotesSynthese() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 glow text-white">📝 Notes de synthèse</h2>

      {notes.map((note, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 255, 255, 0.5)' }}
          className={`bg-gradient-to-r ${note.couleur} p-6 rounded-xl cursor-pointer select-none transition-all`}
        >
          <h3 className="text-xl font-extrabold text-white mb-1 drop-shadow-lg">
            {note.titre}
          </h3>
          <p className="text-gray-100 font-medium mb-3">{note.description}</p>
          <a
            href={note.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-white underline hover:text-yellow-200 transition"
          >
            🔗 Voir la note de synthèse
          </a>
        </motion.div>
      ))}
    </div>
  );
}
