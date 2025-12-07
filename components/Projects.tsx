import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
    tags: ["React", "Tailwind", "Recharts"],
    color: "bg-blue-500"
  },
  {
    title: "SaaS Landing Page",
    description: "High-converting landing page optimized for performance and SEO, featuring complex animations.",
    tags: ["Next.js", "Framer Motion"],
    color: "bg-purple-500"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates using WebSockets and drag-and-drop interface.",
    tags: ["TypeScript", "Node.js", "Socket.io"],
    color: "bg-emerald-500"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
            <div className={`h-32 ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;