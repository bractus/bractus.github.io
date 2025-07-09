
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Cairo Rocha</h1>
            <p className="text-sm text-gray-600">Data Engineer</p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('tecnologias')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Tecnologias
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('tecnologias')}
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Tecnologias
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
