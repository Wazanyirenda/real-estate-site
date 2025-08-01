
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calm Mountain Properties',
  description: 'Leading real estate company in Zambia offering titled residential plots in Kabwe, Kitwe, and Ndola. Flexible payment plans from K20,000. Professional property development, title deed processing, and construction services.',
  keywords: 'real estate zambia, land for sale zambia, property development, title deeds, residential plots kabwe kitwe ndola, construction services zambia, plot sales zambia, estate planning zambia',
  authors: [{ name: 'Calm Mountain Properties' }],
  creator: 'Calm Mountain Properties',
  publisher: 'Calm Mountain Properties',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calmmountainproperties.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Calm Mountain Properties - Premium Real Estate in Zambia',
    description: 'Titled residential plots from K20,000 with flexible payment plans in Kabwe, Kitwe & Ndola',
    url: 'https://calmmountainproperties.com',
    siteName: 'Calm Mountain Properties',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calm Mountain Properties - Real Estate in Zambia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calm Mountain Properties - Premium Real Estate in Zambia',
    description: 'Titled residential plots from K20,000 with flexible payment plans in Kabwe, Kitwe & Ndola',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Calm Mountain Properties",
              "description": "Leading real estate company in Zambia offering titled residential plots with flexible payment plans",
              "url": "https://calmountainproperties.com",
              "telephone": "+260 761 370 566",
              "email": "info@calmountainproperties.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 7 Chinika Road, Northrise",
                  "addressLocality": "Ndola",
                  "addressCountry": "ZM"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 204-214a Lusito Street",
                  "addressLocality": "Kabwe",
                  "addressCountry": "ZM"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 115 Luela Rd, off Cent street Nkana East",
                  "addressLocality": "Kitwe",
                  "addressCountry": "ZM"
                }
              ],
              "areaServed": ["Kabwe", "Kitwe", "Ndola", "Zambia"],
              "serviceType": ["Real Estate", "Property Development", "Land Sales", "Construction Services"],
              "priceRange": "K20,000 - K85,000"
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}

function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);
  return null;
}
