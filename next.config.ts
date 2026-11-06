import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Monitoring only until browser testing establishes compatible third-party domains.
  { key: 'Content-Security-Policy-Report-Only', value: "default-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.paypal.com https://js.lulu.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://formspree.io https://www.paypal.com https://api-m.paypal.com https://api-m.sandbox.paypal.com https://js.lulu.com; frame-src https://www.paypal.com https://www.sandbox.paypal.com https://js.lulu.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
export default nextConfig;
