const Services = () => {
  const services = [
    {
      title: "Brand Storytelling",
      description: "Crafting compelling narratives that define your brand's unique voice and connect with your audience on an emotional level."
    },
    {
      title: "Content Strategy",
      description: "Developing comprehensive content frameworks that align with business objectives and drive meaningful engagement."
    },
    {
      title: "Digital Campaigns",
      description: "Creating integrated digital experiences that amplify your story across all platforms and touchpoints."
    },
    {
      title: "Creative Direction",
      description: "Guiding the visual and conceptual execution of your brand story with precision and artistic excellence."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            What We Do
          </h2>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-b-0">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;