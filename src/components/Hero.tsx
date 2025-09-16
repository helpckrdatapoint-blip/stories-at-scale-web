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

    </section>
  );
};

export default Hero;
