"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "SaaS",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description:
      "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "Web App",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description:
      "Property listing and management platform with virtual tours, mortgage calculator, and CRM integration.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    category: "Platform",
    technologies: ["Next.js", "Tailwind", "Prisma", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Finance Tracker",
    description:
      "Personal finance management app with expense tracking, budget planning, and investment portfolio analysis.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Plaid API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Educational platform with course creation, progress tracking, interactive quizzes, and video streaming.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    category: "Education",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Project Management Tool",
    description:
      "Collaborative project management solution with task tracking, team communication, and time management.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    category: "Productivity",
    technologies: ["React", "Express", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = [
  "All",
  "SaaS",
  "Web App",
  "Platform",
  "Mobile App",
  "Education",
  "Productivity",
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Filter portfolio items based on active filter
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

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
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Portfolio cards staggered reveal
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.8,
              rotationY: index % 2 === 0 ? -45 : 45,
              y: 100,
            },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              y: 0,
              duration: 1.2,
              delay: index * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            }
          );

          // Subtle hover animations
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              rotationY: 5,
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.4,
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
      id='portfolio'
      className='py-32 bg-white relative overflow-hidden'
    >
      {/* Minimal Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:48px_48px]'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-24'
        >
          <div className='inline-flex items-center gap-2 px-6 py-2 bg-black/5 rounded-full mb-12'>
            <div className='w-1.5 h-1.5 bg-black rounded-full'></div>
            <span className='text-sm font-medium text-black/60'>Our Work</span>
          </div>
          <h2 className='text-5xl md:text-7xl font-light mb-8 tracking-tight'>
            <span className='text-black'>Portfolio</span>
          </h2>
          <p className='text-xl text-black/60 max-w-3xl mx-auto leading-relaxed font-light'>
            Work that speaks for itself.
          </p>
        </motion.div>

        {/* Minimal Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-2 mb-20'
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === category
                  ? "bg-black text-white"
                  : "bg-black/5 text-black/60 hover:bg-black hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={gridRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              variants={cardVariants}
              className='group cursor-pointer'
              whileHover={{
                y: -12,
                rotateX: 2,
                rotateY: 3,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className='bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-black/15 transition-all duration-500 hover:shadow-2xl group-hover:shadow-black/15'>
                <div className='relative overflow-hidden'>
                  {/* Image with unique overlay effects */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
                  />

                  {/* Simple overlay */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 ease-out'></div>

                  {/* Clean action buttons */}
                  <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-y-2 group-hover:translate-y-0'>
                    {/* Live link - always shown */}
                    <motion.a
                      href={item.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 shadow-lg'
                    >
                      <ExternalLink className='w-4 h-4' />
                    </motion.a>

                    {/* GitHub link - only shown if exists and not '#' */}
                    {item.githubUrl && item.githubUrl !== "#" && (
                      <motion.a
                        href={item.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 shadow-lg'
                      >
                        <Github className='w-4 h-4' />
                      </motion.a>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-black/80 text-white text-xs font-medium rounded-full backdrop-blur-sm'>
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <span className='px-3 py-1 bg-black/5 text-black/60 text-xs font-medium rounded-full'>
                      {item.category}
                    </span>
                  </div>
                  <h3 className='text-xl font-medium text-black mb-3 group-hover:text-black/70 transition-all duration-300 group-hover:translate-x-1'>
                    {item.title}
                  </h3>
                  <p className='text-black/60 mb-4 leading-relaxed text-sm'>
                    {item.description}
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='text-xs px-2 py-1 bg-black/5 text-black/60 rounded-md'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-16'
        >
          <motion.a
            href='mailto:team@nutshellbytes.com?subject=Start My Project&body=Hi, I would like to discuss starting a new project with your team.'
            className='group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black/90 transition-all duration-300'
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Your Project</span>
            <ExternalLink className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
