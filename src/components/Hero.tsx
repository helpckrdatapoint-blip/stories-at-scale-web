import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const words = ["builds,", "designs,", "creates,", "explores,"];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col relative bg-background">
      {/* Let's Chat Button */}
      <div className="absolute top-8 right-8 z-10">
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full"
        >
          LET'S CHAT
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] text-foreground">
            A collective<br />
            that <FlipWords words={words} className="text-foreground" /><br />
            and explores.
          </h1>
        </div>

        {/* Video/Media Element */}
        <div className="hidden lg:block absolute right-24 top-1/2 transform -translate-y-1/2">
          <div className="w-80 h-48 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-80 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
            </div>
          </div>
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
