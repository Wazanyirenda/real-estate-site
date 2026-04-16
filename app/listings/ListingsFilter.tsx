'use client';

import { type Dispatch, type SetStateAction } from 'react';

type Filters = {
  transactionType: 'all' | 'sale' | 'rent';
  listingKind: 'all' | 'plot' | 'house';
  location: 'all' | 'kabwe' | 'kitwe' | 'ndola';
};

interface FiltersProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export default function ListingsFilter({ filters, setFilters }: FiltersProps) {
  const clearFilters = () =>
    setFilters({
      transactionType: 'all',
      listingKind: 'all',
      location: 'all',
    });

  return (
    <section className="py-14 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="bg-white border border-gray-100 p-8 md:p-10">
          <div className="mb-8">
            <p className="text-[#0a192f]/50 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Refine Results
            </p>
            <h2 className="text-3xl font-bold text-[#0a192f] uppercase mb-4">Filter Listings</h2>
            <div className="w-12 h-0.5 bg-[#f7b733]" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0a192f]/60 mb-3">Transaction</label>
              <div className="flex flex-wrap gap-2">
                {([
                  ['all', 'All'],
                  ['sale', 'Sale'],
                  ['rent', 'Rent'],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilters((p) => ({ ...p, transactionType: key }))}
                    className={`px-4 py-2 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                      filters.transactionType === key
                        ? 'bg-[#0a192f] border-[#0a192f] text-white'
                        : 'bg-white border-gray-200 text-[#0a192f] hover:border-[#0a192f]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0a192f]/60 mb-3">Listing Kind</label>
              <div className="flex flex-wrap gap-2">
                {([
                  ['all', 'All'],
                  ['plot', 'Plots'],
                  ['house', 'Houses'],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilters((p) => ({ ...p, listingKind: key }))}
                    className={`px-4 py-2 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                      filters.listingKind === key
                        ? 'bg-[#0a192f] border-[#0a192f] text-white'
                        : 'bg-white border-gray-200 text-[#0a192f] hover:border-[#0a192f]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0a192f]/60 mb-3">Location</label>
              <div className="flex flex-wrap gap-2">
                {([
                  ['all', 'All'],
                  ['kabwe', 'Kabwe'],
                  ['kitwe', 'Kitwe'],
                  ['ndola', 'Ndola'],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilters((p) => ({ ...p, location: key }))}
                    className={`px-4 py-2 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                      filters.location === key
                        ? 'bg-[#0a192f] border-[#0a192f] text-white'
                        : 'bg-white border-gray-200 text-[#0a192f] hover:border-[#0a192f]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-100 pt-6">
            <button
              onClick={clearFilters}
              className="text-[#0a192f] hover:text-black transition-colors cursor-pointer font-semibold text-sm uppercase tracking-[0.18em]"
              type="button"
            >
              Clear All Filters
            </button>
            <div className="text-sm text-gray-500">
              Showing results for your selected filters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}