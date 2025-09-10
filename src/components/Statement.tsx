import { WobbleCard } from "@/components/ui/wobble-card";

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

  // Calculate the middle index to apply special styling
  const middleIndex = Math.floor(features.length / 2);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Every brand has a story.
              <span className="text-primary block">We make it unforgettable.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {features.map((feature, index) => {
              const isMiddleCard = index === middleIndex;
              return (
                <WobbleCard
                  key={index}
                  containerClassName={`col-span-1 min-h-[280px] ${isMiddleCard ? 'bg-primary' : 'bg-card'}`}
                  className=""
                >
                  <div className="max-w-full">
                    <h3 className={`text-left text-balance text-lg md:text-xl font-semibold tracking-[-0.015em] mb-4 ${isMiddleCard ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-left text-sm/6 ${isMiddleCard ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {feature.description}
                    </p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
