'use client';

import { motion } from 'framer-motion';
import * as HoverCard from '@radix-ui/react-hover-card';

import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython,
  FaLinux, FaWindows, FaDatabase, FaReact, FaJava,
  FaMicrochip, FaNetworkWired, FaGithub,
  FaDocker, FaVuejs, FaGitAlt
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiKubernetes,
  SiMariadb
} from 'react-icons/si';

/* =======================
   DATA
======================= */
const skills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'PHP', icon: FaPhp, color: 'text-indigo-400' },
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'Linux', icon: FaLinux, color: 'text-gray-300' },
  { name: 'Windows', icon: FaWindows, color: 'text-blue-600' },
  { name: 'SQL', icon: FaDatabase, color: 'text-purple-400' },
  { name: 'MariaDB', icon: SiMariadb, color: 'text-blue-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Vue.js', icon: FaVuejs, color: 'text-green-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Java', icon: FaJava, color: 'text-red-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
  { name: 'Arduino', icon: FaMicrochip, color: 'text-green-400' },
  { name: 'Réseaux (Cisco)', icon: FaNetworkWired, color: 'text-blue-400' },
];

/* =======================
   ANIMATIONS
======================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

/* =======================
   COMPONENT
======================= */
export default function Competences() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      {/* Titre */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Compétences techniques
        </h2>
        <p className="mt-2 text-gray-400 text-sm md:text-base">
          Technologies et outils que j’utilise régulièrement
        </p>
      </div>

      {/* Grille */}
      <motion.div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-5
        "
      >
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <HoverCard.Root key={skill.name} openDelay={100}>
              <HoverCard.Trigger asChild>
                <motion.div
                  variants={item}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group
                    rounded-2xl
                    bg-[#121212]
                    border border-neutral-800
                    p-5
                    flex flex-col items-center justify-center
                    cursor-pointer
                    transition-all
                    hover:border-green-400/40
                    hover:shadow-[0_0_25px_rgba(0,255,144,0.15)]
                    focus:outline-none
                  "
                >
                  <Icon className={`text-4xl mb-3 ${skill.color}`} />
                  <span className="text-sm font-semibold text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              </HoverCard.Trigger>

              {/* Tooltip Radix */}
              <HoverCard.Content
                side="top"
                className="
                  z-50
                  rounded-md
                  bg-black
                  px-3 py-2
                  text-xs
                  text-gray-200
                  border border-neutral-700
                  shadow-lg
                "
              >
                {skill.name}
              </HoverCard.Content>
            </HoverCard.Root>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
