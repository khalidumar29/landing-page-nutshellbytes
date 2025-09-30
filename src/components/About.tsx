"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "100+",
    label: "Projects Delivered",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
  },
  {
    icon: Star,
    number: "99%",
    label: "Client Satisfaction",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title morphing animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotationX: -90,
          transformOrigin: "50% 50% -200px",
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Description typewriter effect
      gsap.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Stats counter animation
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          const numberElement = stat.querySelector(".stat-number");
          const labelElement = stat.querySelector(".stat-label");

          if (numberElement && labelElement) {
            gsap.fromTo(
              stat,
              {
                opacity: 0,
                scale: 0.3,
                rotationY: 180,
              },
              {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 1.2,
                delay: index * 0.2,
                ease: "back.out(2)",
                scrollTrigger: {
                  trigger: stat,
                  start: "top 90%",
                },
              }
            );

            // Counter animation
            const finalNumber = stats[index].number;
            const isPercentage = finalNumber.includes("%");
            const isPlus = finalNumber.includes("+");
            const numericValue = parseInt(finalNumber.replace(/[%+]/g, ""));

            gsap.fromTo(
              { value: 0 },
              { value: numericValue },
              {
                duration: 2,
                delay: index * 0.2 + 0.5,
                ease: "power2.out",
                onUpdate: function () {
                  const current = Math.round(this.targets()[0].value);
                  let displayValue = current.toString();
                  if (isPercentage) displayValue += "%";
                  if (isPlus) displayValue += "+";
                  numberElement.textContent = displayValue;
                },
                scrollTrigger: {
                  trigger: stat,
                  start: "top 90%",
                },
              }
            );

            // Continuous floating animation for stats
            gsap.to(stat, {
              y: "-=5",
              duration: 2 + index * 0.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          }
        }
      });
    }, sectionRef);

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
      ref={sectionRef}
      id='about'
      className='py-32 bg-white relative overflow-hidden'
    >
      {/* Minimal background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative'>
        <div className='text-center max-w-4xl mx-auto'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className='inline-flex items-center gap-2 px-6 py-2 bg-black/5 rounded-full mb-12'>
                <div className='w-1.5 h-1.5 bg-black rounded-full'></div>
                <span className='text-sm font-medium text-black/60'>
                  About Us
                </span>
              </div>
              <h2 className='text-5xl md:text-7xl font-light mb-8 tracking-tight'>
                <span className='text-black'>Simple by Design</span>
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className='text-xl text-black/60 mb-16 leading-relaxed font-light'
            >
              We believe in the power of simplicity. Every line of code, every
              pixel, every interaction is crafted with purpose and precision.
            </motion.p>

            {/* Minimal stats grid */}
            <motion.div
              variants={itemVariants}
              className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  ref={(el) => {
                    if (el) statsRef.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className='text-center'
                >
                  <div className='stat-number text-3xl font-light text-black mb-2'>
                    0
                  </div>
                  <div className='stat-label text-black/60 font-light text-sm'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
