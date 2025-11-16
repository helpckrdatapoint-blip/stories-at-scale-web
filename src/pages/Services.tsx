import { StaggeredMenu } from "@/components/ui/staggered-menu";
import Services from "@/components/Services";

const ServicesPage = () => {
  const menuItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'services', label: 'Services', link: '/services' },
    { id: 'about', label: 'About', link: '/about' },
    { id: 'contact', label: 'Contact', link: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StaggeredMenu
        position="right"
        items={menuItems}
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#fff"
        colors={['#c7d2fe', '#4f46e5']}
      />
      <div className="pt-20">
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;