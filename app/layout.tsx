import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eros Publishing | Stories That Stay With You',
  description: 'Discover unforgettable books and explore self-publishing support from Eros Publishing.',
  metadataBase: new URL('https://erospublishingkc.com'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
