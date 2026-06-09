'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import projects from './Projects';

export default function ProjectSlide() {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    if (window.innerWidth >= 1024) setIsDesktop(true);

    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide toutes les 6 secondes si pas de hover
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovering]);

  if (!projects?.length) {
    return (
      <p className="text-center text-neutral-400">
        Aucun projet disponible pour le moment.
      </p>
    );
  }

  const project = projects[index];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const handleMouseMove = (e) => {
    if (!isDesktop || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePos({ x, y });
  };

  return (
    <div
      className="relative w-full flex flex-col items-center gap-10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Fond décoratif amélioré */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
          className="
            absolute -top-1/2 -left-1/2
            w-[200%] h-[200%]
            bg-gradient-to-tr from-green-600 via-emerald-500 to-teal-400
            opacity-10 blur-3xl
          "
        />
        {/* Orbe lumineux subtil */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-400 blur-[120px]"
        />
      </div>

      {/* Carte projet — AGRANDIE */}
      <AnimatePresence mode="wait">
        <motion.article
          ref={cardRef}
          key={project.title}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.97 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="
            relative w-full
            max-w-6xl 2xl:max-w-7xl
            flex flex-col lg:flex-row gap-10 lg:gap-14
            items-center
            rounded-3xl
            bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-800/60
            backdrop-blur-xl
            p-8 sm:p-10 lg:p-14
            shadow-2xl
            border border-green-500/10
            overflow-hidden
          "
          style={{
            transform:
              isClient && isDesktop
                ? `perspective(1200px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`
                : 'none',
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Effet de lumière dans le coin */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-400/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

          {/* Texte du projet */}
          <div className="flex-1 space-y-5 min-w-0 order-2 lg:order-1">
            {/* Numéro du projet avec badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/15 border border-green-500/30 text-green-400 font-bold text-sm">
                {project.number}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-green-500/30 to-transparent" />
            </motion.div>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent leading-tight"
            >
              {project.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-neutral-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl"
            >
              {project.description}
            </motion.p>

            {/* Techs - Badges stylés */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {project.techs.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="
                    px-3 py-1.5 rounded-full text-xs font-medium
                    bg-green-500/10 border border-green-500/20
                    text-green-300
                    hover:bg-green-500/20 hover:border-green-500/40
                    transition-all duration-300 cursor-default
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Liens */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-3"
            >
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-2
                    px-5 py-2.5 rounded-xl
                    bg-green-500 text-black font-semibold text-sm
                    hover:bg-green-400 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]
                    transition-all duration-300
                  "
                  aria-label="Voir le projet"
                >
                  <ExternalLink size={16} />
                  <span>Voir le projet</span>
                </a>
              )}

              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-2
                    px-5 py-2.5 rounded-xl
                    bg-neutral-800 border border-neutral-700
                    text-white font-semibold text-sm
                    hover:border-green-500/50 hover:bg-neutral-700
                    hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]
                    transition-all duration-300
                  "
                  aria-label="Code source"
                >
                  <Github size={16} />
                  <span>Code source</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Image — AGRANDIE avec cadre premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="
              relative w-full order-1 lg:order-2
              lg:w-[520px] xl:w-[580px] 2xl:w-[640px]
              lg:flex-shrink-0
            "
            style={{
              transform:
                isClient && isDesktop
                  ? `translate(${mousePos.x * 15}px, ${-mousePos.y * 15}px)`
                  : 'none',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Glow autour de l'image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/30 via-emerald-500/20 to-teal-500/10 blur-sm opacity-60" />

            {/* Conteneur image */}
            <div
              className="
                relative
                h-[280px] sm:h-[340px] lg:h-[400px] xl:h-[440px]
                rounded-2xl overflow-hidden
                border border-green-500/20
                shadow-[0_0_40px_rgba(74,222,128,0.1)]
                group
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 640px"
              />

              {/* Overlay subtil au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.article>
      </AnimatePresence>

      {/* Barre de progression + Pagination */}
      <div className="flex flex-col items-center gap-5 w-full max-w-6xl">
        {/* Barre de progression */}
        <div className="w-full max-w-md h-0.5 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 6, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
          />
        </div>

        {/* Dots + Navigation */}
        <div className="flex items-center gap-6">
          {/* Bouton précédent */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            aria-label="Projet précédent"
            className="
              w-12 h-12 rounded-xl
              bg-neutral-800/80 border border-neutral-700
              text-white
              hover:border-green-500/50 hover:bg-neutral-700
              hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]
              flex items-center justify-center
              transition-all duration-300
            "
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* Dots de pagination */}
          <div className="flex gap-2.5 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  rounded-full transition-all duration-400 ease-out
                  ${
                    i === index
                      ? 'w-8 h-3 bg-gradient-to-r from-green-400 to-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]'
                      : 'w-3 h-3 bg-neutral-600 hover:bg-neutral-500'
                  }
                `}
                aria-label={`Projet ${i + 1}`}
              />
            ))}
          </div>

          {/* Bouton suivant */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            aria-label="Projet suivant"
            className="
              w-12 h-12 rounded-xl
              bg-neutral-800/80 border border-neutral-700
              text-white
              hover:border-green-500/50 hover:bg-neutral-700
              hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]
              flex items-center justify-center
              transition-all duration-300
            "
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>

        {/* Compteur de projets */}
        <p className="text-neutral-500 text-sm font-mono tracking-wider">
          <span className="text-green-400 font-semibold">{String(index + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(projects.length).padStart(2, '0')}</span>
        </p>
      </div>
    </div>
  );
}
