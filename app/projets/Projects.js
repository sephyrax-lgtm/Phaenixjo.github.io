// Exemple de deux projets dynamiques
const projects = [
  {
    title: "Dashboard Admin",
    description: "Interface administrateur moderne avec React + API REST.",
    tech: ["React", "Tailwind", "Node.js"],
    image: "/images/dashboard.png",
    link: "https://github.com/tonprofil/dashboard"
  },
  {
    title: "Landing Page",
    description: "Page marketing responsive conçue avec Next.js.",
    tech: ["Next.js", "Tailwind CSS", "Figma"],
    image: "/images/landingpage.png",
    link: "https://github.com/tonprofil/landingpage"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <h2 className="text-4xl text-center font-bold mb-10">Mes projets</h2>
      <div className="grid md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="rounded mb-4" />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-indigo-600">
              {project.tech.map((t) => <span key={t}>#{t}</span>)}
            </div>
            <a href={project.link} className="block mt-4 text-indigo-500 hover:underline">Code source →</a>
          </div>
        ))}
      </div>
    </section>
  );
}