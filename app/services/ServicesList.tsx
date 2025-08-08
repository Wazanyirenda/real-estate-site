'use client';

import { motion } from 'framer-motion';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-home-line',
      title: 'Property Sales',
      description: 'Facilitating the buying and selling of residential, commercial, and farm properties. We connect buyers with their ideal properties and help sellers achieve the best value.',
      features: ['Residential Properties', 'Commercial Real Estate', 'Agricultural Land', 'Professional Valuation']
    },
    {
      icon: 'ri-map-pin-2-line',
      title: 'Plot Sales',
      description: 'Selling individual plots of land in prime locations across Zambia. All plots come with proper documentation and flexible payment options.',
      features: ['Titled Plots', 'Prime Locations', 'Flexible Payment Plans', 'Infrastructure Ready']
    },
    {
      icon: 'ri-user-voice-line',
      title: 'Sales Consultancy',
      description: 'Providing expert advice and guidance related to property sales. Our consultants help you make informed decisions about your real estate investments.',
      features: ['Market Analysis', 'Investment Advisory', 'Negotiation Support', 'Legal Guidance']
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Property Management',
      description: 'Overseeing and managing properties on behalf of owners. We ensure your property maintains its value while generating optimal returns.',
      features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', 'Property Inspections']
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Land Title Processing',
      description: 'Handling all legal procedures and documentation for land ownership. We ensure smooth and legitimate transfer of property rights.',
      features: ['Title Deed Processing', 'Legal Documentation', 'Government Liaison', 'Verification Services']
    },
    {
      icon: 'ri-building-2-line',
      title: 'Construction',
      description: 'Engaging in building and development activities. From residential homes to commercial complexes, we bring your vision to life.',
      features: ['Project Management', 'Quality Construction', 'Timely Delivery', 'Cost-Effective Solutions']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive real estate services to meet all your property needs, from initial planning to final construction.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-16 h-16 bg-[#f7b733]/20 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-[#f7b733]`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#0a192f] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <i className="ri-check-line text-[#f7b733] text-sm"></i>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}