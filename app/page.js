'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
// import Projects from '../components/Projects'; // supprimé
// import About from '../components/About'; // supprimé
// import Contact from '../components/Contact'; // supprimé
// import NotesDeSynthese from '../components/Notedessynte.jsx'; // supprimé
// import Veille from '../components/Veille.jsx'; // supprimé
// import Certification from '../components/Certification.jsx'; // supprimé
// import FormationDiplome from '../components/Diplome.jsx'; // supprimé

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      {/* <Projects /> supprimé */}
      {/* <About /> supprimé */}
      {/* <NotesDeSynthese /> supprimé */}
      {/* <Veille /> supprimé */}
      {/* <Certification /> supprimé */}
      {/* <FormationDiplome /> supprimé */}
      {/* <Contact /> supprimé */}
    </div>
  );
}
