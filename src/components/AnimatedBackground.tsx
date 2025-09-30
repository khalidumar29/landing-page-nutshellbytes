"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

const AnimatedBackground = ({
  variant = "section",
  className = "",
}: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      const particleCount = variant === "hero" ? 20 : 8;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = `absolute bg-black/5 rounded-full`;

        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;

        containerRef.current?.appendChild(particle);
        particlesRef.current.push(particle);

        // Animate particles
        gsap.to(particle, {
          x: `+=${Math.random() * 100 - 50}`,
          y: `+=${Math.random() * 100 - 50}`,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });

        // Opacity animation
        gsap.to(particle, {
          opacity: Math.random() * 0.5 + 0.1,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Grid line animations for hero
      if (variant === "hero") {
        const gridLines = containerRef.current?.querySelectorAll(".grid-line");
        gridLines?.forEach((line, index) => {
          gsap.fromTo(
            line,
            { opacity: 0, scaleX: 0 },
            {
              opacity: 0.1,
              scaleX: 1,
              duration: 2,
              delay: index * 0.1,
              ease: "power2.out",
            }
          );
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      // Clean up particles
      particlesRef.current.forEach((particle) => {
        particle.remove();
      });
      particlesRef.current = [];
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {variant === "hero" && (
        <>
          {/* Subtle grid lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className='grid-line absolute h-px bg-black/5 w-full'
              style={{ top: `${20 + i * 15}%` }}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className='grid-line absolute w-px bg-black/5 h-full'
              style={{ left: `${20 + i * 15}%` }}
            />
          ))}
        </>
      )}

      {/* Subtle texture overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]' />
    </div>
  );
};

export default AnimatedBackground;
