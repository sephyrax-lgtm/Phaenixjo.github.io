"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const veilles = [
  {
    id: 1,
    titre: "L’essor du calcul quantique dans les entreprises",
    source: "Techniques de l’Ingénieur",
    date: "2025",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/ordinateur-quantique-qap-entraine-les-entreprises-153783/",
    resume:
      "L’adoption progressive du calcul quantique marque une rupture technologique majeure dans les systèmes informatiques complexes.",
  },
  {
    id: 2,
    titre: "IBM repousse les limites de la correction d’erreurs quantiques",
    source: "Boursorama",
    date: "2025",
    url: "https://www.boursorama.com/bourse/actualites-amp/ibm-devoile-de-nouveaux-processeurs-quantiques-pour-franchir-la-barriere-de-l-erreur-en-2029-d1c8bb81bf838b6cdf8a97b19ff20ca5",
    resume:
      "IBM développe de nouveaux processeurs quantiques visant à améliorer la stabilité et la fiabilité des calculs complexes.",
  },
  {
    id: 3,
    titre: "Les risques du calcul quantique sur la cryptographie",
    source: "Cryptonaute",
    date: "2025",
    url: "https://cryptonaute.fr/risque-quantique-previent-expert/",
    resume:
      "Le développement du calcul quantique menace les systèmes de chiffrement actuels et impose une transition vers la cryptographie post-quantique.",
  },
  {
    id: 4,
    titre: "Comprendre la menace quantique",
    source: "Radio France – Billet Sciences",
    date: "2025",
    url: "https://www.radiofrance.fr/franceinfo/podcasts/le-billet-sciences/le-billet-sciences-6295752",
    resume:
      "Une analyse vulgarisée des enjeux liés à l’informatique quantique et à ses impacts sur la sécurité numérique.",
  },
  {
    id: 5,
    titre: "Un acteur hors Europe s’impose dans le calcul quantique",
    source: "LesNews.ca",
    date: "2025",
    url: "https://lesnews.ca/sciences/un-pays-hors-deurope-avec-un-ordinateur-quantique-menace-ou-opportunite/",
    resume:
      "Un pays non européen investit massivement dans le calcul quantique, bouleversant l’équilibre technologique mondial.",
  },
  {
    id: 6,
    titre: "Une avancée majeure en simulation quantique",
    source: "Redac Info",
    date: "2025",
    url: "https://redac.info/cet-ordinateur-quantique-vient-de-franchir-une-limite-que-personne-ne-pensait-possible-il-simule-le-secret-cache-derriere-la-supraconductivite/",
    resume:
      "Une simulation quantique innovante ouvre de nouvelles perspectives dans la compréhension de la supraconductivité.",
  },
  {
    id: 7,
    titre: "Une start-up française explore une nouvelle voie quantique",
    source: "Futura Sciences",
    date: "2025",
    url: "https://www.futura-sciences.com/tech/actualites/ordinateur-quantique-cette-start-up-francaise-pense-avoir-trouve-autre-voie-construire-ordinateur-quantique-125981/",
    resume:
      "Une entreprise française propose une approche alternative pour la conception des ordinateurs quantiques.",
  },
  {
    id: 8,
    titre: "IQM investit 40 millions d’euros en Finlande",
    source: "AFP",
    date: "2025",
    url: "https://www.afp.com/fr/infos/iqm-va-investir-plus-de-40-millions-deuros-pour-agrandir-son-site-de-production-en-finlande",
    resume:
      "L’Europe renforce ses capacités industrielles dans le domaine de l’informatique quantique.",
  },
  {
    id: 9,
    titre: "La France anticipe la cybersécurité post-quantique",
    source: "ITSocial",
    date: "2025",
    url: "https://itsocial.fr/cybersecurite/cybersecurite-actualites/la-france-muscle-sa-cybersecurite-post-quantique-grace-au-projet-giverny-porte-par-thales-et-le-cea/",
    resume:
      "Face aux menaces du calcul quantique, la France développe des solutions de cybersécurité adaptées.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Veille() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-14"
    >
      {/* Titre */}
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">
          Veille technologique
        </h2>
        <p className="max-w-3xl mx-auto text-sm text-neutral-400 leading-relaxed">
          Cette veille technologique est consacrée à l’informatique quantique,
          un domaine émergent exploitant les principes de la mécanique quantique
          afin de résoudre des problématiques inaccessibles à l’informatique classique.
        </p>
      </header>

      {/* Méthodologie */}
      <div className="max-w-3xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-sm text-neutral-300">
        <h3 className="font-semibold text-white mb-2">
          Méthodologie de veille
        </h3>
        <p>
          Les informations sont collectées à l’aide de sources spécialisées
          telles que Google Alertes, Feedly et des médias scientifiques reconnus.
          Les articles sont sélectionnés selon leur fiabilité, leur actualité
          et leur lien direct avec l’informatique quantique et la cybersécurité.
        </p>
      </div>

      {/* Articles */}
      <div className="grid gap-6 md:grid-cols-2">
        {veilles.map((article) => (
          <motion.article
            key={article.id}
            variants={item}
            className="group rounded-2xl border border-neutral-800 bg-neutral-900/60
                       p-6 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            <div className="space-y-3">
              <h4 className="text-lg font-semibold leading-snug">
                {article.titre}
              </h4>

              <p className="text-xs text-neutral-400">
                {article.source} • {article.date}
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {article.resume}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium
                           text-green-400 hover:text-green-300 transition"
              >
                Lire l’article
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
