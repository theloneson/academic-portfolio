import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, ExternalLink } from 'lucide-react';

const CV = () => {
  const handleDownload = () => {
    // In a real implementation, this would download the actual CV PDF
    const link = document.createElement('a');
    link.href = '/cv-placeholder.pdf';
    link.download = 'Dr_Academic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Curriculum Vitae
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Download my complete academic CV or view the embedded version below. 
            Updated regularly with latest publications and achievements.
          </p>
        </div>

        {/* Download Section */}
        <div className="mb-16 text-center">
          <Card className="inline-block p-8 shadow-academic hover:shadow-hover transition-shadow duration-300">
            <CardContent className="flex flex-col items-center space-y-4 p-0">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <FileText size={32} />
              </div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Academic CV
              </h2>
              <p className="font-body text-muted-foreground text-center max-w-md">
                Complete curriculum vitae including education, research experience, 
                publications, awards, and professional activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  onClick={handleDownload}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-academic hover:shadow-hover transition-all duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline"
                  className="hover:bg-secondary transition-colors duration-200"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CV Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-xl font-semibold text-foreground">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h3 className="font-body font-semibold text-foreground">Ph.D. in Computer Science</h3>
                <p className="text-muted-foreground">University of Excellence, 2020</p>
                <p className="text-sm text-muted-foreground">Thesis: "Advanced Machine Learning for Complex Systems"</p>
              </div>
              <div className="border-l-4 border-primary/30 pl-4">
                <h3 className="font-body font-semibold text-foreground">M.S. in Data Science</h3>
                <p className="text-muted-foreground">Institute of Technology, 2016</p>
                <p className="text-sm text-muted-foreground">Magna Cum Laude</p>
              </div>
              <div className="border-l-4 border-primary/30 pl-4">
                <h3 className="font-body font-semibold text-foreground">B.S. in Mathematics</h3>
                <p className="text-muted-foreground">State University, 2014</p>
                <p className="text-sm text-muted-foreground">Summa Cum Laude, Phi Beta Kappa</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-xl font-semibold text-foreground">
                Recent Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-accent/60 pl-4">
                <h3 className="font-body font-semibold text-foreground">Excellence in Research Award</h3>
                <p className="text-muted-foreground">Academic Society, 2024</p>
              </div>
              <div className="border-l-4 border-accent/60 pl-4">
                <h3 className="font-body font-semibold text-foreground">Best Paper Award</h3>
                <p className="text-muted-foreground">International Conference, 2023</p>
              </div>
              <div className="border-l-4 border-accent/60 pl-4">
                <h3 className="font-body font-semibold text-foreground">Young Researcher Grant</h3>
                <p className="text-muted-foreground">Research Foundation, 2022</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Experience */}
        <Card className="shadow-academic mb-16">
          <CardHeader>
            <CardTitle className="font-heading text-2xl font-semibold text-foreground">
              Professional Experience
            </CardTitle>
            <CardDescription className="font-body text-muted-foreground">
              Key academic and research positions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-primary/40 pl-6 py-2">
              <h3 className="font-body font-semibold text-foreground text-lg">Assistant Professor</h3>
              <p className="text-primary font-medium">Department of Computer Science, Research University</p>
              <p className="text-muted-foreground">2021 - Present</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Leading research in computational biology and machine learning. Teaching graduate and 
                undergraduate courses in data science and algorithms. Supervising Ph.D. and M.S. students.
              </p>
            </div>
            <div className="border-l-4 border-primary/40 pl-6 py-2">
              <h3 className="font-body font-semibold text-foreground text-lg">Postdoctoral Researcher</h3>
              <p className="text-primary font-medium">Institute for Advanced Study</p>
              <p className="text-muted-foreground">2020 - 2021</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Conducted interdisciplinary research at the intersection of computer science and biology. 
                Collaborated with leading researchers on high-impact projects.
              </p>
            </div>
            <div className="border-l-4 border-primary/40 pl-6 py-2">
              <h3 className="font-body font-semibold text-foreground text-lg">Research Assistant</h3>
              <p className="text-primary font-medium">Machine Learning Lab, University of Excellence</p>
              <p className="text-muted-foreground">2016 - 2020</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Developed novel algorithms for large-scale data analysis. Published research in top-tier 
                conferences and journals. Collaborated on industry partnerships.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Embedded PDF Viewer Placeholder */}
        <Card className="shadow-academic animate-slide-up">
          <CardHeader>
            <CardTitle className="font-heading text-xl font-semibold text-foreground">
              CV Preview
            </CardTitle>
            <CardDescription className="font-body text-muted-foreground">
              Embedded PDF viewer (placeholder)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <FileText size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="font-body text-muted-foreground">
                  PDF viewer would be embedded here
                </p>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Click "Download PDF" above to access the full CV
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CV;