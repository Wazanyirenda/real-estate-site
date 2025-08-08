'use client';

import { useState } from 'react';

export default function ProjectsGrid() {
  const [showDetails, setShowDetails] = useState(false);
  const images = [
    '/images/construction/IMG-20250706-WA0050.jpg',
    '/images/construction/IMG-20250706-WA0051.jpg',
    '/images/construction/IMG-20250706-WA0052.jpg',
    '/images/construction/IMG-20250706-WA0037.jpg',
    '/images/construction/IMG-20250706-WA0031.jpg',
  ];
  const projects = [
    {
      id: 'residential-double-storey',
      title: 'Double Storey Residential House',
      location: 'Ndola, New Airport Chichele',
      status: 'Completed',
      description: 'A modern double storey residential house featuring contemporary design, premium finishes, and spacious living areas.',
      images,
      features: ['Double Storey', 'Modern Design', 'Premium Finishes', 'Spacious Living Areas']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Ongoing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">Our Construction Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional construction supervision and project management across Zambia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Main image */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={project.images[0]} alt={project.title + ' main photo'} className="w-full h-64 object-cover object-center rounded-lg" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a192f] mb-2">{project.title}</h3>
                    <p className="text-[#f7b733] font-semibold flex items-center">
                      <i className="ri-map-pin-line mr-2"></i>
                      {project.location}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                {/* Details section */}
                {showDetails && (
                  <>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-[#f7b733] mr-2"></i>
                      {feature}
                    </div>
                  ))}
                </div>
                    {/* Gallery of the rest of the images */}
                    <div className="flex gap-2 overflow-x-auto mb-6 scrollbar-thin scrollbar-thumb-[#f7b733]/60 scrollbar-track-gray-200">
                      {project.images.slice(1).map((img, idx) => (
                        <img key={idx} src={img} alt={project.title + ' photo ' + (idx+2)} className="h-48 w-auto object-cover object-center rounded-lg" />
                      ))}
                    </div>
                  </>
                )}
                <div className="flex gap-4">
                  <button
                    className="flex-1 bg-[#f7b733] text-white px-6 py-3 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer whitespace-nowrap"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    {showDetails ? 'Hide Details' : 'View Details'}
                  </button>
                  <button className="flex-1 border-2 border-[#f7b733] text-[#f7b733] px-6 py-3 rounded-lg hover:bg-[#f7b733] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}