import Link from 'next/link';

export function SiteFooter() {
  return <footer className="site-footer">
    <Link href="/" className="brand footer-brand" aria-label="Eros Publishing home">
      <span className="brand-mark">E<span>✦</span></span><span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span>
    </Link>
    <p>Stories that stir something eternal.</p>
    <nav aria-label="Footer navigation" className="footer-links">
      <Link href="/books/">Books</Link><Link href="/portfolio/">Portfolio</Link><Link href="/blog/">Blog</Link>
      <Link href="/author-services/">Author services</Link><Link href="/publishing-pricing/">Pricing</Link><Link href="/publishing-quote/">Free consultation</Link>
      <Link href="/about/">Our story</Link><Link href="/contact/">Contact</Link><Link href="/author-agreements/">Author agreements</Link>
      <Link href="/legal/">Legal & policies</Link><Link href="/eros-publishing-author-checklist.html">Free author checklist</Link>
    </nav>
    <small className="copyright">© {new Date().getFullYear()} Eros Publishing. Independent publishing support based in Kansas City; serving authors nationwide.</small>
  </footer>;
}
