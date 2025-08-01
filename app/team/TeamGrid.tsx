'use client';

export default function TeamGrid() {
  const teamMembers = [
    {
      name: 'David Mwamba',
      position: 'Managing Director',
      department: 'Executive',
      image: '/images/team/david-mwamba.jpg', // TODO: Add professional photo of MD David Mwamba
      bio: 'David leads our company with over 15 years of experience in Zambian real estate development and property management.',
      phone: '+260 97 123 4567',
      email: 'david.mwamba@calmmountain.com'
    },
    {
      name: 'Grace Phiri',
      position: 'Sales Lead',
      department: 'Sales',
      image: '/images/team/grace-phiri.jpg', // TODO: Add professional photo of Sales Lead Grace Phiri
      bio: 'Grace leads our sales efforts and has helped hundreds of clients find their perfect plots across our estates.',
      phone: '+260 97 234 5678',
      email: 'grace.phiri@calmmountain.com'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings years of experience and dedication to making your property ownership dreams a reality
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-top"
              />
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#0a192f] mb-2">{member.name}</h3>
                  <p className="text-[#f7b733] font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.department} Department</p>
                </div>
                
                <p className="text-gray-700 text-center mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <i className="ri-phone-line text-[#f7b733] mr-3"></i>
                    <a href={`tel:${member.phone}`} className="text-gray-700 hover:text-[#f7b733] transition-colors cursor-pointer">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-mail-line text-[#f7b733] mr-3"></i>
                    <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-[#f7b733] transition-colors cursor-pointer">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}