import { createClient } from '@supabase/supabase-js';

// Client-side supabase client.
// Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to be set.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn(
    '[Supabase] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. ' +
      'The app will not be able to fetch from Supabase until these are configured.'
  );
}

export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder.supabase.co',
  supabaseAnonKey ?? 'placeholder'
);

export type CareerItem = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type ListingItem = {
  id: string;
  slug: string;
  title: string;
  location: string;
  listing_kind: 'plot' | 'house';
  transaction_type: 'sale' | 'rent';
  description: string;
  features: string[];
  pricing: Record<string, unknown>;
  image_url: string | null;
  gallery_urls: string[];
  active: boolean;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

