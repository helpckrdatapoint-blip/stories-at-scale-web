import { FlipWords } from "@/components/ui/flip-words";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Hero = () => {
  const words = ["scale,", "transform,", "elevate,", "amplify,"];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col relative bg-background">
      {/* Tooltip Navigation */}
      <div className="absolute top-8 right-8 z-10">
        <TooltipProvider>
          <div className="flex space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>WORK</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>ABOUT</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>CONTACT</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl text-left">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.85] text-foreground">
            <span className="block">
              <span className="text-blue-600">Stories</span> that
            </span>
            <span className="block">
              <FlipWords words={words} className="text-blue-600" /> your
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
