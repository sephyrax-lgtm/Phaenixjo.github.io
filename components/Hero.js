import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white px-6"
    >
      {/* Conteneur central (important pour écran large) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center pt-24 pb-20">

        {/* Cercle animé + photo */}
        <div className="relative w-56 h-56 mb-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-green-400"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animation: "spin 20s linear infinite",
                animationDelay: `${-i * 2.5}s`,
              }}
            />
          ))}

          {/* Photo */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-10">
            <Image
              src="/images/IMG_2556.jpeg"
              alt="Photo de Joseph Akilabana"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Nom */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2">
          Bonjour, je suis{" "}
          <span className="text-green-400">Joseph Akilabana</span>
        </h1>

        <p className="text-lg text-gray-400 mb-6 max-w-2xl">
          Développeur web et étudiant en BTS SIO option SLAM
        </p>

        {/* Bouton CV */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="/CV_2026-02-21_Joseph_Akilabana.pdf"
            download
            className="border border-green-400 text-green-400 py-2 px-6 rounded-md hover:bg-green-400 hover:text-black transition"
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
            className="hover:text-green-400 hover:scale-125 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-akilabana-709874338/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-125 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/jm_sky24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-125 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full max-w-4xl">
          <div>
            <p className="text-3xl font-bold">2+</p>
            <p className="text-gray-400">Années d’expérience</p>
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
      </div>
    </section>
  );
}
