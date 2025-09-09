const SocialProof = () => {
  const partners = [
    "Fortune 500 Global",
    "TechCrunch Featured",
    "Forbes Recognized",
    "Adobe Partner",
    "Google Certified",
    "HubSpot Elite",
    "Salesforce Partner",
    "Meta Business",
    "LinkedIn Marketing",
    "Microsoft Partner"
  ];

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-muted-foreground text-lg">
          Trusted by industry leaders worldwide
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-pulse">
          <div className="flex space-x-16 marquee">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-xl font-medium text-muted-foreground whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;