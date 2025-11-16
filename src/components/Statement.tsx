import React from 'react';

const Statement = () => {
  const features = [
    {
      title: "Instant Delivery & Outputs",
      description: "Reels are shot, edited, and delivered on-site - before the event ends.",
    },
    {
      title: "Raw Footage Included",
      description: "Full transparency - clients receive both final edits and original raw files.",
    },
    {
      title: "Skilled & Certified Creators",
      description: "Every Reel Maker passes 4-6 quality checks before going live.",
    },
    {
      title: "Up to 2 Revisions Per Reel",
      description: "Flexible and collaborative - we offer multiple edits to ensure client satisfaction.",
    },
    {
      title: "Affordable, Transparent Pricing",
      description: "Reels starting at just ₹1999 - no surprises, no extra fees.",
    },
    {
      title: "Secure Cloud Storage",
      description: "All content is safely stored and backed up on encrypted cloud servers.",
    }
  ];

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
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-span-1 rounded-2xl border relative overflow-hidden bg-card border-border
                  transition-all duration-300 ease-in-out flex flex-col
                  hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="p-8 flex-grow flex flex-col justify-between">
                  {/* Top Section with Number */}
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-5xl font-bold transition-colors duration-300 ease-in-out text-foreground/90">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bottom Section with Content */}
                  <div>
                    <h3 className="text-left text-balance text-2xl font-bold tracking-tight mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-left text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
