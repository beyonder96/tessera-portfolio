import React from 'react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { USER_PROFILE } from '../constants';
import { GlassCard } from './GlassCard';

export const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative pt-20 pb-10 overflow-hidden">
      
      {/* Background glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full text-center z-10 space-y-8">
        
        {/* Main Title - Huge Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
          FULL STACK
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">VISIONARY</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-glass-muted leading-relaxed font-light animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          {USER_PROFILE.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 pt-4 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer"
          >
            Ver Projetos
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a 
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-md cursor-pointer"
          >
            Sobre Mim
          </a>
        </div>

        {/* Tech Stack Marquee (Static for simplicity but styled) */}
        <div className="pt-16 opacity-50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-xs uppercase tracking-[0.2em] mb-4 text-white/40">Powering Next-Gen Apps With</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Tech Icons represented as text for this snippet, in real app could be SVGs */}
             {['React', 'Next.js', 'Python', 'C#', '.NET', 'SQL', 'TypeScript', 'Tailwind', 'Node.js', 'Gemini AI', 'Three.js'].map(tech => (
               <span key={tech} className="font-display font-bold text-xl text-white/60 hover:text-purple-400 transition-colors cursor-default">
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};