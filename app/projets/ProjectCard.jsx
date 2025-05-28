'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ title, description, techs, images, liveLink, codeLink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-zinc-800 flex max-w-2xl mx-auto p-4"
    >
      {/* Contenu texte à gauche */}
      <div className="flex-1 p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-zinc-300 text-xs mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="bg-zinc-800 text-xs text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-green-600 hover:bg-green-500 px-3 py-1 rounded-md transition"
          >
            <ExternalLink size={14} /> Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md transition"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>

      {/* Images à droite */}
      <div className="w-48 flex flex-col gap-2 p-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} image ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </motion.div>
  );
}
