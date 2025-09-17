import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What kind of results can I expect?",
      answer: "Our clients typically see significant improvements in brand engagement, lead generation, and overall market presence. With a 98% project success rate, our focus is on delivering measurable ROI and transforming your digital narrative."
    },
    {
      question: "Who are your typical clients?",
      answer: "We work with a diverse range of clients, from rapidly growing startups to Fortune 500 companies across various industries. Our strategies are tailored to elevate brands of all sizes."
    },
    {
      question: "How does your process work?",
      answer: "Our process is collaborative and tailored to your needs. It begins with a deep dive into your brand, followed by strategy development, content creation, and performance analysis to ensure we meet your specific goals."
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured against key performance indicators (KPIs) established at the project's outset. These often include metrics like audience growth, conversion rates, and media impact, ensuring our work directly aligns with your business objectives."
    },
    {
      question: "How can we get started?",
      answer: "Getting started is simple. Reach out to us through our contact page to schedule an initial consultation. We'll discuss your goals, answer your questions, and outline a strategic plan for your success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* FAQ Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We've got answers. Here are some of the most common inquiries we receive.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index + 1}`}
                  className="bg-card/50 backdrop-blur-sm border border-muted/20 hover:border-primary/30 transition-all duration-300 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
