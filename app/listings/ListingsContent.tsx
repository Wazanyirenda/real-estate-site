'use client';

import { useState } from 'react';
import ListingsFilter from './ListingsFilter';
import ListingsGrid from './ListingsGrid';

export default function ListingsContent() {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    plotSize: '',
    paymentPlan: ''
  });

  return (
    <>
      <ListingsFilter filters={filters} setFilters={setFilters} />
      <ListingsGrid />
    </>
  );
} 