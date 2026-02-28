import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { USER_PROFILE } from '../constants';

const XLogo = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-6 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-purple-500/10 transition-all hover:border-white/20 hover:bg-black/50 hover:translate-y-1 group/nav">
        
        {/* Animated Glass Logo */}
        <div className="relative flex items-center justify-center">
          {/* Blur Glow behind text */}
          <div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-full opacity-20 group-hover/nav:opacity-50 transition-opacity duration-500"></div>
          
          <span className="relative font-display font-bold text-2xl tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shine drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Glass
            </span>
          </span>
        </div>
        
        <div className="w-px h-4 bg-white/10 hidden md:block"></div>

        <div className="flex gap-2">
          <SocialLink href={USER_PROFILE.socials.github} icon={<Github size={18} />} />
          <SocialLink href={USER_PROFILE.socials.linkedin} icon={<Linkedin size={18} />} />
          <SocialLink href={USER_PROFILE.socials.twitter} icon={<XLogo size={16} />} />
          {USER_PROFILE.socials.instagram && (
            <SocialLink href={USER_PROFILE.socials.instagram} icon={<Instagram size={18} />} />
          )}
        </div>
      </nav>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);