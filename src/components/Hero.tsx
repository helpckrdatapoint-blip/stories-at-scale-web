import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Stories that
          <span className="text-primary block">Scale</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We craft compelling narratives that resonate across audiences, 
          building authentic connections at every touchpoint.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Story
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;