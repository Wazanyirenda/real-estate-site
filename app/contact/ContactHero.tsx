'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20zambian%20office%20building%20exterior%2C%20professional%20real%20estate%20company%20headquarters%2C%20contemporary%20architecture%2C%20glass%20facade%2C%20business%20district%2C%20corporate%20building&width=1200&height=600&seq=contact-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl font-light">Get in touch with our team of real estate professionals</p>
      </div>
    </section>
  );
}