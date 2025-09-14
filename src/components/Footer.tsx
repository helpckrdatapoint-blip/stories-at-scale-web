import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  ArrowUp,
  Heart,
  Star,
  Award,
  Users
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Brand Strategy",
    "Web Design",
    "Digital Marketing",
    "Content Creation",
    "SEO Optimization",
    "Social Media"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Press",
    "Partners",
    "Contact"
  ];

  const resources = [
    "Blog",
    "Case Studies",
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms of Service"
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Stories at Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crafting digital experiences that tell your story and drive meaningful connections with your audience.
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Star className="w-3 h-3 mr-1" />
                  Award Winning
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  <Users className="w-3 h-3 mr-1" />
                  500+ Clients
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  hello@storiesatscale.com
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  New York, NY 10001
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-muted/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Stories at Scale. All rights reserved.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in New York
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                >
                  <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Back to Top Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-muted/30 hover:border-primary/30 hover:bg-primary/5"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;