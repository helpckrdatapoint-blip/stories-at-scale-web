import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in">
            Stories that scale your <span className="text-blue-600">Brand</span> 
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We craft compelling narratives that transform brands into unforgettable experiences, 
            driving engagement and growth through strategic storytelling.
          </p>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection('services')} 
              size="lg"
              className="rounded-full text-lg px-8 py-6"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
