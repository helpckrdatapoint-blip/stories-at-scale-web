import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CircularGallery from "@/components/ui/CircularGallery";

const Hero = () => {
  const words = ["scale,", "elevate,", "amplify,", "transform,", "boost,"];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col relative bg-background overflow-hidden pt-24 md:pt-32">
      {/* Decorative background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-blue-200/50 to-transparent" />
        <div className="absolute inset-x-0 -bottom-24 h-64 bg-gradient-to-t from-blue-100/40 to-transparent" />

        {/* Accent circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/70 ring-2 ring-blue-600/40" />
        <div className="absolute top-1/3 -left-36 w-80 h-80 rounded-full bg-blue-600/70 ring-2 ring-blue-700/40" />
        <div className="absolute -bottom-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-blue-400/50 ring-2 ring-blue-500/30" />

        {/* Semi-circles */}
        <div className="absolute -top-10 right-6 w-80 h-40 rounded-b-full bg-blue-500/70 ring-2 ring-blue-600/40" />
        <div className="absolute top-1/4 -left-10 w-40 h-80 rounded-r-full bg-blue-600/70 ring-2 ring-blue-700/40" />

        {/* Soft ring behind heading */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full ring-1 ring-blue-300/40" />
      </div>
      
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 mb-8 md:mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-700 px-2.5 py-1 text-xs font-medium mb-3 md:mb-4 hover:bg-blue-600/15 hover:border-blue-600/50 transition-colors"
            aria-label="Instagram Reels with Dhasha Media"
          >
            <span>Instagram Reels • Dhasha Media</span>
          </button>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground px-2">
            <span className="block mb-2">
              Dhasha Media crafts <span className="relative text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[4px] md:after:h-[5px] after:w-full after:bg-blue-200/60 after:rounded-full">reels</span> that <FlipWords words={words} className="text-blue-600 text-3xl sm:text-4xl md:text-4xl lg:text-5xl" /> your reach
            </span>
            <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-1">Viral reels. Real results.</span>
          </h1>
          <p className="mt-3 md:mt-5 text-muted-foreground text-sm sm:text-base md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Expert Instagram Reels production and strategy to boost your brand visibility and engagement.
          </p>
          <div className="mt-5 md:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 md:mb-12 px-4">
            <Button size="lg" onClick={() => scrollToSection("services")} className="w-full sm:w-auto">
              Explore services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto">Get in touch</Button>
          </div>
        </div>
      </div>

      {/* Circular Gallery Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] mb-8 md:mb-12">
        <CircularGallery 
          bend={3} 
          textColor="#64748b" 
          borderRadius={0.08} 
          scrollEase={0.05}
          scrollSpeed={2}
        />
      </div>
    </section>
  );
};

export default Hero;
