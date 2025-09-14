import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const SocialProof = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-Winning Agency",
      subtitle: "Digital Excellence Awards 2024"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "500+ Happy Clients",
      subtitle: "Across 30+ countries"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "98% Success Rate",
      subtitle: "Project completion rate"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "4.9/5 Rating",
      subtitle: "Client satisfaction score"
    }
  ];

  const partners = [
    { name: "Fortune 500", category: "Enterprise" },
    { name: "TechCrunch", category: "Media" },
    { name: "Forbes", category: "Business" },
    { name: "Adobe", category: "Technology" },
    { name: "Google", category: "Tech Giant" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Salesforce", category: "CRM" },
    { name: "Meta", category: "Social" },
    { name: "LinkedIn", category: "Professional" },
    { name: "Microsoft", category: "Enterprise" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Achievement Stats */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of successful companies who have transformed their digital presence with our expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-6">
              Certified partners and recognized by
            </p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-[scroll_30s_linear_infinite] space-x-8">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="bg-card/30 backdrop-blur-sm border border-muted/20 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <div className="text-center">
                        <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {partner.name}
                        </h4>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {partner.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;