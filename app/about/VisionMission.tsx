'use client';

import { motion } from 'framer-motion';

export default function VisionMission() {
  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div 
            className="bg-[#0a192f] p-12 rounded-lg text-white"
            variants={staggerItem}
          >
            <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
              <i className="ri-eye-line text-2xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the compass for wanderers and the architect of aspirations across Zambia. We envision a future where every Zambian family has access to their own patch of land, creating sustainable communities where dreams take root and prosperity flourishes for generations.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#f7b733] p-12 rounded-lg text-white"
            variants={staggerItem}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <i className="ri-target-line text-2xl text-[#f7b733]"></i>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To bridge sky and earth, granting Zambians keys to their own patches of land. We stand as guardians of dreams and stewards of prosperity, providing comprehensive real estate services where deeds meet destiny, and where land becomes legacy for future generations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}