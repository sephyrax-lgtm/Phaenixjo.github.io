'use client';

import { motion } from "framer-motion";
import { FaAtom, FaArrowRight } from "react-icons/fa";
import { GiBlackHoleBolas, GiElectric } from "react-icons/gi";

// 💥💥💥 VERSION *APOCALYPTIQUE QUANTIQUE* – ULTRA CHOC 💥💥💥
// Effets : distorsion, plasma, néons sursaturés, particules, halos, pulsations, vibrations.
// Objectif : TUER la normalité. Holographique + Matrix + singularité cosmique.

const veilles = [
  {
    id: 1,
    titre: "🚨 SINGULARITÉ QUANTIQUE : LES ENTREPRISES BASCULENT",
    source: "Techniques de l’Ingénieur",
    date: "2025",
    type: "Analyse",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/ordinateur-quantique-qap-entraine-les-entreprises-153783/",
    resume:
      "L'adoption massive du QAP déclenche une réaction en chaîne : optimisation, chaos, révolution totale des systèmes informatiques.",
  },
  {
    id: 2,
    titre: "⚡ IBM FRACTURE LA BARRIÈRE DE L’ERREUR QUANTIQUE",
    source: "Boursorama",
    date: "2025",
    type: "News",
    url: "https://www.boursorama.com/bourse/actualites-amp/ibm-devoile-de-nouveaux-processeurs-quantiques-pour-franchir-la-barriere-de-l-erreur-en-2029-d1c8bb81bf838b6cdf8a97b19ff20ca5",
    resume:
      "Nouveaux processeurs : stabilité quasi parfaite, ouvrant la porte à des calculs autrefois prohibés par la physique classique.",
  },
  {
    id: 3,
    titre: "🛑 RISQUE QUANTIQUE : L’ALERTE MONDIALE",
    source: "Cryptonaute",
    date: "2025",
    type: "Cyber",
    url: "https://cryptonaute.fr/risque-quantique-previent-expert/",
    resume:
      "Les experts annoncent un effondrement probable des systèmes cryptographiques actuels face au quantum cracking.",
  },
  {
    id: 4,
    titre: "🎙️ LA MENACE QUANTIQUE EXPLIQUÉE",
    source: "Radio France — Billet Sciences",
    date: "2025",
    type: "Podcast",
    url: "https://www.radiofrance.fr/franceinfo/podcasts/le-billet-sciences/le-billet-sciences-6295752",
    resume:
      "Un décryptage clair des enjeux et dangers du calcul quantique pour nos technologies actuelles.",
  },
  {
    id: 5,
    titre: "🌐 PUISSANCE QUANTIQUE HORS-EUROPE",
    source: "LesNews.ca",
    date: "2025",
    type: "Analyse",
    url: "https://lesnews.ca/sciences/un-pays-hors-deurope-avec-un-ordinateur-quantique-menace-ou-opportunite/",
    resume:
      "Un pays devient la nouvelle superpuissance quantique, renversant l’équilibre technologique mondial.",
  },
  {
    id: 6,
    titre: "🧊 EXPLOIT QUANTIQUE IMPOSSIBLE",
    source: "Redac Info",
    date: "2025",
    type: "Découverte",
    url: "https://redac.info/cet-ordinateur-quantique-vient-de-franchir-une-limite-que-personne-ne-pensait-possible-il-simule-le-secret-cache-derriere-la-supraconductivite/",
    resume:
      "Un ordinateur quantique simule une propriété fondamentale de la supraconductivité — un exploit contraire aux lois établies.",
  },
  {
    id: 7,
    titre: "🇫🇷 START-UP FRANÇAISE : NOUVELLE VOIE QUANTIQUE",
    source: "Futura Sciences",
    date: "2025",
    type: "Innovation",
    url: "https://www.futura-sciences.com/tech/actualites/ordinateur-quantique-cette-start-up-francaise-pense-avoir-trouve-autre-voie-construire-ordinateur-quantique-125981/",
    resume:
      "Une approche totalement nouvelle du calcul quantique : architecture fractale + particules hybrides.",
  },
  {
    id: 8,
    titre: "🏭 IQM INVESTIT 40 MILLIONS EN FINLANDE",
    source: "AFP",
    date: "2025",
    type: "Economie",
    url: "https://www.afp.com/fr/infos/iqm-va-investir-plus-de-40-millions-deuros-pour-agrandir-son-site-de-production-en-finlande",
    resume:
      "L’Europe accélère sa production de matériel quantique avec l’expansion majeure d’IQM.",
  },
  {
    id: 9,
    titre: "🛡️ CYBERSÉCURITÉ POST-QUANTIQUE EN FRANCE",
    source: "ITSocial",
    date: "2025",
    type: "Cyber",
    url: "https://itsocial.fr/cybersecurite/cybersecurite-actualites/la-france-muscle-sa-cybersecurite-post-quantique-grace-au-projet-giverny-porte-par-thales-et-le-cea/",
    resume:
      "Thales et le CEA lancent le projet Giverny pour protéger la France contre les attaques quantiques futures.",
  }
];

