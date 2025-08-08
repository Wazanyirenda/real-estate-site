'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutHero from './AboutHero';
import CompanyOverview from './CompanyOverview';
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import WhyChooseUs from './WhyChooseUs';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <CompanyOverview />
        <VisionMission />
        <CoreValues />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}