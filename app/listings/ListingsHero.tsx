'use client';

export default function ListingsHero() {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('/images/listings-hero.jpg')`, // TODO: Replace with downloaded aerial view of estates
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Available Plots</h1>
        <p className="text-xl md:text-2xl font-light">Find your perfect plot in prime locations across Zambia</p>
      </div>
    </section>
  );
}