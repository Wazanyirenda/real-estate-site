
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full min-w-0 overflow-hidden bg-black"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20estate%20in%20Zambia%20with%20beautiful%20houses%2C%20well-planned%20residential%20plots%2C%20professional%20real%20estate%20development%2C%20green%20landscaping%2C%20paved%20roads%2C%20mountain%20views%20in%20background%2C%20golden%20hour%20lighting%2C%20premium%20property%20investment%20opportunity%2C%20contemporary%20African%20architecture&width=1920&height=1080&seq=hero-main-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30"></div>

      <motion.div
        className="container mx-auto px-4 md:px-8 h-full relative z-10 flex items-center pt-20 lg:pt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl text-white">
          <motion.p
            className="text-[#f7b733] text-sm font-bold uppercase tracking-[0.3em] mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Calm Mountain Properties
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Titled Plots & Homes,
            <br />
            <span className="text-[#f7b733]">Made Simple.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Browse verified listings, choose a payment option, and book an inspection fast.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/listings"
              className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-10 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Listings
              <ArrowRight size={16} weight="bold" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 border border-white/30 px-10 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300"
            >
              Talk to an Advisor
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
