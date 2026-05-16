'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-800 text-gray-400 font-mono">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Joseph<span className="text-green-400">.</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Développeur web et étudiant en BTS SIO option SLAM.
              Passionné par les technologies modernes et le développement d'applications.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-green-400 transition-colors">Accueil</Link>
              <Link href="/bts-sio" className="hover:text-green-400 transition-colors">BTS SIO</Link>
              <Link href="/projets" className="hover:text-green-400 transition-colors">Projets</Link>
              <Link href="/apropos" className="hover:text-green-400 transition-colors">À propos</Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact & réseaux */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-green-400" />
                akilabanajoseph@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-green-400" />
                07 44 85 59 14
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-green-400" />
                91220 Brétigny-sur-Orge
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/sephyrax-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-green-400 hover:scale-110 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-akilabana-709874338/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-green-400 hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/phaenixjo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-green-400 hover:scale-110 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur + copyright */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Joseph Akilabana. Tous droits réservés.</p>
          <p>
            Construit avec{' '}
            <span className="text-green-400">Next.js</span>,{' '}
            <span className="text-green-400">Tailwind CSS</span> &{' '}
            <span className="text-green-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
