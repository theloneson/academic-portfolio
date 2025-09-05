import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Genomic Data Analysis Platform',
      description: 'A comprehensive web-based platform for analyzing large-scale genomic datasets using machine learning algorithms. Features interactive visualizations and real-time processing capabilities.',
      image: project1,
      technologies: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
      status: 'Active',
      github: '#',
      demo: '#',
      paper: '#'
    },
    {
      title: 'Neural Network Optimization Framework',
      description: 'An open-source framework for optimizing neural network architectures using evolutionary algorithms and automated hyperparameter tuning.',
      image: project2,
      technologies: ['PyTorch', 'CUDA', 'Docker', 'FastAPI'],
      status: 'Completed',
      github: '#',
      demo: '#',
      paper: '#'
    },
    {
      title: 'Social Network Analysis Tool',
      description: 'Advanced tools for analyzing complex social networks, including community detection, influence propagation modeling, and temporal network analysis.',
      image: project3,
      technologies: ['NetworkX', 'D3.js', 'MongoDB', 'Flask'],
      status: 'In Development',
      github: '#',
      demo: '#',
      paper: '#'
    },
    {
      title: 'Digital Humanities Text Mining',
      description: 'Natural language processing pipeline for analyzing historical texts and manuscripts, featuring named entity recognition and sentiment analysis.',
      image: project1,
      technologies: ['spaCy', 'NLTK', 'Elasticsearch', 'Vue.js'],
      status: 'Active',
      github: '#',
      demo: '#',
      paper: '#'
    },
    {
      title: 'Computational Biology Simulator',
      description: 'High-performance simulation environment for modeling biological processes at the cellular and molecular level using parallel computing.',
      image: project2,
      technologies: ['C++', 'OpenMP', 'Python', 'Jupyter'],
      status: 'Completed',
      github: '#',
      demo: '#',
      paper: '#'
    },
    {
      title: 'AI Ethics Assessment Framework',
      description: 'A comprehensive framework for evaluating ethical considerations in AI systems, including bias detection and fairness metrics.',
      image: project3,
      technologies: ['Scikit-learn', 'Pandas', 'Streamlit', 'AWS'],
      status: 'In Development',
      github: '#',
      demo: '#',
      paper: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Research Projects
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my current and completed research projects spanning computational biology, 
            machine learning, and digital humanities. Each project represents innovative 
            approaches to complex academic challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] bg-gradient-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground transition-colors duration-200"
                  >
                    <Play size={14} className="mr-1" />
                    Learn More
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-secondary transition-colors duration-200"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Paper
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-20 bg-card rounded-lg p-8 shadow-academic animate-slide-up">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-2">
                {projects.length}
              </div>
              <div className="text-muted-foreground font-body">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-2">
                {projects.filter(p => p.status === 'Active').length}
              </div>
              <div className="text-muted-foreground font-body">Active</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-muted-foreground font-body">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-2">
                {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
              </div>
              <div className="text-muted-foreground font-body">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;