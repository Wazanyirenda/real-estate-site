'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TeamHero from './TeamHero';
import TeamGrid from './TeamGrid';
import DepartmentOverview from './DepartmentOverview';


export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TeamHero />
        <TeamGrid />
        <DepartmentOverview />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}