'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Buildings, FileText, MapPinLine, Users } from 'phosphor-react';
import { supabase, type CareerItem, type ListingItem } from '@/lib/supabase';
import CareersCrud from './CareersCrud';
import ListingsCrud from './ListingsCrud';

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [tab, setTab] = useState<'dashboard' | 'careers' | 'listings'>('dashboard');
  const [userEmail, setUserEmail] = useState<string>('');
  const [careers, setCareers] = useState<CareerItem[]>([]);
  const [listings, setListings] = useState<ListingItem[]>([]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
          setAuthorized(false);
          router.replace('/dashboard/login');
          return;
        }

        const session = sessionData.session;
        if (!session?.user?.id) {
          setAuthorized(false);
          router.replace('/dashboard/login');
          return;
        }

        setUserEmail(session.user.email ?? '');
        setAuthorized(true);

        const [{ data: careersData }, { data: listingsData }] = await Promise.all([
          supabase.from('careers').select('*').order('created_at', { ascending: false }),
          supabase.from('real_estate_listings').select('*').order('sort_order', { ascending: true }),
        ]);

        setCareers((careersData ?? []) as CareerItem[]);
        setListings((listingsData ?? []) as ListingItem[]);
      } finally {
        setLoading(false);
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/dashboard/login');
  };

  const statCards = [
    {
      label: 'Career Roles',
      value: careers.length,
      meta: `${careers.filter((c) => c.active).length} active`,
      icon: Users,
    },
    {
      label: 'Listings',
      value: listings.length,
      meta: `${listings.filter((l) => l.published).length} published`,
      icon: Buildings,
    },
    {
      label: 'Homes & Plots',
      value: listings.filter((l) => l.active).length,
      meta: 'visible on site',
      icon: MapPinLine,
    },
    {
      label: 'Content Items',
      value: careers.length + listings.length,
      meta: 'managed here',
      icon: FileText,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-sm uppercase tracking-[0.2em] text-gray-500">Loading dashboard...</div>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
        <div className="w-full max-w-md border border-gray-100 bg-white p-6">
          <h1 className="mb-2 text-xl font-bold uppercase text-black">Sign in required</h1>
          <p className="mb-4 text-gray-500">Please sign in to access the dashboard.</p>
          <button
            onClick={() => router.replace('/dashboard/login')}
            className="w-full bg-black px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-[#2e2e2e] cursor-pointer"
          >
            Go to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
      <div className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Calm Mountain Properties"
              className="h-11 w-auto object-contain invert"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45 font-semibold mb-1">
                Calm Mountain Properties
              </p>
              <h1 className="text-lg font-bold uppercase">CMS Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">Signed in as</p>
              <p className="text-sm text-white/80">{userEmail || 'Authenticated user'}</p>
            </div>
            <button
              onClick={() => onLogout()}
              className="border border-white/15 hover:border-white/35 text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
        <div className="mb-8 border-b border-gray-200">
          {([
            ['dashboard', 'Dashboard'],
            ['careers', 'Careers'],
            ['listings', 'Listings'],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`mr-6 border-b-2 px-1 py-4 text-xs font-bold uppercase tracking-[0.24em] transition-colors cursor-pointer ${
                tab === key
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {tab === 'dashboard' && (
            <>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {statCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.label} className="border border-gray-100 bg-white p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                            {card.label}
                          </p>
                          <p className="mb-2 text-4xl font-bold text-black">{card.value}</p>
                          <p className="text-sm text-gray-500">{card.meta}</p>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gray-200">
                          <Icon size={20} weight="fill" className="text-black" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
                <div className="border border-gray-100 bg-white p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                        Overview
                      </p>
                      <h2 className="text-2xl font-bold uppercase text-black">Content Summary</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setTab('careers')}
                        className="bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#2e2e2e] transition-colors"
                      >
                        Manage Careers
                      </button>
                      <button
                        onClick={() => setTab('listings')}
                        className="border border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-gray-50 transition-colors"
                      >
                        Manage Listings
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-100 bg-gray-50 p-5">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                        Recent Careers
                      </p>
                      <div className="space-y-3">
                        {careers.slice(0, 4).map((career) => (
                          <div key={career.id} className="border border-gray-100 bg-white p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`w-2 h-2 ${career.active ? 'bg-[#f7b733]' : 'bg-gray-300'} block`} />
                              <p className="truncate text-sm font-semibold text-black">{career.title}</p>
                            </div>
                            <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                              {career.department} · {career.type}
                            </p>
                          </div>
                        ))}
                        {careers.length === 0 && <p className="text-sm text-gray-500">No careers created yet.</p>}
                      </div>
                    </div>

                    <div className="border border-gray-100 bg-gray-50 p-5">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                        Recent Listings
                      </p>
                      <div className="space-y-3">
                        {listings.slice(0, 4).map((listing) => (
                          <div key={listing.id} className="border border-gray-100 bg-white p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`w-2 h-2 ${listing.published ? 'bg-[#f7b733]' : 'bg-gray-300'} block`} />
                              <p className="truncate text-sm font-semibold text-black">{listing.title}</p>
                            </div>
                            <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                              {listing.listing_kind} · {listing.transaction_type}
                            </p>
                          </div>
                        ))}
                        {listings.length === 0 && <p className="text-sm text-gray-500">No listings created yet.</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-100 bg-white p-6 md:p-8">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                    Quick Actions
                  </p>
                  <h2 className="mb-6 text-2xl font-bold uppercase text-black">Useful Links</h2>
                  <div className="space-y-3">
                    <Link href="/careers" className="block border border-gray-100 p-4 hover:border-gray-300 transition-colors">
                      <p className="mb-1 text-sm font-semibold text-black">Open Careers Page</p>
                      <p className="text-xs text-gray-500">Review how live roles appear on the public site.</p>
                    </Link>
                    <Link href="/listings" className="block border border-gray-100 p-4 hover:border-gray-300 transition-colors">
                      <p className="mb-1 text-sm font-semibold text-black">Open Listings Page</p>
                      <p className="text-xs text-gray-500">Check published plots and houses on the public website.</p>
                    </Link>
                    <Link href="/contact" className="block border border-gray-100 p-4 hover:border-gray-300 transition-colors">
                      <p className="mb-1 text-sm font-semibold text-black">Open Contact Page</p>
                      <p className="text-xs text-gray-500">Verify inquiry flow and public contact information.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'careers' && (
            <div className="border border-gray-100 bg-white p-6 md:p-8">
              <CareersCrud />
            </div>
          )}

          {tab === 'listings' && (
            <div className="border border-gray-100 bg-white p-6 md:p-8">
              <ListingsCrud />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

