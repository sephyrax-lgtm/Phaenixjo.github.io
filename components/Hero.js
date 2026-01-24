import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 font-mono py-20"
    >
      {/* Conteneur un peu plus petit */}
      <div className="relative w-57 h-57 mb-8">
        {/* Cercle composé de 8 segments */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1 left-0 w-full h-full rounded-full border-[5px] border-transparent border-t-green-400"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: '50% 50%',
              animation: 'spin 20s linear infinite',
              animationDelay: `${-i * 2.5}s`,
            }}
          />
        ))}

        {/* Photo pleine taille */}
        <div className="absolute inset-0 rounded-full overflow-hidden z-10">
          <Image
            src="/images/IMG_2556.jpeg"
            alt="Joseph"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Nom + titre */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Bonjour, je suis <span className="text-green-400">Joseph Akilabana</span>
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        Développeur Web & Étudiant en BTS SIO SLAM
      </p>

      {/* Bouton CV */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <a
          href="\CV_2026-01-24_Joseph_Akilabana.pdf"
          download
          className="border border-green-400 text-green-400 py-2 px-6 rounded hover:bg-green-400 hover:text-black transition"
        >
          Télécharger mon CV ⬇️
        </a>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex gap-8 mb-12 text-3xl text-gray-400">
        <a
          href="https://github.com/sephyrax-lgtm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transform hover:scale-125 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-akilabana-709874338/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transform hover:scale-125 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/jm_sky24/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transform hover:scale-125 transition duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-3xl font-bold">2+</p>
          <p className="text-gray-400">Années d&apos;expérience</p>
        </div>
        <div>
          <p className="text-3xl font-bold">2+</p>
          <p className="text-gray-400">Projets réalisés</p>
        </div>
        <div>
          <p className="text-3xl font-bold">12+</p>
          <p className="text-gray-400">Technologies maîtrisées</p>
        </div>
        <div>
          <p className="text-3xl font-bold">100+</p>
          <p className="text-gray-400">Commits de code</p>
        </div>
      </div>
    </section>
  );
}
