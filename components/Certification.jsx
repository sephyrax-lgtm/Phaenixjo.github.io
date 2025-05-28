'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    nom: "Concevoir votre site web avec PHP et MySQL",
    organisme: "OpenClassrooms",
    date: "2025",
  },
  {
    id: 2,
    nom: "Apprendre les bases du langage Python",
    organisme: "OpenClassrooms",
    date: "2025",
  },
  {
    id: 3,
    nom: "Créez votre site web avec HTML5 et CSS3",
    organisme: "OpenClassrooms",
    date: "2025",
  },
  {
    id: 4,
    nom: "Apprendre à programmer avec JavaScript",
    organisme: "OpenClassrooms",
    date: "2025",
  },
  {
    id: 5,
    nom: "PIX",
    organisme: "PIX",
    date: "2023",
  },
  {
    id: 6,
    nom: "Certification ANSSI",
    organisme: "ANSSI",
    date: "2024",
  },
  {
    id: 7,
    nom: "Atelier RGPD",
    organisme: "CNIL",
    date: "2025",
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    scale: 1.07,
    boxShadow: '0 0 25px #00ff90',
    rotate: 2,
    transition: { type: 'spring', stiffness: 400, damping: 12 }
  }
};

export default function Certification() {
  return (
    <motion.div
      id="certifications"
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold glow">Certifications</h2>

      <motion.div className="grid gap-6 md:grid-cols-2">
        {certifications.map(cert => (
          <motion.div
            key={cert.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer select-none"
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-lg font-semibold mb-1 text-black">
              Nom de certification : <span className="font-normal">{cert.nom}</span>
            </h3>
            <p className="text-gray-500">
              {cert.organisme} • {cert.date}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
