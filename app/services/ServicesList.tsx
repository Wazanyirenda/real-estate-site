'use client';

import { motion } from 'framer-motion';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-map-pin-2-line',
      title: 'Plot Sales',
      description: 'Premium serviced plots in prime locations with proper documentation and utilities. We offer flexible payment plans to make land ownership accessible.',
      features: ['Titled & Beaconed Plots', 'Flexible Payment Plans', 'Prime Locations', 'Legal Documentation']
    },
    {
      icon: 'ri-community-line',
      title: 'Estate Planning',
      description: 'Comprehensive estate development and planning services for residential communities. From concept to completion, we handle every detail.',
      features: ['Master Planning', 'Infrastructure Development', 'Community Design', 'Regulatory Compliance']
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Title Processing',
      description: 'Professional title deed processing and legal documentation services. We ensure all legal requirements are met for secure property ownership.',
      features: ['Legal Documentation', 'Title Deed Processing', 'Regulatory Compliance', 'Legal Verification']
    },
    {
      icon: 'ri-hammer-line',
      title: 'Construction Supervision',
      description: 'Expert project management and construction supervision services. We oversee every aspect of your construction project.',
      features: ['Project Management', 'Quality Control', 'Timeline Management', 'Cost Monitoring']
    },
    {
      icon: 'ri-ruler-2-line',
      title: 'Land Surveying',
      description: 'Accurate land surveying and mapping services for property development. Professional surveying ensures precise plot boundaries.',
      features: ['Boundary Surveying', 'Topographic Mapping', 'GPS Technology', 'Survey Reports']
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Property Management',
      description: 'Comprehensive property management services for investors and property owners. We handle maintenance, tenant relations, and more.',
      features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', 'Property Inspections']
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