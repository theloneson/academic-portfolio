import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto animate-fade-in">
          <div className="mb-8">
            <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
            <p className="font-body text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground">
              <Link to="/" className="flex items-center gap-2">
                <Home size={18} />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" onClick={() => window.history.back()}>
              <button className="flex items-center gap-2 hover:bg-secondary">
                <ArrowLeft size={18} />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
