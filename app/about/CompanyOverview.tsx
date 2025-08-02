'use client';

import { motion } from 'framer-motion';

export default function CompanyOverview() {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInLeft}>
            <motion.h2 
              className="text-4xl font-bold text-[#0a192f] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The Calm Mountain Difference
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Calm Mountain is a reputable property developer and real estate agency with branches in Ndola and Kitwe. We pride ourselves on providing top-notch real estate services to individuals and businesses looking to buy, sell, or rent properties within and outside the region.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our main goal is to provide easy access to land for the Zambian people and ensure the proper management of properties in the country. As the sun arcs across the savannah, we stand sentinel, guardians of dreams, stewards of prosperity, making land ownership accessible to every family.
            </motion.p>
            {/* Removed stats badges per request */}
          </motion.div>
          <motion.div className="relative" {...fadeInRight}>
            {/* TODO: Add professional photo of Calm Mountain Properties team working together or company office exterior */}
            <img 
              src="/images/company-team.jpg"
              alt="Calm Mountain Properties Team"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}