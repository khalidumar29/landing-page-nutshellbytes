"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, TrendingUp, Clock } from "lucide-react";

const N8NPage = () => {
  const benefits = [
    {
      icon: <Zap className='w-8 h-8 text-accent-500' />,
      title: "Instant Automation",
      description: "Transform manual tasks into automated workflows in minutes",
    },
    {
      icon: <TrendingUp className='w-8 h-8 text-accent-500' />,
      title: "Boost Productivity",
      description:
        "Save 40+ hours per week with intelligent process automation",
    },
    {
      icon: <Clock className='w-8 h-8 text-accent-500' />,
      title: "24/7 Operations",
      description: "Your business runs smoothly even when you're not working",
    },
  ];

  const solutions = [
    "Data sync between multiple platforms",
    "Automated email marketing campaigns",
    "Lead qualification and routing",
    "Invoice generation and tracking",
    "Social media content scheduling",
    "Customer support ticket management",
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='bg-white border-b border-primary-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-primary-900'>
                N8N Solutions
              </h1>
            </div>
            <nav className='hidden md:flex space-x-8'>
              <a
                href='#solutions'
                className='text-primary-600 hover:text-primary-900 transition-colors'
              >
                Solutions
              </a>
              <a
                href='#benefits'
                className='text-primary-600 hover:text-primary-900 transition-colors'
              >
                Benefits
              </a>
              <a
                href='#contact'
                className='text-primary-600 hover:text-primary-900 transition-colors'
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-5xl md:text-6xl font-bold text-primary-900 mb-6'
            >
              Stop Wasting Time on
              <span className='text-accent-600 block'>Manual Tasks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-xl text-primary-600 mb-8 max-w-3xl mx-auto'
            >
              Transform your business with powerful N8N automation workflows.
              Connect your tools, automate repetitive tasks, and focus on what
              matters most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <button className='bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors flex items-center justify-center gap-2'>
                Get Free Consultation
                <ArrowRight className='w-5 h-5' />
              </button>
              <button className='border border-primary-300 text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors'>
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id='benefits' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-primary-900 mb-4'>
              Why Choose N8N Automation?
            </h2>
            <p className='text-xl text-primary-600 max-w-3xl mx-auto'>
              Unlock your business potential with workflow automation that
              actually works
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors'
              >
                <div className='flex justify-center mb-4'>{benefit.icon}</div>
                <h3 className='text-2xl font-semibold text-primary-900 mb-4'>
                  {benefit.title}
                </h3>
                <p className='text-primary-600'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id='solutions' className='py-20 bg-primary-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-primary-900 mb-6'>
                Automate Everything That Slows You Down
              </h2>
              <p className='text-xl text-primary-600 mb-8'>
                From simple data transfers to complex multi-step workflows, N8N
                can automate virtually any business process.
              </p>

              <div className='space-y-4'>
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='flex items-center gap-3'
                  >
                    <CheckCircle className='w-6 h-6 text-accent-500 flex-shrink-0' />
                    <span className='text-primary-700'>{solution}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded-2xl shadow-2xl p-8'
              >
                <div className='text-center'>
                  <div className='text-4xl font-bold text-accent-600 mb-2'>
                    40+
                  </div>
                  <div className='text-primary-600 mb-6'>
                    Hours Saved Weekly
                  </div>

                  <div className='text-4xl font-bold text-accent-600 mb-2'>
                    95%
                  </div>
                  <div className='text-primary-600 mb-6'>Error Reduction</div>

                  <div className='text-4xl font-bold text-accent-600 mb-2'>
                    24/7
                  </div>
                  <div className='text-primary-600'>Continuous Operation</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-br from-accent-600 to-accent-800'
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Automate Your Business?
            </h2>
            <p className='text-xl text-accent-100 mb-8'>
              Get a free consultation and discover how N8N can transform your
              workflows
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-accent-50 transition-colors flex items-center justify-center gap-2'>
                Schedule Free Call
                <ArrowRight className='w-5 h-5' />
              </button>
              <button className='border border-accent-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors'>
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-primary-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold mb-4'>N8N Solutions</h3>
            <p className='text-primary-300 mb-6'>
              Automate your way to success
            </p>
            <div className='flex justify-center space-x-6 text-primary-400'>
              <a
                href='mailto:hello@nutshellbytes.com'
                className='hover:text-white transition-colors'
              >
                hello@nutshellbytes.com
              </a>
              <span>|</span>
              <a
                href='tel:+1-555-123-4567'
                className='hover:text-white transition-colors'
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default N8NPage;
