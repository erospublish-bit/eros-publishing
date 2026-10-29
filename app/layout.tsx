import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eros Publishing | Stories That Stay With You',
  description: 'Discover unforgettable books and explore self-publishing support from Eros Publishing.',
  metadataBase: new URL('https://erospublishingkc.com'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
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
