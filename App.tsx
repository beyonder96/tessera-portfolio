import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <main className="antialiased min-h-screen relative text-white selection:bg-purple-500/30">
      <Background />
      <CursorGlow />
      <Navbar />
      
      {/* 
        Container principal: 
        Removemos o gap fixo e deixamos cada seção gerenciar seu próprio espaçamento interno (padding),
        o que é mais seguro para evitar sobreposições em layouts responsivos complexos.
      */}
      <div className="relative z-10 flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Certifications />
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;