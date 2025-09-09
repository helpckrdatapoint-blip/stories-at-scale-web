import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-background/95 backdrop-blur-md border border-border rounded-full shadow-lg">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">
            Stories at Scale
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <Button variant="default" className="hidden md:block">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;