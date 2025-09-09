import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to scale
            <span className="text-primary block">your story?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your story deserves to be heard.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;