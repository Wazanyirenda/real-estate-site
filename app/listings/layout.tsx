import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Plots for Sale in Zambia - Kabwe, Kitwe, Ndola | Calm Mountain Properties',
  description: 'Discover premium residential plots for sale in Zambia. We offer titled plots in strategic locations across Kabwe, Kitwe, and Ndola with flexible payment plans. Our estates include Great North Estate, Paramount Estate, and Fatima Estate. Each estate features comprehensive infrastructure planning, road networks, and modern amenities. Professional real estate development with a focus on quality, security, and long-term value appreciation. Our experienced team ensures smooth title processing and provides ongoing support throughout your investment journey.',
  keywords: 'plots for sale zambia, residential plots kabwe, residential plots kitwe, residential plots ndola, land for sale zambia, titled plots zambia, property investment zambia, real estate plots, residential land zambia, plot sales kabwe, plot sales kitwe, plot sales ndola',
  openGraph: {
    title: 'Residential Plots for Sale in Zambia - Kabwe, Kitwe, Ndola',
    description: 'Discover premium residential plots for sale in Zambia. We offer titled plots in strategic locations across Kabwe, Kitwe, and Ndola with flexible payment plans. Each estate features comprehensive infrastructure planning and modern amenities.',
    url: 'https://calmmountainproperties.com/listings',
    images: [
      {
        url: '/images/logoo.png',
        width: 1200,
        height: 1200,
        alt: 'Calm Mountain Properties Logo - Residential Plots for Sale',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: '/listings',
  },
};

export default function ListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 