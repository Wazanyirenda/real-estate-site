'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Plot Sales',
      description: 'Premium residential plots in prime locations across Zambia with flexible payment plans.',
      features: ['Titled and beaconed plots', 'Various sizes available', 'Flexible payment terms', 'Prime locations'],
      // TODO: Add downloaded image for Plot Sales (e.g., beautiful residential plot with survey markers, 400x300 landscape)
    },
    {
      icon: 'ri-building-line',
      title: 'Estate Planning',
      description: 'Comprehensive estate development planning and infrastructure design services.',
      features: ['Master planning', 'Infrastructure design', 'Zoning analysis', 'Development permits'],
      // TODO: Add downloaded image for Estate Planning (e.g., architectural blueprints on table, 400x300 landscape)
    },
    {
      icon: 'ri-file-text-line',
      title: 'Title Processing',
      description: 'Fast and reliable title deed processing and documentation services.',
      features: ['Title deed processing', 'Legal documentation', 'Property registration', 'Compliance verification'],
      // TODO: Add downloaded image for Title Processing (e.g., legal documents on desk, 400x300 landscape)
    },
    {
      icon: 'ri-tools-line',
      title: 'Construction Supervision',
      description: 'Professional construction supervision and project management services.',
      features: ['Project management', 'Quality control', 'Timeline management', 'Budget oversight'],
      // TODO: Add downloaded image for Construction Supervision (e.g., supervisor on construction site, 400x300 landscape)
    },
    {
      icon: 'ri-compass-3-line',
      title: 'Land Surveying',
      description: 'Accurate land surveying and mapping services for property development.',
      features: ['Topographic surveys', 'Boundary surveys', 'Construction surveys', 'GPS mapping'],
      // TODO: Add downloaded image for Land Surveying (e.g., surveyor using equipment in field, 400x300 landscape)
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
    transition: { staggerChildren: 0.3, delayChildren: 0.3 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-[#0a192f] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Complete real estate solutions from plot sales to construction supervision
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="space-y-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              variants={staggerItem}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-3xl font-bold text-[#0a192f] mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-[#f7b733] mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="bg-[#f7b733] text-white px-8 py-3 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer whitespace-nowrap">
                  Get Quote
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {/* TODO: Add downloaded image for {service.title} here (400x300 landscape) */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}