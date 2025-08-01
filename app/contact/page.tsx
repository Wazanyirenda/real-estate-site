'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}