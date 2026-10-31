import type { Metadata } from 'next';
import Storefront from '@/components/Storefront';

const siteUrl = 'https://erospublishingkc.com';

export const metadata: Metadata = {
  title: 'Eros Publishing | Independent Books & Publishing Services',
  description:
    'Eros Publishing is an independent publishing company based in Kansas City, offering books and professional self-publishing services for authors nationwide.',
  alternates: {
    canonical: siteUrl,
  },
};

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Eros Publishing',
  url: siteUrl,
  description:
    'Independent publishing company based in Kansas City, offering books and professional self-publishing services for authors nationwide.',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'Book publishing',
    'Self-publishing',
    'Book editing',
    'Book formatting',
    'Book cover design',
    'Publishing distribution',
    'Fiction publishing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Publishing Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Editing and Manuscript Services',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Book Design and Formatting',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Self-Publishing and Distribution Setup',
      },
    ],
  },
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Eros Publishing',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <Storefront />
    </>
  );
}
