import { supabase, type ListingItem } from '@/lib/supabase';
import EstateDetail from './EstateDetail';

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const { data, error } = await supabase
      .from('real_estate_listings')
      .select('slug')
      .eq('active', true)
      .eq('published', true);

    if (error || !data || data.length === 0) {
      console.warn('generateStaticParams: no slugs returned', error);
      return [{ slug: '_placeholder' }];
    }

    return data
      .map((item) => item.slug)
      .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
      .map((slug) => ({ slug }));
  } catch (err) {
    console.error('generateStaticParams error:', err);
    return [{ slug: '_placeholder' }];
  }
}

export default async function ListingPage({ params }: { params: { slug: string } }) {
  const resolvedSlug = params.slug;

  if (resolvedSlug === '_placeholder') {
    return null;
  }

  const { data, error } = await supabase
    .from('real_estate_listings')
    .select('*')
    .eq('slug', resolvedSlug)
    .maybeSingle<ListingItem>();

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white border border-gray-100 rounded-xl p-6 text-center">
          Listing not found.
        </div>
      </div>
    );
  }

  return <EstateDetail listing={data} />;
}