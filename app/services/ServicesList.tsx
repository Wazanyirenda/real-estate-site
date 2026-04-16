'use client';

import { motion } from 'framer-motion';
import { HouseLine, MapPinLine, Megaphone, Gear, FileText, Buildings, Check } from 'phosphor-react';

const services = [
  {
    icon: HouseLine,
    title: 'Property Sales',
    description:
      'Facilitating the buying and selling of residential, commercial, and farm properties. We connect buyers with their ideal properties and help sellers achieve the best value.',
    features: ['Residential Properties', 'Commercial Real Estate', 'Agricultural Land', 'Professional Valuation'],
  },
  {
    icon: MapPinLine,
    title: 'Plot Sales',
    description:
      'Selling individual plots of land in prime locations across Zambia. All plots come with proper documentation and flexible payment options.',
    features: ['Titled Plots', 'Prime Locations', 'Flexible Payment Plans', 'Infrastructure Ready'],
  },
  {
    icon: Megaphone,
    title: 'Sales Consultancy',
    description:
      'Providing expert advice and guidance related to property sales. Our consultants help you make informed decisions about your real estate investments.',
    features: ['Market Analysis', 'Investment Advisory', 'Negotiation Support', 'Legal Guidance'],
  },
  {
    icon: Gear,
    title: 'Property Management',
    description:
      'Overseeing and managing properties on behalf of owners. We ensure your property maintains its value while generating optimal returns.',
    features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', 'Property Inspections'],
  },
  {
    icon: FileText,
    title: 'Land Title Processing',
    description:
      'Handling all legal procedures and documentation for land ownership. We ensure smooth and legitimate transfer of property rights.',
    features: ['Title Deed Processing', 'Legal Documentation', 'Government Liaison', 'Verification Services'],
  },
  {
    icon: Buildings,
    title: 'Construction',
    description:
      'Engaging in building and development activities. From residential homes to commercial complexes, we bring your vision to life.',
    features: ['Project Management', 'Quality Construction', 'Timely Delivery', 'Cost-Effective Solutions'],
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Full Offering
          </p>
          <h2 className="text-4xl font-bold text-[#0a192f] uppercase leading-tight mb-4">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733] mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl">
            We provide comprehensive real estate services to meet all your property needs, from
            initial planning to final construction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white p-10 flex flex-col group hover:bg-[#f5f5f5] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                {/* Dark icon box */}
                <div className="w-11 h-11 bg-[#0a192f] flex items-center justify-center mb-6 group-hover:bg-[#f7b733] transition-colors">
                  <Icon size={20} weight="fill" className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a192f] text-sm uppercase tracking-wider mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check size={12} weight="bold" className="text-[#0a192f] shrink-0" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
