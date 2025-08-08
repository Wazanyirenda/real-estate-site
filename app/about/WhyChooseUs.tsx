'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: 'ri-award-line',
      title: 'High-Quality Products & Services',
      description: 'We provide high-quality products and services backed by multifaceted expertise in real estate and property development.'
    },
    {
      icon: 'ri-file-check-line',
      title: 'Diligent Service Execution',
      description: 'We serve our clients diligently and ensure thorough execution of all services, from initial consultation to final delivery.'
    },
    {
      icon: 'ri-team-line',
      title: 'Reliable Partnership',
      description: 'We guarantee a partnership with a reliable real estate agency and property developer you can trust for your investments.'
    },
    {
      icon: 'ri-map-pin-2-line',
      title: 'Strategic Locations',
      description: 'Properties in prime locations across Ndola, Kitwe, and Kabwe with excellent growth potential and infrastructure.'
    },
    {
      icon: 'ri-scales-line',
      title: 'Complete Legal Support',
      description: 'Full legal support for land title processing and documentation, ensuring secure and legitimate property ownership.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Customer-First Approach',
      description: 'Our commitment to customer satisfaction drives every decision we make, ensuring personalized service for each client.'
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Our Commitment to You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calm Mountain Property Developers is committed to excellence in every aspect of our service delivery:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
                <i className={`${reason.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}