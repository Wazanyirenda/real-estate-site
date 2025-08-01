
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Listings', href: '/listings' },
    { name: 'Construction', href: '/construction' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            {/* TODO: Replace with Calm Mountain Properties logo image - should be horizontal logo with company name */}
            <img 
              src="/images/logo.png" 
              alt="Calm Mountain Properties Logo" 
              className="h-12 w-auto"
            />
            {/* Removed fallback text - space preserved for logo image */}
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#0a192f] hover:text-[#f7b733] font-medium transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#0a192f]`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-[#0a192f] hover:text-[#f7b733] font-medium transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
