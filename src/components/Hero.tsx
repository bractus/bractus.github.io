
import { Button } from "@/components/ui/button";
import { Database, Code, TrendingUp, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cairo Rocha
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Engenheiro de Dados
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Especialista em transformar dados brutos em insights valiosos. 
              Experiência em pipelines de dados, análise em tempo real e 
              arquiteturas de big data que impulsionam decisões estratégicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Ver Portfólio
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Big Data</p>
              </div>
              <div className="text-center">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">ETL/ELT</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Analytics</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in lg:animate-[fade-in_0.6s_ease-out]">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <img 
                  src="/lovable-uploads/8b1563fe-e1fa-4040-bf7f-967b7a4960d0.png" 
                  alt="Cairo Rocha"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Database className="h-10 w-10 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
