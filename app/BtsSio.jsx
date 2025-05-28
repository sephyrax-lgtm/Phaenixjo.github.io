'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BtsSio() {
  const [activeTab, setActiveTab] = useState('diplome');

  const tabs = [
    { id: 'diplome', label: 'Diplôme & Formation' },
    { id: 'notes', label: 'Notes de synthèse' },
    { id: 'certifications', label: 'Mes certifications' },
    { id: 'veille', label: 'Veille technologique' },
  ];

  return (
    <div className="min-h-screen flex bg-[#0f0f0f] text-white font-mono">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-[#141414] p-6 space-y-6">
        <h2 className="text-3xl font-extrabold mb-2 glow">Why hire me?</h2>
        <p className="text-sm text-gray-400">
          Passionné par le développement, rigoureux et curieux. Étudiant en BTS SIO option SLAM.
        </p>
        <div className="flex flex-col space-y-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full px-4 py-2 rounded-md font-semibold text-left transition
                ${
                  activeTab === tab.id
                    ? 'bg-[#1ce469] text-black'
                    : 'bg-[#2b2b2b] text-white hover:bg-[#1ce469]/20 hover:text-[#1ce469]'
                }`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 8px #1ce469' }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8 bg-[#121212]">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === 'diplome' && (
            <motion.div
              key="diplome"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <DiplomeContent />
            </motion.div>
          )}
          {activeTab === 'notes' && (
            <motion.div
              key="notes"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <NotesContent />
            </motion.div>
          )}
          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <CertificationsContent />
            </motion.div>
          )}
          {activeTab === 'veille' && (
            <motion.div
              key="veille"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <VeilleContent />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function DiplomeContent() {
  return (
    <section className="bg-[#1e1e1e] p-6 rounded-lg space-y-4 text-gray-300 shadow-md">
      <h1 className="text-2xl font-extrabold text-white glow">Diplôme & Formation</h1>
      <h3>BTS SIO option SLAM</h3>
      <p>Lycée [Nom du Lycée] | 2022 - 2024</p>
      <ul className="list-disc list-inside">
        <li>Spécialisation développement d'applications</li>
        <li>Matières : Programmation, Cybersécurité, Réseaux</li>
      </ul>
    </section>
  );
}

function NotesContent() {
  return (
    <section className="bg-[#1e1e1e] p-6 rounded-lg space-y-4 text-gray-300 shadow-md">
      <h1 className="text-2xl font-extrabold text-white glow">Notes de synthèse</h1>
      <h3>Synthèse - Semestre 1</h3>
      <p>Janvier 2023</p>
      <a href="#" className="text-[#1ce469] hover:underline">
        Télécharger
      </a>
    </section>
  );
}

function CertificationsContent() {
  return (
    <section className="bg-[#1e1e1e] p-6 rounded-lg space-y-4 text-gray-300 shadow-md">
      <h1 className="text-2xl font-extrabold text-white glow">Mes certifications</h1>
      <p>✔ OpenClassrooms - HTML/CSS - 2023</p>
      <p>✔ Sololearn - JavaScript - 2023</p>
    </section>
  );
}

function VeilleContent() {
  return (
    <section className="bg-[#1e1e1e] p-6 rounded-lg space-y-4 text-gray-300 shadow-md">
      <h1 className="text-2xl font-extrabold text-white glow">Veille technologique</h1>
      <h3 className="text-white">Article : Sécurité informatique 2024</h3>
      <p>ZDNet | 15/01/2024</p>
      <a href="#" className="text-[#1ce469] hover:underline">
        Lire l'article
      </a>
    </section>
  );
}
