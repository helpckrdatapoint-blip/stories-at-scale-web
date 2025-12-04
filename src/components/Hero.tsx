"use client";

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
    <section className="min-h-screen flex flex-col relative bg-[#0a0a0a] overflow-hidden pt-24 md:pt-32">
      
      {/* Background Gradients/Noise */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 mb-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated Pill Badge */}
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 px-3 py-1 text-xs font-medium mb-6 hover:bg-yellow-500/20 transition-colors backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span>Instagram Reels • Dhasha Media</span>
          </button>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white px-2 mb-6 tracking-tight">
            Viral reels. <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Real results.</span>
          </h1>

          {/* Subheading with FlipWords */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 mb-4 leading-relaxed">
            Dhasha Media crafts <span className="text-white font-medium">reels</span> that <FlipWords words={words} className="text-yellow-500 font-semibold" /> your reach.
          </p>
          
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4 mb-8">
            Expert Instagram Reels production and strategy to boost your brand visibility and engagement.
          </p>

          {/* --- UPDATED BUTTONS (Sharp Edged / Brutalist) --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10 px-4">
            
            {/* Primary Button */}
            <Button 
              size="lg" 
              onClick={() => scrollToSection("services")} 
              className="group relative h-12 w-full sm:w-auto overflow-hidden rounded-none bg-yellow-500 px-8 text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)]"
            >
              <span className="relative z-10 flex items-center font-bold">
                Explore Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Button Glare Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0"></div>
            </Button>
            
            {/* Secondary Button */}
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection("contact")} 
              className="group h-12 w-full sm:w-auto rounded-none border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all hover:border-yellow-500 hover:text-yellow-500"
            >
              <span className="font-bold">Get in touch</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Circular Gallery Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] mb-4">
        {/* Gradient Mask to blend gallery into background at the bottom */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
        
        <CircularGallery 
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.05}
          scrollSpeed={2}
        />
      </div>
    </section>
  );
};

export default Hero;
