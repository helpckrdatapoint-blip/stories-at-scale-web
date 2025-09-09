const Intro = () => {
  const stats = [
    { number: "150+", label: "Brands Transformed" },
    { number: "5M+", label: "Stories Told" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "12", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                About Stories at Scale
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a premium content agency that believes in the transformative power of storytelling. 
                  Founded on the principle that every brand has a unique narrative worth telling, we specialize 
                  in crafting stories that not only capture attention but create lasting connections.
                </p>
                <p>
                  Our approach combines strategic thinking with creative excellence, ensuring that every piece 
                  of content we create serves both your business objectives and your audience's needs.
                </p>
                <p>
                  At Stories at Scale, we don't just create content—we build narratives that grow with your 
                  business, evolve with your audience, and stand the test of time.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;