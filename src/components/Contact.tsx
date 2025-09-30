"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for lines
      gsap.set([line1Ref.current, line2Ref.current], {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Create timeline for sequential line animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 75%",
          end: "center 50%",
          scrub: 0.5,
        },
      });

      // First line animates from Analysis to Roadmap
      tl.to(line1Ref.current, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })
        // Second line animates from Roadmap to Guidance with slight delay
        .to(
          line2Ref.current,
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section id='contact' className='py-32 bg-white relative overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <motion.div variants={itemVariants}>
            <div className='mb-4'>
              <span className='inline-block w-12 h-px bg-black mb-8'></span>
            </div>
            <h2 className='text-6xl md:text-8xl font-light mb-8 tracking-tight text-black'>
              Ready to Build
            </h2>
            <div className='w-24 h-px bg-black mx-auto mb-8'></div>
            <p className='text-lg text-black/70 max-w-2xl mx-auto leading-relaxed font-light'>
              Let's create something exceptional together. Schedule a
              conversation or reach out directly.
            </p>
          </motion.div>
        </motion.div>

        <div className='max-w-2xl mx-auto text-center mb-20'>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            whileHover='hover'
            viewport={{ once: true }}
            className='bg-black rounded-2xl p-12 text-white'
          >
            <div className='mb-8'>
              <Calendar className='w-12 h-12 text-white mx-auto mb-4' />
              <h3 className='text-2xl font-light mb-2'>Strategy Call</h3>
              <p className='text-white/70'>30-minute consultation</p>
            </div>

            <div ref={stepsRef} className='relative mb-8'>
              <div className='flex items-center justify-center text-sm relative'>
                <div className='text-center relative'>
                  <div className='w-3 h-3 bg-white rounded-full mx-auto mb-2 relative z-10'></div>
                  <span className='text-white/80'>Analysis</span>
                </div>

                {/* First connecting line */}
                <div className='mx-8 relative'>
                  <div
                    ref={line1Ref}
                    className='h-px bg-white/60 w-16'
                    style={{ marginTop: "-18px" }}
                  ></div>
                </div>

                <div className='text-center relative'>
                  <div className='w-3 h-3 bg-white rounded-full mx-auto mb-2 relative z-10'></div>
                  <span className='text-white/80'>Roadmap</span>
                </div>

                {/* Second connecting line */}
                <div className='mx-8 relative'>
                  <div
                    ref={line2Ref}
                    className='h-px bg-white/60 w-16'
                    style={{ marginTop: "-18px" }}
                  ></div>
                </div>

                <div className='text-center relative'>
                  <div className='w-3 h-3 bg-white rounded-full mx-auto mb-2 relative z-10'></div>
                  <span className='text-white/80'>Guidance</span>
                </div>
              </div>
            </div>

            <a
              href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full bg-white text-black py-4 px-8 rounded-xl font-medium text-base hover:bg-white/90 transition-all duration-200 group'
            >
              <span className='flex items-center justify-center gap-2'>
                Schedule Call
                <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200' />
              </span>
            </a>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          <motion.div
            variants={cardVariants}
            whileHover='hover'
            className='text-center p-6'
          >
            <div className='bg-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Mail className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-lg font-light text-black mb-2'>Email</h3>
            <a
              href='mailto:team@nutshellbytes.com'
              className='text-black font-medium hover:text-black/70 transition-colors'
            >
              team@nutshellbytes.com
            </a>
            <p className='text-black/60 text-sm mt-1'>24h response</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover='hover'
            className='text-center p-6'
          >
            <div className='bg-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Sparkles className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-lg font-light text-black mb-2'>Quick Chat</h3>
            <p className='text-black font-medium'>Instant consultation</p>
            <p className='text-black/60 text-sm mt-1'>Project guidance</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover='hover'
            className='text-center p-6'
          >
            <div className='bg-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
              <CheckCircle className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-lg font-light text-black mb-2'>Process</h3>
            <p className='text-black font-medium'>Transparent approach</p>
            <p className='text-black/60 text-sm mt-1'>Clear timeline</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
