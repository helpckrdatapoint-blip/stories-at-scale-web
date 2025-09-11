import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Statement />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <Intro />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <SocialProof />
      <FinalCTA />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
