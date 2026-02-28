import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030014]">
      {/* Gradient Orbs - Aurora Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/40 blur-[120px] animate-pulse mix-blend-screen" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/40 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-900/30 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-fuchsia-900/30 blur-[100px] animate-pulse mix-blend-screen" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};