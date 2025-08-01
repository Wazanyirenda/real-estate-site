'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutHero from './AboutHero';
import CompanyOverview from './CompanyOverview';
import WhyChooseUs from './WhyChooseUs';
import VisionMission from './VisionMission';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <CompanyOverview />
        <WhyChooseUs />
        <VisionMission />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}