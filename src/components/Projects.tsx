
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Pipeline de Dados E-commerce",
      description: "Sistema completo de ETL para processamento de dados de vendas em tempo real, com dashboards interativos e alertas automáticos.",
      technologies: ["Apache Spark", "Kafka", "AWS", "Python", "Tableau"],
      category: "Big Data",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    },
    {
      title: "Data Lake Corporativo",
      description: "Arquitetura de data lake na nuvem para centralizar dados de múltiplas fontes, com governança e qualidade de dados.",
      technologies: ["AWS S3", "Glue", "Athena", "Lambda", "CloudFormation"],
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    },
    {
      title: "Analytics em Tempo Real",
      description: "Plataforma de analytics para monitoramento de métricas de negócio em tempo real com ML para detecção de anomalias.",
      technologies: ["Kafka", "Elasticsearch", "Kibana", "Python", "Docker"],
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    },
    {
      title: "Data Warehouse Moderno",
      description: "Implementação de data warehouse com arquitetura medallion, otimizado para consultas analíticas complexas.",
      technologies: ["Snowflake", "DBT", "Airflow", "SQL", "Power BI"],
      category: "Data Engineering",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
    },
    {
      title: "MLOps Pipeline",
      description: "Pipeline automatizado para deploy e monitoramento de modelos de machine learning em produção.",
      technologies: ["MLflow", "Kubernetes", "Docker", "Python", "Grafana"],
      category: "MLOps",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
    },
    {
      title: "API de Dados Geográficos",
      description: "API RESTful para processamento e análise de dados geoespaciais com alta performance e escalabilidade.",
      technologies: ["PostGIS", "FastAPI", "Redis", "Docker", "AWS"],
      category: "API",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seleção de projetos que demonstram experiência em diferentes aspectos da engenharia de dados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};
