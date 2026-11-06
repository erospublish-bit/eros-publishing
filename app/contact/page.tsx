import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Eros Publishing about books, author services, and publishing projects. Start with a free consultation or email our publishing team.',
  alternates: { canonical: '/contact/' },
  openGraph: { title: 'Contact Eros Publishing', description: 'Questions about a book or publishing your manuscript? Contact our team.', url: '/contact/' },
};
export default function ContactPage() {
  return <PageShell eyebrow="LET'S START A CONVERSATION" title="Good stories start" accent="with hello." intro="Questions about a book, manuscript, or publishing project? Choose the most useful next step.">
    <section className="contact-panel">
      <h2 className="page-section-heading">How can we help?</h2>
      <p>For manuscript and publishing service requests, our free initial inquiry form is the fastest way to share your project details. There is no obligation to purchase services.</p>
      <p><Link className="button button-primary" href="/publishing-quote/">Request a Free Consultation →</Link></p>
      <p>Already know your book's length, formats and publishing goals? <Link className="text-link" href="/publishing-quote/detailed/">Use the detailed quote form</Link>.</p>
      <h2 className="page-section-heading">Email Eros Publishing</h2>
      <p>For questions about our books, existing projects, partnerships or general inquiries:</p>
      <a className="contact-email" href="mailto:authors@erospublishingkc.com">authors@erospublishingkc.com</a>
      <p>Do not email unpublished complete manuscripts, account passwords, financial details, or other confidential material before a secure submission process is agreed. We respond individually; response times vary with inquiry volume.</p>
      <p><Link className="text-link" href="/legal/#privacy">Read our privacy policy</Link> · <Link className="text-link" href="/books/">Browse our books</Link></p>
    </section>
  </PageShell>;
}