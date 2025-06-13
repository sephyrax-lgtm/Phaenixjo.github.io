import About from './About';
import Link from 'next/link';

export default function AProposPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <About />
      {/* Bouton Retour à l'accueil */}
      <div className="mt-16 text-center">
        <Link href="/">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
            ← Retour à l'accueil
          </button>
        </Link>
      </div>
    </main>
  );
}
