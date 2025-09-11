import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const FinalCTA = () => {
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "scale",
    },
    {
      text: "your",
    },
    {
      text: "story?",
      className: "text-primary dark:text-primary",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <p className="text-muted-foreground text-base mb-4">
              The road to success starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your story deserves to be heard.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;