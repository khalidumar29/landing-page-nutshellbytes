"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation timeline
      const tl = gsap.timeline();

      // Animate badge entrance
      tl.from(badgeRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Animate title words
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        tl.from(
          words,
          {
            opacity: 0,
            y: 100,
            rotationX: -90,
            transformOrigin: "50% 50% -100px",
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // Animate subtitle
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // Animate key highlights
      tl.from(
        ".hero-highlights > div",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Animate CTA buttons - simple and reliable
      if (buttonsRef.current) {
        // Set initial hidden state
        gsap.set(buttonsRef.current.children, {
          opacity: 0,
          y: 50,
          scale: 0.9,
        });

        // Animate to visible state
        tl.to(
          buttonsRef.current.children,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
      }

      // Floating elements animation
      gsap.to(".floating-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      gsap.to(".floating-2", {
        y: 15,
        x: -8,
        rotation: -3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1,
      });

      gsap.to(".floating-3", {
        y: -10,
        x: 12,
        rotation: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 0.5,
      });

      // Magnetic effect for buttons
      const magneticElements = document.querySelectorAll(".magnetic");
      magneticElements.forEach((element) => {
        const magneticElement = element as HTMLElement;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = magneticElement.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          if (distance < 100) {
            gsap.to(magneticElement, {
              x: deltaX * 0.3,
              y: deltaY * 0.3,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(magneticElement, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        };

        magneticElement.addEventListener("mousemove", handleMouseMove);
        magneticElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          magneticElement.removeEventListener("mousemove", handleMouseMove);
          magneticElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      });

      // Parallax scroll effect
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(".hero-content", {
            y: progress * 100,
            opacity: 1 - progress * 0.3,
            duration: 0.1,
          });
          gsap.to(".floating-elements > div", {
            y: progress * 150,
            rotation: progress * 180,
            duration: 0.1,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-white'
    >
      {/* Minimal Background with Floating Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]'></div>

        <div className='floating-elements absolute inset-0'>
          <div className='floating-1 absolute top-1/4 right-1/4 w-3 h-3 bg-black rounded-full opacity-10'></div>
          <div className='floating-2 absolute bottom-1/3 left-1/3 w-2 h-2 bg-black rounded-full opacity-15'></div>
          <div className='floating-3 absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-black rounded-full opacity-20'></div>
          <div className='floating-1 absolute bottom-1/4 right-1/3 w-1 h-1 bg-black rounded-full opacity-10'></div>
        </div>
      </div>

      <div className='hero-content text-center relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Animated Badge */}
        <div
          ref={badgeRef}
          className='magnetic inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-black/5 rounded-full text-xs sm:text-sm font-medium text-black/60 mb-8 sm:mb-12 cursor-pointer transition-all duration-300 hover:bg-black/10 hover:scale-105'
        >
          <div className='w-1.5 h-1.5 bg-black rounded-full animate-pulse'></div>
          <span>Nutshell Bytes</span>
        </div>

        {/* Animated Heading */}
        <h1
          ref={titleRef}
          className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light mb-6 sm:mb-8 leading-tight tracking-tight'
        >
          <span className='word inline-block text-black font-extralight'>
            Think
          </span>
          <br />
          <span className='word inline-block text-black font-medium'>
            Different
          </span>
        </h1>

        {/* Animated Subtitle */}
        {/* Clean Subtitle */}
        <p
          ref={subtitleRef}
          className='text-lg sm:text-xl md:text-2xl text-black/60 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto font-light px-4'
        >
          We craft intelligent digital experiences powered by{" "}
          <span className='text-black font-medium'>
            AI and machine learning
          </span>
          . Transforming industries with cutting-edge solutions that adapt,
          learn, and evolve.
        </p>

        {/* Key highlights */}
        <div className='hero-highlights flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 text-sm text-black/60'>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-2 h-2 bg-black rounded-full'></div>
            <span>5+ Years Experience</span>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-2 h-2 bg-black rounded-full'></div>
            <span>50+ Projects Delivered</span>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-2 h-2 bg-black rounded-full'></div>
            <span>100% Client Satisfaction</span>
          </div>
        </div>

        {/* Magnetic CTA Buttons */}
        <div
          ref={buttonsRef}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center px-4'
        >
          <a
            href='mailto:team@nutshellbytes.com?subject=Start My Project&body=Hi, I would like to discuss starting a new project with your team.'
            className='magnetic bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-black/90 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-1 w-full sm:w-auto text-center'
          >
            <span className='flex items-center justify-center gap-2'>
              Start Your Project
              <ArrowRight className='w-4 h-4' />
            </span>
          </a>
          <a
            href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
            target='_blank'
            rel='noopener noreferrer'
            className='magnetic text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg border border-black/20 hover:border-black/40 hover:bg-black/5 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto text-center'
          >
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}
