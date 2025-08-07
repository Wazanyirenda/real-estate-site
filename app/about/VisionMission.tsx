'use client';

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#0a192f] p-12 rounded-lg text-white">
            <div className="w-16 h-16 bg-[#f7b733] rounded-full flex items-center justify-center mb-6">
              <i className="ri-eye-fill text-2xl text-white" style={{fontSize: '24px'}}></i>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the compass for wanderers and the architect of aspirations across Zambia. We envision a future where every Zambian family has access to their own patch of land, creating sustainable communities where dreams take root and prosperity flourishes for generations.
            </p>
          </div>
          
          <div className="bg-[#f7b733] p-12 rounded-lg text-white">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <i className="ri-compass-3-fill text-2xl text-[#f7b733]" style={{fontSize: '24px'}}></i>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To be Zambia's leading real estate development company, empowering individuals and families to achieve their dreams of land ownership. We provide comprehensive real estate solutions that create lasting value and contribute to the sustainable development of communities across Zambia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}