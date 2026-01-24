'use client';

import { motion } from 'framer-motion';
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

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
  { name: 'Python', icon: <FaPython className="text-blue-400" /> },
  { name: 'Linux', icon: <FaLinux className="text-gray-300" /> },
  { name: 'Windows', icon: <FaWindows className="text-blue-600" /> },
  { name: 'SQL', icon: <FaDatabase className="text-purple-500" /> },
  { name: 'MariaDB', icon: <SiMariadb className="text-blue-700" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
  { name: 'Arduino', icon: <FaMicrochip className="text-green-500" /> },
  { name: 'Cisco Packet Tracer', icon: <FaNetworkWired className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    boxShadow: '0 0 15px #00ff90',
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
};

export default function Competences() {
  return (
    <motion.div
      id="competences"
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold mb-4 glow">
        Mes Compétences Techniques
      </h2>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-xl shadow-md
                       flex flex-col items-center justify-center
                       p-6 cursor-pointer select-none"
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-sm font-semibold text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
