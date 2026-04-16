import { supabase, type ListingItem } from '@/lib/supabase';
import EstateDetail from './EstateDetail';

export default async function ListingPage({ params }: { params: { slug: string } }) {
  const resolvedSlug = params.slug;

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
