
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Technologies = () => {
  const categories = [
    {
      title: "Linguagens de Programação",
      technologies: ["Python", "SQL", "Scala", "Java", "R", "JavaScript"]
    },
    {
      title: "Big Data & Analytics",
      technologies: ["Apache Spark", "Hadoop", "Kafka", "Elasticsearch", "Apache Airflow", "Databricks"]
    },
    {
      title: "Cloud Platforms",
      technologies: ["AWS", "Google Cloud Platform", "Azure", "Snowflake", "Redshift", "BigQuery"]
    },
    {
      title: "Bancos de Dados",
      technologies: ["PostgreSQL", "MongoDB", "Cassandra", "Redis", "DynamoDB", "MySQL"]
    },
    {
      title: "DevOps & Ferramentas",
      technologies: ["Docker", "Kubernetes", "Terraform", "Git", "Jenkins", "Monitoring"]
    },
    {
      title: "Visualização & BI",
      technologies: ["Tableau", "Power BI", "Looker", "Grafana", "Jupyter", "Apache Superset"]
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stack tecnológico moderno para soluções de dados robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
