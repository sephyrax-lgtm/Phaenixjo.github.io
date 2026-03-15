'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const veilles = [
  {
    id: 1,
    titre: "L’essor du calcul quantique dans les entreprises",
    source: "Techniques de l’Ingénieur",
    date: "2025",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/ordinateur-quantique-qap-entraine-les-entreprises-153783/",
    resume: "L’adoption progressive du calcul quantique marque une rupture technologique majeure dans les systèmes informatiques complexes.",
  },
  
  {
    id: 3,
    titre: "Les risques du calcul quantique sur la cryptographie",
    source: "Cryptonaute",
    date: "2025",
    url: "https://cryptonaute.fr/risque-quantique-previent-expert/",
    resume: "Le développement du calcul quantique menace les systèmes de chiffrement actuels et impose une transition vers la cryptographie post-quantique.",
  },
  {
    id: 4,
    titre: "Comprendre la menace quantique",
    source: "Radio France – Billet Sciences",
    date: "2025",
    url: "https://www.radiofrance.fr/franceinfo/podcasts/le-billet-sciences/le-billet-sciences-6295752",
    resume: "Une analyse vulgarisée des enjeux liés à l’informatique quantique et à ses impacts sur la sécurité numérique.",
  },
  
  {
    id: 9,
    titre: "La France anticipe la cybersécurité post-quantique",
    source: "ITSocial",
    date: "2025",
    url: "https://itsocial.fr/cybersecurite/cybersecurite-actualites/la-france-muscle-sa-cybersecurite-post-quantique-grace-au-projet-giverny-porte-par-thales-et-le-cea/",
    resume: "Face aux menaces du calcul quantique, la France développe des solutions de cybersécurité adaptées.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

export default function Veille() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="space-y-10 px-4 md:px-8"
    >
      {/* TITRE */}
      <header className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Veille technologique</h2>
        <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-400 leading-relaxed">
          Veille consacrée à l’informatique quantique, domaine émergent exploitant les principes de la mécanique quantique pour résoudre des problématiques inaccessibles à l’informatique classique.
        </p>
      </header>

      {/* MÉTHODOLOGIE */}
      <div className="max-w-xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 md:p-6 text-sm md:text-base text-neutral-300">
        <h3 className="font-semibold text-white mb-2">Méthodologie de veille</h3>
        <p>
          Les informations sont collectées via Google Alertes, Feedly et médias scientifiques fiables. Les articles sont sélectionnés selon leur fiabilité, actualité et pertinence.
        </p>
      </div>

      {/* ARTICLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {veilles.map(article => (
          <motion.article
            key={article.id}
            variants={item}
            className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 md:p-6 transition hover:border-green-500 hover:bg-neutral-900"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">{article.titre}</h4>
              <p className="text-xs md:text-sm text-neutral-400">{article.source} • {article.date}</p>
              <p className="text-sm text-neutral-300 leading-relaxed">{article.resume}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 font-medium text-sm md:text-base transition"
              >
                Lire l’article <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
