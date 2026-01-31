'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import projects from './Projects';

export default function ProjectSlide() {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  if (!projects || projects.length === 0) {
    return <p className="text-white text-center">Aucun projet disponible.</p>;
  }

  const project = projects[index];

  // Changer projet
  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  // Gestion du mouvement de la souris pour effet parallax
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 à 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-10">
      
      {/* FOND ANIMÉ LIQUIDE */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-purple-700 via-pink-600 to-indigo-500 opacity-30 blur-3xl"
        />
      </div>

      {/* CARTE DU PROJET */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={cardRef}
          key={project.title}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-zinc-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl z-10 cursor-pointer"
          style={{
            transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
          }}
        >
          {/* TEXTE */}
          <div className="flex-1 space-y-4">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-400 font-bold text-sm md:text-base"
            >
              {project.number}
            </motion.span>

            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-zinc-300 leading-relaxed"
            >
              {project.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-green-300 text-sm md:text-base font-medium"
            >
              {project.techs.join(' • ')}
            </motion.p>

            {/* ICONES */}
            <div className="flex gap-4 mt-4">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-green-500 shadow-lg transition-transform"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
              {project.codeLink && (
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-green-500 shadow-lg transition-transform"
                >
                  <Github size={20} />
                </motion.a>
              )}
            </div>
          </div>

          {/* IMAGE AVEC EFFET HOVER PARALLAX */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full md:w-[500px] h-[300px] md:h-[400px] rounded-xl shadow-2xl overflow-hidden"
            style={{
              transform: `translateX(${mousePos.x * 20}px) translateY(${-mousePos.y * 20}px)`,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* PAGINATION MINIATURE */}
      <div className="flex gap-2 mt-6 z-20">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 md:w-5 md:h-5 rounded-full transition-all ${
              i === index ? 'bg-green-500 scale-125 shadow-lg' : 'bg-zinc-700'
            }`}
          />
        ))}
      </div>

      {/* BOUTONS NAVIGATION */}
      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex gap-4 z-20">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-green-500 text-black text-2xl md:text-3xl rounded-lg shadow-xl transition-transform"
        >
          ‹
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-green-500 text-black text-2xl md:text-3xl rounded-lg shadow-xl transition-transform"
        >
          ›
        </motion.button>
      </div>
    </div>
  );
}
