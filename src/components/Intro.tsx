const Intro = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
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
              of content we create serves both your business objectives and your audience's needs. From 
              global brands to emerging startups, we help organizations find their voice and amplify it 
              across every channel.
            </p>
            <p>
              At Stories at Scale, we don't just create content—we build narratives that grow with your 
              business, evolve with your audience, and stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;