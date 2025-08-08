'use client';

import { motion } from 'framer-motion';

export default function CoreValues() {
  const values = [
    {
      icon: 'ri-shield-star-line',
      title: 'Reliability and Diligence',
      description: 'We deliver on our promises with unwavering dedication and thorough execution in every project we undertake.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Accountability',
      description: 'We take full responsibility for our actions and commitments, ensuring transparency in all our dealings.'
    },
    {
      icon: 'ri-award-line',
      title: 'Service Excellence',
      description: 'We strive to exceed expectations through superior service delivery and attention to detail.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards, building trust through honest and fair practices.'
    },
    {
      icon: 'ri-star-line',
      title: 'Quality Products and Services',
      description: 'We maintain the highest standards in all our offerings, from land development to property management.'
    },
    {
      icon: 'ri-team-line',
      title: 'Customer First',
      description: 'Our clients are at the heart of everything we do. Their success and satisfaction drive our decisions.'
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
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide every decision we make and every service we provide
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
