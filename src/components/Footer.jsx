
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <a href="#" className="text-2xl font-medium text-foreground">
              Cairo<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Engenheiro de Dados especializado em soluções de big data
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks iconSize={22} />
            <a 
              href="mailto:cairoaorocha@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              cairoaorocha@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Cairo Rocha. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#experiencia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experiência
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
