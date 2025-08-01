
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20estate%20in%20Zambia%20with%20beautiful%20houses%2C%20well-planned%20residential%20plots%2C%20professional%20real%20estate%20development%2C%20green%20landscaping%2C%20paved%20roads%2C%20mountain%20views%20in%20background%2C%20golden%20hour%20lighting%2C%20premium%20property%20investment%20opportunity%2C%20contemporary%20African%20architecture&width=1920&height=1080&seq=hero-main-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* PLACEHOLDER: Add company hero image/video background here */}
        {/* TODO: Replace background with hero image/video showcasing beautiful Zambian residential properties */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Own Land. Build Your Future.
          <br />
          <span className="text-[#f7b733]">Plots Available Now</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
          Secure your titled residential plot today. No hidden fees. Flexible payment plans. Start your journey to property ownership with a trusted Zambian developer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/listings" 
            className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            See Available Land
          </Link>
          
          <Link 
            href="/contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-[#0a192f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Start My Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
