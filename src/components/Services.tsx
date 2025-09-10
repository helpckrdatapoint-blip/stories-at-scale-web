import { WobbleCard } from "@/components/ui/wobble-card";

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-left">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Brand Storytelling at Scale
                </h2>
                <p className="mt-4 text-left text-base/6 text-white/80">
                  Crafting compelling narratives that define your brand's unique voice and connect with your audience on an emotional level across all platforms.
                </p>
              </div>
            </WobbleCard>
            
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-secondary">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Content Strategy
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-muted-foreground">
                Developing comprehensive content frameworks that align with business objectives and drive meaningful engagement.
              </p>
            </WobbleCard>
            
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-accent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Digital Campaigns & Creative Direction
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white/80">
                  Creating integrated digital experiences and guiding visual execution with precision and artistic excellence that amplifies your story.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;