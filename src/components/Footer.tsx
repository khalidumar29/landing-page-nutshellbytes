"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
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
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <footer className='bg-black/[0.02] border-t border-black/10 py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          className='text-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {/* Minimal Company Info */}
          <motion.div variants={itemVariants} className='mb-12'>
            <div className='mb-8'>
              <h3 className='text-3xl font-light text-black tracking-tight'>
                Nutshell Bytes
              </h3>
            </div>
            <p className='text-black/60 mb-8 leading-relaxed font-light max-w-2xl mx-auto'>
              Creating digital experiences that matter.
            </p>

            {/* Clean contact info */}
            <div className='space-y-2 mb-8'>
              <a
                href='mailto:team@nutshellbytes.com'
                className='block text-black/60 hover:text-black transition-colors duration-300 font-medium'
              >
                team@nutshellbytes.com
              </a>
              <a
                href='https://cal.com/khalid-umar/30min?overlayCalendar=true'
                target='_blank'
                rel='noopener noreferrer'
                className='block text-black/60 hover:text-black transition-colors duration-300 font-medium'
              >
                Book a Call
              </a>
            </div>

            {/* Minimal social links */}
            <div className='flex justify-center space-x-6'>
              <a
                href='#'
                className='w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
              >
                <Github className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
              >
                <Twitter className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
              >
                <Linkedin className='w-4 h-4' />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className='text-lg font-semibold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#home'
                  className='text-primary-300 hover:text-accent-400 transition-colors duration-200'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-primary-300 hover:text-accent-400 transition-colors duration-200'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-primary-300 hover:text-accent-400 transition-colors duration-200'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#portfolio'
                  className='text-primary-300 hover:text-accent-400 transition-colors duration-200'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-primary-300 hover:text-accent-400 transition-colors duration-200'
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className='text-lg font-semibold mb-6'>Services</h4>
            <ul className='space-y-3'>
              <li>
                <span className='text-primary-300'>SaaS Development</span>
              </li>
              <li>
                <span className='text-primary-300'>UI/UX Design</span>
              </li>
              <li>
                <span className='text-primary-300'>Web Development</span>
              </li>
              <li>
                <span className='text-primary-300'>Consulting</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Clean copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='border-t border-black/10 mt-12 pt-8 text-center'
        >
          <p className='text-black/40 text-sm font-light'>
            © {new Date().getFullYear()} Nutshell Bytes. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
