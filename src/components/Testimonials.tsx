"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Spring configuration for a smooth, natural animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Original scroll-based transformations
  const x1 = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const r1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const r2 = useTransform(scrollYProgress, [0, 1], [-60, 10]);

  const x3 = useTransform(scrollYProgress, [0, 1], [300, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 200]);
  const r3 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const y4 = useTransform(scrollYProgress, [0, 1], [50, 200]);
  const r4 = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  const x5 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [250, -50]);
  const r5 = useTransform(scrollYProgress, [0, 1], [50, -40]);

  const x6 = useTransform(scrollYProgress, [0, 1], [-400, 200]);
  const r6 = useTransform(scrollYProgress, [0, 1], [20, -30]);

  const x7 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y7 = useTransform(scrollYProgress, [0, 1], [200, 200]);
  const r7 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const x8 = useTransform(scrollYProgress, [0, 1], [-100, 10]);
  const y8 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  const r8 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const x9 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  const y9 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const r9 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  // Applying spring physics for smooth transitions
  const smoothX1 = useSpring(x1, springConfig);
  const smoothY1 = useSpring(y1, springConfig);
  const smoothR1 = useSpring(r1, springConfig);

  const smoothX2 = useSpring(x2, springConfig);
  const smoothY2 = useSpring(y2, springConfig);
  const smoothR2 = useSpring(r2, springConfig);

  const smoothX3 = useSpring(x3, springConfig);
  const smoothY3 = useSpring(y3, springConfig);
  const smoothR3 = useSpring(r3, springConfig);
  
  const smoothY4 = useSpring(y4, springConfig);
  const smoothR4 = useSpring(r4, springConfig);

  const smoothX5 = useSpring(x5, springConfig);
  const smoothY5 = useSpring(y5, springConfig);
  const smoothR5 = useSpring(r5, springConfig);

  const smoothX6 = useSpring(x6, springConfig);
  const smoothR6 = useSpring(r6, springConfig);
  
  const smoothX7 = useSpring(x7, springConfig);
  const smoothY7 = useSpring(y7, springConfig);
  const smoothR7 = useSpring(r7, springConfig);

  const smoothX8 = useSpring(x8, springConfig);
  const smoothY8 = useSpring(y8, springConfig);
  const smoothR8 = useSpring(r8, springConfig);

  const smoothX9 = useSpring(x9, springConfig);
  const smoothY9 = useSpring(y9, springConfig);
  const smoothR9 = useSpring(r9, springConfig);

  return (
    <div
      ref={ref}
      className="xl:min-h-screen flex justify-center items-center text-black relative mt-20 mb-10 md:my-30 xl:mt-40 xl:mb-80"
    >
      <div className="hidden xl:block">
        <motion.div
          style={{ x: smoothX1, y: smoothY1, rotate: smoothR1 }}
          className="absolute text-black top-0 left-0"
        >
          <Card
            testimonial={`"Stories at Scale is in the top 1% of teams I've worked with. They genuinely care about the project and outcomes."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a014030cda3f1845a8562_image_2024-05-31_12-34-52.png"
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX2, y: smoothY2, rotate: smoothR2 }}
          className="absolute text-black  top-70 left-10"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e523b634d60a18bd161b8f_clutch.svg"
            alt="image-cloud"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX3, y: smoothY3, rotate: smoothR3 }}
          className="absolute left-0 bottom-50"
        >
          <Card
            testimonial={`"Stories at Scale delivered in weeks what we'd been trying to achieve for over a year. Game-changing quality and speed!"`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
          />
        </motion.div>

        <motion.div
          style={{ y: smoothY4, rotate: smoothR4 }}
          className="absolute left-20 bottom-0"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e525277e6bfc538276cd57_chat.svg"
            alt="image-chat"
            width={220}
            height={220}
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX5, y: smoothY5, rotate: smoothR5 }}
          className="absolute right-10 top-0"
        >
          <Card
            testimonial={`"When even our most critical stakeholders praised the UX, we knew Stories at Scale had nailed it. Exceptional work."`}
            reviewer="Naveen"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01690c508b5bebac1311_image_2024-05-31_12-38-04-p-500.png"
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX6, rotate: smoothR6 }}
          className="absolute right-20 top-80"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e524b35f5d677e9845c642_pencil.svg"
            width={200}
            height={200}
            alt="image-pencil"
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX7, y: smoothY7, rotate: smoothR7 }}
          className="absolute right-0"
        >
          <Card
            testimonial={`"Huge thanks to the Stories at Scale team. Incredibly proud of what we built together."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX8, y: smoothY8, rotate: smoothR8 }}
          className="absolute right-50 bottom-30"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e526efa973a610da0df9e8_farley.gif"
            width={120}
            height={120}
            alt="image-pfp"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          style={{ x: smoothX9, y: smoothY9, rotate: smoothR9 }}
          className="absolute right-1/2 translate-1/2 bottom-0"
        >
          <Card
            testimonial={`"Stories at Scale brought mind-opening ideas and turned them into tangible, effective designs. Truly impressive."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center ">
        <div className="gap-x-2 px-5 py-2 bg-white rounded-full flex items-center shadow-lg">
          <span className="text-sm xl:text-base font-medium">
            several people are typing
          </span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-current rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-2xl leading-tight mx-10 md:text-6xl xl:mx-0 xl:text-7xl font-bold text-center xl:leading-tight max-w-5xl mt-4">
          Clients can't say enough about Stories at Scale.
        </div>

        <div className="font-medium mx-10 xl:mx-0 text-base xl:text-lg max-w-md text-center mt-5 text-gray-600">
          Take a look for yourself. No Slack messages were harmed in the making
          of this component.
        </div>

        <div className="flex flex-col xl:hidden mt-8 w-full">
          <Card
            testimonial={`"Stories at Scale brought mind-opening ideas and turned them into tangible, effective designs. Truly impressive."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png"
          />
          <Card
            testimonial={`"Huge thanks to the Stories at Scale team. Incredibly proud of what we built together."`}
            reviewer="Naveen"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
          <Card
            testimonial={`"Stories at Scale delivered in weeks what we'd been trying to achieve for over a year. Game-changing quality and speed!"`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
          />
          <Card
            testimonial={`"Huge thanks to the Stories at Scale team. Incredibly proud of what we built together."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({
  testimonial,
  icon,
  reviewer,
}: {
  testimonial: string;
  icon: string;
  reviewer: string;
}) => {
  return (
    <div className="flex flex-col gap-y-4 xl:gap-y-3 mx-5 my-2 md:mx-10 md:my-3 rounded-2xl xl:rounded-3xl bg-white text-black px-6 py-5 xl:px-8 xl:py-6 xl:max-w-md md:max-w-full shadow-md">
      <div className="font-medium text-base xl:text-lg">
        {testimonial}
      </div>
      <div className="flex items-center gap-x-3">
        <img
          src={icon}
          alt="Reviewer icon"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="text-sm font-semibold">{reviewer}</div>
      </div>
    </div>
  );
};

export default Testimonials;
