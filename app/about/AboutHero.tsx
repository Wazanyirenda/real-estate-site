'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const fadeInUpDelay = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.3 }
  };

  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20modern%20real%20estate%20office%20building%20with%20glass%20facade%20and%20landscaping%2C%20corporate%20headquarters%20architecture%2C%20blue%20hour%20lighting%2C%20contemporary%20design%2C%20zambian%20commercial%20building&width=1200&height=600&seq=about-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white max-w-4xl px-4">
        {/* TODO: Replace with professional photo of Calm Mountain Properties office building or aerial view of developments */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          {...fadeInUp}
        >
          Zambia's Compass for Land Ownership Dreams
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl font-light"
          {...fadeInUpDelay}
        >
          Where wanderers find their destiny and aspirations take root
        </motion.p>
      </div>
    </section>
  );
}