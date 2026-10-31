/** @jsxRuntime automatic */
'use client';

import { createElement, useEffect, useMemo, useState, type ChangeEvent, type MouseEvent } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, ChevronDown, Headphones, Heart, Menu, Minus, Plus, ShoppingBag, Sparkles, X } from 'lucide-react';
import { books, type Book, type BookFormat } from '@/lib/books';

const LULU_BOOK_ID = 'no-love-lost-in-the-village';

type CartLine = { book: Book; format: BookFormat; quantity: number };

const money = (value: number): string => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

function CoverArt({ book, large = false }: { book: Book; large?: boolean }) {
  return (
    <div className={`book-cover ${large ? 'book-cover-large' : ''}`} aria-label={`Cover of ${book.title}`} role="img">
      {book.cover ? <Image className="book-cover-image" src={book.cover} alt="" fill sizes="(max-width: 700px) 130px, 155px" /> : <><span className="cover-kicker">AN EROS PUBLISHING TITLE</span><span className="cover-symbol">✦</span><strong>{book.title}</strong><span className="cover-author">{book.author}</span></>}
    </div>
  );
}

export default function Storefront() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [format, setFormat] = useState<Record<string, BookFormat>>({});
  const [notice, setNotice] = useState('');
  const [luluReady, setLuluReady] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.lulu.com/lulu-buy.js';
    script.async = true;
    script.onload = () => setLuluReady(true);
    document.body.appendChild(script);
    return () => { script.onload = null; script.remove(); };
  }, []);

  const filteredBooks: Book[] = useMemo(() => books.filter((book: Book) => `${book.title} ${book.author} ${book.genre}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.book.price * line.quantity, 0);
  const luluBook = books.find((book) => book.id === LULU_BOOK_ID);

  function addToCart(book: Book) {
    const chosen = format[book.id] ?? book.formats[0];
    setCart((current) => {
      const existing = current.find((line) => line.book.id === book.id && line.format === chosen);
      if (existing) return current.map((line) => line === existing ? { ...line, quantity: line.quantity + 1 } : line);
      return [...current, { book, format: chosen, quantity: 1 }];
    });
    setNotice(`${book.title} added to your bag.`);
    setCartOpen(true);
  }

  function changeQuantity(bookId: string, chosenFormat: BookFormat, delta: number): void {
    setCart((current: CartLine[]) => current.map((line: CartLine) => line.book.id === bookId && line.format === chosenFormat ? { ...line, quantity: line.quantity + delta } : line).filter((line: CartLine) => line.quantity > 0));
  }

  const handleDrawerBackdropMouseDown = (event: MouseEvent<HTMLDivElement>): void => { if (event.target === event.currentTarget) setCartOpen(false); };
  const handleBookSearch = (event: ChangeEvent<HTMLInputElement>): void => setQuery(event.target.value);

  return (
    <>
      <div className="announcement"><Sparkles size={14} /> STORIES WITH A LITTLE DIVINE FIRE <span className="announcement-dot">✦</span> INDEPENDENTLY PUBLISHED, FOREVER REMEMBERED</div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Eros Publishing home"><span className="brand-mark">E<span>✦</span></span><span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span></a>
        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`}><a href="/books" onClick={() => setMobileMenu(false)}>Books</a><a href="/books#formats" onClick={() => setMobileMenu(false)}>Book formats</a><a href="/blog" onClick={() => setMobileMenu(false)}>Blog</a><a href="/author-services" onClick={() => setMobileMenu(false)}>For authors</a><a href="/about" onClick={() => setMobileMenu(false)}>Our story</a></nav>
        <div className="header-actions"><a className="button button-primary" href="/publishing-quote">Request a Quote</a><button className="icon-button bag-button" onClick={() => setCartOpen(true)} aria-label={`Open shopping bag, ${count} items`}><ShoppingBag size={19} /><span>Bag</span><b>{count}</b></button><button className="icon-button mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button></div>
      </header>

      <main>
        <section className="hero" id="home"><div className="hero-glow" /><div className="hero-copy"><div className="eyebrow"><span /> THE HOME OF STORIES THAT STAY WITH YOU</div><h1>Fall in love<br />with <em>the story.</em></h1><p>Discover books that move you—or bring your own manuscript to life with professional editing, design, formatting, and publishing support.</p><div className="hero-actions"><a className="button button-primary" href="#books">Explore Our Books <ArrowRight size={17} /></a><a className="text-link" href="/publishing-quote">Publish With Eros <ArrowRight size={15} /></a></div><div className="hero-proof"><span className="proof-icon"><Heart size={15} /></span><span>For readers, dreamers, and authors ready to publish.</span></div></div><div className="hero-art" aria-label="Decorative mythology-inspired illustration"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun-disc"><span>✦</span></div><div className="hero-statue"><span className="statue-wings">⌁</span><span className="statue-head" /><span className="statue-body" /><span className="statue-cloth" /><span className="statue-base" /></div><div className="hero-caption"><span>✦</span><div><b>Inspired by Eros</b><small>Love, desire & the art of creation</small></div></div><span className="hero-star star-a">✧</span><span className="hero-star star-b">✦</span><span className="hero-star star-c">✧</span></div><div className="hero-bottom"><span>01 / DISCOVER</span><span className="hero-bottom-line"/><span>READ. CREATE. BECOME.</span></div></section>

        <section className="value-strip" id="formats"><div><BookOpen /><span><b>Author retains rights</b><small>Your work stays yours</small></span></div><div><Sparkles /><span><b>Transparent pricing</b><small>Service-based publishing support</small></span></div><div><Headphones /><span><b>Multi-format publishing</b><small>Print, e-book & audiobook guidance</small></span></div></section>

        <section className="section books-section" id="books"><div className="section-heading"><div><div className="eyebrow"><span /> FEATURED FROM EROS</div><h2>Meet your next <em>obsession.</em></h2><p>Discover our current featured title and explore every available edition.</p></div><a className="text-link" href="/books">Explore all books <ArrowRight size={15} /></a></div><div className="catalog-toolbar"><span className="catalog-count">FEATURED TITLES <b>0{filteredBooks.length}</b></span><label className="search-label"><span className="sr-only">Search books</span><input value={query} onChange={handleBookSearch} placeholder="Search titles, authors, genres…" /></label></div><div className="book-grid">{filteredBooks.map((book, index) => <article className="book-card" key={book.id}><a href={`/books/${book.id}`} className="book-image-wrap" aria-label={`View ${book.title} details`}><span className="book-number">0{index + 1}</span><CoverArt book={book} /></a><div className="book-meta"><span>{book.genre}</span><span className="book-rating">✦ EROS PICK</span></div><h3><a href={`/books/${book.id}`}>{book.title}</a></h3><p className="book-author">by {book.author}</p><p className="book-description">{book.description}</p><div className="book-buy-row"><strong>{money(book.price)} <small>from</small></strong><label className="format-select"><span className="sr-only">Format for {book.title}</span><select value={format[book.id] ?? book.formats[0]} onChange={(event) => setFormat((old) => ({ ...old, [book.id]: event.target.value as BookFormat }))}>{book.formats.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={13} /></label></div><a className="add-button" href={`/books/${book.id}`}>View book details <ArrowRight size={15} /></a></article>)}{filteredBooks.length === 0 && <div className="empty-search"><BookOpen size={28}/><h3>No stories found just yet.</h3><p>Try a different title, author, or genre.</p></div>}</div></section>

        <section className="real-book-section" id="buy-book"><div className="real-book-copy"><div className="eyebrow"><span /> BUY DIRECT FROM THE BOOKMAKER</div><h2>Bring the story<br />to <em>your bookshelf.</em></h2><p>Discover <strong>No Love Lost in the Village</strong> by B. Eros—a suspense story of corruption, betrayal, buried secrets, and one man's refusal to take the fall for someone else's deception.</p><p><a className="text-link" href="/books/no-love-lost-in-the-village">Explore the book & all formats <ArrowRight size={15}/></a></p><p className="real-book-note">Price, available formats, shipping, and checkout are provided by Lulu and may vary by destination.</p></div><div className="lulu-product-panel"><div className="lulu-product-heading"><span className="lulu-mark">L</span><div><strong>No Love Lost in the Village</strong><small>B. Eros · Suspense fiction</small></div></div>{luluReady ? createElement('lulu-buy-button', {'buy-button-id': luluBook?.luluBuyButtonId ?? '4b7dbcee-c35c-4ead-9c0a-63ec364c0b9a', variant: luluBook?.luluVariant ?? 'product-showcase'}) : <p className="lulu-loading" role="status">Loading secure purchase options…</p>}<small className="lulu-powered">Purchase experience powered by Lulu</small></div></section>

        <section className="author-section" id="services"><div className="author-ornament">✦</div><div className="author-copy"><div className="eyebrow"><span /> FOR AUTHORS</div><h2>Have a manuscript?<br /><em>Bring it to life.</em></h2><p>Professional publishing support without giving up control of your work. Choose the services you need—from manuscript preparation and cover design to formatting and distribution setup.</p><div className="service-list"><span><i>01</i> Editing & manuscript preparation</span><span><i>02</i> Cover design & professional formatting</span><span><i>03</i> Publishing & distribution setup</span><span><i>04</i> Author retains rights and platform royalties</span></div><div className="hero-actions"><a className="button button-light" href="/publishing-quote">Request a Publishing Quote <ArrowRight size={17} /></a><a className="text-link" href="/author-services">Explore services <ArrowRight size={15}/></a></div></div><div className="author-art"><div className="author-art-ring"/><div className="author-book-stack"><div className="stack-book stack-back"/><div className="stack-book stack-mid"/><div className="stack-book stack-front"><span>YOUR STORY</span><b>THE<br/>BEGINNING</b><small>BY YOU</small></div></div><span className="author-art-star">✧</span><span className="author-art-caption">A NEW CHAPTER STARTS HERE</span></div></section>

        <section className="section"><div className="section-heading"><div><div className="eyebrow"><span /> YOUR PATH TO PUBLICATION</div><h2>How publishing with <em>Eros works.</em></h2><p>A clear process from manuscript to marketplace.</p></div></div><div className="page-card-grid"><article className="page-card"><div className="card-icon">01</div><h3>Submit Your Project</h3><p>Tell us about your manuscript, goals, formats, timeline, and the support you need.</p></article><article className="page-card"><div className="card-icon">02</div><h3>Choose Your Services</h3><p>Receive a recommended package or custom scope with transparent pricing before production begins.</p></article><article className="page-card"><div className="card-icon">03</div><h3>Production & Revisions</h3><p>Move through editing, design, formatting, and the revision rounds included in your agreement.</p></article><article className="page-card"><div className="card-icon">04</div><h3>Publish & Distribute</h3><p>Prepare your finished book for the formats and distribution platforms selected for your project.</p></article></div></section>

        <section className="section books-section"><div className="section-heading"><div><div className="eyebrow"><span /> TRANSPARENT PUBLISHING OPTIONS</div><h2>Professional support at <em>every stage.</em></h2><p>Start with the level of support that fits your manuscript and publishing goals.</p></div><a className="text-link" href="/publishing-pricing">See full pricing <ArrowRight size={15}/></a></div><div className="page-card-grid"><article className="page-card"><div className="card-icon">PUBLISHING PACKAGES</div><h3>Starting at $799</h3><p>Professional preparation, design, formatting, metadata, and publishing support with package options built around your needs.</p><a className="button button-primary" href="/publishing-pricing">View Publishing Packages <ArrowRight size={15}/></a></article><article className="page-card"><div className="card-icon">COMPLETE PUBLISHING</div><h3>Starting at $3,999</h3><p>Comprehensive support from manuscript refinement through publication and launch for authors seeking a more complete partnership.</p><a className="button button-primary" href="/publishing-quote">Request a Custom Quote <ArrowRight size={15}/></a></article></div></section>

        <section className="section"><div className="section-heading"><div><div className="eyebrow"><span /> WHY EROS PUBLISHING</div><h2>Your book. Your rights.<br /><em>Your royalties.</em></h2><p>Eros Publishing provides assisted self-publishing services designed to keep authors in control.</p></div></div><div className="page-card-grid"><article className="page-card"><h3>Keep Ownership</h3><p>You retain ownership of your work, with final terms documented in your publishing-services agreement.</p></article><article className="page-card"><h3>Know the Cost</h3><p>Transparent service pricing helps you understand the scope before production begins.</p></article><article className="page-card"><h3>Build Your Reach</h3><p>Get guidance for print, e-book, audiobook, and appropriate third-party distribution platforms.</p></article></div></section>

        <section className="manifesto" id="about"><div className="manifesto-symbol">❧</div><div className="eyebrow"><span /> MEET THE PUBLISHER</div><h2>Brandan Rayton<br /><em>Founder & Publisher.</em></h2><p>Author and independent publisher Brandan Rayton founded Eros Publishing to give writers a clearer path from manuscript to published book—without asking them to surrender ownership of their work. Drawing on his own experience publishing as B. Eros, Brandan built Eros around professional support, transparent pricing, creative control, and a simple principle: <strong>Your book. Your rights. Your royalties.</strong></p><a className="text-link" href="/about">Meet Brandan & Eros Publishing <ArrowRight size={15}/></a></section>

        <section className="page-cta-panel"><h2>Your manuscript deserves more than a file on your computer.</h2><p>Professional editing, design, formatting, and publishing support—while you retain control of your book.</p><a className="button button-light" href="/publishing-quote">Request a Publishing Quote <ArrowRight size={17}/></a></section>
      </main>

      <footer className="site-footer"><a href="#home" className="brand footer-brand"><span className="brand-mark">E<span>✦</span></span><span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span></a><p>Stories that stir something eternal.</p><div className="footer-links"><a href="/books">Books</a><a href="/blog">Blog</a><a href="/author-services">Author services</a><a href="/publishing-pricing">Pricing</a><a href="/publishing-quote">Request a Quote</a><a href="/about">Our story</a><a href="/contact">Contact</a></div><small className="copyright">© {new Date().getFullYear()} Eros Publishing. Independent publishing services based in Kansas City, serving authors nationwide.</small></footer>

      {cartOpen && <div className="drawer-backdrop" onMouseDown={handleDrawerBackdropMouseDown}><aside className="cart-drawer" aria-label="Shopping bag"><div className="drawer-header"><div><span className="eyebrow"><span /> YOUR COLLECTION</span><h2>Your bag <em>({count})</em></h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close shopping bag"><X /></button></div>{notice && <p className="cart-notice">{notice}</p>}{cart.length === 0 ? <div className="cart-empty"><ShoppingBag size={35}/><h3>Your next favorite is waiting.</h3><p>Add a book to begin your collection.</p><button className="button button-primary" onClick={() => { setCartOpen(false); document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore books <ArrowRight size={16}/></button></div> : <><div className="cart-lines">{cart.map((line) => <div className="cart-line" key={`${line.book.id}-${line.format}`}><CoverArt book={line.book}/><div className="cart-line-details"><b>{line.book.title}</b><small>{line.format} · {line.book.author}</small><strong>{money(line.book.price * line.quantity)}</strong><div className="quantity-control"><button onClick={() => changeQuantity(line.book.id, line.format, -1)} aria-label="Decrease quantity"><Minus size={13}/></button><span>{line.quantity}</span><button onClick={() => changeQuantity(line.book.id, line.format, 1)} aria-label="Increase quantity"><Plus size={13}/></button></div></div><button className="remove-line" onClick={() => changeQuantity(line.book.id, line.format, -line.quantity)} aria-label={`Remove ${line.book.title}`}><X size={15}/></button></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><p>Shipping and taxes, if applicable, are calculated at checkout.</p><button className="button button-primary checkout-button" onClick={() => setNotice('Direct checkout is available through each book’s listed retail and distribution partners.')}>View purchase options <ArrowRight size={16}/></button></div></>}</aside></div>}
    </>
  );
}
