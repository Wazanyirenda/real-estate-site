'use client';

import { motion } from 'framer-motion';
import { Buildings, ShieldCheck, MapPinLine, Check } from 'phosphor-react';

export default function CompanyOverview() {
  const points = [
    { icon: Buildings, label: 'First in class real estate service provider' },
    { icon: ShieldCheck, label: 'Multifaceted expertise in property development' },
    { icon: MapPinLine, label: 'Trusted partner for land ownership in Zambia' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section intro */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl font-bold text-[#0a192f] uppercase leading-tight mb-4 max-w-2xl">
            About Calm Mountain
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-2xl font-bold text-[#0a192f] uppercase mb-6">Our Purpose</h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded in 2022, Calm Mountain has become a reputable property developer and real
              estate agency with its Head Office in Ndola and branches in Kitwe and Kabwe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our goal is to make land ownership accessible to Zambians and to ensure properties are
              professionally managed throughout the country, through transparency, legal certainty,
              and service excellence.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0a192f] flex items-center justify-center shrink-0">
                      <Icon size={18} weight="fill" className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed pt-2.5">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right - image */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <img
              src="/images/about-png.png"
              alt="About Calm Mountain Properties"
              className="w-full h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 right-6 flex gap-2">
              <span className="w-2.5 h-2.5 bg-[#f7b733] block" />
              <span className="w-2.5 h-2.5 bg-[#0a192f] block opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
