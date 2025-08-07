import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Plots for Sale in Zambia - Kabwe, Kitwe, Ndola | Calm Mountain Properties',
  description: 'Find residential plots for sale in Zambia. Titled plots in Kabwe, Kitwe, and Ndola with flexible payment plans from K20,000. Great North Estate, Paramount Estate, Fatima Estate. Professional real estate development.',
  keywords: 'plots for sale zambia, residential plots kabwe, residential plots kitwe, residential plots ndola, land for sale zambia, titled plots zambia, property investment zambia, real estate plots, residential land zambia, plot sales kabwe, plot sales kitwe, plot sales ndola',
  openGraph: {
    title: 'Residential Plots for Sale in Zambia - Kabwe, Kitwe, Ndola',
    description: 'Find residential plots for Sale in Zambia. Titled plots in Kabwe, Kitwe, and Ndola with flexible payment plans from K20,000.',
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