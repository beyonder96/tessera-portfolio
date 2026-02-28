import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitorar o scroll para mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-8 right-8 z-40 
        p-4 rounded-full 
        bg-black/40 backdrop-blur-xl border border-white/10 
        text-white shadow-lg shadow-purple-500/10
        transition-all duration-500 ease-in-out
        hover:bg-white/10 hover:border-white/30 hover:shadow-purple-500/20 hover:scale-110
        group
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      {/* Glow effect interno */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <ArrowUp 
        size={24} 
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1" 
      />
    </button>
  );
};