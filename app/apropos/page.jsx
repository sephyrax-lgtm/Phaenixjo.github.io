import About from './About';

export const metadata = {
  title: "À propos",
  description: "Tout savoir sur le BTS SIO : options SISR et SLAM, épreuves, débouchés professionnels et spécialisations.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen pt-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto py-16">
        <About />
      </div>
    </main>
  );
}
