'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 bg-[#0a192f] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Ready to Start Your Land Ownership Journey?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Our team is here to answer your questions and guide you every step of the way.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            href="/listings" 
            className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Browse Properties
          </Link>
          
          <Link 
            href="/contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-[#0a192f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}