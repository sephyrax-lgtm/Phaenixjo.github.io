'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython,
  FaLinux, FaWindows, FaDatabase, FaReact, FaJava,
  FaMicrochip, FaNetworkWired, FaGithub, FaDocker, FaVuejs, FaGitAlt, FaNodeJs
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiKubernetes, SiMariadb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]', glow: 'group-hover:shadow-[0_0_20px_rgba(227,79,38,0.2)] group-hover:border-[#E34F26]/30' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]', glow: 'group-hover:shadow-[0_0_20px_rgba(21,114,182,0.2)] group-hover:border-[#1572B6]/30' },
  { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]', glow: 'group-hover:shadow-[0_0_20px_rgba(247,223,30,0.2)] group-hover:border-[#F7DF1E]/30' },
  { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', glow: 'group-hover:shadow-[0_0_20px_rgba(97,218,251,0.2)] group-hover:border-[#61DAFB]/30' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', glow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:border-white/30' },
  { name: 'Vue.js', icon: FaVuejs, color: 'text-[#4FC08D]', glow: 'group-hover:shadow-[0_0_20px_rgba(79,192,141,0.2)] group-hover:border-[#4FC08D]/30' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', glow: 'group-hover:shadow-[0_0_20px_rgba(51,153,51,0.2)] group-hover:border-[#339933]/30' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', glow: 'group-hover:shadow-[0_0_20px_rgba(209,213,219,0.2)] group-hover:border-gray-300/30' },
  { name: 'PHP', icon: FaPhp, color: 'text-[#777BB4]', glow: 'group-hover:shadow-[0_0_20px_rgba(119,123,180,0.2)] group-hover:border-[#777BB4]/30' },
  { name: 'Python', icon: FaPython, color: 'text-[#3776AB]', glow: 'group-hover:shadow-[0_0_20px_rgba(55,118,171,0.2)] group-hover:border-[#3776AB]/30' },
  { name: 'Java', icon: FaJava, color: 'text-[#007396]', glow: 'group-hover:shadow-[0_0_20px_rgba(0,115,150,0.2)] group-hover:border-[#007396]/30' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]', glow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:border-[#06B6D4]/30' },
  { name: 'SQL', icon: FaDatabase, color: 'text-[#336791]', glow: 'group-hover:shadow-[0_0_20px_rgba(51,103,145,0.2)] group-hover:border-[#336791]/30' },
  { name: 'MariaDB', icon: SiMariadb, color: 'text-[#003545]', glow: 'group-hover:shadow-[0_0_20px_rgba(0,53,69,0.2)] group-hover:border-[#003545]/30' },
  { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]', glow: 'group-hover:shadow-[0_0_20px_rgba(36,150,237,0.2)] group-hover:border-[#2496ED]/30' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]', glow: 'group-hover:shadow-[0_0_20px_rgba(50,108,229,0.2)] group-hover:border-[#326CE5]/30' },
  { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]', glow: 'group-hover:shadow-[0_0_20px_rgba(240,80,50,0.2)] group-hover:border-[#F05032]/30' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white', glow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:border-white/30' },
  { name: 'Linux', icon: FaLinux, color: 'text-[#FCC624]', glow: 'group-hover:shadow-[0_0_20px_rgba(252,198,36,0.2)] group-hover:border-[#FCC624]/30' },
  { name: 'Windows', icon: FaWindows, color: 'text-[#0078D6]', glow: 'group-hover:shadow-[0_0_20px_rgba(0,120,214,0.2)] group-hover:border-[#0078D6]/30' },
  { name: 'Réseaux', icon: FaNetworkWired, color: 'text-gray-400', glow: 'group-hover:shadow-[0_0_20px_rgba(156,163,175,0.2)] group-hover:border-gray-400/30' },
  { name: 'Arduino', icon: FaMicrochip, color: 'text-[#00979D]', glow: 'group-hover:shadow-[0_0_20px_rgba(0,151,157,0.2)] group-hover:border-[#00979D]/30' },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } } };

export default function Competences() {
  return (
    <div className="space-y-12">
      
      {/* Titre */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
            Compétences{' '}
          </span>
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Techniques
          </span>
        </h2>
        
        {/* Ligne décorative */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-green-500/40 to-transparent" />
        </div>
      </motion.div>

      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto"
      >
        {skills.map(skill => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`
                group relative flex flex-col items-center justify-center p-6
                bg-neutral-900/40 backdrop-blur-md rounded-2xl
                border border-neutral-800 transition-all duration-300
                cursor-default overflow-hidden
                ${skill.glow}
              `}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <Icon className={`text-4xl sm:text-5xl mb-4 ${skill.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-md`} />
              
              <span className="text-xs sm:text-sm font-semibold text-neutral-400 group-hover:text-white transition-colors text-center z-10">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}