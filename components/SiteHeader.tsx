'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type SiteHeaderProps = {
  homeHref?: string;
};

export function SiteHeader({ homeHref = '/' }: SiteHeaderProps) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  return (
    <header className="site-header">
      <Link href={homeHref} className="brand" aria-label="Eros Publishing home" onClick={closeMenu}>
        <span className="brand-mark">E<span>✦</span></span>
        <span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span>
      </Link>
      <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`} aria-label="Primary navigation">
        <Link href="/books" onClick={closeMenu}>Books</Link>
        <Link href="/portfolio" onClick={closeMenu}>Portfolio</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/author-services" onClick={closeMenu}>For authors</Link>
        <Link href="/publishing-pricing" onClick={closeMenu}>Pricing</Link>
        <Link href="/about" onClick={closeMenu}>Our story</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <div className="header-actions">
        <Link className="button button-primary page-header-cta quote-header-cta" href="/publishing-quote" onClick={closeMenu}>Free Consultation <span aria-hidden="true">→</span></Link>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          onClick={() => setMobileMenu((open) => !open)}
          aria-label={mobileMenu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
