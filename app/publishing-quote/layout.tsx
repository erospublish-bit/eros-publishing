import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Self-Publishing Consultation for Authors',
  description: 'Discuss your book with Eros Publishing. Request a free initial publishing consultation for editing, cover design, formatting, or distribution support.',
  alternates: { canonical: '/publishing-quote' },
  openGraph: {
    title: 'Free Publishing Consultation | Eros Publishing',
    description: 'Tell us about your book and explore the next steps for self-publishing.',
    url: 'https://erospublishingkc.com/publishing-quote',
  },
};

export default function PublishingQuoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
