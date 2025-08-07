
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ConstructionHero from './ConstructionHero';
import ProjectsGrid from './ProjectsGrid';
import ConstructionServices from './ConstructionServices';

export const metadata: Metadata = {
  title: 'Construction Companies in Zambia - Professional Construction Services | Calm Mountain Properties',
  description: 'Leading construction company in Zambia offering professional construction services, project management, and construction supervision. Residential and commercial construction in Kabwe, Kitwe, Ndola. Quality construction with experienced team.',
  keywords: 'construction companies zambia, construction services zambia, construction company kabwe, construction company kitwe, construction company ndola, building contractors zambia, construction supervision zambia, project management zambia, residential construction zambia, commercial construction zambia, construction contractors zambia, building construction zambia',
  openGraph: {
    title: 'Construction Companies in Zambia - Professional Construction Services',
    description: 'Leading construction company in Zambia offering professional construction services, project management, and construction supervision.',
    url: 'https://calmmountainproperties.com/construction',
    images: [
      {
        url: '/images/logoo.png',
        width: 1200,
        height: 1200,
        alt: 'Calm Mountain Properties Logo - Construction Services',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: '/construction',
  },
};

export default function ConstructionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ConstructionHero />
        <ProjectsGrid />
        <ConstructionServices />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
