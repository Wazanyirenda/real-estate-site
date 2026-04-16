'use client';

import { motion } from 'framer-motion';
import { Medal, IdentificationBadge, Handshake, MapPinLine, Scales, Users } from 'phosphor-react';

const reasons = [
  {
    icon: Medal,
    title: 'High-Quality Products & Services',
    description:
      'We provide high-quality products and services backed by multifaceted expertise in real estate and property development.',
  },
  {
    icon: IdentificationBadge,
    title: 'Diligent Service Execution',
    description:
      'We serve our clients diligently and ensure thorough execution of all services, from initial consultation to final delivery.',
  },
  {
    icon: Handshake,
    title: 'Reliable Partnership',
    description:
      'We guarantee a partnership with a reliable real estate agency and property developer you can trust for your investments.',
  },
  {
    icon: MapPinLine,
    title: 'Strategic Locations',
    description:
      'Properties in prime locations across Ndola, Kitwe, and Kabwe with excellent growth potential and infrastructure.',
  },
  {
    icon: Scales,
    title: 'Complete Legal Support',
    description:
      'Full legal support for land title processing and documentation, ensuring secure and legitimate property ownership.',
  },
  {
    icon: Users,
    title: 'Customer-First Approach',
    description:
      'Our commitment to customer satisfaction drives every decision we make, ensuring personalised service for each client.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-[#f7b733] font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Our Commitment
          </p>
          <h2 className="text-4xl font-bold text-white uppercase leading-tight mb-4">
            Why Choose Calm Mountain?
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {reasons.slice(0, 4).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="bg-[#0a192f] p-10 flex flex-col group hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="w-11 h-11 bg-[#f7b733]/15 flex items-center justify-center mb-6 group-hover:bg-[#f7b733]/25 transition-colors">
                  <Icon size={20} weight="fill" className="text-[#f7b733]" />
                </div>
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 mt-px">
          {reasons.slice(4).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="bg-[#0a192f] p-10 flex flex-col group hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="w-11 h-11 bg-[#f7b733]/15 flex items-center justify-center mb-6 group-hover:bg-[#f7b733]/25 transition-colors">
                  <Icon size={20} weight="fill" className="text-[#f7b733]" />
                </div>
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
