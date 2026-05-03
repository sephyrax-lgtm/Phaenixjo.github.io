import Tab from '@/components/tab.jsx';

export const metadata = {
  title: "BTS SIO",
  description: "Découvrez le BTS SIO option SLAM : formations, compétences, expériences, veille technologique et certifications de Joseph Akilabana.",
};


export default function Btssiopage() {
  return (
    <section className="relative min-h-screen bg-black text-white font-mono">

      {/* Fond animé type code (CSS dans globals.css) */}
      <div className="code-background fixed inset-0 z-0" />

      {/* Conteneur principal centré et responsive */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 max-w-screen-xl mx-auto">
        
        {/* Composant Tabs */}
        <Tab />

        {/* Note / lien facultatif */}
        <p className="mt-12 text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Toutes les informations présentées ici reflètent mes formations, expériences et compétences actuelles.
        </p>
      </div>
    </section>
  );
}
