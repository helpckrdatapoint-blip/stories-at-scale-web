import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CircularGallery from "@/components/ui/CircularGallery";

const Hero = () => {
  const words = ["scale,", "elevate,", "amplify,"];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-background overflow-hidden">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full ring-1 ring-blue-300/40" />
      </div>
      
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-700 px-3 py-1 text-xs md:text-sm font-medium mb-4 hover:bg-blue-600/15 hover:border-blue-600/50 transition-colors"
            aria-label="Scale your story - contact us"
          >
            <span>Scale your story</span>
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-foreground">
            <span className="block">
              We craft <span className="relative text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[6px] after:w-full after:bg-blue-200/60 after:rounded-full">stories</span> that <FlipWords words={words} className="text-blue-600 text-4xl md:text-5xl lg:text-5xl" /> your reach
            </span>
            <span className="block">Launch faster. Convert better.</span>
          </h1>
          <p className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Strategy-led content and creative production designed to grow awareness, trust, and conversions.
          </p>
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 mb-12">
            <Button size="lg" onClick={() => scrollToSection("services")}>
              Explore services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>Get in touch</Button>
          </div>
        </div>
      </div>

      {/* Circular Gallery Section */}
      <div className="relative w-full h-[600px] mb-12">
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
