'use client';

import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0a192f] mb-6">
              Your Trusted Partner in Land Ownership
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Calm Mountain Properties makes it easy to own land with confidence. We handle everything—from secure plot sales and title processing to surveying and project management—so you can invest with peace of mind.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to take the next step?
            </p>
            <Link 
              href="/about" 
              className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
            >
              Learn More
            </Link>
          </div>
          
          <div className="relative">
            {/* TODO: Replace with professional photo of Calm Mountain Properties team or office building */}
            <img 
              src="/images/about-team.jpg"
              alt="About Calm Mountain Properties"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            {/* Removed: Years Experience badge */}
          </div>
        </div>
      </div>
    </section>
  );
}