"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GiBlackHoleBolas } from "react-icons/gi";

// ===================================================
// 🔷 ARTICLES — INFORMATIQUE QUANTIQUE
// ===================================================

const veilles = [
  {
    id: 1,
    titre: "🚨 SINGULARITÉ QUANTIQUE : LES ENTREPRISES BASCULENT",
    source: "Techniques de l’Ingénieur",
    date: "2025",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/ordinateur-quantique-qap-entraine-les-entreprises-153783/",
    resume:
      "L’adoption massive du calcul quantique marque une rupture majeure dans les systèmes informatiques.",
  },
  {
    id: 2,
    titre: "⚡ IBM FRACTURE LA BARRIÈRE DE L’ERREUR QUANTIQUE",
    source: "Boursorama",
    date: "2025",
    url: "https://www.boursorama.com/bourse/actualites-amp/ibm-devoile-de-nouveaux-processeurs-quantiques-pour-franchir-la-barriere-de-l-erreur-en-2029-d1c8bb81bf838b6cdf8a97b19ff20ca5",
    resume:
      "IBM développe des processeurs quantiques plus stables, rendant les calculs complexes exploitables.",
  },
  {
    id: 3,
    titre: "🛑 RISQUE QUANTIQUE : L’ALERTE MONDIALE",
    source: "Cryptonaute",
    date: "2025",
    url: "https://cryptonaute.fr/risque-quantique-previent-expert/",
    resume:
      "Le calcul quantique menace les systèmes de chiffrement actuels.",
  },
  {
    id: 4,
    titre: "🎙️ LA MENACE QUANTIQUE EXPLIQUÉE",
    source: "Radio France — Billet Sciences",
    date: "2025",
    url: "https://www.radiofrance.fr/franceinfo/podcasts/le-billet-sciences/le-billet-sciences-6295752",
    resume:
      "Une vulgarisation claire des enjeux liés à l’informatique quantique.",
  },
  {
    id: 5,
    titre: "🌐 PUISSANCE QUANTIQUE HORS EUROPE",
    source: "LesNews.ca",
    date: "2025",
    url: "https://lesnews.ca/sciences/un-pays-hors-deurope-avec-un-ordinateur-quantique-menace-ou-opportunite/",
    resume:
      "Un pays non européen s’impose comme acteur majeur du calcul quantique.",
  },
  {
    id: 6,
    titre: "🧊 EXPLOIT QUANTIQUE IMPOSSIBLE",
    source: "Redac Info",
    date: "2025",
    url: "https://redac.info/cet-ordinateur-quantique-vient-de-franchir-une-limite-que-personne-ne-pensait-possible-il-simule-le-secret-cache-derriere-la-supraconductivite/",
    resume:
      "Une simulation quantique révolutionnaire liée à la supraconductivité.",
  },
  {
    id: 7,
    titre: "🇫🇷 START-UP FRANÇAISE : NOUVELLE VOIE QUANTIQUE",
    source: "Futura Sciences",
    date: "2025",
    url: "https://www.futura-sciences.com/tech/actualites/ordinateur-quantique-cette-start-up-francaise-pense-avoir-trouve-autre-voie-construire-ordinateur-quantique-125981/",
    resume:
      "Une approche innovante pour concevoir des ordinateurs quantiques.",
  },
  {
    id: 8,
    titre: "🏭 IQM INVESTIT 40 MILLIONS EN FINLANDE",
    source: "AFP",
    date: "2025",
    url: "https://www.afp.com/fr/infos/iqm-va-investir-plus-de-40-millions-deuros-pour-agrandir-son-site-de-production-en-finlande",
    resume:
      "L’Europe renforce ses capacités industrielles en informatique quantique.",
  },
  {
    id: 9,
    titre: "🛡️ CYBERSÉCURITÉ POST-QUANTIQUE EN FRANCE",
    source: "ITSocial",
    date: "2025",
    url: "https://itsocial.fr/cybersecurite/cybersecurite-actualites/la-france-muscle-sa-cybersecurite-post-quantique-grace-au-projet-giverny-porte-par-thales-et-le-cea/",
    resume:
      "La France anticipe les menaces du calcul quantique sur la sécurité numérique.",
  },
];

// ===================================================
// 🔷 COMPOSANT VEILLE
// ===================================================

export default function Veille() {
  return (
    <div className="space-y-12">

      {/* TITRE */}
      <h2 className="text-5xl font-black text-center text-cyan-300 drop-shadow-[0_0_15px_#00eaff]">
        ⚛️ VEILLE TECHNOLOGIQUE — INFORMATIQUE QUANTIQUE ⚛️
      </h2>

      {/* DESCRIPTION — CORRIGÉE PROF */}
      <div className="bg-slate-800 text-white p-4 rounded-xl border border-cyan-400/30">
        <p className="text-sm">
          Cette veille technologique est centrée sur <strong>l’informatique quantique</strong>,
          un domaine émergent qui vise à exploiter les propriétés de la mécanique quantique
          afin de résoudre des problèmes impossibles pour l’informatique classique.
        </p>
      </div>

      {/* MÉTHODE — CORRIGÉE PROF */}
      <div className="bg-slate-800 text-white p-4 rounded-xl border border-cyan-400/30">
        <h3 className="text-xl font-semibold mb-2">📂 Ma méthode de veille</h3>

        <p className="text-sm">
          J’utilise des sources spécialisées telles que <strong>Google Alertes</strong>,
          <strong> Feedly</strong> et des médias scientifiques afin de suivre l’évolution
          des ordinateurs quantiques, de la cryptographie post-quantique et des avancées industrielles.
        </p>

        <p className="text-sm mt-2">
          Les informations sont sélectionnées chaque semaine selon leur fiabilité,
          leur actualité et leur lien direct avec l’informatique quantique.
        </p>
      </div>

      {/* CARTES */}
      <div className="grid gap-8 md:grid-cols-2">
        {veilles.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.06,
              rotateX: 8,
              rotateY: -8,
              boxShadow: "0 0 45px rgba(0, 255, 255, 0.5)",
            }}
            className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/30 
                       p-6 rounded-2xl shadow-[0_0_20px_#00eaff40]"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00eaff,transparent)] pointer-events-none" />

            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-cyan-200">
                {item.titre}
              </h3>
              <GiBlackHoleBolas className="text-cyan-300 text-2xl animate-spin-slow" />
            </div>

            <p className="text-xs text-yellow-300 font-semibold">
              {item.source} • {item.date}
            </p>

            <p className="mt-3 text-sm text-cyan-100/80">
              {item.resume}
            </p>

            <motion.a
              href={item.url}
              target="_blank"
              className="inline-flex items-center mt-4 font-bold text-red-500"
              whileHover={{ scale: 1.15, textShadow: "0 0 12px #ff0000" }}
            >
              Lire l’article
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
