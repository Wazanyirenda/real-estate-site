'use client';

export default function ConstructionServices() {
  const services = [
    {
      icon: 'ri-tools-line',
      title: 'Construction Supervision',
      description: 'Professional oversight of construction projects ensuring quality, timeline, and budget compliance.',
      features: ['Quality Control', 'Timeline Management', 'Budget Monitoring', 'Safety Compliance']
    },
    {
      icon: 'ri-building-line',
      title: 'Project Management',
      description: 'End-to-end project management from planning to completion with experienced professionals.',
      features: ['Project Planning', 'Resource Coordination', 'Risk Management', 'Progress Reporting']
    },
    {
      icon: 'ri-ruler-2-line',
      title: 'Architectural Planning',
      description: 'Custom architectural design and planning services for residential and commercial projects.',
      features: ['Custom Design', 'Building Plans', 'Permit Assistance', '3D Visualization']
    },
    {
      icon: 'ri-road-map-line',
      title: 'Infrastructure Development',
      description: 'Road construction, utilities installation, and infrastructure development for estates.',
      features: ['Road Construction', 'Utility Installation', 'Drainage Systems', 'Street Lighting']
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">Construction Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and project management services for your development needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <i className="ri-check-line text-[#f7b733] mr-2"></i>
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