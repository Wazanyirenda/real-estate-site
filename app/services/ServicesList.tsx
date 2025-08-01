'use client';

import Link from 'next/link';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Plot Sales',
      description: 'Premium residential plots in prime locations across Zambia with flexible payment plans.',
      features: ['Titled and beaconed plots', 'Various sizes available', 'Flexible payment terms', 'Prime locations'],
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20residential%20plot%20with%20survey%20markers%20and%20beacons%2C%20well-defined%20boundaries%2C%20green%20grass%2C%20trees%2C%20clear%20sky%2C%20zambian%20residential%20development%20area%20with%20proper%20infrastructure&width=400&height=300&seq=plot-sales&orientation=landscape'
    },
    {
      icon: 'ri-building-line',
      title: 'Estate Planning',
      description: 'Comprehensive estate development planning and infrastructure design services.',
      features: ['Master planning', 'Infrastructure design', 'Zoning analysis', 'Development permits'],
      image: 'https://readdy.ai/api/search-image?query=Architectural%20blueprints%20and%20estate%20development%20plans%20spread%20on%20table%2C%20urban%20planning%20documents%2C%20measuring%20tools%2C%20professional%20planning%20workspace%2C%20modern%20estate%20design%20drawings&width=400&height=300&seq=estate-planning&orientation=landscape'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Title Processing',
      description: 'Fast and reliable title deed processing and documentation services.',
      features: ['Title deed processing', 'Legal documentation', 'Property registration', 'Compliance verification'],
      image: 'https://readdy.ai/api/search-image?query=Legal%20documents%20and%20title%20deeds%20on%20desk%2C%20official%20property%20papers%2C%20rubber%20stamps%2C%20professional%20legal%20office%20setting%2C%20zambian%20property%20documentation%20process&width=400&height=300&seq=title-processing&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'Construction Supervision',
      description: 'Professional construction supervision and project management services.',
      features: ['Project management', 'Quality control', 'Timeline management', 'Budget oversight'],
      image: 'https://readdy.ai/api/search-image?query=Construction%20supervisor%20with%20hard%20hat%20reviewing%20building%20plans%20on%20construction%20site%2C%20construction%20workers%20in%20background%2C%20modern%20residential%20construction%20project%2C%20professional%20supervision&width=400&height=300&seq=construction-supervision&orientation=landscape'
    },
    {
      icon: 'ri-compass-3-line',
      title: 'Land Surveying',
      description: 'Accurate land surveying and mapping services for property development.',
      features: ['Topographic surveys', 'Boundary surveys', 'Construction surveys', 'GPS mapping'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20land%20surveyor%20using%20theodolite%20and%20GPS%20equipment%2C%20surveying%20instruments%20on%20tripod%2C%20open%20field%20with%20survey%20markers%2C%20technical%20surveying%20work%20in%20zambian%20landscape&width=400&height=300&seq=land-surveying&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete real estate solutions from plot sales to construction supervision
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-3xl font-bold text-[#0a192f] mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-[#f7b733] mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="bg-[#f7b733] text-white px-8 py-3 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer whitespace-nowrap">
                  Get Quote
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg shadow-lg object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}