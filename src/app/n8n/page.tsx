"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Workflow,
  Zap,
  Bot,
  GitBranch,
  Settings,
  Database,
  Clock,
  Shield,
  ExternalLink,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const N8NPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation timeline
      const tl = gsap.timeline();

      // Animate floating dots
      if (dotsRef.current) {
        const dots = dotsRef.current.children;
        gsap.set(dots, { opacity: 0, scale: 0 });

        gsap.to(dots, {
          opacity: 0.3,
          scale: 1,
          duration: 2,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5,
        });

        // Continuous floating animation for dots
        gsap.to(dots, {
          y: "random(-15, 15)",
          x: "random(-8, 8)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.3,
          delay: 2,
        });
      }

      // Animate badge entrance
      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate title words
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        tl.from(
          words,
          {
            opacity: 0,
            y: 80,
            rotationX: -45,
            transformOrigin: "50% 50% -50px",
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Animate subtitle
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Animate buttons (from initial CSS opacity-0)
      if (buttonsRef.current) {
        tl.from(
          buttonsRef.current,
          {
            y: 40,
            scale: 0.95,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        ).to(
          buttonsRef.current,
          {
            opacity: 1,
            duration: 0.3,
          },
          "-=0.6"
        );
      }

      // Animate N8N showcase elements
      tl.from(
        ".n8n-highlights > div",
        {
          x: 40,
          y: 20,
          scale: 0.95,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8"
      ).to(
        ".n8n-highlights > div",
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.2,
        },
        "-=0.8"
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const n8nFeatures = [
    {
      icon: Bot,
      title: "Pre-Built Agents",
      description:
        "Ready-to-deploy workflow agents tested across multiple industries. No development time needed - just plug and play.",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description:
        "Get your automation running in minutes, not months. Each agent comes with complete setup documentation and support.",
    },
    {
      icon: Shield,
      title: "Guaranteed Performance",
      description:
        "30-day money-back guarantee on all agents. We stand behind our products with proven ROI metrics.",
    },
    {
      icon: Settings,
      title: "Customization Ready",
      description:
        "All agents include customization options to fit your specific business needs and integration requirements.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Comprehensive setup support and ongoing maintenance included with every agent purchase.",
    },
    {
      icon: Database,
      title: "Multi-Industry Tested",
      description:
        "Our agents have been deployed across 15+ industries with consistent success rates and performance metrics.",
    },
    {
      icon: GitBranch,
      title: "Scalable Solutions",
      description:
        "Agents designed to grow with your business. Handle increasing volumes without performance degradation.",
    },
    {
      icon: Workflow,
      title: "Proven ROI",
      description:
        "Average 300% ROI within 3 months. Our clients see immediate cost savings and productivity improvements.",
    },
  ];

  const n8nProjects = [
    {
      title: "E-commerce Order Agent",
      description:
        "Complete order-to-fulfillment automation handling inventory updates, payment processing, customer notifications, and shipping integrations. Custom-built agent that reduces manual order processing time by 95% while ensuring zero errors.",
      tech: ["N8N", "Shopify", "WooCommerce", "Stripe", "ShipStation"],
      results: "95% faster order processing",
      integrations: "15+ e-commerce & shipping APIs",
      timeline: "2-3 weeks delivery",
      link: "https://cal.com/khalid-umar/30min?overlayCalendar=true",
    },
    {
      title: "Lead Generation Agent",
      description:
        "Multi-channel lead capture with automated scoring, segmentation, and personalized email sequences. Tailored agent that integrates with your CRM and marketing tools for optimal lead management and conversion.",
      tech: ["N8N", "HubSpot", "Salesforce", "Mailchimp", "Zapier"],
      results: "400% increase in qualified leads",
      integrations: "12+ marketing & CRM APIs",
      timeline: "2-3 weeks delivery",
      link: "https://cal.com/khalid-umar/30min?overlayCalendar=true",
    },
    {
      title: "Financial Reporting Agent",
      description:
        "Automated financial data aggregation from multiple sources with real-time reporting and alert systems. Custom agent that streamlines month-end processes and provides executive-level insights instantly.",
      tech: ["N8N", "QuickBooks", "Xero", "Excel", "Google Sheets"],
      results: "80% reduction in reporting time",
      integrations: "10+ accounting & finance APIs",
      timeline: "3-4 weeks delivery",
      link: "https://cal.com/khalid-umar/30min?overlayCalendar=true",
    },
    {
      title: "Customer Support Agent",
      description:
        "Intelligent ticket routing, automated responses, and escalation workflows. Custom-built agent that integrates helpdesk and communication tools for seamless 24/7 customer support operations.",
      tech: ["N8N", "Zendesk", "Intercom", "Slack", "Microsoft Teams"],
      results: "60% faster response times",
      integrations: "8+ support & communication APIs",
      timeline: "2-3 weeks delivery",
      link: "https://cal.com/khalid-umar/30min?overlayCalendar=true",
    },
    {
      title: "Social Media Agent",
      description:
        "Automated content scheduling, engagement monitoring, and performance analytics across multiple platforms. Custom agent that streamlines social media operations with intelligent content curation and automated engagement.",
      tech: ["N8N", "Buffer", "Hootsuite", "Instagram", "Twitter"],
      results: "70% increase in engagement",
      integrations: "6+ social media APIs",
      timeline: "2-3 weeks delivery",
      link: "https://cal.com/khalid-umar/30min?overlayCalendar=true",
    },
    {
      title: "HR Onboarding Automation",
      description:
        "Complete employee onboarding workflow from application to first day. Automates document collection, background checks, IT provisioning, and training schedules while maintaining personal touch points throughout the process.",
      tech: ["N8N", "BambooHR", "DocuSign", "Google Workspace", "Slack"],
      results: "50% faster onboarding",
      integrations: "9+ HR APIs",
      timeline: "9 weeks delivery",
      link: "https://cal.com/khalid-umar/30min?overlayCalendar=true",
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Minimal Header */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/5'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex items-center justify-between h-20'>
            <div className='flex items-center'>
              <a
                href='/'
                className='text-xl font-light text-black tracking-wide hover:opacity-70 transition-opacity duration-300'
              >
                Nutshell Bytes
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-black/90 transition-all duration-300 transform hover:scale-105'
              >
                Book Call
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative overflow-hidden bg-white pt-20 pb-32'
      >
        {/* Floating Dots */}
        <div ref={dotsRef} className='absolute inset-0 pointer-events-none'>
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className='absolute w-2 h-2 bg-black/20 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          {/* Two Column Layout */}
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20'>
            {/* Left Column - Main Content */}
            <div className='text-center lg:text-left'>
              {/* Animated Badge */}
              <div
                ref={badgeRef}
                className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-black/5 rounded-full text-xs sm:text-sm font-medium text-black/60 mb-8 cursor-pointer transition-all duration-300 hover:bg-black/10'
              >
                <div className='w-1.5 h-1.5 bg-black rounded-full'></div>
                <span>N8N Automation Specialists</span>
              </div>

              {/* Animated Heading */}
              <h1
                ref={titleRef}
                className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight'
              >
                <span className='word inline-block text-black font-extralight'>
                  Automate
                </span>
                <br />
                <span className='word inline-block text-black font-medium'>
                  Different
                </span>
              </h1>

              {/* Animated Subtitle */}
              <p
                ref={subtitleRef}
                className='text-lg sm:text-xl md:text-2xl text-black/60 mb-8 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0'
              >
                We create and sell custom N8N workflow agents that automate your
                business processes. Ready-to-deploy solutions that save time,
                reduce errors, and scale your operations effortlessly.
              </p>

              {/* CTA Buttons */}
              <div
                ref={buttonsRef}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 opacity-0'
              >
                <a
                  href="mailto:team@nutshellbytes.com?subject=N8N Automation Strategy Call&body=Hi, I'm interested in discussing N8N automation solutions for my business."
                  className='bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-black/90 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-1 w-full sm:w-auto text-center'
                >
                  <span className='flex items-center justify-center gap-2'>
                    Discuss Your Needs
                    <ArrowRight className='w-4 h-4' />
                  </span>
                </a>
                <a
                  href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg border border-black/20 hover:border-black/40 hover:bg-black hover:text-white transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto text-center'
                >
                  Book Demo
                </a>
              </div>
            </div>

            {/* Right Column - Workflow Agent Showcase */}
            <div className='n8n-highlights relative'>
              {/* Agent Portfolio Preview */}
              <div className='text-center mb-8 opacity-0'>
                <div className='w-32 h-32 bg-gradient-to-br from-black to-gray-700 rounded-3xl flex items-center justify-center mx-auto mb-6 hover:scale-105 transition-transform duration-300'>
                  <Bot className='w-16 h-16 text-white' />
                </div>
                <h3 className='text-2xl font-light text-black mb-2'>
                  Workflow Agents
                </h3>
                <p className='text-black/60 text-sm'>
                  Ready-to-deploy automation solutions
                </p>
              </div>

              {/* Popular Agents Preview */}
              <div className='space-y-4 opacity-0'>
                <div className='flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-black/10 hover:border-black/20 transition-all duration-300'>
                  <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs font-bold'>E</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-black font-medium text-xs'>
                      E-commerce Agent
                    </p>
                    <p className='text-black/60 text-xs'>
                      Complete order processing automation
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-black/10 hover:border-black/20 transition-all duration-300'>
                  <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs font-bold'>L</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-black font-medium text-xs'>
                      Lead Gen Agent
                    </p>
                    <p className='text-black/60 text-xs'>
                      Smart lead capture & nurturing
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-black/10 hover:border-black/20 transition-all duration-300'>
                  <div className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs font-bold'>S</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-black font-medium text-xs'>
                      Support Agent
                    </p>
                    <p className='text-black/60 text-xs'>
                      Intelligent ticket management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Metrics Section */}
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-light text-white mb-4'>
              Our Track Record
            </h2>
            <p className='text-xl text-white/70 font-light'>
              Delivering measurable success with custom N8N automation solutions
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Workflow Agents Sold */}
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Bot className='w-8 h-8 text-black' />
              </div>
              <h3 className='text-4xl md:text-5xl font-light text-white mb-2'>
                50+
              </h3>
              <p className='text-white/70 text-sm uppercase tracking-wider'>
                Agents Deployed
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <TrendingUp className='w-8 h-8 text-black' />
              </div>
              <h3 className='text-4xl md:text-5xl font-light text-white mb-2'>
                98%
              </h3>
              <p className='text-white/70 text-sm uppercase tracking-wider'>
                Client Satisfaction
              </p>
            </div>

            {/* ROI for Clients */}
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Target className='w-8 h-8 text-black' />
              </div>
              <h3 className='text-4xl md:text-5xl font-light text-white mb-2'>
                300%
              </h3>
              <p className='text-white/70 text-sm uppercase tracking-wider'>
                Average ROI
              </p>
            </div>

            {/* Industries Served */}
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Users className='w-8 h-8 text-black' />
              </div>
              <h3 className='text-4xl md:text-5xl font-light text-white mb-2'>
                15+
              </h3>
              <p className='text-white/70 text-sm uppercase tracking-wider'>
                Industries Served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-32 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-light text-black mb-6'>
              Why Choose Our Agents
            </h2>
            <p className='text-xl text-black/60 max-w-3xl mx-auto font-light'>
              Custom-built, tested, and optimized N8N workflow agents tailored for your business needs
            </p>
          </div>

          <div
            ref={featuresRef}
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {n8nFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className='bg-white border border-black/10 rounded-2xl p-8 hover:border-black/30 transition-all duration-500 group cursor-pointer'
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className='mb-6'>
                  <feature.icon className='w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300' />
                </div>
                <h3 className='text-xl font-medium text-black mb-4 leading-tight'>
                  {feature.title}
                </h3>
                <p className='text-black/60 font-light leading-relaxed'>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Agent Catalog */}
      <section className='py-32 bg-white border-t border-black/10'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-light text-black mb-6'>
              Workflow Agent Catalog
            </h2>
            <p className='text-xl text-black/60 max-w-3xl mx-auto font-light'>
              Custom N8N automation solutions we've built for businesses like yours
            </p>
          </div>

          <div
            ref={projectsRef}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {n8nProjects.map((project, index) => (
              <motion.div
                key={index}
                className='bg-white border border-black/10 rounded-2xl overflow-hidden group hover:border-black/30 transition-all duration-500'
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className='p-8'>
                  <h3 className='text-xl font-medium text-black mb-4 leading-tight'>
                    {project.title}
                  </h3>
                  <p className='text-black/60 font-light mb-6 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Agent Details */}
                  <div className='space-y-2 mb-4'>
                    <div className='flex items-center gap-2 text-xs'>
                      <div className='w-1.5 h-1.5 bg-green-500 rounded-full'></div>
                      <span className='font-medium text-black'>
                        {project.results}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-xs'>
                      <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                      <span className='text-black/60'>
                        {project.integrations}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-xs'>
                      <div className='w-1.5 h-1.5 bg-orange-500 rounded-full'></div>
                      <span className='text-black/60'>{project.timeline}</span>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-1 mb-6'>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='text-xs px-2 py-1 bg-black/5 text-black/60 rounded-md'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Discuss Project Button */}
                  <div className='pt-4 border-t border-black/10'>
                    <motion.a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='w-full bg-black text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition-colors duration-300 text-center inline-block'
                    >
                      Discuss This Agent
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-32 bg-white border-t border-black/10'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-5xl md:text-6xl font-light text-black mb-8'>
            Ready to Automate?
          </h2>
          <p className='text-xl text-black/60 mb-12 font-light max-w-2xl mx-auto leading-relaxed'>
            Let's discuss your automation needs and create custom workflow
            agents for your business. Each project includes full setup support
            and ongoing maintenance.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <a
              href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2'
            >
              Schedule Discussion
              <ArrowRight className='w-5 h-5' />
            </a>
            <a
              href="mailto:team@nutshellbytes.com?subject=N8N Workflow Agent Inquiry&body=Hi, I'm interested in discussing custom workflow agents for my business."
              className='border border-black text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105'
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-16 bg-white border-t border-black/10'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center'>
            <div className='text-2xl font-light text-black mb-4'>
              Nutshell Bytes
            </div>
            <p className='text-black/60 font-light mb-6'>
              N8N Automation Specialists
            </p>
            <div className='flex justify-center items-center gap-8 text-black/60'>
              <a
                href='mailto:team@nutshellbytes.com'
                className='hover:text-black transition-colors duration-300 font-light'
              >
                team@nutshellbytes.com
              </a>
              <span className='text-black/20'>|</span>
              <a
                href='https://cal.com/khalid-umar/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-black transition-colors duration-300 font-light'
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default N8NPage;
