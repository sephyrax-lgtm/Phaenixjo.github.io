'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

import { FaGraduationCap, FaLaptopCode, FaBullseye } from "react-icons/fa";

import DiplomeFormation from "./Diplome";
import Competences from "./competence";
import NotesSynthese from "./Notedessynte";
import VeilleTechnologique from "./Veille";
import Certifications from "./Certification";
import Experience from "./experience";

// Données formations
const diplomeFormationData = [
  {
    titre: "BTS SIO – Services Informatiques aux Organisations",
    etablissement: "Lycée Geoffroy Saint-Hilaire",
    lieu: "Étampes",
    annee: "2024 - 2025",
  },
  {
    titre: "Baccalauréat STI2D",
    etablissement: "Lycée Michelet Edmond",
    lieu: "Arpajon",
    annee: "2023 - 2024",
  },
  {
    titre: "Diplôme National du Brevet",
    etablissement: "Collège Jean Moulin",
    lieu: "La Norville",
    annee: "2020 - 2021",
  },
];

export default function Tab({ competences, notesSynthese, veilleTechnologique, certifications }) {
  const [activeTab, setActiveTab] = useState("formation");

  const tabs = [
    { value: "formation", label: "Formations" },
    { value: "experience", label: "Expériences" },
    { value: "competences", label: "Compétences" },
    { value: "veille", label: "Veille techno" },
    { value: "certifications", label: "Certifications" },
    { value: "notes", label: "Notes de synthèse" },
  ];

  return (
    <section className="min-h-screen bg-black text-gray-200 font-mono flex flex-col items-center py-12 px-4">

      {/* ================= Présentation BTS ================= */}
      <div className="w-full max-w-4xl mx-auto space-y-8 text-center">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-green-400 to-emerald-300"
        >
          BTS Services Informatiques aux Organisations
        </motion.h2>

        {/* Présentation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-start gap-3 rounded-2xl border border-neutral-800
                     bg-neutral-900/60 backdrop-blur p-5 md:p-6 text-left shadow-md"
        >
          <FaGraduationCap className="text-green-400 text-3xl flex-shrink-0 mt-1" />
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Étudiant en <span className="text-green-400 font-semibold">SLAM</span> (Solutions Logicielles et Applications Métiers), orienté vers le <strong>développement d’applications</strong>, les bases de données et les technologies web modernes.
          </p>
        </motion.div>

        {/* Technologies / compétences */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-start gap-3 rounded-2xl border border-neutral-800
                     bg-neutral-900/60 backdrop-blur p-5 md:p-6 text-left shadow-md"
        >
          <FaLaptopCode className="text-cyan-400 text-3xl flex-shrink-0 mt-1" />
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Cette formation permet de maîtriser les <strong>technologies modernes</strong>, le développement web, la gestion de bases de données et la programmation d’applications.
          </p>
        </motion.div>

        {/* Objectif professionnel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-start gap-3 rounded-2xl border border-neutral-800
                     bg-neutral-900/60 backdrop-blur p-5 md:p-6 text-left shadow-md"
        >
          <FaBullseye className="text-emerald-400 text-3xl flex-shrink-0 mt-1" />
          <div>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Après mon <strong>BTS SIO option SLAM</strong>, je souhaite poursuivre mes études en <strong>licence</strong> puis en <strong>master</strong> afin d’élargir mes compétences techniques et théoriques.
            </p>
            <p className="mt-2 text-neutral-300 text-sm md:text-base leading-relaxed">
              Mon objectif est d’évoluer vers des postes à responsabilité dans le développement logiciel et les technologies web, tout en restant constamment à jour sur les innovations.
            </p>
          </div>
        </motion.div>

      </div>

      {/* ================= Tabs ================= */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mt-10"
      >
        {/* Onglets */}
        <TabsList
          className="flex flex-row md:flex-col w-full md:w-56 gap-2 p-2
                     bg-[#121212] rounded-xl overflow-x-auto md:overflow-visible
                     border border-[#1f1f1f]"
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="min-w-[140px] md:min-w-0 text-center md:text-left
                         px-3 py-2 rounded-md text-sm font-semibold
                         transition-all duration-300"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Contenu des onglets */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === "formation" && (
              <motion.div
                key="formation"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-4 md:p-6 rounded-xl shadow-lg"
              >
                <DiplomeFormation data={diplomeFormationData} />
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-4 md:p-6 rounded-xl shadow-lg"
              >
                <Experience />
              </motion.div>
            )}

            {activeTab === "competences" && (
              <motion.div
                key="competences"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-4 md:p-6 rounded-xl shadow-lg"
              >
                <Competences competences={competences} />
              </motion.div>
            )}

            {activeTab === "veille" && (
              <motion.div
                key="veille"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-4 md:p-6 rounded-xl shadow-lg"
              >
                <VeilleTechnologique data={veilleTechnologique} />
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-4 md:p-6 rounded-xl shadow-lg"
              >
                <Certifications data={certifications} />
              </motion.div>
            )}

            {activeTab === "notes" && (
              <motion.div
                key="notes"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-4 md:p-6 rounded-xl shadow-lg"
              >
                <NotesSynthese data={notesSynthese} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
