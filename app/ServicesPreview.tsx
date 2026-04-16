'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPinLine, Buildings } from 'phosphor-react';

export default function ServicesPreview() {
  const services = [
    {
      icon: MapPinLine,
      eyebrow: 'Core Offering',
      title: 'Plot Sales',
      description:
        'Premium serviced plots in strategic locations with documentation support and payment flexibility.',
      points: ['Prime locations', 'Flexible payment plans', 'Documented ownership'],
      image: '/images/estates/greatnorth-estate.png',
      reverse: false,
    },
    {
      icon: Buildings,
      eyebrow: 'Development',
      title: 'Estate Planning',
      description:
        'We plan residential communities with layout design, access routes, utilities coordination, and long-term value in mind.',
      points: ['Site planning', 'Community layout', 'Development strategy'],
      image: '/images/estates/paramount-estate.jpeg',
      reverse: true,
    },
    {
      icon: FileText,
      eyebrow: 'Documentation',
      title: 'Title Processing & Surveying',
      description:
        'We support legal documentation, title deed processes, land surveying, and mapping required to secure and develop property confidently.',
      points: ['Title processing', 'Surveying support', 'Compliance guidance'],
      image: '/images/estates/fatima-estate.jpeg',
      reverse: false,
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-40">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Eyebrow - muted dark on white background */}
          <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4 max-w-3xl">
            Property Services Structured Around Real Ownership
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733] mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl">
            From land acquisition to documentation and development support, our service offering is
            designed to move buyers from interest to ownership with clarity.
          </p>
        </motion.div>

        {/* Split-section service rows */}
        <div className="space-y-0 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 overflow-hidden ${
                  service.reverse ? 'bg-[#f5f5f5]' : 'bg-white'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: service.reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: '-80px' }}
                  className={`flex flex-col justify-center px-8 py-16 md:px-14 ${
                    service.reverse ? 'lg:order-2' : ''
                  }`}
                >
                  {/* Icon box - dark on light background */}
                  <div className="w-12 h-12 bg-[#0a192f] flex items-center justify-center mb-6">
                    <Icon size={22} weight="fill" className="text-white" />
                  </div>
                  {/* Eyebrow - muted dark */}
                  <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
                    {service.eyebrow}
                  </p>
                  <h3 className="text-3xl font-bold text-[#0a192f] uppercase leading-tight mb-4">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#f7b733] mb-6" />
                  <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#0a192f] block shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0a192f] border-b border-[#0a192f] pb-0.5 hover:text-[#f7b733] hover:border-[#f7b733] transition-colors self-start group"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: service.reverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: '-80px' }}
                  className={`relative overflow-hidden h-[320px] lg:h-auto ${
                    service.reverse ? 'lg:order-1' : ''
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    <span className="w-2.5 h-2.5 bg-[#f7b733] block" />
                    <span className="w-2.5 h-2.5 bg-[#0a192f] block opacity-60" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA button - clear space above the next section */}
        <motion.div
          className="text-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <Link
            href="/services"
            className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] border border-[#f7b733] px-10 py-4 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
