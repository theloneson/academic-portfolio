import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Database, Microscope, Globe, Cpu } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Developing novel machine learning algorithms for complex problem-solving and pattern recognition in large-scale datasets.',
      color: 'text-academic-blue'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Applied statistical methods and computational techniques for extracting insights from heterogeneous data sources.',
      color: 'text-academic-sage'
    },
    {
      icon: Microscope,
      title: 'Computational Biology',
      description: 'Interdisciplinary research combining computational methods with biological systems to understand complex life processes.',
      color: 'text-academic-gold'
    },
    {
      icon: Globe,
      title: 'Network Analysis',
      description: 'Studying complex networks and their properties across social, biological, and technological domains.',
      color: 'text-primary'
    },
    {
      icon: Cpu,
      title: 'High-Performance Computing',
      description: 'Optimizing computational algorithms for parallel processing and distributed computing environments.',
      color: 'text-accent-foreground'
    },
    {
      icon: BookOpen,
      title: 'Digital Humanities',
      description: 'Applying computational methods to humanities research, including text analysis and cultural data mining.',
      color: 'text-muted-foreground'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Research Interests
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My research spans multiple interdisciplinary fields, focusing on computational approaches 
            to complex problems and the development of innovative methodologies for data-driven discovery.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-gradient-card border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-secondary group-hover:bg-accent-hover transition-colors duration-300">
                      <IconComponent 
                        size={32} 
                        className={`${area.color} group-hover:scale-110 transition-transform duration-300`} 
                      />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl font-semibold text-foreground">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-body text-muted-foreground leading-relaxed text-center">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Focus */}
        <div className="mt-20 text-center bg-card rounded-lg p-8 shadow-academic animate-slide-up">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Current Research Focus
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Currently investigating the intersection of artificial intelligence and computational biology, 
            with particular emphasis on developing scalable algorithms for genomic data analysis and 
            personalized medicine applications. This work involves collaboration with leading research 
            institutions and industry partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;