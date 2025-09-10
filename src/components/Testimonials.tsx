import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Stories at Scale transformed our brand narrative completely. Their strategic approach to content creation helped us connect with our audience on a deeper level and significantly increased our engagement rates.",
      name: "Sarah Mitchell",
      title: "CMO, TechVision"
    },
    {
      quote: "The team's creative direction and storytelling expertise elevated our campaigns beyond our expectations. They don't just create content – they craft experiences that resonate.",
      name: "David Chen",
      title: "Marketing Director, InnovateHub"
    },
    {
      quote: "Working with Stories at Scale was a game-changer for our digital presence. Their content strategy framework provided clarity and direction that we were missing.",
      name: "Emma Rodriguez",
      title: "Founder, CreativeSpace"
    },
    {
      quote: "The attention to detail and creative vision brought our brand story to life in ways we never imagined. Our customer engagement has never been stronger.",
      name: "Michael Torres",
      title: "CEO, NextGen Solutions"
    },
    {
      quote: "From strategy to execution, every touchpoint was crafted with precision. Stories at Scale doesn't just tell stories – they create movements.",
      name: "Jessica Park",
      title: "VP Marketing, FutureFlow"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-left">
            Client Stories
          </h2>
          
          <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;