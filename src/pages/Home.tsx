import { Button } from '@/components/ui/button';
import { FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileHero from '@/assets/ayanfe lol.jpg';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-hover border-4 border-background animate-float">
                <img
                  src={profileHero}
                  alt="Oluwanifemi Adekanye Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-4">
            Oluwanifemi Adekanye
          </h1>
          
          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Advancing knowledge through innovative research in Mechatronics and interdisciplinary collaboration
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-academic hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/cv" className="flex items-center gap-2">
                <FileText size={20} />
                View CV
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="text-3xl font-heading font-semibold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-body">Publications</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="text-3xl font-heading font-semibold text-primary mb-2">15+</div>
              <div className="text-muted-foreground font-body">Research Projects</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="text-3xl font-heading font-semibold text-primary mb-2">5+</div>
              <div className="text-muted-foreground font-body">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;