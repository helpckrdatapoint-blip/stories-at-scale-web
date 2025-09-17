import React from 'react';
import { Button } from "@/components/ui/button";

const Intro = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* New layout: Left content + Right visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-700 px-3 py-1 text-xs md:text-sm font-medium mb-4">
                About us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Strategy-first content. Creative that performs.
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
                We partner with founders and teams to clarify the message, build a repeatable content engine, and ship work that wins attention and trust.
              </p>
              <ul className="mt-6 space-y-3 text-sm md:text-base text-foreground/90">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Narrative and positioning workshops</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Content systems for scale (pillars, calendars, playbooks)</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Full-stack production: video, design, copy</li>
              </ul>
              <div className="mt-7 flex items-center gap-3">
                <Button size="lg" onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}>Start a project</Button>
                <Button variant="outline" size="lg" onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}>See services</Button>
              </div>
            </div>

            {/* Right: Visuals */}
            <div className="relative">
              {/* Accent shapes */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/20 ring-2 ring-blue-600/30" />
              <div className="absolute -bottom-8 -right-8 w-40 h-20 rounded-t-full bg-blue-600/20 ring-2 ring-blue-700/30" />

              {/* Founder card */}
              <div className="relative bg-background rounded-3xl border border-border shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEfqX3WxkyiRQ/profile-displayphoto-shrink_200_200/B4DZNm4nv9HIAY-/0/1732597940656?e=2147483647&v=beta&t=aF_J5aJrs0dlbGXHDJ538P9Xi3GjdJ2Qw5dcOD6m51s"
                    alt="Harshith Tunuguntla, Founder of Stories at Scale"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-blue-600"
                  />
                  <div>
                    <div className="text-xl font-semibold">Harshith Tunuguntla</div>
                    <div className="text-sm text-muted-foreground">Founder & Chief Storyteller</div>
                  </div>
                </div>

                <blockquote className="mt-6 text-lg md:text-xl font-medium text-foreground">
                  "Your company builds products. We build your <span className="text-blue-600 font-semibold">influence</span>."
                </blockquote>

                {/* Mini stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-600 text-white p-4">
                    <div className="text-2xl font-bold">50+ </div>
                    <div className="text-xs opacity-90">projects shipped</div>
                  </div>
                  <div className="rounded-2xl bg-blue-500 text-white p-4">
                    <div className="text-2xl font-bold">6 yrs</div>
                    <div className="text-xs opacity-90">team experience</div>
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
