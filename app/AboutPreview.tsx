'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-[#0a192f] mb-6">
              About Calm Mountain
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded in 2022, Calm Mountain is a property developer and real estate agency headquartered in Ndola with branches in Kitwe and Kabwe.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide end-to-end real estate services across Zambia, including property sales, sales consultancy, property management, land title processing, construction, and plot sales.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to take the next step?
            </p>
            <Link
              href="/about"
              className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
            >
              Learn More
            </Link>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/images/about-team.jpg"
              alt="About Calm Mountain"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}