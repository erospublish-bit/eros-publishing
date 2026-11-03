import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detailed Publishing Quote Request',
  description: 'Request a tailored Eros Publishing quote by sharing your manuscript details, publishing goals, formats, services, timeline, and budget.',
  alternates: { canonical: '/publishing-quote/detailed' },
};

export default function DetailedQuoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
