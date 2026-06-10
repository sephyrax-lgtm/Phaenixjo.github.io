'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const stats = [
    { value: "2+", label: "Années d’expérience" },
    { value: "2+", label: "Projets réalisés" },
    { value: "12+", label: "Technologies" },
    { value: "100+", label: "Commits GitHub" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      

      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Photo Container */}
        <motion.div variants={itemVariants} className="relative w-48 h-48 md:w-56 md:h-56 mb-8 group">
          
          {/* Animated Glow Behind Photo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
          
          {/* Decorative Rings */}
          <div className="absolute -inset-4 rounded-full border border-green-500/20 group-hover:border-green-500/50 transition-colors duration-700 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-8 rounded-full border border-green-500/10 group-hover:border-green-500/30 transition-colors duration-700 animate-[spin_30s_linear_infinite_reverse]" />

          {/* Photo Frame */}
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-b from-green-400 to-transparent shadow-[0_0_30px_rgba(74,222,128,0.15)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
              <Image
                src="/images/photo_pro.jpeg"
                alt="Photo de Joseph Akilabana"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs tracking-wide mb-2 backdrop-blur-sm">
            👋 Bienvenue sur mon portfolio
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
            Bonjour, je suis <br className="hidden sm:block" />
            <span className="relative inline-block mt-1 md:mt-2">
              <span className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 blur-2xl opacity-20" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 animate-gradient-x">
                Joseph Akilabana
              </span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Développeur web Full-Stack passionné et étudiant en BTS SIO, option <span className="text-white font-semibold">SLAM</span>.
          </p>
        </motion.div>

        {/* CTA & Socials */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 mb-12">
          <a
            href="/CV_2026-05-16_Joseph_Akilabana.pdf"
            download
            className="group relative flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            {/* Lueur du bouton */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <FaDownload className="relative z-10" />
            <span className="relative z-10">Télécharger mon CV</span>
          </a>

          <div className="flex gap-3">
            {[
              { icon: FaGithub, url: "https://github.com/sephyrax-lgtm" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/joseph-akilabana-709874338/" },
              { icon: FaInstagram, url: "https://www.instagram.com/phaenixjo/" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg text-neutral-400 hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="relative p-4 md:p-5 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800 hover:border-green-500/30 transition-colors group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-full blur-xl group-hover:bg-green-500/10 transition-colors" />
              <p className="text-2xl md:text-3xl font-black text-white group-hover:text-green-400 transition-colors mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
        
      </motion.div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}