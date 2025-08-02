'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: 'ri-shield-check-line',
      title: 'Guaranteed Title Deeds',
      description: 'No surprises. Every plot comes with completed title deed documentation and legal clearance before you pay the final amount.'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Prime Growth Areas',
      description: 'We only develop in Zambia\'s fastest-growing cities near airports and major roads. Your investment grows with the city.',
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Customer Support',
      description: 'Real people, real support. Our team guides you from first visit to key handover. Never deal with automated systems.',
    },
    {
      icon: 'ri-tools-line',
      title: 'Everything Under One Roof',
      description: 'Surveying, documentation, construction planning. We handle it all so you don\'t have to chase multiple companies.',
    },
    {
      icon: 'ri-price-tag-line',
      title: 'Flexible Payment Options',
      description: 'Enjoy flexible payment plans tailored to your needs, making land ownership accessible and stress-free.'
    },
    {
      icon: 'ri-building-line',
      title: 'Ready-to-Build Infrastructure',
      description: 'Access roads, water connections, and electricity lines already in place. Start building immediately after purchase.'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.1 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-[#0a192f] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Makes Us Different
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unlike other developers, we put your peace of mind first. Here's what every client gets when they choose us:
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                <i className={`${reason.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}