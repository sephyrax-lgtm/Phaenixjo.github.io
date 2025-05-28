'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          Joseph<span className="text-green-400">.</span>
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <a href="#home" className="hover:text-green-400 transition-colors">
            Accueil
          </a>

          <Link href="/bts-sio" className="hover:text-green-400 transition-colors">
            BTS SIO
          </Link>

          <Link href="/projets" className="hover:text-green-400 transition-colors">
            Projets
          </Link>

          <Link href="/apropos" className="hover:text-green-400 transition-colors">
            À propos
          </Link>

          <Link href="/contact">
            <span className="bg-green-400 text-black font-bold py-2 px-6 rounded hover:bg-green-300 transition">
              Contacte-moi
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
