import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Statement = () => {
  const features = [
    {
      title: "Strategic Storytelling",
      description: "Crafting narratives that resonate with your audience and drive meaningful engagement across all touchpoints."
    },
    {
      title: "Content Excellence",
      description: "Creating compelling content that captures attention, builds trust, and converts prospects into loyal customers."
    },
    {
      title: "Brand Innovation",
      description: "Developing unique brand experiences that set you apart from competitors and create lasting impressions."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Every brand has a story.
            <span className="text-primary block">We make it unforgettable.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;