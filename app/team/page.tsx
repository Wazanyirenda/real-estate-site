'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import DepartmentOverview from './DepartmentOverview';


export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DepartmentOverview />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}