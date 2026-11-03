import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';

type PageShellProps = { eyebrow: string; title: string; accent: string; intro: string; children: React.ReactNode };

export function PageShell({ eyebrow, title, accent, intro, children }: PageShellProps) {
  return (
    <>
      <div className="announcement">✦ STORIES WITH A LITTLE DIVINE FIRE <span className="announcement-dot">✦</span> INDEPENDENTLY PUBLISHED, FOREVER REMEMBERED</div>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="eyebrow"><span /> {eyebrow}</div>
          <h1>{title}<br/><em>{accent}</em></h1>
          <p>{intro}</p>
        </section>
        <div className="subpage-content">{children}</div>
      </main>
      <footer className="site-footer">
        <Link href="/" className="brand footer-brand"><span className="brand-mark">E<span>✦</span></span><span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span></Link>
        <p>Stories that stir something eternal.</p>
        <div className="footer-links"><Link href="/books">Books</Link><Link href="/portfolio">Portfolio</Link><Link href="/blog">Blog</Link><Link href="/author-services">Author services</Link><Link href="/publishing-pricing">Pricing</Link><Link href="/publishing-quote">Request a quote</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link><Link href="/author-agreements">Author agreements</Link><Link href="/legal">Legal & policies</Link></div>
        <small className="copyright">© {new Date().getFullYear()} Eros Publishing. All stories welcome.</small>
      </footer>
    </>
  );
}
