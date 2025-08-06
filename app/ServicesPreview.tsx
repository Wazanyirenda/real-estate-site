'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPreview() {
  const services = [
    {
      icon: 'ri-map-pin-2-line',
      title: 'Plot Sales',
      description: 'Premium serviced plots in prime locations with proper documentation and utilities'
    },
    {
      icon: 'ri-community-line',
      title: 'Estate Planning',
      description: 'Comprehensive estate development and planning services for residential communities'
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Title Processing',
      description: 'Professional title deed processing and legal documentation services'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Construction Supervision',
      description: 'Expert project management and construction supervision services'
    },
    {
      icon: 'ri-ruler-2-line',
      title: 'Land Surveying',
      description: 'Accurate land surveying and mapping services for property development'
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">
            All the Services You Need, All in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From finding your perfect plot to handling every detail of documentation and development, our expert team is here to support your property journey from start to finish.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-16 h-16 bg-[#f7b733]/20 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-[#f7b733]`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#0a192f] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link 
            href="/services" 
            className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}