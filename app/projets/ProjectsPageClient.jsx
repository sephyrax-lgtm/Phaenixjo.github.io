'use client';

import { motion } from 'framer-motion';
import ProjectSlide from './ProjectSlide';
import { FaProjectDiagram } from 'react-icons/fa';
import { FileText, ExternalLink } from 'lucide-react';

export default function ProjectsPageClient() {
  // Liste des comptes-rendus avec lien vers le PDF
  const comptesRendus = [
  { title: "Système de partitionnement", pdf: "/pdfs/partitionnement.pdf" },
  { title: "Création d'une interface graphique JAVA FXML", pdf: "/pdfs/java-fxml.pdf" },
  { title: "Identité Numérique", pdf: "/pdfs/Identite.pdf" },
  { title: "La base en Java", pdf: "/pdfs/base-java.pdf" },
  { title: "Utilisateurs et droits", pdf: "/pdfs/Droits.pdf" },
  { title: "Application Java pour gérer un répertoire", pdf: "/pdfs/repertoire.pdf" },
  { title: "Packet Tracer - Mise en place d'un serveur web", pdf: "/pdfs/Serveur-web.pdf" },
];


  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20 relative overflow-hidden">
      {/* Fond décoratif global */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Conteneur principal */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1500px] flex flex-col items-center">

        {/* Titre principal - Premium */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-5"
        >
          {/* Badge au-dessus du titre */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
          >
            <FaProjectDiagram className="text-green-400 text-sm" />
            <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Portfolio</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
              Mes{' '}
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              projets
            </span>
          </h1>

          <p className="text-neutral-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection de projets personnels et pédagogiques
            mettant en avant mes compétences en développement web,
            applications modernes et technologies actuelles.
          </p>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
        </motion.header>

        {/* Slider des projets — Conteneur AGRANDI et EMBELLI */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            w-full
            rounded-3xl
            bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-neutral-800/30
            backdrop-blur-xl
            border border-green-500/10
            p-6 sm:p-8 lg:p-12
            shadow-[0_0_80px_rgba(74,222,128,0.06)]
            relative overflow-hidden
          "
        >
          {/* Effet de lumière intérieur */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />

          <ProjectSlide />
        </motion.section>

        {/* Section Comptes-rendus — Redesign complet */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 mb-12 w-full max-w-5xl"
        >
          {/* Titre comptes-rendus */}
          <div className="text-center mb-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <FileText size={14} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Documents</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Comptes-rendus
              </span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Les comptes-rendus sont publiés, mis à jour et accessibles à tout lecteur.
              Ils sont classés selon les 3 blocs du BTS SIO :
              Bloc 1 (Services informatiques), Bloc 2 (SLAM) et Bloc 3 (Cybersécurité).
            </p>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500/40" />
            </div>
          </div>

          {/* Liste des comptes-rendus */}
          <div className="flex flex-col gap-3 items-center w-full">
            {comptesRendus.map((cr, i) => (
              <motion.a
                key={i}
                href={cr.pdf}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
                whileHover={{
                  scale: 1.01,
                  x: 6,
                }}
                className="
                  group relative w-full max-w-4xl
                  bg-neutral-900/60 backdrop-blur-md
                  border border-neutral-800
                  hover:border-green-500/30
                  rounded-xl
                  p-5 sm:p-6
                  flex items-center justify-between gap-4
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-neutral-800/60
                  hover:shadow-[0_0_30px_rgba(74,222,128,0.08)]
                "
              >
                {/* Indicateur gauche */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-green-400 rounded-full transition-all duration-300 group-hover:h-8" />

                <div className="flex items-center gap-4 min-w-0">
                  {/* Numéro */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-mono text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Titre */}
                  <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors truncate">
                    {cr.title}
                  </span>
                </div>

                {/* Icône fleche */}
                <ExternalLink
                  size={16}
                  className="flex-shrink-0 text-neutral-600 group-hover:text-green-400 transition-all duration-300 group-hover:translate-x-0.5"
                />
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
