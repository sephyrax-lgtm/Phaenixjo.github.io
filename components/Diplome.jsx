'use client';

import { motion } from 'framer-motion';

export default function DiplomeFormation({ data = [] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400 drop-shadow-lg">
        Diplômes & Formations
      </h2>

      {data.map((diplome, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 255, 144, 0.6)' }}
          className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 rounded-xl cursor-pointer select-none"
        >
          <h3 className="text-xl md:text-2xl font-extrabold text-green-400 mb-1 drop-shadow-lg">
            {diplome.titre}
          </h3>
          <p className="text-gray-300 font-semibold">
            {diplome.etablissement} — <span className="italic">{diplome.lieu}</span>
          </p>
          <p className="text-gray-400 mt-1">{diplome.année}</p>
        </motion.div>
      ))}
    </div>
  );
}
