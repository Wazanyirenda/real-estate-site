'use client';

import { motion } from 'framer-motion';

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-[#0a192f] mb-6">About Calm Mountain Properties</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Calm Mountain is a reputable property developer and real estate agency with branches in Ndola and Kitwe. The company prides itself on providing top-notch real estate services to individuals and businesses looking to buy, sell, or rent properties within and outside the region.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our main goal is to empower Zambians with secure land ownership and to support the sustainable development of communities across the country. We are dedicated to making property ownership accessible, providing expert guidance, and delivering comprehensive real estate solutions that create lasting value for individuals, families, and businesses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f7b733] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Professional property development and management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f7b733] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Comprehensive real estate services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f7b733] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Trusted by clients across Zambia</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/about-team.jpg" 
                alt="Calm Mountain Properties Team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}