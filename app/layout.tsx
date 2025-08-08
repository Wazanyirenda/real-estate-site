import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calm Mountain Properties - Premium Real Estate in Zambia',
  description: 'Leading Zambian real estate development company specializing in titled residential plots, construction services, and property consultancy. We offer premium plots in strategic locations across Kabwe, Kitwe, and Ndola with flexible payment plans. Our experienced team provides comprehensive real estate solutions including title processing, construction supervision, property management, and land surveying. With a proven track record of excellence and commitment to quality, we are your trusted partner for real estate investment and development in Zambia. Discover our premium estates including Great North Estate, Paramount Estate, and Fatima Estate.',
  keywords: 'real estate zambia, land for sale zambia, residential plots kabwe, residential plots kitwe, residential plots ndola, property development zambia, title deeds zambia, construction services zambia, plot sales zambia, estate planning zambia, land ownership zambia, property investment zambia, real estate agent zambia, property management zambia, land surveying zambia, title processing zambia, construction supervision zambia, great north estate kabwe, paramount estate kitwe, fatima estate ndola',
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
      description: 'Leading Zambian real estate development company specializing in titled residential plots, construction services, and property consultancy. We offer premium plots in strategic locations across Kabwe, Kitwe, and Ndola with flexible payment plans. Our experienced team provides comprehensive real estate solutions with a proven track record of excellence.',
    url: 'https://calmmountainproperties.com',
    siteName: 'Calm Mountain Properties',
    images: [
      {
        url: '/images/logoo.png',
        width: 1200,
        height: 1200,
        alt: 'Calm Mountain Properties Logo - Premium Real Estate in Zambia',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calm Mountain Properties - Premium Real Estate in Zambia',
    description: 'Leading Zambian real estate development company specializing in titled residential plots, construction services, and property consultancy. We offer premium plots in strategic locations with flexible payment plans and comprehensive real estate solutions.',
    images: ['/images/logoo.png'],
    creator: '@calmmountainprop',
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
  category: 'Real Estate',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'geo.region': 'ZM',
    'geo.placename': 'Zambia',
    'geo.position': '-13.1339;27.8493',
    'ICBM': '-13.1339, 27.8493',
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
        <link rel="icon" type="image/png" href="/favicon.png" />
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
              "description": "Leading Zambian real estate development company specializing in titled residential plots, construction services, and property consultancy. We offer premium plots in strategic locations across Kabwe, Kitwe, and Ndola with flexible payment plans. Our experienced team provides comprehensive real estate solutions including title processing, construction supervision, property management, and land surveying. With a proven track record of excellence and commitment to quality, we are your trusted partner for real estate investment and development in Zambia.",
              "url": "https://calmmountainproperties.com",
              "telephone": "+260 761 370 566",
              "email": "info@calmmountainproperties.com",
              "logo": "https://calmmountainproperties.com/images/logoo.png",
              "image": "https://calmmountainproperties.com/images/logoo.png",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 7 Chinika Road, Northrise",
                  "addressLocality": "Ndola",
                  "addressRegion": "Copperbelt",
                  "addressCountry": "ZM",
                  "postalCode": "10101"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 204-214a Lusito Street",
                  "addressLocality": "Kabwe",
                  "addressRegion": "Central",
                  "addressCountry": "ZM",
                  "postalCode": "10101"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 115 Luela Rd, off Cent street Nkana East",
                  "addressLocality": "Kitwe",
                  "addressRegion": "Copperbelt",
                  "addressCountry": "ZM",
                  "postalCode": "10101"
                }
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Kabwe",
                  "addressRegion": "Central",
                  "addressCountry": "ZM"
                },
                {
                  "@type": "City", 
                  "name": "Kitwe",
                  "addressRegion": "Copperbelt",
                  "addressCountry": "ZM"
                },
                {
                  "@type": "City",
                  "name": "Ndola", 
                  "addressRegion": "Copperbelt",
                  "addressCountry": "ZM"
                }
              ],
              "serviceType": [
                "Real Estate",
                "Property Development", 
                "Land Sales",
                "Title Deed Processing",
                "Construction Services",
                "Land Surveying",
                "Estate Planning"
              ],
              "priceRange": "K20,000 - K85,000",
              "paymentAccepted": "Cash, Bank Transfer, Mobile Money",
              "currenciesAccepted": "ZMW",
              "openingHours": "Mo-Fr 08:00-17:00",
              "sameAs": [
                "https://facebook.com/share/1CGwLja4vM/",
                "https://tiktok.com/@calmmountainproperties"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Residential Plots",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Great North Estate - Kabwe",
                      "description": "Titled residential plots in Kabwe with flexible payment plans"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Paramount Estate - Kitwe",
                      "description": "Titled residential plots in Kitwe with flexible payment plans"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product", 
                      "name": "Fatima Estate - Ndola",
                      "description": "Titled residential plots in Ndola with flexible payment plans"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
