'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Link from 'next/link'; // ← Ajout de l'import pour Link

export default function ProjetsPage() {
  const projects = [
    {
      title: "Frontend Portfolio",
      description:
        "Ce portfolio a été conçu comme une vitrine professionnelle regroupant mes compétences, projets, expériences et formations dans le développement web. Il a été réalisé en utilisant Next.js, Tailwind CSS et React.",
      techs: ["Next.js", "Tailwind", "JavaScript", "React"],
      images: [
        "/images/projet image.png",
        "/images/projet image1.png",
        
      ],
      liveLink: "https://demo-projet.com",
      codeLink: "https://github.com/tonprofil/projet-frontend",
    },
    {
      title: "Projet HTML & CSS",
      description:
        "Un petit projet statique pour pratiquer les bases du HTML et du CSS. Création de CV avec HTML et CSS.",
      techs: ["HTML", "CSS"],
      images: ["/images/imagepro.png"],
      liveLink: "/projet-html-css/",
      codeLink: "",
    },
    {
      title: "Vue.js & Tailwind & Pinia",
      description:
        "GSH Social est une application web de réseau social qui permet aux utilisateurs de publier des messages, d’aimer et de commenter les publications des autres, tout en interagissant en temps réel grâce à une base de données connectée.",
      techs: ["Vue.js", "Tailwind", "Pinia"],
      images: ["/images/image2.png"],
      liveLink: "/projet-html-css/",
      codeLink: "",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Mes Projets
        </motion.h1>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Bouton Retour à l'accueil */}
        <div className="mt-16 text-center">
          <Link href="/">
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
              ← Retour à l'accueil
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
