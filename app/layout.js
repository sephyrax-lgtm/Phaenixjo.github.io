import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "AKILABANA Joseph | Portfolio",
  description: "Portfolio de Joseph Akilabana - Développeur Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {/* Header fixe */}
        <Header />

        {/* Contenu principal avec padding pour le Header */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
