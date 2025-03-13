
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-medium text-foreground">
          Cairo<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#sobre" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#experiencia" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Experiência
          </a>
          <a 
            href="#contato" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <SocialLinks className="hidden md:flex" />
          <a 
            href="#contato" 
            className="btn-primary text-sm animate-fadeIn"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
