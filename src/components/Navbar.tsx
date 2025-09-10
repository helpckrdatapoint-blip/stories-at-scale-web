import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center justify-between w-full min-w-[600px]">
        <div className="font-bold text-xl text-foreground">
          Stories at Scale
        </div>
        
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="rounded-full"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;