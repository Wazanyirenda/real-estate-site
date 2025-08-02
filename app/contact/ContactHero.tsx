'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
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
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20zambian%20office%20building%20exterior%2C%20professional%20real%20estate%20company%20headquarters%2C%20contemporary%20architecture%2C%20glass%20facade%2C%20business%20district%2C%20corporate%20building&width=1200&height=600&seq=contact-hero&orientation=landscape')`,
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
          Contact Us
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl font-light"
          {...fadeInUpDelay}
        >
          Get in touch with our team of real estate professionals
        </motion.p>
      </div>
    </section>
  );
}