'use client';

import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaCheck, FaGraduationCap } from 'react-icons/fa';
import { BookOpen, Award } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Ligne décorative réutilisable
function DecorativeLine({ color = 'cyan' }) {
  const colorMap = {
    cyan: 'from-transparent via-cyan-500/40 to-transparent',
    pink: 'from-transparent via-pink-500/40 to-transparent',
    green: 'from-transparent via-green-500/40 to-transparent',
  };
  const dotMap = {
    cyan: 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]',
    pink: 'bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.6)]',
    green: 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]',
  };

  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className={`h-px w-16 bg-gradient-to-r ${colorMap[color]?.split(' ').slice(0, 2).join(' ')} from-transparent to-${color === 'cyan' ? 'cyan' : color === 'pink' ? 'pink' : 'green'}-500/50`} />
      <div className={`w-2 h-2 rounded-full ${dotMap[color]}`} />
      <div className={`h-px w-16 bg-gradient-to-l from-transparent to-${color === 'cyan' ? 'cyan' : color === 'pink' ? 'pink' : 'green'}-500/50`} />
    </div>
  );
}

export default function About() {
  const sisrDebouches = [
    'Administrateur systèmes et réseaux',
    'Technicien systèmes et réseaux',
    'Pilote d\'exploitation',
    'Gestionnaire du parc informatique',
    'Technicien d\'infrastructure',
    'Analyste d\'exploitation informatique',
  ];

  const slamDebouches = [
    'Développeur informatique',
    'Développeur d\'applications web & mobile',
    'Analyste programmeur',
    'Technicien informatique',
    'Responsable des services applicatifs',
    'Informaticien d\'études',
  ];

  const epreuves = [
    ["E1", "Culture générale et expression", null],
    ["E2", "Expression et communication en langue anglaise", null],
    ["E3", "Mathématiques pour l'informatique", null],
    ["E4", "Culture économique, juridique et managériale pour l'informatique", null],
    ["E5", "Support et mise à disposition de services informatiques", null],
    ["E6 SISR", "Administration des systèmes et des réseaux", "pink"],
    ["E6 SLAM", "Conception et développement d'applications", "green"],
    ["E7", "Cybersécurité des services informatiques", null],
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16 px-4 md:px-0 relative"
    >
      {/* Fond décoratif ambiant */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* TITRE PRINCIPAL */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.header variants={fadeUp} className="text-center space-y-5">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
        >
          <FaGraduationCap className="text-cyan-400 text-sm" />
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">Formation</span>
        </motion.div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
          <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
            À propos du{' '}
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            BTS SIO
          </span>
        </h2>

        <DecorativeLine color="cyan" />
      </motion.header>

      {/* ═══════════════════════════════════════════════ */}
      {/* INTRODUCTION */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.div
        variants={fadeUp}
        className="
          relative backdrop-blur-xl
          bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent
          border border-cyan-500/15
          p-8 sm:p-10 rounded-3xl
          shadow-[0_0_60px_rgba(34,211,238,0.06)]
          overflow-hidden
        "
      >
        {/* Ligne lumineuse en haut */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed relative z-10">
          Le <span className="text-cyan-400 font-semibold">BTS SIO</span> est un diplôme Bac +2 pour les passionnés d'informatique.
          Il prépare à deux spécialisations : la <span className="text-emerald-400 font-semibold">programmation d'applications</span>{' '}
          et l'<span className="text-pink-400 font-semibold">infrastructure réseau</span>.
          Cette formation permet d'évoluer dans les environnements technologiques actuels avec agilité, compétence et passion.
        </p>

        {/* Orbe décoratif */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/8 rounded-full blur-2xl pointer-events-none" />
      </motion.div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION SISR */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.div
        variants={fadeLeft}
        className="
          relative
          bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-800/60
          backdrop-blur-xl
          p-8 sm:p-10 rounded-3xl
          border border-pink-500/15
          shadow-[0_0_60px_rgba(244,114,182,0.06)]
          overflow-hidden
          group
        "
      >
        {/* Indicateur latéral */}
        <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-pink-500 via-pink-400 to-transparent rounded-full" />

        {/* Ligne lumineuse en haut */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

        {/* Titre de section */}
        <div className="flex items-center gap-4 mb-8 pl-4">
          <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center">
            <FaServer className="text-pink-400 text-xl" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-400">Option SISR</h3>
            <p className="text-pink-300/60 text-sm font-medium">Solutions d'Infrastructure Systèmes et Réseaux</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pl-4">
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden shadow-2xl group/img"
          >
            {/* Glow autour de l'image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-transparent blur-sm opacity-60" />

            <div className="relative rounded-2xl overflow-hidden border border-pink-500/15">
              <Image
                src="/images/photo-option-sisr.png"
                alt="Illustration option SISR"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover/img:scale-105"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* TEXTE */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base leading-relaxed">
              L'option SISR est axée sur la mise en place, la gestion et la sécurisation des infrastructures informatiques.
              Elle permet de se former à l'administration de réseaux, à la configuration de serveurs et à la protection des systèmes d'information.
              Cette voie est idéale pour ceux qui souhaitent travailler dans les métiers des réseaux, de la cybersécurité ou de l'administration système.
            </p>

            <div>
              <h4 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <Award size={18} className="text-pink-400" />
                Débouchés professionnels
              </h4>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-2.5">
                {sisrDebouches.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="
                      flex items-center gap-3 text-gray-200
                      px-4 py-2.5 rounded-xl
                      bg-white/[0.02] border border-transparent
                      hover:border-pink-500/20 hover:bg-pink-500/5
                      transition-all duration-300
                    "
                  >
                    <div className="w-5 h-5 rounded-md bg-pink-500/15 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-pink-400 text-[10px]" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Orbe décoratif */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION SLAM */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.div
        variants={fadeRight}
        className="
          relative
          bg-gradient-to-br from-[#0f2027]/90 via-[#203a43]/80 to-[#2c5364]/60
          backdrop-blur-xl
          p-8 sm:p-10 rounded-3xl
          border border-green-500/15
          shadow-[0_0_60px_rgba(74,222,128,0.06)]
          overflow-hidden
          group
        "
      >
        {/* Indicateur latéral */}
        <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-green-400 via-green-400 to-transparent rounded-full" />

        {/* Ligne lumineuse en haut */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

        {/* Titre de section */}
        <div className="flex items-center gap-4 mb-8 pl-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
            <FaLaptopCode className="text-green-400 text-xl" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-300">Option SLAM</h3>
            <p className="text-green-300/60 text-sm font-medium">Solutions Logicielles et Applications Métiers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pl-4">
          {/* TEXTE */}
          <div className="space-y-6">
            <p className="text-gray-200 text-base leading-relaxed">
              L'option SLAM se concentre sur le développement d'applications et de solutions logicielles.
              Elle forme à créer des programmes sur mesure pour les besoins des entreprises, apprendre plusieurs langages de programmation, gérer des bases de données et maîtriser les interfaces utilisateurs.
              C'est un parcours idéal pour devenir développeur, concepteur d'applications ou chef de projet technique.
            </p>

            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <Award size={18} className="text-green-400" />
                Débouchés professionnels
              </h4>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-2.5">
                {slamDebouches.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="
                      flex items-center gap-3 text-gray-200
                      px-4 py-2.5 rounded-xl
                      bg-white/[0.02] border border-transparent
                      hover:border-green-500/20 hover:bg-green-500/5
                      transition-all duration-300
                    "
                  >
                    <div className="w-5 h-5 rounded-md bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-green-400 text-[10px]" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden shadow-2xl group/img"
          >
            {/* Glow autour de l'image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent blur-sm opacity-60" />

            <div className="relative rounded-2xl overflow-hidden border border-green-500/15">
              <Image
                src="/images/photo-option-slam.png"
                alt="Illustration option SLAM"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover/img:scale-105"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Orbe décoratif */}
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* ═══════════════════════════════════════════════ */}
      {/* ÉPREUVES BTS */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.section variants={fadeUp} className="space-y-8">
        {/* Titre */}
        <div className="text-center space-y-4">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            <BookOpen size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">Examens</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
              Les épreuves du{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              BTS SIO
            </span>
          </h2>

          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Le BTS SIO comporte 7 épreuves (E1 à E7) évaluant l'ensemble des compétences acquises durant la formation.
          </p>

          <DecorativeLine color="cyan" />
        </div>

        {/* Tableau des épreuves — Design premium */}
        <motion.div
          variants={fadeUp}
          className="
            relative
            backdrop-blur-xl
            bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent
            border border-cyan-500/15
            rounded-3xl
            shadow-[0_0_60px_rgba(34,211,238,0.06)]
            overflow-hidden
          "
        >
          {/* Ligne lumineuse en haut */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {/* Header du tableau */}
          <div className="px-6 sm:px-8 py-5 border-b border-white/5">
            <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4">
              <span className="text-neutral-500 uppercase text-xs font-semibold tracking-wider">Épreuve</span>
              <span className="text-neutral-500 uppercase text-xs font-semibold tracking-wider">Intitulé</span>
            </div>
          </div>

          {/* Lignes du tableau */}
          <div className="divide-y divide-white/[0.04]">
            {epreuves.map(([ep, intitule, colorType], idx) => {
              let epColor = 'text-cyan-400';
              let hoverBorder = 'hover:border-l-cyan-500/40';
              let hoverBg = 'hover:bg-cyan-500/[0.03]';

              if (colorType === 'pink') {
                epColor = 'text-pink-400';
                hoverBorder = 'hover:border-l-pink-500/40';
                hoverBg = 'hover:bg-pink-500/[0.03]';
              } else if (colorType === 'green') {
                epColor = 'text-emerald-400';
                hoverBorder = 'hover:border-l-emerald-500/40';
                hoverBg = 'hover:bg-emerald-500/[0.03]';
              }

              return (
                <motion.div
                  key={ep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                  className={`
                    grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4
                    px-6 sm:px-8 py-4
                    border-l-2 border-l-transparent
                    ${hoverBorder} ${hoverBg}
                    transition-all duration-300
                    group/row
                  `}
                >
                  <span className={`font-mono font-bold text-sm ${epColor}`}>
                    {ep}
                  </span>
                  <span className="text-gray-300 text-sm group-hover/row:text-white transition-colors">
                    {intitule}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Orbe décoratif */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
