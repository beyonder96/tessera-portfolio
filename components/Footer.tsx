import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-glass-muted border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="flex items-center justify-center gap-2">
        <span>Criado com</span>
        <Heart size={14} className="text-red-500 fill-red-500" />
        <span>usando React & Tailwind CSS</span>
      </div>
      <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
};