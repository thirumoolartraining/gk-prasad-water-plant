import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Lustria, Lato } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';

// Initialize Google Fonts
const lustria = Lustria({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lustria',
  display: 'swap',
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gkprasadaquafarm.com'),
  title: 'G K Prasad Aqua Farm - Pure Water & Nostalgic Indian Sodas',
  description: 'Regional manufacturer of premium packaged drinking water and authentic Indian sodas including Jeera, Orange, and Ginger Ale. BIS certified, RO-UV purified, 100% recyclable.',
  keywords: 'packaged drinking water, Indian sodas, Jeera soda, Orange soda, Ginger Ale, BIS certified, RO water, UV treated, Kumbakonam, Tamil Nadu',
  openGraph: {
    title: 'G K Prasad Aqua Farm',
    description: 'Pure Water & Nostalgic Indian Sodas',
    type: 'website',
    images: [
      {
        url: '/images/ChatGPT Image Jun 18, 2025, 08_36_34 PM.png',
        width: 1200,
        height: 630,
        alt: 'G K Prasad Aqua Farm Logo',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/ChatGPT Image Jun 18, 2025, 08_36_34 PM.png',
    apple: '/images/ChatGPT Image Jun 18, 2025, 08_36_34 PM.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "G K Prasad Aqua Farm",
  "description": "Regional manufacturer of packaged drinking water and Indian sodas",
  "logo": "/images/ChatGPT Image Jun 18, 2025, 08_36_34 PM.png",
  "image": "/images/ChatGPT Image Jun 18, 2025, 08_36_34 PM.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No 21, West St, Senbagakollai Village",
    "addressLocality": "Kumbakonam Taluk",
    "addressRegion": "Thanjavur",
    "postalCode": "612 605",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English",
    "contactOption": "TollFree"
  },
  "url": "https://gkprasadaquafarm.com",
  "sameAs": [
    "https://facebook.com/gkprasadaquafarm",
    "https://instagram.com/gkprasadaquafarm"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lustria.variable} ${lato.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased" data-testid="viewport-responsive">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}