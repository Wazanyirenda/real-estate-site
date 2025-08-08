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
            <h2 className="text-4xl font-bold text-[#0a192f] mb-6">About Calm Mountain</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Founded in 2022, Calm Mountain has become a reputable property developer and real estate agency with its Head Office in Ndola and Branches in Kitwe and Kabwe. The company prides itself on providing top-notch real estate services to individuals and businesses looking to buy, sell, or rent properties within Zambia and outside the region.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help individuals and businesses buy, sell, rent, and develop property across Zambia and the region, with clear processes and reliable service.
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
              <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Our Purpose</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our goal is to make land ownership accessible to Zambians and to ensure properties are professionally managed throughout the country.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We focus on transparency, legal certainty, and service excellence to turn property goals into long-term value.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f7b733] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">First in class real estate service provider</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f7b733] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Multifaceted expertise in property development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f7b733] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Trusted partner for land ownership dreams</p>
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