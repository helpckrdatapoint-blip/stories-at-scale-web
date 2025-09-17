import { WobbleCard } from "@/components/ui/wobble-card";

const Statement = () => {
  const features = [
    {
      title: "Strategic Storytelling",
      description: "Narratives that resonate and drive engagement across every touchpoint."
    },
    {
      title: "Content Excellence", 
      description: "Compelling content that captures attention, builds trust, and converts."
    },
    {
      title: "Creative Innovation",
      description: "Distinct, memorable experiences that set you apart and stick."
    }
  ];

  // Calculate the middle index to apply special styling
  const middleIndex = Math.floor(features.length / 2);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-10">
            <p className="text-blue-700 text-sm font-medium mb-2">What we stand for</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Make stories that stick.
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">
              Clear strategy, strong creative, and consistent execution — that’s how stories scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {features.map((feature, index) => {
              const isMiddleCard = index === middleIndex;
              return (
                <WobbleCard
                  key={index}
                  containerClassName={`col-span-1 min-h-[260px] border ${isMiddleCard ? 'bg-primary border-transparent' : 'bg-card border-border'}`}
                  className=""
                >
                  <div className="max-w-full">
                    <h3 className={`text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] mb-2 ${isMiddleCard ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-left text-base md:text-lg ${isMiddleCard ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
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

