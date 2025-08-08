'use client';

import { motion } from 'framer-motion';

export default function OurClients() {
  const clientTypes = [
    {
      icon: 'ri-home-heart-line',
      title: 'Residential Property Buyers & Sellers',
      description: 'Individuals and families looking to buy or sell homes. We help you find your dream home or get the best value for your property.',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Commercial Property Investors',
      description: 'Businesses and investors involved in the purchase or sale of commercial real estate. We provide strategic insights for profitable investments.',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-plant-line',
      title: 'Farm Property Clients',
      description: 'Individuals or entities interested in buying or selling agricultural land or farms. We understand the unique needs of agricultural investments.',
      color: 'bg-amber-500'
    }
  ];

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Who We Serve</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide tailored real estate solutions for diverse client needs across Zambia
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`w-24 h-24 ${client.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${client.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{client.title}</h3>
              <p className="text-gray-300 leading-relaxed">{client.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you're a first-time buyer, seasoned investor, or agricultural entrepreneur, we have the expertise and resources to meet your unique real estate needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
