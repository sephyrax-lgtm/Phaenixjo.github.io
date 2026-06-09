import About from './About';

export const metadata = {
  title: "À propos",
  description: "Tout savoir sur le BTS SIO : options SISR et SLAM, épreuves, débouchés professionnels et spécialisations.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <About />
      </div>
    </main>
  );
}
