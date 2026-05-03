// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "AKILABANA Joseph - Portfolio",
    template: "%s | Joseph Akilabana",
  },
  description: "Portfolio de Joseph Akilabana - Développeur Web & étudiant en BTS SIO SLAM. Découvrez mes projets, compétences et parcours.",
  keywords: ["Joseph Akilabana", "portfolio", "développeur web", "BTS SIO", "SLAM", "Next.js", "React"],
  authors: [{ name: "Joseph Akilabana" }],
  openGraph: {
    title: "AKILABANA Joseph - Portfolio",
    description: "Portfolio de Joseph Akilabana - Développeur Web & étudiant en BTS SIO SLAM.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon principal */}
        <link rel="icon" href="/favicon.png" />
        {/* Pour Apple devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        {/* Pour autres formats */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {/* Header fixe */}
        <Header />

        {/* Contenu principal avec padding pour le Header */}
        <main className="pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

