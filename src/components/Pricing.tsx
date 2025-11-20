import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹15,999",
      period: "/month",
      description: "Perfect for individuals and small creators starting their journey",
      features: [
        "5 Professional Reels per month",
        "Basic editing & color grading",
        "Script consultation",
        "2 rounds of revisions",
        "HD quality export (1080p)",
        "48-hour delivery",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹35,999",
      period: "/month",
      description: "Ideal for growing brands and serious content creators",
      features: [
        "15 Professional Reels per month",
        "Advanced editing & VFX",
        "Strategic content planning",
        "Unlimited revisions",
        "4K quality export",
        "24-hour express delivery",
        "Trending audio & effects",
        "Priority support",
        "Monthly analytics report",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹75,999",
      period: "/month",
      description: "Full-scale solution for agencies and established brands",
      features: [
        "Unlimited Professional Reels",
        "Premium cinematic editing",
        "Dedicated content strategist",
        "Unlimited revisions",
        "8K quality export",
        "12-hour rush delivery",
        "Custom graphics & animations",
        "Multi-platform optimization",
        "Weekly strategy calls",
        "24/7 premium support",
        "Brand asset management",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary px-3 py-1 text-xs md:text-sm font-medium mb-4">
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">Growth Plan</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale your content production with plans designed for every stage of growth.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border p-8 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/20 bg-card scale-105"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-foreground/70">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {plan.popular ? "Get Started Now" : "Choose Plan"}
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-foreground/70">
              Need a custom plan? <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-primary hover:underline font-medium"
              >
                Contact us
              </button> for enterprise solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
