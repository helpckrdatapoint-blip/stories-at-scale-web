import React from 'react';

// You can also use a library like 'react-icons' for this
const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Intro = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid: 2 Columns on Large Screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* --- LEFT COLUMN: ABOUT THE COMPANY --- */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-blue-600">Stories at Scale</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a premium content agency that believes in the{" "}
                  <span className="text-blue-600 font-semibold">transformative power of storytelling</span>.
                  Founded on the principle that every brand has a unique narrative worth telling, we specialize
                  in crafting stories that not only capture attention but create lasting connections.
                </p>
                <p>
                  Our approach combines strategic thinking with creative excellence, ensuring that every piece
                  of content we create serves both your business objectives and your audience's needs.
                </p>
              </div>
            </div>

            {/* --- RIGHT COLUMN: MODERN FOUNDER PROFILE CARD (LEFT-ALIGNED) --- */}
            <div className="relative mt-16 lg:mt-0">
              <div className="bg-background/50 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl">
                {/* Image aligned to the top-left */}
                <div className="absolute -top-12 left-8">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEfqX3WxkyiRQ/profile-displayphoto-shrink_200_200/B4DZNm4nv9HIAY-/0/1732597940656?e=2147483647&v=beta&t=aF_J5aJrs0dlbGXHDJ538P9Xi3GjdJ2Qw5dcOD6m51s" // <-- IMPORTANT: REPLACE THIS PATH
                    alt="Harshith Tunuguntla, Founder of Stories at Scale"
                    className="w-32 h-32 object-cover rounded-full ring-4 ring-blue-600"
                  />
                </div>

                {/* Card content with adjusted padding and left-aligned text */}
                <div className="p-8 pt-24 text-left">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Harshith Tunuguntla
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mt-1">
                    Founder & Chief Storyteller
                  </p>
                  
                  <p className="text-gray-800 dark:text-muted-foreground mt-4">
                    The mastermind behind Stories at Scale, building{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">authentic connections</span> to drive growth.
                  </p>

                  <blockquote className="my-6 text-2xl font-medium italic text-gray-900 dark:text-gray-200 border-l-4 border-blue-600 pl-6">
                    "Your company builds products. We build your <span className="font-semibold text-blue-600">influence</span>."
                  </blockquote>
                </div>
                
                {/* Dedicated CTA Section */}
                <div className="bg-secondary/60 p-6 rounded-b-3xl mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-500">
                        86k+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Instagram Followers
                      </div>
                    </div>
                    <a
                      href="https://www.instagram.com/harshith.presents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <InstagramIcon className="w-5 h-5" />
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
