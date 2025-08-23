import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

import DiplomeFormation from "./Diplome";
import Competences from "./competence";
import NotesSynthese from "./Notedessynte";
import VeilleTechnologique from "./Veille";
import Certifications from "./Certification";
import Experience from "./experience";

// Données de formations
const diplomeFormationData = [
  {
    titre: "BTS-SIO : Service Informatique aux Organisations",
    etablissement: "Lycée Geoffroy Saint-Hilaire",
    lieu: "Étampes",
    année: "2024 - 2025",
  },
  {
    titre: "Baccalauréat STI2D",
    etablissement: "Lycée Michelet Edmond",
    lieu: "Arpajon",
    année: "2023 - 2024",
  },
  {
    titre: "Diplôme National du Brevet",
    etablissement: "Collège Jean Moulin",
    lieu: "La Norville",
    année: "2020 - 2021",
  },
];

export default function Tab({
  competences,
  notesSynthese,
  veilleTechnologique,
  certifications,
}) {
  const [activeTab, setActiveTab] = useState("formation");

  // Définition des onglets
  const tabs = [
    { value: "formation", label: "Formations" },
    { value: "experience", label: "Expériences" },
    { value: "competences", label: "Compétences" },
    { value: "veille", label: "Veille Techno" },
    { value: "certifications", label: "Certifications" },
    { value: "notes", label: "Notes de Synthèse" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono flex flex-col items-center py-12 px-6">
      {/* --- Titre principal avec effet néon --- */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-wide"
        style={{
          textShadow:
            "0 0 10px #00ff90, 0 0 20px #00ff90, 0 0 40px rgba(0,255,144,0.7)",
          color: "#00ff90",
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        BTS SIO
      </motion.h1>

      {/* --- Sous-titre --- */}
      <motion.p
        className="text-gray-400 text-center mb-12 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Passionné par le développement, rigoureux et curieux, je me forme en
        <span className="text-green-400 font-semibold">
          {" "}
          BTS SIO option SLAM
        </span>
        . Découvrez mes compétences, formations et expériences à travers les
        onglets ci-dessous.
      </motion.p>

      {/* --- Container principal --- */}
      <div className="flex w-full max-w-6xl gap-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex w-full gap-8"
        >
          {/* --- Menu onglets --- */}
          <TabsList className="flex flex-col gap-3 bg-[#121212] p-5 rounded-xl w-56 shadow-lg">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`rounded-md px-4 py-3 font-semibold transition-all duration-300 cursor-pointer text-sm tracking-wide
                  ${
                    activeTab === tab.value
                      ? "bg-green-400 text-black shadow-[0_0_10px_#00ff90]"
                      : "bg-[#1f1f1f] text-gray-300 hover:bg-[#2a2a2a]"
                  }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* --- Contenu des onglets --- */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === "formation" && (
                <motion.div
                  key="formation"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#121212] p-6 rounded-xl shadow-lg"
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
                  transition={{ duration: 0.5 }}
                  className="bg-[#121212] p-6 rounded-xl shadow-lg"
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
                  transition={{ duration: 0.5 }}
                  className="bg-[#121212] p-6 rounded-xl shadow-lg"
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
                  transition={{ duration: 0.5 }}
                  className="bg-[#121212] p-6 rounded-xl shadow-lg"
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
                  transition={{ duration: 0.5 }}
                  className="bg-[#121212] p-6 rounded-xl shadow-lg"
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
                  transition={{ duration: 0.5 }}
                  className="bg-[#121212] p-6 rounded-xl shadow-lg"
                >
                  <NotesSynthese data={notesSynthese} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
