"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const magneticRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      // Animated title with split text effect
      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars) {
        gsap.set(titleChars, { y: 100, opacity: 0 });
        tl.to(titleChars, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.05,
          ease: "power3.out",
        });
      }

      // Subtitle slide up
      tl.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8");

      // Buttons scale in
      tl.from(buttonsRef.current?.children, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }, "-=0.6");

      // Floating elements animation
      floatingElementsRef.current.forEach((el, i) => {
        if (el) {
          gsap.set(el, {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
            scale: gsap.utils.random(0.5, 1.5),
            rotation: gsap.utils.random(0, 360),
          });
          
          gsap.to(el, {
            x: gsap.utils.random(-300, 300),
            y: gsap.utils.random(-300, 300),
            rotation: "+=" + gsap.utils.random(180, 360),
            duration: gsap.utils.random(15, 25),
            repeat: -1,
            yoyo: true,
            ease: "none",
          });
        }
      });

      // Magnetic effect for main CTA button
      const magneticButton = magneticRef.current;
      if (magneticButton) {
        const handleMouseMove = (e) => {
          const rect = magneticButton.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(magneticButton, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(magneticButton, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          });
        };

        magneticButton.addEventListener("mousemove", handleMouseMove);
        magneticButton.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          magneticButton.removeEventListener("mousemove", handleMouseMove);
          magneticButton.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic mouse effect
      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
        
        gsap.to(".magnetic", {
          x: (i, target) => {
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance < 100) {
              return deltaX * 0.3;
            }
            return 0;
          },
          y: (i, target) => {
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance < 100) {
              return deltaY * 0.3;
            }
            return 0;
          },
          duration: 0.3,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.from(".hero-badge", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".hero-title .word", {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "50% 50% -50px",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4")
      .from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".hero-buttons > *", {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Floating elements animation
      gsap.to(".floating-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".floating-2", {
        y: 15,
        x: -8,
        rotation: -3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1
      });

      gsap.to(".floating-3", {
        y: -10,
        x: 12,
        rotation: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 0.5
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
            opacity: 1 - progress * 0.5,
            duration: 0.3
          });
          gsap.to(".floating-elements > *", {
            y: progress * 200,
            rotation: progress * 360,
            duration: 0.3
          });
        }
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-white'
    >
      {/* Minimal Background Elements with GSAP animations */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Subtle texture */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]'></div>
        
        {/* Floating animated elements */}
        <div className='floating-elements absolute inset-0'>
          <div className='floating-1 absolute top-1/4 right-1/4 w-3 h-3 bg-black rounded-full opacity-10'></div>
          <div className='floating-2 absolute bottom-1/3 left-1/3 w-2 h-2 bg-black rounded-full opacity-15'></div>
          <div className='floating-3 absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-black rounded-full opacity-20'></div>
          <div className='floating-1 absolute bottom-1/4 right-1/3 w-1 h-1 bg-black rounded-full opacity-10'></div>
        </div>
      </div>      <div className='container-custom relative z-10'>
        <motion.div
          className='text-center max-w-5xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Minimal Badge */}
          <motion.div
            variants={itemVariants}
            className='inline-flex items-center gap-2 px-6 py-2 bg-black/5 rounded-full text-sm font-medium text-black/60 mb-12'
          >
            <div className='w-1.5 h-1.5 bg-black rounded-full'></div>
            <span>Nutshell Bytes</span>
          </motion.div>

          {/* Clean Heading */}
          <motion.h1
            variants={itemVariants}
            className='text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-tight tracking-tight'
          >
            <span className='text-black font-extralight'>Think</span>
            <br />
            <span className='text-black font-medium'>Different</span>
          </motion.h1>

          {/* Animated Subtitle */}
          <p
            ref={subtitleRef}
            className='text-xl md:text-2xl text-black/60 mb-16 leading-relaxed max-w-3xl mx-auto font-light'
          >
            We create digital experiences that matter.
          </p>

          {/* Animated CTA Buttons */}
          <div
            ref={buttonsRef}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <a
              ref={magneticRef}
              href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
              target='_blank'
              rel='noopener noreferrer'
              className='relative bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black/90 transition-all duration-300 cursor-pointer group overflow-hidden'
            >
              <span className='relative z-10'>Book a Call</span>
              <div className='absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </a>
            <a
              href='mailto:team@nutshellbytes.com'
              className='text-black px-8 py-4 rounded-full font-medium text-lg border border-black/20 hover:border-black/40 hover:bg-black/5 transition-all duration-300 group'
            >
              <span className='group-hover:tracking-wide transition-all duration-300'>team@nutshellbytes.com</span>
            </a>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-slate-700/50'
          >
            <div className='text-center group'>
              <div className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform'>
                50+
              </div>
              <div className='text-sm text-slate-400 group-hover:text-cyan-300 transition-colors'>
                Projects Delivered
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform'>
                100%
              </div>
              <div className='text-sm text-slate-400 group-hover:text-purple-300 transition-colors'>
                Client Satisfaction
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform'>
                5+
              </div>
              <div className='text-sm text-slate-400 group-hover:text-pink-300 transition-colors'>
                Years Experience
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform'>
                24/7
              </div>
              <div className='text-sm text-slate-400 group-hover:text-orange-300 transition-colors'>
                Support
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer'
      >
        <div className='w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-sm bg-slate-800/20 group-hover:border-cyan-400 transition-colors'>
          <div className='w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-bounce group-hover:from-purple-400 group-hover:to-pink-400 transition-all'></div>
        </div>
        <div className='text-xs text-slate-400 text-center mt-2 group-hover:text-cyan-300 transition-colors'>
          Scroll
        </div>
      </motion.div>
    </section>
  );
}
