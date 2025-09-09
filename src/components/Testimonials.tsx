import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Stories at Scale transformed our brand narrative completely. Their strategic approach to storytelling helped us connect with our audience in ways we never thought possible.",
      author: "Sarah Chen",
      position: "Chief Marketing Officer",
      company: "TechFlow Dynamics"
    },
    {
      quote: "The team's ability to distill complex ideas into compelling narratives is unmatched. They don't just write content—they craft experiences that resonate.",
      author: "Marcus Rodriguez",
      position: "Founder & CEO",
      company: "InnovateLab"
    },
    {
      quote: "Working with Stories at Scale elevated our entire content strategy. Their attention to detail and understanding of our brand voice was exceptional.",
      author: "Emily Thompson",
      position: "Brand Director",
      company: "Sustainable Solutions Co."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            What Clients Say
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <cite className="text-lg font-semibold not-italic">
                          {testimonial.author}
                        </cite>
                        <p className="text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-border'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;