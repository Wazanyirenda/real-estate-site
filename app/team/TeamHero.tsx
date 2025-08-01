'use client';

export default function TeamHero() {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('/images/team-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white max-w-4xl px-4">
        {/* TODO: Replace with photo of MD and Sales Lead or company leadership */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Leadership</h1>
        <p className="text-xl md:text-2xl font-light">Meet the leaders driving Calm Mountain Properties forward</p>
      </div>
    </section>
  );
}