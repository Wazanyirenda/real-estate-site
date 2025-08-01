
'use client';

import Link from 'next/link';

export default function FeaturedListings() {
  const listings = [
    {
      id: 'great-north-estate',
      title: 'Great North Estate',
      location: 'Kabwe',
      price: 'From K20,000',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20residential%20plot%20development%20in%20Kabwe%20Zambia%20with%20survey%20beacons%2C%20green%20grass%20area%2C%20trees%2C%20clear%20plot%20boundaries%2C%203km%20from%20Simon%20Mwansa%20Kapwepwe%20Airport%2C%20well-maintained%20land%20with%20titled%20documentation%2C%20professional%20estate%20development&width=400&height=300&seq=great-north-featured&orientation=landscape',
      features: ['Titled & Beaconed', '3km from Airport', 'Flexible Payment Plans'],
      plotSizes: ['40x20', '30x20', '40x30']
    },
    {
      id: 'paramount-estate',
      title: 'Paramount Estate',
      location: 'Kitwe',
      price: 'From K40,000',
      image: 'https://readdy.ai/api/search-image?query=Premium%20residential%20estate%20in%20Kitwe%20Zambia%20with%20modern%20infrastructure%2C%20surveyed%20plots%20with%20clear%20beacons%2C%20paved%20access%20roads%2C%20street%20lighting%2C%20upscale%20residential%20development%2C%20titled%20properties%2C%20secure%20environment&width=400&height=300&seq=paramount-featured&orientation=landscape',
      features: ['Prime Kitwe Location', 'Titled & Beaconed', 'Modern Infrastructure'],
      plotSizes: ['40x20', '30x20']
    },
    {
      id: 'dreamscape-housing',
      title: 'Dreamscape Housing Project',
      location: 'Ndola',
      price: 'From K45,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20development%20in%20Ndola%20Zambia%20with%20excellent%20access%20roads%2C%20surveyed%20plots%20with%20boundaries%2C%203km%20from%20airport%2C%20prime%20area%20location%2C%20contemporary%20housing%20project%2C%20well-planned%20estate%20layout&width=400&height=300&seq=dreamscape-featured&orientation=landscape',
      features: ['Titled & Beaconed', 'Access Road', '3km from Airport'],
      plotSizes: ['30x20']
    },
    {
      id: 'fatima-estate',
      title: 'Fatima Estate',
      location: 'Ndola',
      price: 'From K35,000',
      image: 'https://readdy.ai/api/search-image?query=Residential%20estate%20in%20Ndola%20with%20road%20frontage%2C%20ZESCO%20power%20lines%2C%20well-developed%20plots%20near%20dual%20carriageway%2C%20titled%20properties%20with%20beacons%2C%20modern%20estate%20development%20with%20utilities&width=400&height=300&seq=fatima-featured&orientation=landscape',
      features: ['Road Frontage', 'ZESCO Power Lines', '1km from Dual Carriageway'],
      plotSizes: ['30x20', '32x25']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-4">
            Featured Plots – Ready for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our top available plots, each with secure documentation and flexible payment plans. Find the perfect place to build your future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/listings" 
            className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
          >
            View All Estates
          </Link>
        </div>
      </div>
    </section>
  );
}
