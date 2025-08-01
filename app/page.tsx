
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from './HeroSection';
import AboutPreview from './AboutPreview';
import ServicesPreview from './ServicesPreview';
import FeaturedListings from './FeaturedListings';
import TrustSection from './TrustSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <FeaturedListings />
        <TrustSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
