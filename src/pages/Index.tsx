import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Featured from "@/components/Featured";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";

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
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
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
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={false}
        colors={['#c7d2fe', '#4f46e5']}
        accentColor="#4f46e5"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      <Hero />
      <Statement />
      <Featured />
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
      <ChatBot />
    </div>
  );
};

export default Index;
