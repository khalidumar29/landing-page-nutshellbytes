"use client";

import { motion } from "framer-motion";
import {
  Database,
  Code,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const payloadFeatures = [
  {
    icon: Database,
    title: "Headless CMS",
    description:
      "Modern headless architecture for maximum flexibility and performance.",
  },
  {
    icon: Code,
    title: "TypeScript First",
    description:
      "Built with TypeScript for type safety and developer experience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with automatic GraphQL and REST APIs.",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description:
      "Robust security, authentication, and role-based access control.",
  },
];

const payloadProjects = [
  {
    title: "PayloadCMS Official Website",
    description:
      "The official PayloadCMS website showcasing modern headless CMS capabilities with TypeScript, React, and MongoDB. Features advanced admin panel, custom field types, and developer-first architecture.",
    tech: ["PayloadCMS", "TypeScript", "React", "MongoDB"],
    results: "Live production website",
    link: "https://payloadcms.com",
  },
  {
    title: "PayloadCMS E-commerce Template",
    description:
      "Full-stack e-commerce solution built with PayloadCMS demonstrating product management, order processing, and payment integration. Open-source template available on GitHub.",
    tech: ["PayloadCMS", "Next.js", "Stripe", "TypeScript"],
    results: "Open-source template",
    link: "https://github.com/payloadcms/payload/tree/main/templates/ecommerce",
  },
  {
    title: "Ostool AI - Fleet Management Platform",
    description:
      "All-in-one cloud-based fleet management system for car rental, logistics, and vehicle tracking. Features automated workflows, e-invoicing compliance, real-time analytics, and multi-language support with Arabic interface.",
    tech: ["PayloadCMS", "Next.js", "TypeScript", "Cloud Infrastructure"],
    results: "Live production system serving multiple clients",
    link: "https://ostool.ai/en",
  },
];

const PayloadCMS = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with 3D effect
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          rotationX: -90,
          transformOrigin: "50% 50% -100px",
          z: -100,
        },
        {
          opacity: 1,
          rotationX: 0,
          z: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "center 50%",
            scrub: 1,
          },
        }
      );

      // Features cards animation
      if (featuresRef.current) {
        const cards = featuresRef.current.children;
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            rotationY: -15,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
              end: "center 60%",
              scrub: 0.5,
            },
          }
        );
      }

      // Projects animation
      if (projectsRef.current) {
        const projects = projectsRef.current.children;
        gsap.fromTo(
          projects,
          {
            opacity: 0,
            x: -50,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              end: "center 50%",
              scrub: 0.3,
            },
          }
        );
      }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id='payloadcms'
      className='py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden'
    >
      {/* Minimal Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-16 sm:mb-20 md:mb-24'
        >
          <motion.div variants={itemVariants}>
            <div className='mb-4'>
              <span className='inline-block w-12 h-px bg-black mb-8'></span>
            </div>
            <h2
              ref={titleRef}
              className='text-4xl sm:text-6xl md:text-8xl font-light mb-6 sm:mb-8 tracking-tight text-black'
            >
              Next-Gen
              <br />
              <span className='font-medium'>CMS Solutions</span>
            </h2>
            <div className='w-24 h-px bg-black mx-auto mb-8'></div>
            <p className='text-base sm:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed font-light px-4'>
              We architect modern content management experiences with{" "}
              <span className='bg-black text-white px-2 py-1 rounded font-medium text-sm sm:text-base'>
                PayloadCMS
              </span>
              , combining developer-first architecture with AI-powered workflows
              to transform how you manage and deliver content.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24'
        >
          {payloadFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className='group text-center p-6 sm:p-8 bg-white rounded-2xl border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg'
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className='bg-black w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <feature.icon className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3'>
                {feature.title}
              </h3>
              <p className='text-black/60 leading-relaxed text-sm'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Projects Showcase */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mb-16'
        >
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16'
          >
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-black px-4'>
              Advanced CMS Solutions
            </h3>
            <div className='w-16 h-px bg-black mx-auto'></div>
          </motion.div>

          <div ref={projectsRef} className='space-y-6'>
            {payloadProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-white rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-xl cursor-pointer block'
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6'>
                  <div className='flex-1'>
                    <h4 className='text-xl sm:text-2xl font-medium text-black mb-2 sm:mb-3 group-hover:text-black/80 transition-colors'>
                      {project.title}
                    </h4>
                    <p className='text-sm sm:text-base text-black/60 mb-3 sm:mb-4 leading-relaxed'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='text-xs px-3 py-1 bg-black/5 text-black/60 rounded-full'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='flex items-center justify-between sm:gap-4'>
                    <div className='text-left sm:text-right'>
                      <div className='flex items-center gap-2 text-black mb-1'>
                        <CheckCircle className='w-4 h-4' />
                        <span className='font-medium text-sm'>Result</span>
                      </div>
                      <p className='text-black/60 text-sm'>{project.results}</p>
                    </div>
                    <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 text-black/40 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 flex-shrink-0' />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center'
        >
          <motion.a
            href="mailto:team@nutshellbytes.com?subject=Next-Gen CMS Project&body=Hi, I'm interested in discussing a modern CMS solution with your team."
            className='group inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-black/90 transition-all duration-300'
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Build Next-Gen CMS</span>
            <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PayloadCMS;
