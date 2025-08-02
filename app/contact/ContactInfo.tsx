
'use client';

import { motion } from 'framer-motion';

export default function ContactInfo() {
  const offices = [
    {
      city: 'Ndola',
      title: 'Main Office',
      address: 'No. 7 Chinika Road, Northrise',
      phone: '+260 761 370 566',
      email: 'info@calmountainproperties.com',
      icon: 'ri-map-pin-line'
    },
    {
      city: 'Kabwe',
      title: 'Kabwe Office',
      address: 'No. 204-214a Lusito Street',
      phone: '+260 761 370 566 / +260 962 453 695',
      email: 'info@calmountainproperties.com',
      icon: 'ri-map-pin-line'
    },
    {
      city: 'Kitwe',
      title: 'Kitwe Office',
      address: 'No. 115 Luela Rd, off Cent street Nkana East',
      phone: '+260 761 370 566 / +260 768 935 521',
      email: 'info@calmountainproperties.com',
      icon: 'ri-map-pin-line'
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
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-[#0a192f] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Offices
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit us at any of our convenient locations across Zambia
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {offices.map((office, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${office.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a192f] mb-2">{office.city}</h3>
              <p className="text-[#f7b733] font-semibold mb-4">{office.title}</p>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center">
                  <i className="ri-map-pin-line text-[#f7b733] mr-2"></i>
                  <span className="text-sm">{office.address}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  <i className="ri-phone-line text-[#f7b733] mr-2"></i>
                  <span className="text-sm">{office.phone}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  <i className="ri-mail-line text-[#f7b733] mr-2"></i>
                  <span className="text-sm">{office.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#f5f5f5] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Business Hours</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h4 className="font-semibold text-[#0a192f] mb-2">Weekdays</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a192f] mb-2">Weekends</h4>
                <p>Saturday: 8:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
