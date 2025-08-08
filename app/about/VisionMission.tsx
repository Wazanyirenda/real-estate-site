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
              To become the leading property developer and facilitate easy access to land for the Zambian people.
            </p>
          </div>
          
          <div className="bg-[#f7b733] p-12 rounded-lg text-white">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <i className="ri-compass-3-fill text-2xl text-[#f7b733]" style={{fontSize: '24px'}}></i>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To provide top-notch real estate services and ensure proper management of properties in the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}