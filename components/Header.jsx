"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `transition-colors hover:text-green-400 ${
      pathname === path ? "text-green-400" : ""
    }`;

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/bts-sio", label: "BTS SIO" },
    { href: "/projets", label: "Projets" },
    { href: "/apropos", label: "À propos" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-black text-white px-6 font-mono z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold"
          onClick={() => setOpen(false)}
        >
          Joseph<span className="text-green-400">.</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact">
            <span className="bg-green-400 text-black font-bold py-2 px-6 rounded hover:bg-green-300 transition">
              Contacte-moi
            </span>
          </Link>
        </nav>

        {/* Bouton hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-400"
          aria-label="Menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-24 left-0 w-full bg-black border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-lg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setOpen(false)}>
                <span className="bg-green-400 text-black font-bold py-3 px-8 rounded hover:bg-green-300 transition">
                  Contacte-moi
                </span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
