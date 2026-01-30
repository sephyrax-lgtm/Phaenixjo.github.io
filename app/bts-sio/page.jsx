'use client';

import Tab from '../../components/tab.jsx';
import Link from 'next/link';

const diplomeFormation = [
  { titre: "BTS SIO", etablissement: "Lycée X", année: "2022-2024" },
];

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

const notesSynthese = ["Synthèse 1", "Synthèse 2"];
const veilleTechnologique = ["Veille 1", "Veille 2"];
const certifications = ["Certificat A", "Certificat B"];
const experience = ["Stage développeur 2023", "Projet personnel React"];

export default function Btssiopage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono">
      {/* Fond animé style code */}
      <div className="code-background fixed inset-0 z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 px-4 py-12 max-w-screen-xl mx-auto">
        <Tab
          diplomeFormation={diplomeFormation}
          competences={competences}
          notesSynthese={notesSynthese}
          veilleTechnologique={veilleTechnologique}
          certifications={certifications}
          experience={experience}
        />

        
      </div>
    </div>
  );
}