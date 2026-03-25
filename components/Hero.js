import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white px-6"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center pt-24 pb-20">

        {/* Cercle animé + photo */}
        <div className="relative w-56 h-56 mb-8">

          {/* Cercle glow animé */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-xl animate-pulse"></div>

          {/* Anneaux rotatifs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-green-400"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animation: "spin 12s linear infinite",
                animationDelay: `${-i * 1.5}s`,
              }}
            />
          ))}

          {/* Cercle fixe (outline clean) */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-40"></div>

          {/* Photo */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-10">
            <Image
              src="/images/photo_pro.jpeg"
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
            href="/CV_2026-02-24_Joseph_Akilabana.pdf"
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
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-akilabana-709874338/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/jm_sky24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-125 transition"
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </section>
  );
}