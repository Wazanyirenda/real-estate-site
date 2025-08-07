
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ConstructionHero from './ConstructionHero';
import ProjectsGrid from './ProjectsGrid';
import ConstructionServices from './ConstructionServices';

export const metadata: Metadata = {
  title: 'Construction Companies in Zambia - Professional Construction Services | Calm Mountain Properties',
  description: 'Premier construction company in Zambia specializing in residential and commercial construction services. We offer modern house designs, project management, and construction supervision with flexible payment terms. Our experienced team delivers quality construction across Kabwe, Kitwe, and Ndola with completion timelines tailored to your needs. We use premium materials, advanced building techniques, and maintain the highest standards of workmanship. From foundation to finishing, our construction projects are built to last with attention to detail and customer satisfaction as our top priorities.',
  keywords: 'construction companies zambia, construction services zambia, construction company kabwe, construction company kitwe, construction company ndola, building contractors zambia, construction supervision zambia, project management zambia, residential construction zambia, commercial construction zambia, construction contractors zambia, building construction zambia',
  openGraph: {
    title: 'Construction Companies in Zambia - Professional Construction Services',
    description: 'Premier construction company in Zambia specializing in residential and commercial construction services with modern house designs and flexible payment terms. We use premium materials and maintain the highest standards of workmanship.',
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
