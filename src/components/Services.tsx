import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Brand Storytelling",
      description: "Crafting compelling narratives that define your brand's unique voice and connect with your audience on an emotional level.",
      icon: "✨"
    },
    {
      title: "Content Strategy",
      description: "Developing comprehensive content frameworks that align with business objectives and drive meaningful engagement.",
      icon: "📋"
    },
    {
      title: "Digital Campaigns",
      description: "Creating integrated digital experiences that amplify your story across all platforms and touchpoints.",
      icon: "🚀"
    },
    {
      title: "Creative Direction",
      description: "Guiding the visual and conceptual execution of your brand story with precision and artistic excellence.",
      icon: "🎨"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;