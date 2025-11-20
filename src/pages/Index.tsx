// index.tsx
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Hero from "@/components/Hero";
// COMBINED/CLEANED IMPORTS: 
import Slider from "@/components/slider"; // SocialProof component
import Statement from "@/components/Statement";
import Featured from "@/components/Featured";
import Wider from "@/components/wider"; // Assuming this is another slider/marquee
import Pricing from "@/components/Pricing";
import InfiniteMovingCardsDemo from "@/components/InfiniteMovingCardsDemo";

import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
// NEW: Assuming ParallaxGallery is the component we worked on
import ParallaxGallery from "@/components/ParallaxGallery";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Pricing', ariaLabel: 'View pricing plans', link: '#pricing' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#FFFFFF"
        openMenuButtonColor="#FFFFFF"
        changeMenuColorOnOpen={false}
        colors={['#FFD700', '#FFA500']}
        accentColor="#FFD700"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      <Hero />
    
      {/* Slider (Social Proof Marquee) */}
      <Slider /> 
      
      {/* NEW: Inserted Parallax Gallery to showcase work after the first marquee */}
     
      <Statement />
      <Featured />
      
      {/* Wider (Second Marquee) - Stays after Featured */}
      <Wider />
      
      <Pricing />
      
      <ParallaxGallery />
      
      <section id="testimonials">
        <InfiniteMovingCardsDemo />
      </section>
     
      <FinalCTA />
      <section id="contact">
        <Contact />
      </section>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
