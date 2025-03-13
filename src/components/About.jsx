
import React, { useEffect, useRef } from 'react';
import { Database, Server, LineChart, Brain } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
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

  const skills = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: 'Modelagem de Dados',
      description: 'Expertise em projetar estruturas de dados eficientes para análise e processamento.'
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: 'Big Data',
      description: 'Experiência com ferramentas e técnicas para processar grandes volumes de dados.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: 'Análise Avançada',
      description: 'Capacidade de extrair insights valiosos a partir de dados complexos.'
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: 'Machine Learning',
      description: 'Implementação de modelos preditivos para resolver problemas de negócio.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-accent/30" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title opacity-0 animate-on-scroll">Sobre Mim</h2>
          <p className="section-subtitle opacity-0 animate-on-scroll">
            Conheça um pouco mais sobre minha trajetória e expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-medium mb-4">Minha Jornada</h3>
            <p className="text-muted-foreground mb-6">
              Sou um Engenheiro de Dados apaixonado por transformar informações em soluções práticas. 
              Com experiência no desenvolvimento de pipelines de dados, implementação de soluções de 
              armazenamento e criação de insights através de análises avançadas.
            </p>
            <p className="text-muted-foreground">
              Meu objetivo é ajudar organizações a tomarem decisões melhores baseadas em 
              dados, implementando arquiteturas modernas e escaláveis que transformam dados brutos 
              em valor de negócio.
            </p>
          </div>
          
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-medium mb-4">Experiência & Formação</h3>
            <ul className="space-y-4">
              <li className="border-l-2 border-primary pl-4 pb-4">
                <span className="text-sm text-muted-foreground">2020 - Presente</span>
                <h4 className="text-lg font-medium">Engenheiro de Dados Sênior</h4>
                <p className="text-muted-foreground">Liderando projetos de transformação digital e implementando soluções de dados.</p>
              </li>
              <li className="border-l-2 border-muted pl-4 pb-4">
                <span className="text-sm text-muted-foreground">2018 - 2020</span>
                <h4 className="text-lg font-medium">Analista de Business Intelligence</h4>
                <p className="text-muted-foreground">Desenvolvimento de dashboards e análises para tomada de decisão.</p>
              </li>
              <li className="border-l-2 border-muted pl-4">
                <span className="text-sm text-muted-foreground">2016 - 2018</span>
                <h4 className="text-lg font-medium">Mestrado em Ciência de Dados</h4>
                <p className="text-muted-foreground">Especialização em técnicas avançadas de análise e processamento de dados.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-panel p-6 opacity-0 animate-on-scroll"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-4 p-2 rounded-lg inline-block bg-accent">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
