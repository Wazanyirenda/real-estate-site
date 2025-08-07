
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ListingsHero from './ListingsHero';
import ListingsContent from './ListingsContent';

export default function ListingsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ListingsHero />
        <ListingsContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
