'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const veilles = [
  {
    id: 1,
    titre: "IA Quantique : l'engouement des entreprises",
    source: "Golem13",
    date: "25/05/2025",
    type: "Article",
    url: "https://golem13.fr/ia-quantique-suscite-engouement-inedit-chez-entreprises-malgre-freins-persistants/",
  },
  {
    id: 2,
    titre: "Gemini : mise à jour majeure de l’IA",
    source: "Services Mobiles",
    date: "22/05/2025",
    type: "News",
    url: "https://www.servicesmobiles.fr/gemini-devoile-une-mise-a-jour-majeure-decouvrez-toutes-les-nouvelles-fonctionnalites-de-son-ia-105248",
  },
  {
    id: 3,
    titre: "IA et Industrie 4.0 : une révolution en marche",
    source: "Techniques de l'Ingénieur",
    date: "20/05/2025",
    type: "Analyse",
    url: "https://www.techniques-ingenieur.fr/actualite/articles/l-intelligence-artificielle-un-outil-d-evolution-pour-les-industries-4-0-146043/",
  },
  {
    id: 4,
    titre: "L'IA au cœur des assurances modernes",
    source: "La Presse",
    date: "25/05/2025",
    type: "Article",
    url: "https://lapresse.tn/2025/05/25/lintelligence-artificielle-au-service-de-lassurance-la-technologie-qui-fait-la-difference/",
  },
  {
    id: 5,
    titre: "Les 3 métiers que l'IA ne remplacera pas",
    source: "Tablette Tactile",
    date: "23/05/2025",
    type: "Tendance",
    url: "https://www.tablette-tactile.net/tendances/voici-les-3-metiers-qui-survivront-a-lia-selon-bill-gates-verifiez-si-vous-en-faites-partie-1114654/",
  },
  {
    id: 6,
    titre: "OpenAI & IA pour la sécurité nucléaire",
    source: "Trust My Science",
    date: "24/05/2025",
    type: "News",
    url: "https://trustmyscience.com/openai-conclut-accord-gouvernement-americain-utiliser-ia-securite-armes-nucleaires/",
  },
];

export default function Veille() {
  return (
    <div id="veille" className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-4 glow">
        🚀 Veille Technologique — L’Évolution de l’IA
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {veilles.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            whileHover={{
              scale: 1.05,
              background: 'linear-gradient(135deg, #00c9ff, #92fe9d)',
              boxShadow: '0 0 25px rgba(0,255,200,0.6)',
              color: '#0f172a',
            }}
            className="bg-gradient-to-br from-[#141e30] to-[#243b55] text-white p-6 rounded-2xl transition-all duration-300 shadow-lg border border-cyan-400/20 hover:text-gray-900"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{item.titre}</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-white text-black font-semibold">
                {item.type}
              </span>
            </div>
            <p className="text-sm text-cyan-200">{item.source} • {item.date}</p>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-sm font-bold text-yellow-300 hover:text-white transition-colors"
            >
              Lire l’article <FaArrowRight className="ml-2 text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
