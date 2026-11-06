import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './accessibility.css';
import coverImage from '@/images/no-love-lost-in-the-village-web.webp';

const siteUrl = 'https://erospublishingkc.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Eros Publishing | Independent Books & Self-Publishing Services',
    template: '%s | Eros Publishing',
  },
  description: 'Eros Publishing is an independent publishing company based in Kansas City, offering books and professional self-publishing support for authors nationwide.',
  applicationName: 'Eros Publishing',
  authors: [{ name: 'Eros Publishing', url: siteUrl }],
  creator: 'Eros Publishing',
  publisher: 'Eros Publishing',
  category: 'Publishing',
  keywords: ['Eros Publishing', 'self-publishing services', 'book publishing', 'independent publishing', 'author services', 'book editing', 'book formatting', 'book cover design', 'Kansas City publishing'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Eros Publishing',
    title: 'Eros Publishing | Independent Books & Self-Publishing Services',
    description: 'Discover Eros Publishing books and professional self-publishing support for authors—from manuscript preparation through publication and distribution.',
    images: [{ url: coverImage.src, width: coverImage.width, height: coverImage.height, alt: 'No Love Lost in the Village by B. Eros — Eros Publishing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eros Publishing | Independent Books & Self-Publishing Services',
    description: 'Independent books and professional self-publishing support for authors.',
    images: [coverImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Search Console: once Google provides a verification token, set the
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION environment variable in production.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1M5DXNQF7F" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-1M5DXNQF7F');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
