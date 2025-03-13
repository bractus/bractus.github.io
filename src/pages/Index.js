
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Adicionar classe de animação para elementos "in-view"
const Index = () => {
  useEffect(() => {
    // Adicionar classes de animação
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0');
    });

    // Configurar o observador de interseção
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
              // Adiciona a animação quando o elemento está visível
              if (entry.target.classList.contains('animate-on-scroll')) {
                entry.target.classList.add('animate-slideUp');
                entry.target.classList.remove('opacity-0');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar todos os elementos com a classe .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
