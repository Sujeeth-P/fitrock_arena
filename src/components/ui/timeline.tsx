"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-42 pb-10 px-4 md:px-8 lg:px-5">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold uppercase tracking-wider">
          KEY MILESTONES
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm">
          A timeline of our journey. Over the years, we've built, climbed, and grown.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20" style={{ paddingLeft: '60px' }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-start"
            style={{ 
              paddingTop: '6rem', 
              gap: '3rem',
            }}
          >
            {/* Year Column */}
            <div className="sticky z-40 top-10 self-start flex-shrink-0" style={{ width: '460px' }}>
              {/* Dot */}
              <div 
                className="absolute rounded-full bg-black flex items-center justify-center"
                style={{ left: '90px', top: '14px', width: '40px', height: '40px' }}
              >
                <div className="h-4 w-4 rounded-full bg-neutral-800 border-2 border-neutral-700" />
              </div>
              <h3 
                className="hidden md:block text-5xl lg:text-7xl font-black text-neutral-500" 
                style={{ zIndex: 50, paddingLeft: '160px' }}
              >
                {item.title}
              </h3>
            </div>

            {/* Content Column */}
            <div className="relative flex-1" style={{ paddingRight: '2rem' }}>
              <h3 className="md:hidden block text-3xl mb-6 text-left font-bold text-neutral-500" style={{ paddingLeft: '100px' }}>
                {item.title}
              </h3>
              {item.content}  
            </div>
          </div>
        ))}
        {/* Track Line & Highlight */}
        <div
          className="absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: height + 'px', left: '170px' }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-orange-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
