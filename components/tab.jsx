import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import DiplomeFormation from './Diplome';
import Competences from './competence';
import NotesSynthese from './Notedessynte';
import VeilleTechnologique from './Veille';
import Certifications from './Certification';

const diplomeFormationData = [
  {
    titre: "BTS-SIO : Service Informatique aux Organisations",
    etablissement: "Lycée Geoffroy Saint-Hilaire",
    lieu: "Étampes",
    année: "2024 - 2025",
  },
  {
    titre: "Diplôme du Baccalauréat : Sciences et Technologies de l'Industrie et du Développement Durable",
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
  const [activeTab, setActiveTab] = useState('formation');

  const tabs = [
    { value: 'formation', label: 'Formation' },
    { value: 'competences', label: 'Compétences' },
    { value: 'veille', label: 'Veille Techno' },
    { value: 'certifications', label: 'Certifications' },
    { value: 'notes', label: 'Notes de Synthèse' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-mono flex flex-col items-center py-10 px-4">
      <motion.h1
        className="text-4xl font-bold mb-6 glow"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        BTS SIO
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center mb-10 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Passionné par le développement, rigoureux et curieux, je me forme en BTS SIO option SLAM.
        Découvrez mes compétences et formations  à travers les onglets ci-dessous.
      </motion.p>

      <div className="flex w-full max-w-6xl gap-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex w-full gap-8">
          <TabsList className="flex flex-col gap-2 bg-[#1e1e1e] p-4 rounded-lg w-52">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`rounded-md transition-colors duration-300 cursor-pointer ${
                  activeTab === tab.value
                    ? 'bg-green-400 text-black shadow-[0_0_10px_#00ff90]'
                    : 'bg-[#1f1f1f] text-gray-300 hover:bg-[#2a2a2a]'
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === 'formation' && (
                <motion.div
                  key="formation"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <DiplomeFormation data={diplomeFormationData} />
                </motion.div>
              )}

              {activeTab === 'competences' && (
                <motion.div
                  key="competences"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#1e1e1e] p-6 rounded-lg"
                >
                  <Competences competences={competences} />
                </motion.div>
              )}

              {activeTab === 'veille' && (
                <motion.div
                  key="veille"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <VeilleTechnologique data={veilleTechnologique} />
                </motion.div>
              )}

              {activeTab === 'certifications' && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Certifications data={certifications} />
                </motion.div>
              )}

              {activeTab === 'notes' && (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
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
