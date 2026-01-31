'use client';

import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  return (
    <div className="space-y-12">
      {/* TITRE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 drop-shadow-lg"
      >
        ✨ À propos du BTS SIO
      </motion.h2>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="backdrop-blur-md bg-white/5 border border-cyan-500/20 p-6 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.05)]"
      >
        <p className="text-gray-200 text-lg leading-relaxed">
          Le <span className="text-cyan-400 font-semibold">BTS SIO</span> est un diplôme Bac +2 dédié aux passionnés d’informatique.
          Il prépare à deux spécialisations : la{' '}
          <span className="text-emerald-400 font-semibold">programmation d’applications</span> et
          l’<span className="text-pink-400 font-semibold">infrastructure réseau</span>.
          Cette formation permet d’évoluer dans les environnements technologiques d’aujourd’hui
          avec agilité, compétence et passion.
        </p>
      </motion.div>

      {/* SISR */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.7 }}
  whileHover={{ scale: 1.04 }}
  className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] p-6 rounded-2xl border-l-4 border-pink-500 shadow-[0_0_25px_rgba(255,0,128,0.3)] backdrop-blur-sm"
>
  <h3 className="text-2xl font-bold text-pink-400 flex items-center gap-3 mb-6">
    <FaServer className="text-pink-500" /> Option SISR - Solutions d'Infrastructure Systèmes et Réseaux
  </h3>

  {/* IMAGE + CONTENU */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
    {/* IMAGE À GAUCHE */}
    <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
      <Image
        src="/images/photo-option-sisr.png"
        alt="Illustration option SISR"
        width={600}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>

    {/* TEXTE À DROITE */}
    <div>
      <p className="text-gray-300 text-base leading-relaxed mb-8">
        L’option SISR est axée sur la mise en place, la gestion et la sécurisation
        des infrastructures informatiques. Elle permet aux étudiants de se former
        à l’administration de réseaux, à la configuration de serveurs et à la
        protection des systèmes d’information. Cette voie est idéale pour ceux
        qui souhaitent travailler dans les métiers liés aux réseaux, à la
        cybersécurité ou à l’administration système.
      </p>

      <h4 className="text-2xl font-bold text-pink-400 mb-6">
        Débouchés professionnels
      </h4>

      <ul className="space-y-2">
        {[
          'Administrateur systèmes et réseaux',
          'Technicien systèmes et réseaux',
          'Pilote d’exploitation',
          'Gestionnaire du parc informatique',
          'Technicien d’infrastructure',
          'Analyste d’exploitation informatique',
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-200">
            <FaCheck className="text-pink-400" /> {item}
          </li>
        ))}
      </ul>
    </div>

  </div>
</motion.div>

      {/* SLAM */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5, duration: 0.7 }}
  whileHover={{ scale: 1.04 }}
  className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 rounded-2xl border-l-4 border-green-400 shadow-[0_0_25px_rgba(0,255,128,0.25)] backdrop-blur-sm"
>
  <h3 className="text-2xl font-bold text-green-300 flex items-center gap-3 mb-6">
    <FaLaptopCode className="text-green-400" /> Option SLAM - Solutions Logicielles et Applications Métiers
  </h3>

  {/* CONTENU + IMAGE */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
    {/* TEXTE */}
    <div>
      <p className="text-gray-200 text-base leading-relaxed mb-8">
        J’ai personnellement choisi l’option SLAM, qui se concentre sur le développement
        d’applications et de solutions logicielles. Elle forme les étudiants à créer des
        programmes sur mesure pour répondre aux besoins des entreprises. On y apprend
        plusieurs langages de programmation, la gestion de bases de données ainsi que
        les bases de l’interface utilisateur. C’est un parcours idéal pour devenir
        développeur, concepteur d’applications ou chef de projet technique.
      </p>

      <h4 className="text-2xl font-bold text-green-300 mb-6">
        Débouchés professionnels
      </h4>

      <ul className="space-y-2">
        {[
          'Développeur informatique',
          'Développeur d’applications web & mobile',
          'Analyste programmeur',
          'Technicien informatique',
          'Responsable des services applicatifs',
          'Informaticien d’études',
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-200">
            <FaCheck className="text-green-400" /> {item}
          </li>
        ))}
      </ul>
    </div>

    {/* IMAGE À DROITE */}
    <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
      <Image
        src="/images/photo-option-slam.png"
        alt="Illustration option SLAM"
        width={600}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>

  </div>
</motion.div>
{/* TITRE */}
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 drop-shadow-lg"
>
  📝 Les épreuves du BTS SIO
</motion.h2>

{/* DESCRIPTION */}
<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-4 text-lg text-white"
>
  Le BTS SIO comporte 7 épreuves (E1 à E7) qui permettent d'évaluer l'ensemble des compétences acquises durant la formation.
</motion.p>
{/* TABLEAU DES ÉPREUVES */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
  className="mt-6 overflow-x-auto backdrop-blur-md bg-white/5 border border-cyan-500/20 p-6 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.05)]"
>
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="text-gray-400 uppercase text-sm border-b border-gray-700">
        <th className="py-2 px-4">Épreuve</th>
        <th className="py-2 px-4">Intitulé</th>
      </tr>
    </thead>
    <tbody>
  {[
    ["E1", "Culture générale et expression"],
    ["E2", "Expression et communication en langue anglaise"],
    ["E3", "Mathématiques pour l'informatique"],
    ["E4", "Culture économique, juridique et managériale pour l'informatique"],
    ["E5", "Support et mise à disposition de services informatiques"],
    ["E6 SISR", "Administration des systèmes et des réseaux", "pink-400"], // couleur rose
    ["E6 SLAM", "Conception et développement d'applications", "emerald-400"], // couleur verte
    ["E7", "Cybersécurité des services informatiques"],
  ].map(([ep, intitule, color], idx) => (
    <motion.tr
      key={ep}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="border-b border-gray-700 even:bg-white/5"
    >
      <td className={`py-2 px-4 font-medium ${color ? `text-${color}` : 'text-cyan-400'}`}>
        {ep}
      </td>
      <td className="py-2 px-4 text-gray-200">{intitule}</td>
    </motion.tr>
  ))}
</tbody>

  </table>
</motion.div>
</div>

  );
}
