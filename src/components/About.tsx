
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profissional dedicado com paixão por dados e tecnologia, 
            transformando complexidade em simplicidade através de soluções inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Minha Jornada
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com mais de 5 anos de experiência em engenharia de dados, 
              especializo-me em criar arquiteturas robustas e escaláveis 
              que suportam decisões baseadas em dados.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Minha expertise abrange desde a coleta e processamento de dados 
              até a implementação de pipelines automatizados que garantem 
              qualidade e confiabilidade dos dados.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Acredito que os dados são o novo petróleo da era digital, 
              e meu objetivo é extrair o máximo valor deles para impulsionar 
              o crescimento dos negócios.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Certificações</h4>
                <p className="text-sm text-gray-600">AWS, GCP, Azure</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Projetos</h4>
                <p className="text-sm text-gray-600">50+ Implementados</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Experiência</h4>
                <p className="text-sm text-gray-600">5+ Anos</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Precisão</h4>
                <p className="text-sm text-gray-600">99.9% Uptime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
