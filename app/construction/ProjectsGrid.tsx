'use client';

export default function ProjectsGrid() {
  const projects = [
    {
      id: 'residential-complex-kabwe',
      title: 'Residential Complex - Kabwe',
      location: 'Great North Estate',
      status: 'Completed',
      description: 'Modern residential complex with 24 units featuring contemporary design and premium finishes.',
      image: 'https://readdy.ai/api/search-image?query=Completed%20modern%20residential%20complex%20in%20Kabwe%20Zambia%20with%20multiple%20housing%20units%2C%20contemporary%20African%20architecture%2C%20well-landscaped%20compound%2C%20paved%20driveways%2C%20professional%20construction%20quality%2C%20beautiful%20exterior%20finishes&width=500&height=300&seq=project-001&orientation=landscape',
      features: ['24 Residential Units', 'Modern Design', 'Premium Finishes', 'Landscaped Compound']
    },
    {
      id: 'commercial-plaza-kitwe',
      title: 'Commercial Plaza - Kitwe',
      location: 'Nkana East',
      status: 'In Progress',
      description: 'Multi-purpose commercial plaza with retail spaces, offices, and modern amenities.',
      image: 'https://readdy.ai/api/search-image?query=Commercial%20plaza%20construction%20in%20Kitwe%20Zambia%20showing%20modern%20building%20with%20retail%20spaces%2C%20construction%20in%20progress%2C%20contemporary%20commercial%20architecture%2C%20professional%20development%2C%20urban%20commercial%20property&width=500&height=300&seq=project-002&orientation=landscape',
      features: ['Retail Spaces', 'Office Complex', 'Modern Amenities', 'Prime Location']
    },
    {
      id: 'housing-development-ndola',
      title: 'Housing Development - Ndola',
      location: 'Northrise',
      status: 'Planning',
      description: 'Comprehensive housing development with infrastructure and community facilities.',
      image: 'https://readdy.ai/api/search-image?query=Housing%20development%20project%20in%20Ndola%20Zambia%20showing%20architectural%20plans%2C%20construction%20site%20preparation%2C%20modern%20residential%20planning%2C%20infrastructure%20development%2C%20professional%20project%20management&width=500&height=300&seq=project-003&orientation=landscape',
      features: ['Master Planning', 'Infrastructure', 'Community Facilities', 'Sustainable Design']
    },
    {
      id: 'estate-infrastructure',
      title: 'Estate Infrastructure',
      location: 'Multiple Locations',
      status: 'Ongoing',
      description: 'Road construction, utilities installation, and infrastructure development across our estates.',
      image: 'https://readdy.ai/api/search-image?query=Road%20construction%20and%20infrastructure%20development%20in%20Zambian%20residential%20estate%2C%20construction%20machinery%2C%20paved%20roads%2C%20utility%20installations%2C%20professional%20infrastructure%20development%2C%20modern%20estate%20planning&width=500&height=300&seq=project-004&orientation=landscape',
      features: ['Road Construction', 'Utility Installation', 'Drainage Systems', 'Street Lighting']
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
              {/* TODO: Add downloaded image for {project.title} - Currently removed per request */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
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
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-[#f7b733] mr-2"></i>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-[#f7b733] text-white px-6 py-3 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer whitespace-nowrap">
                    View Details
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