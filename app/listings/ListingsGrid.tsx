
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ListingsGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const listings = [
    {
      id: 'great-north-estate',
      title: 'Great North Estate',
      location: 'Kabwe',
      priceRange: 'K20,000 - K70,000',
      image: '/images/estates/greatnorth-estate.png', // Great North Estate plots showing survey beacons and green landscape
      features: ['Titled', 'Beaconed'],
      plotSizes: ['40x20', '30x20', '40x30'],
      category: 'kabwe'
    },
    {
      id: 'paramount-estate',
      title: 'Paramount Estate',
      location: 'Kitwe',
      priceRange: 'K40,000 - K85,000',
      image: '/images/estates/paramount-estate.jpeg', // Paramount Estate showing modern infrastructure and paved roads
      features: ['Titled', 'Beaconed'],
      plotSizes: ['40x20', '30x20'],
      category: 'kitwe'
    },
    {
      id: 'fatima-estate',
      title: 'Fatima Estate',
      location: 'Ndola',
      priceRange: 'K35,000 - K75,000',
      image: '/images/estates/fatima-estate.jpeg', // Fatima Estate showing road frontage and ZESCO power lines
      features: ['Titled', 'Beaconed', 'Road frontage', 'Zesco power lines on site'],
      plotSizes: ['30x20', '32x25'],
      category: 'ndola'
    }
  ];

  const filteredListings = activeFilter === 'all' 
    ? listings 
    : listings.filter(listing => listing.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'all' 
                  ? 'bg-[#f7b733] text-[#0a192f]' 
                  : 'bg-[#f5f5f5] text-[#0a192f] hover:bg-[#f7b733] hover:text-[#0a192f]'
              }`}
            >
              All Estates
            </button>
            <button
              onClick={() => setActiveFilter('kabwe')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'kabwe' 
                  ? 'bg-[#f7b733] text-[#0a192f]' 
                  : 'bg-[#f5f5f5] text-[#0a192f] hover:bg-[#f7b733] hover:text-[#0a192f]'
              }`}
            >
              Kabwe
            </button>
            <button
              onClick={() => setActiveFilter('kitwe')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'kitwe' 
                  ? 'bg-[#f7b733] text-[#0a192f]' 
                  : 'bg-[#f5f5f5] text-[#0a192f] hover:bg-[#f7b733] hover:text-[#0a192f]'
              }`}
            >
              Kitwe
            </button>
            <button
              onClick={() => setActiveFilter('ndola')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'ndola' 
                  ? 'bg-[#f7b733] text-[#0a192f]' 
                  : 'bg-[#f5f5f5] text-[#0a192f] hover:bg-[#f7b733] hover:text-[#0a192f]'
              }`}
            >
              Ndola
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-[#f7b733] text-[#0a192f] px-3 py-1 rounded-full text-sm font-semibold">
                  {listing.priceRange}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a192f] mb-2">
                  {listing.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <i className="ri-map-pin-line text-[#f7b733] mr-2"></i>
                  <span>{listing.location}</span>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-500 mb-2">Available Plot Sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {listing.plotSizes.map((size, index) => (
                      <span key={index} className="bg-[#0a192f] text-white px-2 py-1 rounded text-xs">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.features.map((feature, index) => (
                    <span key={index} className="bg-[#f5f5f5] text-[#0a192f] px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href={`/listings/${listing.id}`}
                    className="flex-1 bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center cursor-pointer whitespace-nowrap"
                  >
                    View Details
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-[#f7b733] text-[#f7b733] hover:bg-[#f7b733] hover:text-[#0a192f] px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
