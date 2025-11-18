// slider.tsx
import React from 'react';

// Data array for social proof phrases
const socialProofWords = [
    "Wedding Reels",
    "Youtube Videos",
    "Cinematic Videos",
    "Content Creation",
    "Instant Reels",
    "Creative Collabration",
    "Business Promotions",
    "News",
    "Event Management",
    "Drone Shoots"

  ];
  
  const SocialProof = () => {
    return (
      // Section with increased height and blue background
      <section id="social-proof" className="w-full py-10 bg-blue-700 overflow-hidden">
        {/* CSS animation for the marquee effect */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}
        </style>
  
        {/* The width is set to w-max to contain all rendered words.
            The content is rendered twice for a seamless loop. */}
        <div className="flex w-max items-center animate-marquee">
          {/* Render the words twice for a seamless loop */}
          {socialProofWords.map((word, index) => (
            // font-semibold is intentionally NOT added here as requested in the comments
            <span key={`word1-${index}`} className="text-3xl md:text-4xl text-white mx-8">
              {word}
            </span>
          ))}
          {socialProofWords.map((word, index) => (
            // font-semibold is intentionally NOT added here as requested in the comments
            <span key={`word2-${index}`} className="text-3xl md:text-4xl text-white mx-8">
              {word}
            </span>
          ))}
        </div>
      </section>
    );
  };
  
  export default SocialProof;