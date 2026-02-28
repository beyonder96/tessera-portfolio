import React, { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Globe, Palette, Terminal, Zap } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { USER_PROFILE } from '../constants';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dispara quando 10% do elemento estiver visível
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconectar se quiser que a animação rode apenas uma vez
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Classes base para animação
  const animBase = "transform transition-all duration-1000 ease-out will-change-transform";
  const animHidden = "opacity-0 translate-y-16";
  const animVisible = "opacity-100 translate-y-0";

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 relative z-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`mb-20 md:text-center max-w-3xl mx-auto ${animBase} ${isVisible ? animVisible : animHidden}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Sobre Mim
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Narrative & Stats (Span 7) */}
          <div className={`lg:col-span-7 flex flex-col gap-8 ${animBase} ${isVisible ? animVisible : animHidden} delay-300`}>
            <GlassCard className="p-8 md:p-12 h-full flex flex-col justify-center min-h-[400px]">
              <h3 className="text-2xl font-display font-bold mb-6 text-white">
                Mais do que código, <br />
                <span className="text-blue-400">crio experiências digitais.</span>
              </h3>
              
              <div className="space-y-6 text-glass-muted text-lg leading-relaxed font-light">
                <p>
                  Minha jornada na tecnologia começou com uma curiosidade simples: "como as coisas funcionam?". 
                  Hoje, essa curiosidade evoluiu para uma obsessão por performance, design system e arquitetura de software escalável.
                </p>
                <p>
                  Não apenas escrevo linhas de código; eu construo pontes entre a complexidade do backend e a elegância visual do frontend.
                  Acredito que a interface perfeita é aquela que o usuário nem percebe que está usando—ela apenas flui.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
                <StatItem number="5+" label="Anos de Exp." />
                <StatItem number="30+" label="Projetos" />
                <StatItem number="100%" label="Comprometimento" />
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Skills Dashboard (Span 5) */}
          <div className={`lg:col-span-5 flex flex-col gap-6 ${animBase} ${isVisible ? animVisible : animHidden} delay-700`}>
             
             {/* Tech Stack Card */}
             <GlassCard className="p-8" hoverEffect>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-purple-500/20 rounded-xl text-purple-300 border border-purple-500/30">
                    <Terminal size={24} />
                  </div>
                  <h4 className="font-display font-bold text-xl">Tech Stack</h4>
                </div>

                <div className="space-y-8">
                  <SkillGroup 
                    icon={<Globe size={18} />} 
                    title="Frontend" 
                    skills={["React", "Next.js", "Tailwind", "Three.js"]} 
                    color="bg-blue-500"
                  />
                  <SkillGroup 
                    icon={<Cpu size={18} />} 
                    title="Backend" 
                    skills={["Python", "Node.js", "C# .NET", "PostgreSQL", "GraphQL"]} 
                    color="bg-green-500"
                  />
                  <SkillGroup 
                    icon={<Palette size={18} />} 
                    title="Design & AI" 
                    skills={["Figma", "UI/UX", "Gemini API", "OpenAI"]} 
                    color="bg-pink-500"
                  />
                </div>
             </GlassCard>

             {/* Soft Skills / Philosophy Mini Card */}
             <GlassCard className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20" hoverEffect>
                <div className="flex items-start gap-5">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 border border-yellow-500/20">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Foco em Performance</h4>
                    <p className="text-sm text-glass-muted leading-relaxed">
                      Otimização não é uma etapa final, é parte do processo de design desde a primeira linha.
                    </p>
                  </div>
                </div>
             </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">{number}</div>
    <div className="text-xs uppercase tracking-widest text-glass-muted font-medium">{label}</div>
  </div>
);

const SkillGroup = ({ icon, title, skills, color }: { icon: React.ReactNode; title: string; skills: string[]; color: string }) => (
  <div>
    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white/90">
      {icon}
      <span>{title}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span 
          key={skill} 
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);