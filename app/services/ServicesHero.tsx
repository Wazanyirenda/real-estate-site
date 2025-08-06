'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative py-20 bg-[#0a192f] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Comprehensive Real Estate Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            From plot sales to construction supervision, we handle every aspect of your property journey with expertise and care.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}