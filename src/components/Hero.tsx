import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const words = ["scale,", "elevate,", "amplify,"];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col relative bg-background">
      {/* Get Started Button */}
      <div className="absolute top-8 right-8 z-10">
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 group flex items-center gap-2"
        >
          <span className="text-sm font-medium">Get Started</span>
          <ArrowRight 
            size={16} 
            className="transform group-hover:translate-x-1 transition-transform duration-300" 
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl text-left">
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
        </div>
      </div>

      
      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <nav className="bg-foreground text-background px-8 py-4 rounded-full">
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
