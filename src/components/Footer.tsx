const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Baskaran R. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
