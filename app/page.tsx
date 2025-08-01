
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
        <HeroSection data-aos="fade-up" />
        <AboutPreview data-aos="fade-up" data-aos-delay="100" />
        <ServicesPreview data-aos="fade-up" data-aos-delay="200" />
        <FeaturedListings data-aos="fade-up" data-aos-delay="300" />
        <TrustSection data-aos="fade-up" data-aos-delay="400" />
        <TestimonialsSection data-aos="fade-up" data-aos-delay="500" />
        <CTASection data-aos="fade-up" data-aos-delay="600" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
