import { FlipWords } from "@/components/ui/flip-words";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Award, Zap, TrendingUp, Users, Globe } from "lucide-react";

const Hero = () => {
  const words = ["scale,", "elevate,", "amplify,"];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col relative bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating Stickers/Badges */}
      <div className="absolute top-20 right-8 animate-float">
        <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 text-sm font-medium shadow-lg">
          <Star className="w-4 h-4 mr-2" />
          #1 Digital Agency
        </Badge>
      </div>

      <div className="absolute top-1/3 right-16 animate-float delay-500">
        <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm border border-muted/20 px-4 py-2 text-sm font-medium shadow-lg">
          <Award className="w-4 h-4 mr-2 text-accent" />
          Award Winner 2024
        </Badge>
      </div>

      <div className="absolute top-1/2 left-8 animate-float delay-1000">
        <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-2 text-sm font-medium shadow-lg">
          <Users className="w-4 h-4 mr-2" />
          500+ Happy Clients
        </Badge>
      </div>

      <div className="absolute bottom-1/3 right-8 animate-float delay-1500">
        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/30 px-4 py-2 text-sm font-medium shadow-lg">
          <TrendingUp className="w-4 h-4 mr-2 text-primary" />
          98% Success Rate
        </Badge>
      </div>

      <div className="absolute top-2/3 left-16 animate-float delay-2000">
        <Badge className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-4 py-2 text-sm font-medium shadow-lg">
          <Globe className="w-4 h-4 mr-2" />
          Global Reach
        </Badge>
      </div>

      <div className="absolute top-40 left-1/3 animate-float delay-700">
        <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm border border-muted/20 px-4 py-2 text-sm font-medium shadow-lg">
          <Zap className="w-4 h-4 mr-2 text-yellow-500" />
          Lightning Fast
        </Badge>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-start px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl text-left">
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-primary" />
              Trusted by Fortune 500 Companies
            </Badge>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.85] text-foreground">
            <span className="block">
              <span className="text-blue-600">Stories</span> that
            </span>
            <span className="block">
              <FlipWords words={words} className="text-blue-600 text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]" /> your
            </span>
            <span className="block">
              <span className="text-blue-600">brand</span> and explores.
            </span>
          </h1>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-muted/30 px-3 py-1 text-xs">
              Digital Marketing
            </Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-muted/30 px-3 py-1 text-xs">
              Brand Strategy
            </Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-muted/30 px-3 py-1 text-xs">
              Web Design
            </Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-muted/30 px-3 py-1 text-xs">
              Content Creation
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <nav className="bg-foreground/90 backdrop-blur-sm text-background px-8 py-4 rounded-full border border-muted/20 shadow-lg">
          <div className="flex space-x-8 text-sm font-medium">
            <button className="hover:opacity-70 transition-opacity">HOME</button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:opacity-70 transition-opacity"
            >
              WORK
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:opacity-70 transition-opacity"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:opacity-70 transition-opacity"
            >
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
