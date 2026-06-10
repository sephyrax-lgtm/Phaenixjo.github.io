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

const diplomeFormationData = [
  {
    titre: "BTS SIO – Services Informatiques aux Organisations",
    etablissement: "Lycée Geoffroy Saint-Hilaire",
    lieu: "Étampes",
    annee: "2024 - 2026",
  },
  {
    titre: "Baccalauréat STI2D",
    etablissement: "Lycée Michelet Edmond",
    lieu: "Arpajon",
    annee: "2022 - 2024",
  },
  {
    titre: "Diplôme National du Brevet",
    etablissement: "Collège Jean Moulin",
    lieu: "La Norville",
    annee: "2020 - 2021",
  },
];

export default function Tab({ competences, notesSynthese, veilleTechnologique, certifications, experience }) {
  const [activeTab, setActiveTab] = useState("formation");

  const tabs = [
    { value: "formation", label: "Formations" },
    { value: "experience", label: "Expériences" },
    { value: "competences", label: "Compétences" },
    { value: "veille", label: "Veille techno" },
    { value: "certifications", label: "Certifications" },
    { value: "notes", label: "Notes de synthèse" },
  ];

  const introCards = [
    {
      icon: FaGraduationCap,
      color: "text-green-400",
      bgGlow: "bg-green-500/5",
      borderHover: "hover:border-green-500/30",
      content: (
        <>Étudiant en <span className="text-green-400 font-semibold">SLAM</span> (Solutions Logicielles et Applications Métiers), orienté vers le <strong>développement d’applications</strong>, les bases de données et les technologies web modernes.</>
      )
    },
    {
      icon: FaLaptopCode,
      color: "text-cyan-400",
      bgGlow: "bg-cyan-500/5",
      borderHover: "hover:border-cyan-500/30",
      content: (
        <>Cette formation permet de maîtriser les <strong>technologies modernes</strong>, le développement web, la gestion de bases de données et la programmation d’applications.</>
      )
    },
    {
      icon: FaBullseye,
      color: "text-emerald-400",
      bgGlow: "bg-emerald-500/5",
      borderHover: "hover:border-emerald-500/30",
      content: (
        <>Après mon <strong>BTS SIO option SLAM</strong>, je souhaite poursuivre mes études en <strong>licence</strong> puis en <strong>master</strong> afin d’élargir mes compétences techniques et théoriques.</>
      )
    }
  ];

  return (
    <section className="min-h-screen relative font-mono flex flex-col items-center pb-20 overflow-hidden">

      {/* Orbes de fond ambiants (spécifique au layout) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Présentation BTS */}
      <div className="w-full max-w-6xl mx-auto space-y-12 text-center mb-16 relative z-10">

        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-2">
            <FaGraduationCap className="text-green-400 text-sm" />
            <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Diplôme d'état</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent block md:inline">
              BTS Services Informatiques{' '}
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent block md:inline">
              aux Organisations
            </span>
          </h2>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-green-500/40 to-transparent" />
          </div>
        </motion.div>

        {/* Cartes d'intro en Grid (Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {introCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                className={`
                  relative flex flex-col gap-4 rounded-2xl border border-neutral-800 
                  bg-neutral-900/60 backdrop-blur-xl p-6 shadow-lg
                  ${card.borderHover} transition-colors duration-300 group overflow-hidden
                `}
              >
                {/* Background glow hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${card.bgGlow}`} />

                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`${card.color} text-2xl`} />
                </div>

                <p className="text-neutral-300 text-sm md:text-base leading-relaxed relative z-10">
                  {card.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section Onglets (Tabs) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">

        {/* Menu Latéral (TabsList) */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex flex-col lg:flex-row gap-8"
        >
          <div className="lg:w-64 flex-shrink-0 w-full">
            <div className="sticky top-32">
              <TabsList>
                {tabs.map(tab => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>


          {/* Contenu de l'onglet actif */}
          <div className="flex-1 min-w-0">
            <div className="bg-neutral-900/40 backdrop-blur-md rounded-3xl border border-neutral-800/50 p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden min-h-[600px]">

              {/* Ligne lumineuse en haut du conteneur de contenu */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

              <AnimatePresence mode="wait" custom={activeTab}>
                {activeTab === "formation" && (
                  <motion.div
                    key="formation"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DiplomeFormation data={diplomeFormationData} />
                  </motion.div>
                )}

                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Experience data={experience} />
                  </motion.div>
                )}

                {activeTab === "competences" && (
                  <motion.div
                    key="competences"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Competences competences={competences} />
                  </motion.div>
                )}

                {activeTab === "veille" && (
                  <motion.div
                    key="veille"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VeilleTechnologique data={veilleTechnologique} />
                  </motion.div>
                )}

                {activeTab === "certifications" && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Certifications data={certifications} />
                  </motion.div>
                )}

                {activeTab === "notes" && (
                  <motion.div
                    key="notes"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <NotesSynthese data={notesSynthese} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
