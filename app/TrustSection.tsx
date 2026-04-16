'use client';

import { motion } from 'framer-motion';
import { ClockCounterClockwise, Eye, MapPin, ShieldCheck } from 'phosphor-react';

export default function TrustSection() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Legal Compliance',
      description: 'All properties come with proper title deeds and legal documentation verified by our legal team.'
    },
    {
      icon: Eye,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise costs. What you see is what you pay with our clear pricing structure.'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategic locations near airports, shopping centers, and major roads for maximum investment value.'
    },
    {
      icon: ClockCounterClockwise,
      title: 'Proven Track Record',
      description: 'Years of successful property development and satisfied clients across Kabwe, Kitwe, and Ndola.'
    }
  ];

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#f7b733] font-bold text-xs uppercase tracking-[0.3em] mb-4">Why Clients Trust Us</p>
          <h2 className="text-4xl font-bold text-white mb-4 max-w-3xl">
            Why Choose Calm Mountain?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            We believe in clear pricing, legal security, and honest service. Our clients trust us because we deliver on our promises every time.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index} 
              className="bg-white/5 border border-white/10 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-14 h-14 bg-[#f7b733]/15 flex items-center justify-center mb-6">
                <point.icon size={24} weight="fill" className="text-[#f7b733]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase leading-tight">{point.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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