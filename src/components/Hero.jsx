
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    children?.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children?.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#111] opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-primary mb-6 opacity-0 animate-on-scroll animate-delay-200">
          Engenheiro de Dados
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-on-scroll animate-delay-400 leading-tight">
          Cairo Rocha
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-on-scroll animate-delay-600">
          Transformando dados em insights estratégicos e soluções inovadoras
          para impulsionar a tomada de decisões baseadas em dados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-on-scroll animate-delay-800">
          <a href="#portfolio" className="btn-primary">
            Ver Portfólio
          </a>
          <a href="#contato" className="btn-secondary">
            Entre em Contato
          </a>
        </div>
      </div>
      
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
