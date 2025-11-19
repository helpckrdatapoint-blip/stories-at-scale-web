"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-5xl font-semibold text-foreground text-center md:text-6xl mb-4">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-xl text-foreground/80 text-center max-w-2xl mx-auto">
          Hear from creators and brands who've transformed their content with us
        </p>
      </div>

      {/* First Row - Moving Right */}
      <div className="mb-8">
        <InfiniteMovingCards
          items={testimonialsRow1}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Second Row - Moving Left */}
      <div>
        <InfiniteMovingCards
          items={testimonialsRow2}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonialsRow1 = [
  {
    quote:
      "Dhasha Media transformed our Instagram presence completely. Their reel production quality is unmatched, and our engagement skyrocketed by 300% within just two months.",
    name: "Sarah Johnson",
    title: "Fashion Influencer",
  },
  {
    quote:
      "Working with Dhasha Media was a game-changer for our brand. The attention to detail and creative storytelling in every reel captured our audience perfectly.",
    name: "Michael Chen",
    title: "CEO, TechStart Inc",
  },
  {
    quote:
      "The team's professionalism and creativity exceeded all expectations. Every video they produced went viral, bringing us thousands of new followers.",
    name: "Priya Sharma",
    title: "Lifestyle Creator",
  },
  {
    quote:
      "From concept to delivery, Dhasha Media delivered excellence. Their understanding of social media trends and algorithm optimization is phenomenal.",
    name: "James Rodriguez",
    title: "Digital Marketing Director",
  },
];

const testimonialsRow2 = [
  {
    quote:
      "I've worked with many production teams, but Dhasha Media stands out. Their ability to capture authentic moments while maintaining cinematic quality is impressive.",
    name: "Emma Wilson",
    title: "Travel Vlogger",
  },
  {
    quote:
      "The ROI on our investment with Dhasha Media was incredible. Not only did our content quality improve, but we also saw a direct increase in conversions.",
    name: "David Park",
    title: "E-commerce Brand Owner",
  },
  {
    quote:
      "Certified creators who truly understand what works on Instagram. Every reel they create is optimized for maximum reach and engagement.",
    name: "Aisha Patel",
    title: "Beauty Entrepreneur",
  },
  {
    quote:
      "Fast turnaround, exceptional quality, and creative brilliance. Dhasha Media is our go-to partner for all short-form video content.",
    name: "Robert Martinez",
    title: "Food & Beverage Brand Manager",
  },
];
