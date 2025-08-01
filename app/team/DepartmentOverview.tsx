'use client';

export default function DepartmentOverview() {
  const departments = [
    {
      name: 'Sales Department',
      icon: 'ri-customer-service-2-line',
      description: 'Our sales team helps clients find the perfect plots and guides them through the purchasing process.',
      responsibilities: ['Client consultation', 'Property viewing', 'Sales processing', 'Customer support']
    },
    {
      name: 'Technical Department',
      icon: 'ri-compass-3-line',
      description: 'Handles all surveying, mapping, and technical aspects of property development.',
      responsibilities: ['Land surveying', 'Mapping services', 'Technical documentation', 'Site planning']
    },
    {
      name: 'Legal Department',
      icon: 'ri-scales-line',
      description: 'Ensures all legal requirements are met and handles documentation processes.',
      responsibilities: ['Title processing', 'Legal documentation', 'Regulatory compliance', 'Contract management']
    },
    {
      name: 'Development Department',
      icon: 'ri-building-2-line',
      description: 'Manages infrastructure development and construction supervision services.',
      responsibilities: ['Project management', 'Infrastructure development', 'Construction supervision', 'Quality control']
    },
    {
      name: 'Finance Department',
      icon: 'ri-money-dollar-circle-line',
      description: 'Handles all financial operations including payment processing and financial planning.',
      responsibilities: ['Payment processing', 'Financial planning', 'Budget management', 'Financial reporting']
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Our Departments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each department works together to deliver comprehensive real estate solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                <i className={`${dept.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{dept.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
              <div>
                <h4 className="font-semibold text-[#0a192f] mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {dept.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-[#f7b733] mr-2"></i>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}