import React, { useState, useMemo, useEffect } from 'react';
import { Award, GraduationCap, FileText, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';
import { GlassCard } from './GlassCard';

export const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [isAnimate, setIsAnimate] = useState(true);

  // Extract unique types
  const allTypes = useMemo(() => {
    const types = new Set<string>();
    types.add('Todos');
    CERTIFICATIONS.forEach(cert => types.add(cert.type));
    return Array.from(types);
  }, []);

  // Filter based on active type
  const filteredCerts = useMemo(() => {
    if (activeFilter === 'Todos') return CERTIFICATIONS;
    return CERTIFICATIONS.filter(cert => cert.type === activeFilter);
  }, [activeFilter]);

  // Animation effect
  useEffect(() => {
    setIsAnimate(false);
    const timer = setTimeout(() => setIsAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Graduação':
        return <GraduationCap size={24} className="text-blue-400" />;
      case 'Diploma':
        return <FileText size={24} className="text-purple-400" />;
      case 'Certificação':
      default:
        return <Award size={24} className="text-yellow-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 lg:py-32 px-4 relative z-10 scroll-mt-20">
      
      {/* Separator Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Formação & Certificações
            </span>
          </h2>
          <p className="text-glass-muted text-lg leading-relaxed">
            Minha jornada de aprendizado contínuo, graduações e especializações que moldam minha base técnica.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-wrap justify-center gap-1">
            {allTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`
                  px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeFilter === type 
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'}
                `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {filteredCerts.map((cert) => (
            <GlassCard 
              key={cert.id} 
              hoverEffect 
              className="group relative flex flex-col p-8 border-white/10 bg-white/[0.02]"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(cert.type)}
                </div>
                <span className="text-xs font-mono text-glass-muted bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/10 border border-white/5 text-white/80 backdrop-blur-sm inline-block mb-3">
                    {cert.type}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-sm font-medium text-purple-300 mb-4">
                  {cert.issuer}
                </h4>
                
                {cert.description && (
                  <p className="text-glass-muted text-sm leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Action */}
              {cert.link && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    Ver Credencial <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-glass-muted">Nenhum item encontrado para esta categoria.</p>
          </div>
        )}

      </div>
    </section>
  );
};
