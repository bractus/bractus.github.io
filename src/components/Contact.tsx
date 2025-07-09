
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos desafiadores. 
            Entre em contato para discutirmos como posso ajudar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-300 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:cairo.rocha@email.com" className="text-blue-300 hover:text-white transition-colors">
                    cairo.rocha@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-300 mr-4" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a href="tel:+5511999999999" className="text-blue-300 hover:text-white transition-colors">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-300 mr-4" />
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-blue-300">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Redes Sociais & Links</h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <a href="https://linkedin.com/in/cairo-rocha" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <a href="https://github.com/cairo-rocha" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Envie uma Mensagem</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 Cairo Rocha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};
