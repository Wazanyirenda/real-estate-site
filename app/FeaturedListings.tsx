
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeaturedListings() {
  const listings = [
    {
      id: 'great-north-estate',
      title: 'Great North Estate',
      location: 'Kabwe',
      price: 'From K20,000',
      image: '/images/estates/greatnorth-estate.png',
      features: ['Titled', 'Beaconed'],
      plotSizes: ['40x20', '30x20', '40x30']
    },
    {
      id: 'paramount-estate',
      title: 'Paramount Estate',
      location: 'Kitwe',
      price: 'From K40,000',
      image: '/images/estates/paramount-estate.jpeg',
      features: ['Titled', 'Beaconed'],
      plotSizes: ['40x20', '30x20']
    },
    {
      id: 'fatima-estate',
      title: 'Fatima Estate',
      location: 'Ndola',
      price: 'From K35,000',
      image: '/images/estates/fatima-estate.jpeg',
      features: ['Titled', 'Beaconed', 'Road frontage', 'Zesco power lines on site'],
      plotSizes: ['30x20', '32x25']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">
            Featured Plots Ready for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our top available plots, each with secure documentation and flexible payment plans. Find the perfect place to build your future.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {listings.map((listing, index) => (
            <motion.div 
              key={listing.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative">
                <img 
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-[#f7b733] text-[#0a192f] px-3 py-1 rounded-full text-sm font-semibold">
                  {listing.price}
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
                  <p className="text-sm text-gray-500 mb-2">Plot Sizes:</p>
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
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link 
            href="/listings" 
            className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
          >
            View All Estates
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
