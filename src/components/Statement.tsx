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
    <section className="py-20 px-4 bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Not Just Instant </span>
            <span className="text-blue-400">Delivery, But..</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-950/60 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-6 p-6 md:p-8">
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200/80 group-hover:text-blue-100 transition-colors leading-relaxed">
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
