'use client';

import { motion } from 'framer-motion';

export default function TrustSection() {
  const trustPoints = [
    {
      icon: 'ri-shield-check-fill',
      title: 'Legal Compliance',
      description: 'All properties come with proper title deeds and legal documentation verified by our legal team.'
    },
    {
      icon: 'ri-eye-fill',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise costs. What you see is what you pay with our clear pricing structure.'
    },
    {
      icon: 'ri-map-pin-fill',
      title: 'Prime Locations',
      description: 'Strategic locations near airports, shopping centers, and major roads for maximum investment value.'
    },
    {
      icon: 'ri-time-fill',
      title: 'Proven Track Record',
      description: 'Years of successful property development and satisfied clients across Kabwe, Kitwe, and Ndola.'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.1 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Calm Mountain?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We believe in clear pricing, legal security, and honest service. Our clients trust us because we deliver on our promises every time.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {trustPoints.map((point, index) => (
            <motion.div key={index} className="text-center" variants={staggerItem}>
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${point.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Invest in Your Future?</h3>
            <p className="text-gray-300 mb-6">Join hundreds of satisfied property owners who chose Calm Mountain Properties for their land investment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/listings" 
                className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                Browse Available Plots
              </a>
              <a 
                href="/contact" 
                className="border-2 border-[#f7b733] text-[#f7b733] hover:bg-[#f7b733] hover:text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}