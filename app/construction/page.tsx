
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ConstructionHero from './ConstructionHero';
import ProjectsGrid from './ProjectsGrid';
import ConstructionServices from './ConstructionServices';

export const metadata: Metadata = {
  title: 'Construction Projects & Services | Calm Mountain Properties',
  description: 'Professional construction supervision, project management, and architectural planning services in Zambia. View our completed and ongoing construction projects.',
  keywords: 'construction zambia, project management, architectural planning, construction supervision, building contractors',
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
