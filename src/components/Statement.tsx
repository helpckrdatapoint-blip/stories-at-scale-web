import React from 'react';

const Statement = () => {
  const features = [
    {
      title: "Strategic Storytelling",
      description: "Narratives that resonate and drive engagement across every touchpoint.",
    },
    {
      title: "Content Excellence",
      description: "Compelling content that captures attention, builds trust, and converts.",
    },
    {
      title: "Creative Innovation",
      description: "Distinct, memorable experiences that set you apart and stick.",
    }
  ];

  const middleIndex = Math.floor(features.length / 2);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header section updated for left alignment */}
          <div className="max-w-4xl mb-16">
            <p className="text-blue-600 text-base font-semibold mb-3">What we stand for</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Make stories that stick.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl">
              Clear strategy, strong creative, and consistent execution — that’s how stories scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {features.map((feature, index) => {
              const isMiddleCard = index === middleIndex;
              return (
                <div
                  key={index}
                  className={`
                    col-span-1 rounded-2xl border relative overflow-hidden
                    transition-all duration-300 ease-in-out flex flex-col
                    hover:shadow-2xl hover:-translate-y-2 group
                    ${isMiddleCard ? 'bg-primary border-transparent text-primary-foreground' : 'bg-card border-border'}
                  `}
                >
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    {/* Top Section with Number */}
                    <div className="flex justify-between items-start mb-12">
                      <span className={`text-5xl font-bold transition-colors duration-300 ease-in-out ${isMiddleCard ? 'text-primary-foreground/80' : 'text-foreground/90'}`}>
                        0{index + 1}
                      </span>
                    </div>

                    {/* Bottom Section with Content */}
                    <div>
                      <h3 className={`text-left text-balance text-2xl font-bold tracking-tight mb-3 ${isMiddleCard ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-left text-base leading-relaxed ${isMiddleCard ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
