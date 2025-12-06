"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GiBlackHoleBolas } from "react-icons/gi";

const veilles = [
  {
    id: 1,
    titre: "🚨 SINGULARITÉ QUANTIQUE : LES ENTREPRISES BASCULENT",
    source: "Techniques de l’Ingénieur",
    date: "2025",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/ordinateur-quantique-qap-entraine-les-entreprises-153783/",
    resume:
      "L'adoption massive du QAP déclenche une révolution des systèmes informatiques.",
  },
  {
    id: 2,
    titre: "⚡ IBM FRACTURE LA BARRIÈRE DE L’ERREUR QUANTIQUE",
    source: "Boursorama",
    date: "2025",
    url: "https://www.boursorama.com/bourse/actualites-amp/ibm-devoile-de-nouveaux-processeurs-quantiques-pour-franchir-la-barriere-de-l-erreur-en-2029-d1c8bb81bf838b6cdf8a97b19ff20ca5",
    resume:
      "Des processeurs ultra-stables ouvrent la voie à des calculs impossibles.",
  },
  {
    id: 3,
    titre: "🛑 RISQUE QUANTIQUE : L’ALERTE MONDIALE",
    source: "Cryptonaute",
    date: "2025",
    url: "https://cryptonaute.fr/risque-quantique-previent-expert/",
    resume:
      "Les cryptosystèmes actuels pourraient s’effondrer face au calcul quantique.",
  }, // ← VIRGULE MANQUANTE CORRIGÉE ICI
  {
    id: 4,
    titre: "🎙️ LA MENACE QUANTIQUE EXPLIQUÉE",
    source: "Radio France — Billet Sciences",
    date: "2025",
    url: "https://www.radiofrance.fr/franceinfo/podcasts/le-billet-sciences/le-billet-sciences-6295752",
    resume:
      "Un éclairage simple sur les enjeux du calcul quantique.",
  },
  {
    id: 5,
    titre: "🌐 PUISSANCE QUANTIQUE HORS-EUROPE",
    source: "LesNews.ca",
    date: "2025",
    url: "https://lesnews.ca/sciences/un-pays-hors-deurope-avec-un-ordinateur-quantique-menace-ou-opportunite/",
    resume:
      "Un nouvel acteur devient une superpuissance quantique.",
  },
  {
    id: 6,
    titre: "🧊 EXPLOIT QUANTIQUE IMPOSSIBLE",
    source: "Redac Info",
    date: "2025",
    url: "https://redac.info/cet-ordinateur-quantique-vient-de-franchir-une-limite-que-personne-ne-pensait-possible-il-simule-le-secret-cache-derriere-la-supraconductivite/",
    resume:
      "Simulation d’une propriété fondamentale de la supraconductivité.",
  },
  {
    id: 7,
    titre: "🇫🇷 START-UP FRANÇAISE : NOUVELLE VOIE QUANTIQUE",
    source: "Futura Sciences",
    date: "2025",
    url: "https://www.futura-sciences.com/tech/actualites/ordinateur-quantique-cette-start-up-francaise-pense-avoir-trouve-autre-voie-construire-ordinateur-quantique-125981/",
    resume:
      "Architecture fractale + particules hybrides.",
  },
  {
    id: 8,
    titre: "🏭 IQM INVESTIT 40 MILLIONS EN FINLANDE",
    source: "AFP",
    date: "2025",
    url: "https://www.afp.com/fr/infos/iqm-va-investir-plus-de-40-millions-deuros-pour-agrandir-son-site-de-production-en-finlande",
    resume:
      "L’Europe renforce sa production quantique.",
  },
  {
    id: 9,
    titre: "🛡️ CYBERSÉCURITÉ POST-QUANTIQUE EN FRANCE",
    source: "ITSocial",
    date: "2025",
    url: "https://itsocial.fr/cybersecurite/cybersecurite-actualites/la-france-muscle-sa-cybersecurite-post-quantique-grace-au-projet-giverny-porte-par-thales-et-le-cea/",
    resume:
      "Thales et le CEA lancent une protection contre les risques quantiques.",
  },
];

export default function Veille() {
  return (
    <div className="space-y-12">

      {/* TITRE */}
      <h2 className="text-5xl font-black text-center text-cyan-300 drop-shadow-[0_0_15px_#00eaff]">
        ⚛️ VEILLE TECHNOLOGIQUE ⚛️
      </h2>

      {/* DESCRIPTION */}
      <div className="bg-slate-800 text-white p-4 rounded-xl border border-cyan-400/30">
        <p className="text-sm">
          La veille technologique consiste à suivre les innovations dans un domaine précis.
          Je me concentre principalement sur l’intelligence artificielle et les technologies émergentes.
        </p>
      </div>

      {/* MÉTHODE DE VEILLE */}
      <div className="bg-slate-800 text-white p-4 rounded-xl border border-cyan-400/30">
        <h3 className="text-xl font-semibold mb-2">📂 Ma méthode de veille</h3>

        <p className="text-sm">
          J’utilise <strong>Google Alertes</strong> et <strong>Feedly</strong> pour suivre les nouveautés
          en IA, cybersécurité, cloud et développement logiciel.
        </p>

        <p className="text-sm mt-2">
          Je sélectionne chaque semaine les informations les plus fiables, pertinentes et récentes.
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
                       p-6 rounded-2xl shadow-[0_0_20px_#00eaff40] transition-all duration-300"
          >
            {/* Effet hologramme */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00eaff,transparent)] pointer-events-none"></div>

            {/* Titre */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-cyan-200 drop-shadow-[0_0_10px_#00eaff]">
                {item.titre}
              </h3>
              <GiBlackHoleBolas className="text-cyan-300 text-2xl animate-spin-slow" />
            </div>

            {/* SOURCE JAUNE */}
            <p className="text-xs text-yellow-300 font-semibold drop-shadow-[0_0_5px_#ffd700]">
              {item.source} • {item.date}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm text-cyan-100/80">{item.resume}</p>

            {/* BOUTON ROUGE */}
            <motion.a
              href={item.url}
              target="_blank"
              className="inline-flex items-center mt-4 font-bold text-red-500"
              whileHover={{
                scale: 1.15,
                textShadow: "0 0 12px #ff0000",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Lire l’article

              {/* Flèche animée */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
              >
                <FaArrowRight className="ml-2 text-red-500 drop-shadow-[0_0_8px_#ff0000]" />
              </motion.div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
