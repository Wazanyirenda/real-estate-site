'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const fadeInUpDelay = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.1 }
  };
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20site%20with%20surveying%20equipment%2C%20land%20development%20tools%2C%20blueprints%20and%20measuring%20instruments%2C%20zambian%20construction%20workers%20in%20safety%20gear%2C%20modern%20construction%20equipment&width=1200&height=600&seq=services-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white max-w-4xl px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          {...fadeInUp}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl font-light"
          {...fadeInUpDelay}
        >
          Comprehensive real estate solutions for all your property needs
        </motion.p>
      </div>
    </section>
  );
}