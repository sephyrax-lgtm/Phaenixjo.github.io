'use client';

import Tab from '@/components/tab.jsx'; // chemin absolu plus sûr
import Link from 'next/link';

// Données formations
const diplomeFormation = [
  { titre: "BTS SIO – SLAM", etablissement: "Lycée Geoffroy Saint-Hilaire", lieu: "Étampes", annee: "2024 - 2025" },
  { titre: "Baccalauréat STI2D", etablissement: "Lycée Michelet Edmond", lieu: "Arpajon", annee: "2023 - 2024" },
  { titre: "Diplôme National du Brevet", etablissement: "Collège Jean Moulin", lieu: "La Norville", annee: "2020 - 2021" },
];

// Compétences
const competences = [
  {
    categorie: "Frontend",
    items: [
      { nom: "HTML", niveau: 90 },
      { nom: "CSS", niveau: 85 },
      { nom: "JavaScript", niveau: 80 },
      { nom: "React", niveau: 75 },
    ],
  },
  {
    categorie: "Backend",
    items: [
      { nom: "Node.js", niveau: 70 },
      { nom: "Express", niveau: 65 },
    ],
  },
  {
    categorie: "Base de données",
    items: [
      { nom: "MySQL", niveau: 80 },
      { nom: "MongoDB", niveau: 60 },
    ],
  },
];

// Autres données
const notesSynthese = ["Synthèse 1", "Synthèse 2"];
const veilleTechnologique = ["Veille 1", "Veille 2"];
const certifications = ["Certificat A", "Certificat B"];
const experience = ["Stage développeur 2023", "Projet personnel React"];

export default function Btssiopage() {
  return (
    <section className="relative min-h-screen bg-black text-white font-mono">

      {/* Fond animé type code (CSS dans globals.css) */}
      <div className="code-background fixed inset-0 z-0" />

      {/* Conteneur principal centré et responsive */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 max-w-screen-xl mx-auto">
        
        {/* Composant Tabs */}
        <Tab
          diplomeFormation={diplomeFormation}
          competences={competences}
          notesSynthese={notesSynthese}
          veilleTechnologique={veilleTechnologique}
          certifications={certifications}
          experience={experience}
        />

        {/* Note / lien facultatif */}
        <p className="mt-12 text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Toutes les informations présentées ici reflètent mes formations, expériences et compétences actuelles.
        </p>
      </div>
    </section>
  );
}
