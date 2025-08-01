import EstateDetail from './EstateDetail';

export async function generateStaticParams() {
  return [
    { slug: 'great-north-estate' },
    { slug: 'paramount-estate' },
    { slug: 'dreamscape-housing' },
    { slug: 'fatima-estate' },
  ];
}

export default async function EstatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <EstateDetail estateSlug={resolvedParams.slug} />;
}
