import { WobbleCard } from "@/components/ui/wobble-card";

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl">
            End-to-end execution from strategy to production. Designed to move quickly and deliver outcomes.
          </p>

          {/* Bento grid: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr] gap-4 w-full">
            {/* 1: Storytelling (dominant) */}
            <WobbleCard
              containerClassName="sm:col-span-2 lg:col-span-2 lg:row-span-2 h-full bg-primary min-h-[320px]"
              className=""
            >
              <div className="max-w-md">
                <h3 className="text-left text-balance text-2xl font-semibold tracking-[-0.015em] text-white">
                  Storytelling at Scale
                </h3>
                <p className="mt-4 text-left text-base md:text-lg text-white/90">
                  We shape clear, resonant narratives people remember — and act on. From launch messaging to ongoing series.
                </p>
              </div>
            </WobbleCard>

            {/* 2: Strategy */}
            <WobbleCard containerClassName="h-full bg-card border border-border">
              <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-foreground">
                Content Strategy
              </h3>
              <p className="mt-3 text-left text-base md:text-lg text-muted-foreground">
                Positioning, pillars, calendars, and distribution maps that keep you consistent and effective.
              </p>
            </WobbleCard>

            {/* 3: Campaigns */}
            <WobbleCard containerClassName="h-full bg-accent">
              <div className="max-w-sm">
                <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-white">
                  Digital Campaigns
                </h3>
                <p className="mt-3 text-left text-base md:text-lg text-white/90">
                  Cross-channel concepts that break through the noise and deliver measurable impact.
                </p>
              </div>
            </WobbleCard>

            {/* 4: Production */}
            <WobbleCard containerClassName="sm:col-span-2 lg:col-span-1 h-full bg-secondary">
              <div className="max-w-sm">
                <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-foreground">
                  Creative Production
                </h3>
                <p className="mt-3 text-left text-base md:text-lg text-muted-foreground">
                  Video, design, and copy with fast turnarounds and high polish.
                </p>
              </div>
            </WobbleCard>

            {/* 5: Performance Creative (blue) */}
            <WobbleCard containerClassName="h-full bg-primary">
              <div className="max-w-sm">
                <h3 className="text-left text-balance text-xl md:text-2xl font-semibold tracking-[-0.015em] text-white">
                  Performance Creative
                </h3>
                <p className="mt-3 text-left text-base md:text-lg text-white/90">
                  Test-and-learn assets optimized for CPC, CTR, and ROAS across paid channels.
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
