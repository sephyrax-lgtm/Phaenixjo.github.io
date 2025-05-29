'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjetsPage() {
  const projects = [
    {
      title: "Frontend Portfolio",
      description:
        "Ce portfolio a été conçu comme une vitrine professionnelle regroupant mes compétences, projets, expériences et formations dans le développement web. Il a été réalisé en utilisant Next.js, Tailwind CSS et React.",
      techs: ["Next.js", "Tailwind", "JavaScript", "React"],
      images: [
        "/images/projet image.png",
        "/images/projet image1.png"
        
      ],
      liveLink: "https://demo-projet.com",
      codeLink: "https://github.com/tonprofil/projet-frontend",
    },
    {
      title: "Projet HTML & CSS",
      description:
        "Un petit projet statique pour pratiquer les bases du HTML et du CSS. Création de CV avec HTML et CSS.",
      techs: ["HTML", "CSS"],
      images: ["/images/imagepro.png"], // capture à placer dans /public/images
      liveLink: "/projet-html-css/", // accès local via public/
      codeLink: "", // ou lien vers GitHub si tu veux
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
      </div>
    </main>
  );
}
