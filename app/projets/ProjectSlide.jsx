'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import projects from './Projects';

export default function ProjectSlide() {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false); // Flag pour savoir si on est côté client
  const [isDesktop, setIsDesktop] = useState(false); // Flag pour desktop
  const cardRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    if (window.innerWidth >= 1024) setIsDesktop(true);

    // Optionnel : recalculer si on redimensionne
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Gestion du parallax au survol
  const handleMouseMove = (e) => {
    if (!isDesktop || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePos({ x, y });
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-8">
      {/* Fond décoratif */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
          className="
            absolute -top-1/2 -left-1/2
            w-[200%] h-[200%]
            bg-gradient-to-tr from-purple-700 via-pink-600 to-indigo-500
            opacity-20 blur-3xl
          "
        />
      </div>

      {/* Carte projet */}
      <AnimatePresence mode="wait">
        <motion.article
          ref={cardRef}
          key={project.title}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="
            relative w-full
            max-w-5xl 2xl:max-w-6xl
            flex flex-col lg:flex-row gap-8
            items-center
            rounded-3xl
            bg-neutral-900/80 backdrop-blur
            p-6 sm:p-8 lg:p-10
            shadow-2xl
          "
          style={{
            transform:
              isClient && isDesktop
                ? `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
                : 'none',
          }}
        >
          {/* Texte */}
          <div className="flex-1 space-y-4">
            <span className="text-green-400 font-semibold text-sm">
              {project.number}
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold">
              {project.title}
            </h2>

            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            <p className="text-green-300 text-sm font-medium">
              {project.techs.join(' • ')}
            </p>

            {/* Liens */}
            <div className="flex gap-4 pt-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11 flex items-center justify-center
                    rounded-full bg-neutral-800
                    hover:bg-green-500 hover:text-black
                    transition
                  "
                  aria-label="Voir le projet"
                >
                  <ExternalLink size={18} />
                </a>
              )}

              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11 flex items-center justify-center
                    rounded-full bg-neutral-800
                    hover:bg-green-500 hover:text-black
                    transition
                  "
                  aria-label="Code source"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Image */}
          <div
            className="
              relative w-full
              max-w-md lg:max-w-lg
              h-[240px] sm:h-[300px] lg:h-[360px]
              rounded-xl overflow-hidden shadow-xl
            "
            style={{
              transform:
                isClient && isDesktop
                  ? `translate(${mousePos.x * 12}px, ${-mousePos.y * 12}px)`
                  : 'none',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </motion.article>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? 'bg-green-500 scale-125' : 'bg-neutral-600'
            }`}
            aria-label={`Projet ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="
            w-12 h-12 rounded-lg
            bg-green-500 text-black text-2xl
            hover:scale-110 transition
          "
        >
          ‹
        </button>
        <button
          onClick={next}
          className="
            w-12 h-12 rounded-lg
            bg-green-500 text-black text-2xl
            hover:scale-110 transition
          "
        >
          ›
        </button>
      </div>
    </div>
  );
}
