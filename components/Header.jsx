"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `transition-colors hover:text-green-400 ${pathname === path ? "text-green-400" : ""}`;

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-black text-white px-6 font-mono z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
          Joseph<span className="text-green-400">.</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <Link href="/" className={linkClass("/")}>
            Accueil
          </Link>
          <Link href="/bts-sio" className={linkClass("/bts-sio")}>
            BTS SIO
          </Link>
          <Link href="/projets" className={linkClass("/projets")}>
            Projets
          </Link>
          <Link href="/apropos" className={linkClass("/apropos")}>
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
