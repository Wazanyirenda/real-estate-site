'use client';

import { motion } from 'framer-motion';
import { HouseLine, Buildings, Leaf } from 'phosphor-react';

const clientTypes = [
  {
    icon: HouseLine,
    title: 'Residential Buyers & Sellers',
    description:
      'Individuals and families looking to buy or sell homes. We help you find your dream home or get the best value for your property.',
  },
  {
    icon: Buildings,
    title: 'Commercial Property Investors',
    description:
      'Businesses and investors involved in commercial real estate. We provide strategic insights for profitable, long-term investments.',
  },
  {
    icon: Leaf,
    title: 'Farm Property Clients',
    description:
      'Individuals or entities interested in agricultural land or farms. We understand the unique needs of agricultural property investment.',
  },
];

export default function OurClients() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Our Clients
          </p>
          <h2 className="text-4xl font-bold text-[#0a192f] uppercase leading-tight mb-4">
            Who We Serve
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733] mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl">
            We provide tailored real estate solutions for diverse client needs across Zambia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-200">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.title}
                className="bg-white p-10 flex flex-col group hover:bg-[#0a192f] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="w-11 h-11 bg-[#0a192f] flex items-center justify-center mb-6 group-hover:bg-[#f7b733] transition-colors">
                  <Icon size={20} weight="fill" className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a192f] group-hover:text-white text-sm uppercase tracking-wider mb-4 transition-colors">
                  {client.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
