'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

interface EstateDetailProps {
  estateSlug: string;
}

export default function EstateDetail({ estateSlug }: EstateDetailProps) {
  const estates = {
    'great-north-estate': {
      name: 'Great North Estate',
      location: 'Kabwe',
      description: 'Premium residential plots strategically located near Simon Mwansa Kapwepwe Airport. This estate offers titled and beaconed plots with excellent connectivity and modern infrastructure.',
      features: ['Titled', 'Beaconed'],
      images: [
        '/images/estates/greatnorth-estate.png', // Main photo of Great North Estate plots with survey beacons and green landscape
        '/images/estates/greatnorth-estate.png', // Aerial view of Great North Estate showing plot layout and access roads
        '/images/estates/greatnorth-estate.png'  // Access road photo showing estate entrance and signage
      ],
      plots: [
        { size: '40x20', cash: 30000, months6: 40000, months12: 50000, months24: 60000 },
        { size: '30x20', cash: 20000, months6: 25000, months12: 30000, months24: 35000 },
        { size: '40x30', cash: 40000, months6: 50000, months12: 60000, months24: 70000 }
      ],
      distances: [
        { place: 'Lake Petroleum station to site', distance: '8.4 km' },
        { place: 'Kabwe/Lusaka Road to site', distance: '2.7 km' },
        { place: 'Hungry Lion (CBD) to site', distance: '10 km' }
      ]
    },
    'paramount-estate': {
      name: 'Paramount Estate',
      location: 'Kitwe',
      description: 'Exclusive residential development in prime Kitwe location offering premium plots with modern infrastructure and secure environment.',
      features: ['Titled', 'Beaconed'],
      images: [
        '/images/estates/paramount-estate.jpeg', // Main photo of Paramount Estate showing modern infrastructure and paved roads
        '/images/estates/paramount-estate.jpeg', // Gated entrance of Paramount Estate with security features
        '/images/estates/paramount-estate.jpeg'  // Street lighting and plot boundaries at Paramount Estate
      ],
      plots: [
        { size: '40x20', cash: 55000, months6: 65000, months12: 75000, months24: 85000 },
        { size: '30x20', cash: 40000, months6: 55000, months12: 65000, months24: 75000 }
      ],
      distances: [
        { place: 'away from checkpoint', distance: '5.9 km' },
        { place: 'from Mwekera Bridge', distance: '4.3 km' },
        { place: 'from Wusakile round about', distance: '12.8 km' },
        { place: 'from CBD (ZIBSIP College)', distance: '16.2 km' }
      ]
    },
    'dreamscape-housing': {
      name: 'Dreamscape Housing Project',
      location: 'Ndola',
      description: 'Modern residential development with excellent connectivity and prime location in Ndola. Features access roads and proximity to key amenities.',
      features: ['Titled & Beaconed', 'Access Road', 'Prime Area', '3km from Airport', 'Modern Planning'],
      images: [
        '/images/estates/dreamscape-housing-1.jpg', // TODO: Main photo of Dreamscape Housing Project showing access roads and plot boundaries
        '/images/estates/dreamscape-housing-2.jpg', // TODO: Modern infrastructure at Dreamscape Housing with contemporary design
        '/images/estates/dreamscape-housing-3.jpg'  // TODO: Surveyed plots at Dreamscape Housing showing proximity to airport
      ],
      plots: [
        { size: '30x20', cash: 45000, months6: 55000, months12: 65000, months24: 75000 }
      ],
      distances: [
        { place: 'Simon Mwansa Kapwepwe Airport', distance: '3km' },
        { place: 'Ndola City Center', distance: '5km' },
        { place: 'Shopping Centers', distance: '2km' },
        { place: 'Schools', distance: '1km' },
        { place: 'Hospital', distance: '3km' }
      ]
    },
    'fatima-estate': {
      name: 'Fatima Estate',
      location: 'Ndola',
      description: 'Strategic location with excellent amenities and connectivity. Features road frontage, ZESCO power lines on site, and proximity to major shopping centers.',
      features: ['Titled', 'Beaconed', 'Road frontage', 'Zesco power lines on site'],
      images: [
        '/images/estates/fatima-estate.jpeg', // Main photo of Fatima Estate showing road frontage and ZESCO power lines
        '/images/estates/fatima-estate.jpeg', // Surveyed plots at Fatima Estate with visible power infrastructure
        '/images/estates/fatima-estate.jpeg'  // Strategic location near dual carriageway with modern infrastructure
      ],
      plots: [
        { size: '30x20', cash: 35000, months6: 45000, months12: 55000, months24: 65000 },
        { size: '32x25', cash: 45000, months6: 55000, months12: 65000, months24: 75000 }
      ],
      distances: [
        { place: 'from Jacaranda Mall', distance: '14 km' },
        { place: 'from Ndola Lusaka dual carriage way', distance: '1 km' },
        { place: 'from Indeni', distance: '9 km' }
      ]
    }
  };

  const estate = estates[estateSlug as keyof typeof estates];

  if (!estate) {
    return <div>Estate not found</div>;
  }

  const formatPrice = (price: number) => {
    return `K${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/listings" className="text-[#f7b733] hover:text-[#e6a82d] transition-colors cursor-pointer">
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Listings
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <img 
                    src={estate.images[0]}
                    alt={estate.name}
                    className="w-full h-96 object-cover object-top"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {estate.images.slice(1).map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${estate.name} ${index + 2}`}
                      className="w-full h-48 object-cover object-top rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    />
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h1 className="text-4xl font-bold text-[#0a192f] mb-4">{estate.name}</h1>
                  <p className="text-[#f7b733] font-semibold mb-6 flex items-center text-lg">
                    <i className="ri-map-pin-line mr-2"></i>
                    {estate.location}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{estate.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Features</h3>
                      <ul className="space-y-2">
                        {estate.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <i className="ri-check-line text-[#f7b733] mr-3"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Distances to Key Locations</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {estate.distances.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-[#f5f5f5] rounded-lg">
                        <span className="text-gray-700">{item.place}</span>
                        <span className="font-semibold text-[#0a192f]">{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                  <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Plot Sizes & Pricing</h3>
                  
                  <div className="space-y-6">
                    {estate.plots.map((plot, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-[#0a192f] mb-4">{plot.size}m Plot</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Cash Payment</span>
                            <span className="font-bold text-[#f7b733] text-lg">{formatPrice(plot.cash)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">6 Months</span>
                            <span className="font-semibold text-[#0a192f]">{formatPrice(plot.months6)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">12 Months</span>
                            <span className="font-semibold text-[#0a192f]">{formatPrice(plot.months12)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">24 Months</span>
                            <span className="font-semibold text-[#0a192f]">{formatPrice(plot.months24)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    <Link 
                      href="/contact"
                      className="w-full bg-[#f7b733] text-white px-6 py-4 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer text-center block whitespace-nowrap"
                    >
                      Contact for Purchase
                    </Link>
                    <Link 
                      href="/contact"
                      className="w-full border-2 border-[#f7b733] text-[#f7b733] px-6 py-4 rounded-lg hover:bg-[#f7b733] hover:text-white transition-colors cursor-pointer text-center block whitespace-nowrap"
                    >
                      Schedule Site Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}