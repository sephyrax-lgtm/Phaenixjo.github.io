'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectSlide from './ProjectSlide';
import { FaProjectDiagram } from 'react-icons/fa';

export default function ProjetsPage() {
  // Tableau des comptes-rendus avec le lien vers le PDF
  const comptesRendus = [
    { title: "Système de partitionnement", pdf: "/pdfs/partitionnement.pdf" },
    { title: "Création d'une interface graphique JAVA FXML", pdf: "/pdfs/java-fxml.pdf" },
    { title: "Identité Numérique", pdf: "/pdfs/Identite.pdf" },
    { title: "La base en Java", pdf: "/pdfs/base-java.pdf" },
    { title: "Utilisateurs et droits", pdf: "/pdfs/Droits.pdf" },
    { title: "Application Java permettant de gérer un répertoire", pdf: "/pdfs/repertoire.pdf" },
    { title: "Packet Tracer - Mise en place d'un serveur web", pdf: "/pdfs/Serveur-web.pdf" },
  ];

  const [pdfToShow, setPdfToShow] = useState(null);

  // Fonction pour ouvrir un PDF
  const handleOpenPdf = (pdf) => {
    setPdfToShow(pdf);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20">
      {/* CONTAINER GLOBAL */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1400px] flex flex-col items-center">
        
        {/* TITRE PRINCIPAL */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <FaProjectDiagram className="text-cyan-400 text-3xl md:text-4xl animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Mes projets
            </h1>
          </div>

          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
            Découvrez une sélection de projets personnels et pédagogiques
            mettant en avant mes compétences en développement web,
            applications modernes et technologies actuelles.
          </p>
        </motion.header>

        {/* SLIDER */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-3xl bg-neutral-900/60 backdrop-blur-md border border-cyan-500/20 p-4 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]"
        >
          <ProjectSlide />
        </motion.section>

        {/* COMPTES-RENDUS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* TITRE */}
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 text-center mb-6">
            Comptes-rendus
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Les comptes-rendus sont publiés, mis à jour et accessibles à tout lecteur.
            Ils sont triés par date et catégorisés selon les 3 blocs du BTS SIO : 
            Bloc 1 (Services informatiques), Bloc 2 (SLAM) et Bloc 3 (Cybersécurité).
          </p>

          {/* LISTE DES RECTANGLES LONGS */}
          <div className="flex flex-col gap-6 items-center">
            {comptesRendus.map((cr, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(0,255,128,0.5)" }}
                onClick={() => handleOpenPdf(cr.pdf)}
                className="bg-neutral-900/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 flex items-center w-full max-w-full h-24 cursor-pointer text-white font-semibold shadow-md transition"
              >
                <span className="ml-6 text-lg md:text-xl">{cr.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AFFICHAGE DU PDF */}
        {pdfToShow && (
          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
            <div className="bg-neutral-900 rounded-lg w-full max-w-4xl h-[80vh] relative">
              <button
                onClick={() => setPdfToShow(null)}
                className="absolute top-4 right-4 text-white text-xl font-bold"
              >
                ✕
              </button>
              <iframe
                src={pdfToShow}
                className="w-full h-full rounded-lg"
                title="Compte-rendu PDF"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
