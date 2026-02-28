import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../constants';
import { GlassCard } from './GlassCard';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [isAnimate, setIsAnimate] = useState(true);

  // Extrair tags únicas dos projetos
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('Todos');
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filtrar projetos com base na tag ativa
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  // Efeito para disparar animação quando o filtro muda
  useEffect(() => {
    setIsAnimate(false);
    const timer = setTimeout(() => setIsAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 lg:py-32 px-4 relative z-10 scroll-mt-20">
      
      {/* Separator Line for visual distinction */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Trabalhos Selecionados</h2>
          <p className="text-glass-muted text-lg leading-relaxed">
            Uma curadoria de projetos onde design encontra funcionalidade. Cada pixel planejado, cada linha de código otimizada.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-wrap justify-center gap-1">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`
                  px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeFilter === tag 
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'}
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout with Animation wrapper */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px] transition-all duration-500 ${
            isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <GlassCard 
              key={project.id} 
              hoverEffect 
              className={`group relative flex flex-col justify-between overflow-hidden border-white/10 bg-white/[0.02] ${
                // Bento Effect: logic to make layout interesting even with filtered results
                filteredProjects.length > 2 && (index === 0 || (index === 3 && filteredProjects.length > 3)) 
                  ? 'md:col-span-2' 
                  : ''
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Top Actions */}
              <div className="relative z-10 p-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                 <div className="flex gap-2 ml-auto">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-colors" title="Ver Live">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                    <a href={project.githubUrl} className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-colors" title="Código Fonte">
                      <Github size={18} />
                    </a>
                 </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-8 pt-0 mt-auto transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="mb-4">
                   <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/10 border border-white/5 text-white/80 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                   </div>
                   <h3 className="text-3xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                     {project.title}
                   </h3>
                </div>
                
                <p className="text-glass-muted text-sm leading-relaxed max-w-lg opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                  {project.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-glass-muted">Nenhum projeto encontrado para esta categoria.</p>
          </div>
        )}

      </div>
    </section>
  );
};