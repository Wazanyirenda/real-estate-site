'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* TODO: Replace with Calm Mountain Properties white/light logo version for dark footer background */}
            <img 
              src="/images/logo-white.png" 
              alt="Calm Mountain Properties Logo" 
              className="h-12 w-auto mb-4"
            />
            {/* Removed fallback text - space preserved for logo image */}
            <p className="text-gray-300 mb-4">
              Professional Zambian real estate company focused on developing premium residential estates.
            </p>
            <div className="flex space-x-4">
              {/* TODO: Replace with actual Calm Mountain Properties social media links */}
              <a href="https://facebook.com/calmmountainproperties" target="_blank" rel="noopener noreferrer" className="text-[#f7b733] hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="https://twitter.com/calmmountainprop" target="_blank" rel="noopener noreferrer" className="text-[#f7b733] hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="https://instagram.com/calmmountainproperties" target="_blank" rel="noopener noreferrer" className="text-[#f7b733] hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="https://linkedin.com/company/calmmountainproperties" target="_blank" rel="noopener noreferrer" className="text-[#f7b733] hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Plot Sales
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Title Processing
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Construction Supervision
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#f7b733] transition-colors cursor-pointer">
                  Land Surveying
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line text-[#f7b733]"></i>
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line text-[#f7b733]"></i>
                <span>+260 977 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line text-[#f7b733]"></i>
                <span>info@calmmountainproperties.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Calm Mountain Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}