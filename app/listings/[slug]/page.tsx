import EstateDetail from './EstateDetail';

export async function generateStaticParams() {
  return [
    { slug: 'great-north-estate' },
    { slug: 'paramount-estate' },
    { slug: 'dreamscape-housing' },
    { slug: 'fatima-estate' },
  ];
}

export default function EstatePage({ params }: { params: { slug: string } }) {
  return <EstateDetail estateSlug={params.slug} />;
}