export default function Veille() {
  return (
    <div id="veille" className="relative overflow-hidden space-y-16">
      {/* 🌌 FOND COSMIQUE + DISTORSION QUANTIQUE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[conic-gradient(at_center,_#00eaff,_#8a2be2,_#000000,_#00eaff)] animate-spin-slow opacity-20"
      />

      {/* PARTICULES QUANTIQUES DANS L'AIR */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://i.imgur.com/BoN9kdI.png')] opacity-10 animate-pulse" />

      {/* TITRE APocalyptique */}
      <h2 className="text-6xl font-black text-center text-cyan-300 tracking-widest drop-shadow-[0_0_25px_#00eaff] animate-pulse">
        ⚛️ RÉVOLUTION QUANTIQUE ⚛️
      </h2>

      {/* Description de la veille */}
      <div className="text-white space-y-2 text-sm bg-slate-800 p-4 rounded-xl border border-cyan-400/30">
        <p>
          La veille technologique consiste à suivre les évolutions et innovations dans un domaine précis. 
          En tant qu’étudiant en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers), je m’intéresse 
          particulièrement à l’intelligence artificielle, car elle a un impact direct sur le développement logiciel et 
          les technologies que je suis amené à utiliser.
        </p>
      </div>

      {/* Méthodologie utilisée */}
      <div className="text-white space-y-2 text-sm bg-slate-800 p-4 rounded-xl border border-cyan-400/30">
        <h3 className="text-xl font-semibold mb-2">📂 Ma méthode de veille</h3>
        <p>
          J’utilise des outils comme <strong>Google Alertes</strong> et <strong>Feedly</strong> pour suivre régulièrement 
          les nouveautés en intelligence artificielle, cybersécurité, développement web, cloud computing et langages de programmation.
        </p>
        <p>
          La veille est effectuée chaque semaine, et les informations sont sélectionnées en fonction de leur fiabilité, de leur 
          actualité et de leur lien avec les enjeux de développement.
        </p>
      </div>

      {/* Résultats de la veille sous forme de cartes animées */}
      <div className="grid gap-6 md:grid-cols-2">
        {veilles.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 120, scale: 0.4, rotate: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.2, duration: 0.9, ease: "easeOut" }}
            whileHover={{
              scale: 1.25,
              rotate: 2,
              boxShadow: "0 0 50px #00eaff",
              filter: "brightness(1.4)",
            }}
            className="bg-black/60 backdrop-blur-2xl border border-cyan-500/40 p-8 rounded-3xl text-cyan-200 shadow-[0_0_30px_#00eaff] hover:text-white transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-extrabold drop-shadow-[0_0_20px_#00eaff]">
                {item.titre}
              </h3>
              <GiBlackHoleBolas className="text-3xl text-cyan-300 animate-spin-fast" />
            </div>

            <p className="text-sm text-cyan-400/80">{item.source} • {item.date}</p>
            <p className="mt-4 text-sm leading-relaxed">{item.resume}</p>

            <a
              href={item.url}
              target="_blank"
              className="inline-flex items-center mt-5 text-lg font-bold text-yellow-300 hover:text-white transition-colors drop-shadow-[0_0_10px_#fff]"
            >
              Explorer <FaArrowRight className="ml-2 text-sm" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
