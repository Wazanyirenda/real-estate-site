'use client';

import { Buildings, Check, FileText, Gear, ShieldCheck } from 'phosphor-react';

export default function ConstructionServices() {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Construction Supervision',
      description: 'Professional oversight of construction projects ensuring quality, timeline, and budget compliance.',
      features: ['Quality Control', 'Timeline Management', 'Budget Monitoring', 'Safety Compliance']
    },
    {
      icon: Buildings,
      title: 'Project Management',
      description: 'End-to-end project management from planning to completion with experienced professionals.',
      features: ['Project Planning', 'Resource Coordination', 'Risk Management', 'Progress Reporting']
    },
    {
      icon: FileText,
      title: 'Architectural Planning',
      description: 'Custom architectural design and planning services for residential and commercial projects.',
      features: ['Custom Design', 'Building Plans', 'Permit Assistance', '3D Visualization']
    },
    {
      icon: Gear,
      title: 'Infrastructure Development',
      description: 'Road construction, utilities installation, and infrastructure development for estates.',
      features: ['Road Construction', 'Utility Installation', 'Drainage Systems', 'Street Lighting']
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Construction Services
          </p>
          <h2 className="text-4xl font-bold text-[#0a192f] uppercase mb-4">
            Structured Delivery From Planning to Completion
          </h2>
          <div className="w-12 h-0.5 bg-[#f7b733] mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl">
            Leading construction company in Zambia offering comprehensive construction services, project management, and construction supervision. 
            We serve Kabwe, Kitwe, and Ndola with professional building contractors and construction companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 hover:bg-[#0a192f] group transition-colors">
              <div className="w-11 h-11 bg-[#0a192f] group-hover:bg-[#f7b733] flex items-center justify-center mb-6 transition-colors">
                <service.icon size={20} weight="fill" className="text-white" />
              </div>
              
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0a192f] group-hover:text-white mb-4 transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-white/60 mb-6 text-sm leading-relaxed transition-colors">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-white/75 transition-colors">
                    <Check size={12} weight="bold" className="text-[#0a192f] group-hover:text-[#f7b733] mr-2 transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}