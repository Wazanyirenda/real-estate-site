'use client';

export default function ServicesHero() {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20site%20with%20surveying%20equipment%2C%20land%20development%20tools%2C%20blueprints%20and%20measuring%20instruments%2C%20zambian%20construction%20workers%20in%20safety%20gear%2C%20modern%20construction%20equipment&width=1200&height=600&seq=services-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl md:text-2xl font-light">Comprehensive real estate solutions for all your property needs</p>
      </div>
    </section>
  );
}