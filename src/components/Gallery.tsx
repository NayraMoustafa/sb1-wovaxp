import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  size?: string;
}

const projects: Project[] = [
  {
    title: "Visual Identity System",
    description: "Luxury fashion brand identity",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=800",
    category: "Identity",
    size: "wide"
  },
  {
    title: "Editorial Campaign",
    description: "High-end lifestyle publication",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    category: "Editorial",
    size: "tall"
  },
  {
    title: "Brand Evolution",
    description: "Tech company rebranding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    category: "Branding"
  },
  {
    title: "Urban Photography",
    description: "City life series",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    category: "Photography",
    size: "wide tall"
  },
  {
    title: "Product Design",
    description: "Minimalist collection",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800",
    category: "Design"
  },
  {
    title: "Abstract Art",
    description: "Digital expressions",
    image: "https://images.unsplash.com/photo-1460411794035-42aac080490a?auto=format&fit=crop&q=80&w=800",
    category: "Art",
    size: "tall"
  }
];

export function Gallery() {
  return (
    <section id="work" className="container mx-auto px-6 mb-20 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-white glow">Featured Works</h2>
      <div className="gallery-grid">
        {projects.map((project) => (
          <div key={project.title} className={`gallery-item ${project.size || ''} group`}>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="gallery-overlay">
              <span className="text-sm text-amber-400 mb-2">{project.category}</span>
              <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
              <p className="text-white/70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}