import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        // Atualiza a posição diretamente para performance, o CSS trata a suavização
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* Orbe de luz */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-transparent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out will-change-transform mix-blend-plus-lighter"
      />
    </div>
  );
};