const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            Last updated: {currentDate}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2">
            © 2024 Dr. Academic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;