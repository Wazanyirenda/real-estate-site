'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.1 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.1 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInLeft}>
            <motion.h2 
              className="text-4xl font-bold text-[#0a192f] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your Trusted Partner in Land Ownership
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Calm Mountain Properties makes it easy to own land with confidence. We handle everything from secure plot sales and title processing to surveying and project management so you can invest with peace of mind.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to take the next step?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/about" 
                className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div className="relative" {...fadeInRight}>
            {/* TODO: Replace with professional photo of Calm Mountain Properties team or office building */}
            <img 
              src="/images/about-team.jpg"
              alt="About Calm Mountain Properties"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            {/* Removed: Years Experience badge */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}