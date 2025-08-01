'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'James Mwanza',
      location: 'Great North Estate, Kabwe',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businessman%20in%20his%2040s%2C%20confident%20smile%2C%20business%20attire%2C%20modern%20office%20background%2C%20successful%20property%20investor%2C%20trustworthy%20appearance%2C%20well-groomed%2C%20positive%20expression&width=80&height=80&seq=testimonial-001&orientation=squarish',
      text: 'Calm Mountain Properties made my land purchase seamless. The documentation was perfect, and their team guided me through every step. My plot in Great North Estate is exactly as promised.',
      rating: 5
    },
    {
      name: 'Grace Tembo',
      location: 'Paramount Estate, Kitwe',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20in%20her%2030s%2C%20warm%20smile%2C%20professional%20attire%2C%20modern%20office%20setting%2C%20successful%20property%20owner%2C%20confident%20appearance%2C%20friendly%20expression&width=80&height=80&seq=testimonial-002&orientation=squarish',
      text: 'The flexible payment plan allowed me to invest in my dream plot without financial strain. The location is perfect - close to all amenities and well-connected. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Banda',
      location: 'Dreamscape Housing, Ndola',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20man%20in%20his%2050s%2C%20genuine%20smile%2C%20business%20casual%20attire%2C%20modern%20background%2C%20experienced%20property%20investor%2C%20trustworthy%20demeanor%2C%20satisfied%20expression&width=80&height=80&seq=testimonial-003&orientation=squarish',
      text: 'Exceptional service from start to finish. The team is knowledgeable, professional, and truly cares about their clients. My investment in Dreamscape has been one of my best decisions.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who found their perfect plot and peace of mind with Calm Mountain Properties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#f7b733] text-lg"></i>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#0a192f]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}