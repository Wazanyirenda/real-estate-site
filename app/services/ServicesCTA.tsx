'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact us today to discuss your property needs and discover how we can help you achieve your real estate goals.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="bg-[#f7b733] text-white px-8 py-4 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer whitespace-nowrap">
            Get Free Consultation
          </Link>
          <Link href="/listings" className="border-2 border-[#f7b733] text-[#f7b733] px-8 py-4 rounded-lg hover:bg-[#f7b733] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            View Available Plots
          </Link>
        </motion.div>
      </div>
    </section>
  );
}