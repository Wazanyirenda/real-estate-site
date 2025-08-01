
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ListingsHero from './ListingsHero';
import ListingsFilter from './ListingsFilter';
import ListingsGrid from './ListingsGrid';

export default function ListingsPage() {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    plotSize: '',
    paymentPlan: ''
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ListingsHero />
        <ListingsFilter filters={filters} setFilters={setFilters} />
        <ListingsGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
