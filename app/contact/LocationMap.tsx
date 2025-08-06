'use client';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Find Us</h2>
          <p className="text-xl text-gray-600">
            Visit our main office in Ndola or contact us to arrange a meeting
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#f5f5f5] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Main Office Location</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-[#f7b733] text-xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-[#0a192f] mb-1">Address</h4>
                  <p className="text-gray-700">No. 7 Chinika Road, Northrise<br/>Ndola, Zambia</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-phone-line text-[#f7b733] text-xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-[#0a192f] mb-1">Phone</h4>
                  <p className="text-gray-700">+260 761 370 566</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-[#f7b733] text-xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-[#0a192f] mb-1">Business Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 5:00 PM<br/>
                    Saturday: 9:00 AM - 1:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-[#0a192f] mb-4">How to Get There</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <i className="ri-car-line text-[#f7b733] mr-3"></i>
                  Parking available on-site
                </li>
                <li className="flex items-center">
                  <i className="ri-bus-line text-[#f7b733] mr-3"></i>
                  Public transport accessible
                </li>
                <li className="flex items-center">
                  <i className="ri-map-line text-[#f7b733] mr-3"></i>
                  <a href="https://maps.app.goo.gl/ARU2uudKDacEDi6F7" target="_blank" rel="noopener noreferrer" className="text-[#f7b733] hover:underline">
                    View on Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="h-[400px] md:h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.123456789!2d28.6367!3d-12.9542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzE1LjEiUyAyOMKwMzgnMTIuMSJF!5e0!3m2!1sen!2szm!4v1730000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Calm Mountain Properties Ndola Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}