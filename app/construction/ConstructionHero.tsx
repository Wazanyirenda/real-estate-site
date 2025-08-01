'use client';

export default function ConstructionHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center"
      style={{
        backgroundColor: '#f5f5f5', // Placeholder background color - TODO: Add downloaded hero image if needed
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Construction <span className="text-[#f7b733]">Projects</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Professional construction supervision and project management for your residential and commercial developments
        </p>
      </div>
    </section>
  );
}