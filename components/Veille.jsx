'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, Rss } from "lucide-react";

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
    id: 2,
    titre: "IBM repousse les limites de la correction d’erreurs quantiques",
    source: "Boursorama",
    date: "2025",
    url: "https://www.boursorama.com/bourse/actualites-amp/ibm-devoile-de-nouveaux-processeurs-quantiques-pour-franchir-la-barriere-de-l-erreur-en-2029-d1c8bb81bf838b6cdf8a97b19ff20ca5",
    resume: "IBM développe de nouveaux processeurs quantiques visant à améliorer la stabilité et la fiabilité des calculs complexes.",
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
    id: 5,
    titre: "Un acteur hors Europe s’impose dans le calcul quantique",
    source: "LesNews.ca",
    date: "2025",
    url: "https://lesnews.ca/sciences/un-pays-hors-deurope-avec-un-ordinateur-quantique-menace-ou-opportunite/",
    resume: "Un pays non européen investit massivement dans le calcul quantique, bouleversant l’équilibre technologique mondial.",
  },
  {
    id: 6,
    titre: "Une avancée majeure en simulation quantique",
    source: "Redac Info",
    date: "2025",
    url: "https://redac.info/cet-ordinateur-quantique-vient-de-franchir-une-limite-que-personne-ne-pensait-possible-il-simule-le-secret-cache-derriere-la-supraconductivite/",
    resume: "Une simulation quantique innovante ouvre de nouvelles perspectives dans la compréhension de la supraconductivité.",
  },
  {
    id: 7,
    titre: "Une start-up française explore une nouvelle voie quantique",
    source: "Futura Sciences",
    date: "2025",
    url: "https://www.futura-sciences.com/tech/actualites/ordinateur-quantique-cette-start-up-francaise-pense-avoir-trouve-autre-voie-construire-ordinateur-quantique-125981/",
    resume: "Une entreprise française propose une approche alternative pour la conception des ordinateurs quantiques.",
  },
  {
    id: 8,
    titre: "IQM investit 40 millions d’euros en Finlande",
    source: "AFP",
    date: "2025",
    url: "https://www.afp.com/fr/infos/iqm-va-investir-plus-de-40-millions-deuros-pour-agrandir-son-site-de-production-en-finlande",
    resume: "L’Europe renforce ses capacités industrielles dans le domaine de l’informatique quantique.",
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

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Veille() {
  return (
    <div className="space-y-12">
      
      {/* TITRE */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent">
            Veille{' '}
          </span>
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Technologique
          </span>
        </h2>
        
        {/* Ligne décorative */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-green-500/40 to-transparent" />
        </div>
      </motion.div>

      {/* HEADER CONTENT */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6"
      >
        <div className="flex-1 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl" />
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Rss size={18} className="text-green-400" /> Sujet d'étude
          </h3>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed relative z-10">
            L’informatique quantique est un domaine émergent exploitant les principes de la mécanique quantique pour résoudre des problématiques inaccessibles à l’informatique classique, menaçant notamment les méthodes de cryptographie actuelles.
          </p>
        </div>

        <div className="flex-1 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
          <h3 className="text-lg font-bold text-white mb-2">Méthodologie</h3>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed relative z-10">
            Collecte d'informations via Google Alertes, Feedly et revues scientifiques. Les articles sont filtrés selon leur fiabilité, actualité et pertinence par rapport à l'évolution de la technologie quantique.
          </p>
        </div>
      </motion.div>

      {/* ARTICLES GRID */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {veilles.map(article => (
          <motion.a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ y: -5 }}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-green-500/40 hover:bg-neutral-800/60 hover:shadow-[0_0_30px_rgba(74,222,128,0.08)] relative overflow-hidden"
          >
            {/* Ligne accent au hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-green-400 bg-green-400/10 px-2 py-1 rounded">
                    {article.date}
                  </span>
                  <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h4 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors leading-snug line-clamp-2">
                  {article.titre}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">{article.source}</p>
              </div>
              
              <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                {article.resume}
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-neutral-800 group-hover:border-neutral-700 transition-colors">
              <span className="text-xs font-semibold text-neutral-500 group-hover:text-green-400 transition-colors flex items-center gap-1">
                Lire l'article
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
