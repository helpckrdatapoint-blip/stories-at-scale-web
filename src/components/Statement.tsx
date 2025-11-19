import certifiedCreator from "@/assets/features/certified-creator.jpg";
import easyBooking from "@/assets/features/easy-booking.jpg";
import pricing from "@/assets/features/pricing.jpg";
import secure from "@/assets/features/secure.jpg";
import instantDelivery from "@/assets/features/instant-delivery.jpg";
import womenSafety from "@/assets/features/women-safety.jpg";

const Statement = () => {
  const features = [
    {
      title: "Trained & Certified Reel Makers",
      description: "Each Partner clears 6 filters to get their certification",
      image: certifiedCreator,
    },
    {
      title: "Easy Booking",
      description: "Stop struggling with complex booking procedure",
      image: easyBooking,
    },
    {
      title: "Unbelievable Pricing",
      description: "Each Reel starts ₹1999/-",
      image: pricing,
    },
    {
      title: "Safe & Secure",
      description: "You & Your data is safe and secured.",
      image: secure,
    },
    {
      title: "Instant Reels, Instant Editing",
      description: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
      image: instantDelivery,
    },
    {
      title: "Women Safety",
      description: "A women can book a female Reel maker",
      image: womenSafety,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* UPDATED: Alignment changed to left, size decreased, font changed to semi-bold, and description added */}
        <div className="text-left mb-12 px-4 sm:px-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-foreground">
            <span className="text-foreground">Not Just Instant </span>
            <span className="text-primary">Delivery, But..</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Discover the core values and unmatched benefits that make our certified creators the best choice for your high-quality content needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              // Increased the blue tint and opacity for a stronger "blue glass" look
              className="group relative overflow-hidden rounded-2xl bg-card backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8">
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  {/* Text colors adjusted slightly for the stronger blue background,
                      hover color is a darker blue for contrast */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;
