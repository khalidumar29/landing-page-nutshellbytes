"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: "SaaS Development",
    description:
      "Custom SaaS applications built with modern technologies like Next.js, React, and Node.js for scalable business solutions.",
    features: [
      "React/Next.js",
      "Node.js Backend",
      "Cloud Infrastructure",
      "API Integration",
    ],
    number: "01",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that convert visitors into customers with modern aesthetics and user-centered approach.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    number: "02",
  },
  {
    icon: Zap,
    title: "Web Development",
    description:
      "High-performance websites and web applications optimized for speed, SEO, and user experience.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance",
      "Accessibility",
    ],
    number: "03",
  },
  {
    icon: Users,
    title: "Consulting",
    description:
      "Strategic technology consulting to help you make informed decisions about your digital transformation.",
    features: [
      "Tech Strategy",
      "Architecture Review",
      "Team Training",
      "Best Practices",
    ],
    number: "04",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with morphing effect
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Professional card animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
              },
            }
          );

          // Subtle hover animation
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -5,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
      id='services'
      className='py-32 bg-black/[0.02] relative overflow-hidden'
    >
      {/* Minimal Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:64px_64px]'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <motion.div
          className='text-center mb-24'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className='inline-flex items-center gap-2 px-6 py-2 bg-black/5 rounded-full text-sm font-medium text-black/60 mb-12'>
            <span className='w-1.5 h-1.5 bg-black rounded-full'></span>
            What We Do
          </span>
          <h2 className='text-5xl md:text-7xl font-light mb-8 tracking-tight'>
            <span className='text-black'>Our Services</span>
          </h2>
          <p className='text-xl text-black/60 max-w-3xl mx-auto leading-relaxed font-light'>
            Simple solutions for complex problems.
          </p>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const gradients = [
              "from-indigo-500/30 to-purple-500/30",
              "from-cyan-500/30 to-blue-500/30",
              "from-blue-500/30 to-indigo-500/30",
              "from-purple-500/30 to-pink-500/30",
            ];
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                variants={cardVariants}
                className='relative group cursor-pointer'
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Minimal card */}
                <div className='relative p-12 rounded-3xl bg-white border border-black/10 hover:border-black/20 hover:shadow-xl transition-all duration-500 group overflow-hidden'>
                  {/* Clean hover effect */}
                  <div className='absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                  {/* Clean icon design */}
                  <div className='relative mb-8'>
                    <div className='w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center group-hover:bg-black/10 transition-all duration-300'>
                      <IconComponent className='w-8 h-8 text-black/60 group-hover:text-black transition-colors duration-300' />
                    </div>
                  </div>

                  <div className='relative z-10'>
                    <h3 className='text-2xl font-medium text-black mb-4 tracking-tight'>
                      {service.title}
                    </h3>
                    <p className='text-black/60 mb-8 leading-relaxed text-lg font-light'>
                      {service.description}
                    </p>

                    {/* Simple feature tags */}
                    <div className='flex flex-wrap gap-2'>
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className='text-sm px-3 py-1 bg-black/5 rounded-full font-medium text-black/70 hover:bg-black/10 transition-all duration-300 cursor-default'
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Simple number indicator */}
                  <div className='absolute top-6 right-6 w-8 h-8 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center'>
                    <span className='text-sm font-medium text-black/60'>
                      {service.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
