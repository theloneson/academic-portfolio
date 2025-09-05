import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ExternalLink, FileText } from 'lucide-react';

const Publications = () => {
  const [openYear, setOpenYear] = useState<string>('2024');

  const publicationsByYear = {
    '2024': [
      {
        title: 'Advanced Machine Learning Approaches for Genomic Data Analysis',
        authors: 'Academic, D., Collaborator, A., & Researcher, B.',
        venue: 'Journal of Computational Biology',
        type: 'Journal Article',
        doi: '10.1000/journal.2024.001'
      },
      {
        title: 'Scalable Network Analysis Methods for Social Media Data',
        authors: 'Academic, D., & Network, S.',
        venue: 'Conference on Social Computing',
        type: 'Conference Paper',
        doi: '10.1000/conference.2024.002'
      },
      {
        title: 'Novel Algorithms for High-Dimensional Data Visualization',
        authors: 'Academic, D., Visual, I., & Data, M.',
        venue: 'IEEE Transactions on Visualization',
        type: 'Journal Article',
        doi: '10.1000/ieee.2024.003'
      }
    ],
    '2023': [
      {
        title: 'Deep Learning Applications in Personalized Medicine',
        authors: 'Academic, D., Medical, P., & Health, D.',
        venue: 'Nature Machine Intelligence',
        type: 'Journal Article',
        doi: '10.1000/nature.2023.001'
      },
      {
        title: 'Computational Methods for Protein Structure Prediction',
        authors: 'Academic, D., & Protein, S.',
        venue: 'Bioinformatics Conference',
        type: 'Conference Paper',
        doi: '10.1000/bioinfo.2023.002'
      },
      {
        title: 'Ethical Considerations in AI-Driven Research',
        authors: 'Academic, D., Ethics, A., & Responsible, R.',
        venue: 'AI & Society',
        type: 'Journal Article',
        doi: '10.1000/aisociety.2023.003'
      }
    ],
    '2022': [
      {
        title: 'Distributed Computing for Large-Scale Data Analysis',
        authors: 'Academic, D., Distributed, C., & Scale, L.',
        venue: 'ACM Computing Surveys',
        type: 'Survey Article',
        doi: '10.1000/acm.2022.001'
      },
      {
        title: 'Machine Learning in Digital Humanities: A Comprehensive Review',
        authors: 'Academic, D., Humanities, D., & Culture, C.',
        venue: 'Digital Scholarship in the Humanities',
        type: 'Review Article',
        doi: '10.1000/dsh.2022.002'
      }
    ],
    '2021': [
      {
        title: 'Foundations of Modern Data Science: Theory and Applications',
        authors: 'Academic, D., Theory, M., & Application, P.',
        venue: 'MIT Press',
        type: 'Book Chapter',
        doi: '10.1000/mit.2021.001'
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Journal Article':
        return 'bg-academic-blue-light text-academic-blue';
      case 'Conference Paper':
        return 'bg-academic-sage-light text-academic-sage';
      case 'Review Article':
        return 'bg-academic-gold-light text-academic-gold';
      case 'Survey Article':
        return 'bg-primary/10 text-primary';
      case 'Book Chapter':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Publications
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive list of my research publications, including journal articles, 
            conference papers, and collaborative works across multiple disciplines.
          </p>
        </div>

        {/* Publications by Year */}
        <div className="space-y-6">
          {Object.entries(publicationsByYear)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, publications], yearIndex) => (
              <Card key={year} className="shadow-card hover:shadow-hover transition-shadow duration-300">
                <Collapsible 
                  open={openYear === year} 
                  onOpenChange={() => setOpenYear(openYear === year ? '' : year)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-secondary/50 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-heading text-2xl font-semibold text-foreground">
                          {year} ({publications.length} publication{publications.length !== 1 ? 's' : ''})
                        </CardTitle>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                            openYear === year ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        {publications.map((pub, index) => (
                          <div 
                            key={index}
                            className="border-l-4 border-primary/20 pl-6 py-4 hover:border-primary/40 transition-colors duration-200"
                            style={{ animationDelay: `${(yearIndex * 3 + index) * 100}ms` }}
                          >
                            <div className="mb-2 flex items-start justify-between gap-4">
                              <h3 className="font-heading text-lg font-medium text-foreground leading-tight">
                                {pub.title}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeColor(pub.type)}`}>
                                {pub.type}
                              </span>
                            </div>
                            
                            <p className="font-body text-muted-foreground mb-2">
                              {pub.authors}
                            </p>
                            
                            <p className="font-body text-sm text-muted-foreground italic mb-4">
                              {pub.venue}, {year}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="h-8 text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                              >
                                <FileText size={14} className="mr-1" />
                                View PDF
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="h-8 text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                              >
                                <ExternalLink size={14} className="mr-1" />
                                DOI: {pub.doi}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-card rounded-lg p-6 shadow-academic animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-heading font-semibold text-primary mb-1">
                {Object.values(publicationsByYear).flat().length}
              </div>
              <div className="text-sm font-body text-muted-foreground">Total Publications</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-semibold text-primary mb-1">
                {Object.values(publicationsByYear).flat().filter(p => p.type === 'Journal Article').length}
              </div>
              <div className="text-sm font-body text-muted-foreground">Journal Articles</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-semibold text-primary mb-1">
                {Object.keys(publicationsByYear).length}
              </div>
              <div className="text-sm font-body text-muted-foreground">Years Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;