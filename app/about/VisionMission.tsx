'use client';

import { motion } from 'framer-motion';
import { Eye, Compass } from 'phosphor-react';

export default function VisionMission() {
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
            Direction
          </p>
          <h2 className="text-4xl font-bold text-[#0a192f] uppercase leading-tight mb-4">
            Vision &amp; Mission
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            className="bg-[#0a192f] p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8">
              <Eye size={24} weight="fill" className="text-[#f7b733]" />
            </div>
            <p className="text-[#f7b733] font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Our Vision
            </p>
            <h3 className="text-2xl font-bold uppercase mb-6 leading-tight">
              Leading Property Developer in Zambia
            </h3>
            <div className="w-10 h-0.5 bg-[#f7b733] mb-6" />
            <p className="text-white/70 leading-relaxed text-sm">
              To become the leading property developer and facilitate easy access to land for the
              Zambian people across all regions of the country.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white border border-gray-100 p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="w-12 h-12 bg-[#0a192f] flex items-center justify-center mb-8">
              <Compass size={24} weight="fill" className="text-white" />
            </div>
            <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Our Mission
            </p>
            <h3 className="text-2xl font-bold text-[#0a192f] uppercase mb-6 leading-tight">
              Top-Notch Real Estate Services
            </h3>
            <div className="w-10 h-0.5 bg-[#f7b733] mb-6" />
            <p className="text-gray-600 leading-relaxed text-sm">
              To provide top-notch real estate services and ensure proper management of properties
              throughout Zambia, setting the standard for professionalism and client trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
