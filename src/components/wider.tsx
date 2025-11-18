// slider.tsx
import React from 'react';

// Data array for Dhasha Media related social proof phrases
const dhashaMediaWords = [
    "Digital Strategy",
    "Viral Reels Production",
    "Content Marketing",
    "SEO Optimization",
    "Paid Ads Management",
    "Brand Storytelling",
    "Performance Focused"
];
  
// Separator element
const Separator = () => (
    <span className="text-3xl md:text-4xl mx-8" style={{ color: '#000000' }}>*</span>
);
  
const SocialProof = () => {
    // Create an array with words interleaved with separators
    const marqueeContent = dhashaMediaWords.flatMap((word, index) => {
        // Only add the separator after the word, not at the end of the last word
        return index < dhashaMediaWords.length - 1
            ? [<span key={`word-${index}`} className="text-3xl md:text-4xl mx-8" style={{ color: '#000000' }}>{word}</span>, <Separator key={`sep-${index}`} />]
            : [<span key={`word-${index}`} className="text-3xl md:text-4xl mx-8" style={{ color: '#000000' }}>{word}</span>];
    });

    // To ensure a seamless loop, we need to repeat the content.
    // We add one final separator at the end of the first set to smoothly transition to the start of the repeated set.
    const fullContent = [...marqueeContent, <Separator key="final-sep" />, ...marqueeContent, <Separator key="final-sep-2" />];
    
    return (
      // Section with gold background
      <section id="social-proof" className="w-full py-10 overflow-hidden" style={{ backgroundColor: '#FFD700' }}>
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
  
        {/* The width is set to w-max to contain all rendered content. */}
        <div className="flex w-max items-center animate-marquee">
          {fullContent}
        </div>
      </section>
    );
};
  
export default SocialProof;