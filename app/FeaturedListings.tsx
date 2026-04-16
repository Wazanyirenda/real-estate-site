
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Buildings, HouseLine, MapPinLine } from 'phosphor-react';
import { supabase, type ListingItem } from '@/lib/supabase';

export default function FeaturedListings() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [listings, setListings] = useState<ListingItem[]>([]);

  useEffect(() => {
    const fetchTop = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from('real_estate_listings')
          .select('*')
          .eq('active', true)
          .eq('published', true)
          .order('sort_order', { ascending: true })
          .limit(3);
        if (fetchError) throw fetchError;
        setListings((data ?? []) as ListingItem[]);
      } catch (e: any) {
        setError(e?.message ?? 'Failed to load listings');
      } finally {
        setLoading(false);
      }
    };

    fetchTop();
  }, []);

  const formatPrice = (item: ListingItem) => {
    const p: any = item.pricing ?? {};

    const formatK = (n: number) => {
      try {
        return `K${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)}`;
      } catch {
        return `K${Math.round(n)}`;
      }
    };

    if (item.transaction_type === 'rent') {
      const monthly = Number(p.monthly);
      return Number.isFinite(monthly) ? `${formatK(monthly)} / month` : 'Contact for price';
    }

    const numbers = Object.values(p)
      .map((v) => Number(v))
      .filter((n) => Number.isFinite(n) && n > 0);
    if (numbers.length === 0) return 'Contact for price';
    return `From ${formatK(Math.min(...numbers))}`;
  };

  const listingMeta = useMemo(() => {
    return listings.map((l) => ({
      ...l,
      priceLabel: formatPrice(l),
      kindLabel: l.listing_kind === 'plot' ? 'Plot' : 'House',
      txnLabel: l.transaction_type === 'rent' ? 'Rent' : 'Sale',
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings]);

  return (
    <section className="pt-28 pb-24 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#f7b733] font-bold text-xs uppercase tracking-[0.3em] mb-4">Featured Opportunities</p>
          <h2 className="text-4xl font-bold text-white mb-4 max-w-3xl">
            Top Listings (Updated from the CMS)
          </h2>
          <p className="text-lg text-white/70 max-w-3xl">
            These are the first three listings in your CMS sort order. Add/edit them any time in the dashboard.
          </p>
        </motion.div>

        {error && (
          <div className="mb-8 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(loading ? Array.from({ length: 3 }) : listingMeta).map((listing: any, index) => {
            if (loading) {
              return (
                <div key={`skeleton-${index}`} className="border border-white/10 bg-white/5">
                  <div className="h-56 bg-white/10" />
                  <div className="p-7 space-y-3">
                    <div className="h-4 w-2/3 bg-white/10" />
                    <div className="h-3 w-1/2 bg-white/10" />
                    <div className="h-10 w-full bg-white/10" />
                  </div>
                </div>
              );
            }

            const kindIcon = listing.listing_kind === 'plot' ? MapPinLine : HouseLine;
            const KindIcon = kindIcon;
            const imageUrl = listing.image_url || '/images/estates/greatnorth-estate.png';

            return (
              <motion.div
                key={listing.id}
                className="border border-white/10 bg-white/5 overflow-hidden hover:border-white/25 transition-colors"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="relative">
                  <img src={imageUrl} alt={listing.title} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-white text-[#0a192f] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                      {listing.txnLabel}
                    </span>
                    <span className="border border-white/25 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                      {listing.kindLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#f7b733] text-[#0a192f] px-3 py-1 text-sm font-semibold">
                    {listing.priceLabel}
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="flex h-9 w-9 items-center justify-center bg-[#f7b733] text-[#0a192f]">
                      <KindIcon size={18} weight="fill" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/70">Location</p>
                      <p className="text-sm font-semibold">{listing.location || 'Zambia'}</p>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-white mb-3">{listing.title}</h3>

                  <div className="flex items-center gap-2 text-white/70 mb-5">
                    <MapPinLine size={16} weight="fill" className="text-[#f7b733]" />
                    <span className="text-sm">{listing.location || 'Zambia'}</span>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
                    {listing.description || 'View details for pricing and inspection options.'}
                  </p>

                  <div className="flex gap-2">
                    <Link
                      href={`/listings/${listing.slug}`}
                      className="flex-1 bg-[#f7b733] hover:bg-[#e6a625] text-[#0a192f] px-4 py-3 font-bold uppercase tracking-[0.18em] transition-colors text-center cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 text-xs"
                    >
                      View Details
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                    <Link
                      href="/dashboard"
                      className="border border-white/20 text-white hover:bg-white hover:text-[#0a192f] px-4 py-3 font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer whitespace-nowrap text-xs inline-flex items-center justify-center gap-2"
                      title="Edit listings in the CMS"
                    >
                      <Buildings size={16} weight="fill" />
                      CMS
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link 
            href="/listings" 
            className="bg-white text-[#0a192f] hover:bg-[#f7b733] px-10 py-4 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            View All Listings
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
