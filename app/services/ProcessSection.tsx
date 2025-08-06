'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your property needs and provide expert advice on available options.'
    },
    {
      number: '02',
      title: 'Site Inspection',
      description: 'Professional site visit and evaluation to ensure the property meets your requirements.'
    },
    {
      number: '03',
      title: 'Documentation',
      description: 'Complete all necessary paperwork and legal documentation for your peace of mind.'
    },
    {
      number: '04',
      title: 'Payment Processing',
      description: 'Flexible payment options with transparent pricing and no hidden fees.'
    },
    {
      number: '05',
      title: 'Property Handover',
      description: 'Official handover with all necessary documents and ongoing support.'
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to make your property acquisition journey smooth and hassle-free
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-[#f7b733] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}