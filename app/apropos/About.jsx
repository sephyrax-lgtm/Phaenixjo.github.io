'use client';

import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode } from 'react-icons/fa';

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
          Le <span className="text-cyan-400 font-semibold">BTS SIO</span> est un diplôme Bac+2 dédié aux passionnés d’informatique. Il prépare à deux spécialisations :
          la <span className="text-emerald-400 font-semibold">programmation d’applications</span> et
          l’<span className="text-pink-400 font-semibold">infrastructure réseau</span>. Cette formation permet d’évoluer dans les environnements technologiques d’aujourd’hui
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
        <h3 className="text-2xl font-bold text-pink-400 flex items-center gap-3 mb-2">
          <FaServer className="text-pink-500" /> Option SISR
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          L’option SISR est axée sur la mise en place, la gestion et la sécurisation des infrastructures informatiques. Elle permet aux étudiants de se former à l’administration de réseaux, à la configuration de serveurs, et à la protection des systèmes d'information. Cette voie est idéale pour ceux qui souhaitent travailler dans les métiers liés aux réseaux, à la cybersécurité ou à l’administration système.
        </p>
      </motion.div>

      {/* SLAM */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ scale: 1.04 }}
        className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 rounded-2xl border-l-4 border-green-400 shadow-[0_0_25px_rgba(0,255,128,0.25)] backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-green-300 flex items-center gap-3 mb-2">
          <FaLaptopCode className="text-green-400" /> Option SLAM
        </h3>
        <p className="text-gray-200 text-base leading-relaxed">
          J’ai personnellement choisi l’option SLAM, qui se concentre sur le développement d’applications et de solutions logicielles. Elle forme les étudiants à créer des programmes sur mesure pour répondre aux besoins des entreprises. On y apprend plusieurs langages de programmation, la gestion de bases de données, ainsi que les bases de l’interface utilisateur. C’est un parcours idéal pour devenir développeur, concepteur d’applications ou chef de projet technique.
        </p>
      </motion.div>
    </div>
  );
}
