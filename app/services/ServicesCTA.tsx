'use client';

import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your property needs and discover how we can help you achieve your real estate goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#f7b733] text-white px-8 py-4 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer whitespace-nowrap">
            Get Free Consultation
          </Link>
          <Link href="/listings" className="border-2 border-[#f7b733] text-[#f7b733] px-8 py-4 rounded-lg hover:bg-[#f7b733] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            View Available Plots
          </Link>
        </div>
      </div>
    </section>
  );
}