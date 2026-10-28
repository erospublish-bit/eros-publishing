'use client';

import { createElement, useMemo, useState } from 'react';
import Script from 'next/script';
import { ArrowRight, BookOpen, ChevronDown, Headphones, Heart, Menu, Minus, Plus, ShoppingBag, Sparkles, X } from 'lucide-react';
import { books, type Book, type BookFormat } from '@/lib/books';

type CartLine = { book: Book; format: BookFormat; quantity: number };

const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

function CoverArt({ book, large = false }: { book: Book; large?: boolean }) {
  return (
    <div className={`book-cover ${book.cover} ${large ? 'book-cover-large' : ''}`} aria-label={`Decorative cover concept for ${book.title}`} role="img">
      <span className="cover-kicker">AN EROS PUBLISHING TITLE</span>
      <span className="cover-symbol">✦</span>
      <strong>{book.title}</strong>
      <span className="cover-author">{book.author}</span>
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

  const filteredBooks = useMemo(() => books.filter((book) =>
    `${book.title} ${book.author} ${book.genre}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.book.price * line.quantity, 0);

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

  function changeQuantity(bookId: string, chosenFormat: BookFormat, delta: number) {
    setCart((current) => current.map((line) => line.book.id === bookId && line.format === chosenFormat
      ? { ...line, quantity: line.quantity + delta } : line).filter((line) => line.quantity > 0));
  }

  return (
    <>
      <div className="announcement"><Sparkles size={14} /> STORIES WITH A LITTLE DIVINE FIRE <span className="announcement-dot">✦</span> INDEPENDENTLY PUBLISHED, FOREVER REMEMBERED</div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Eros Publishing home">
          <span className="brand-mark">E<span>✦</span></span>
          <span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span>
        </a>
        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`}>
          <a href="/books" onClick={() => setMobileMenu(false)}>Books</a>
          <a href="/books#formats" onClick={() => setMobileMenu(false)}>Book formats</a>
          <a href="/author-services" onClick={() => setMobileMenu(false)}>For authors</a>
          <a href="/about" onClick={() => setMobileMenu(false)}>Our story</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button bag-button" onClick={() => setCartOpen(true)} aria-label={`Open shopping bag, ${count} items`}><ShoppingBag size={19} /><span>Bag</span><b>{count}</b></button>
          <button className="icon-button mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> THE HOME OF STORIES THAT STAY WITH YOU</div>
            <h1>Fall in love<br />with <em>the story.</em></h1>
            <p>From the first spark of an idea to the final page, discover books that move you—and publishing support that helps your own story take flight.</p>
            <div className="hero-actions"><a className="button button-primary" href="#books">Explore the bookstore <ArrowRight size={17} /></a><a className="text-link" href="/author-services">Have a manuscript? <ArrowRight size={15} /></a></div>
            <div className="hero-proof"><span className="proof-icon"><Heart size={15} /></span><span>For readers, dreamers, and the authors becoming.</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative mythology-inspired illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="sun-disc"><span>✦</span></div>
            <div className="hero-statue"><span className="statue-wings">⌁</span><span className="statue-head" /><span className="statue-body" /><span className="statue-cloth" /><span className="statue-base" /></div>
            <div className="hero-caption"><span>✦</span><div><b>Inspired by Eros</b><small>Love, desire & the art of creation</small></div></div>
            <span className="hero-star star-a">✧</span><span className="hero-star star-b">✦</span><span className="hero-star star-c">✧</span>
          </div>
          <div className="hero-bottom"><span>01 / DISCOVER</span><span className="hero-bottom-line"/><span>READ. CREATE. BECOME.</span></div>
        </section>

        <section className="value-strip" id="formats">
          <div><BookOpen /><span><b>Stories for every shelf</b><small>Digital & print editions</small></span></div>
          <div><Headphones /><span><b>Take stories with you</b><small>Audiobook-ready catalog</small></span></div>
          <div><Sparkles /><span><b>Your story, your legacy</b><small>Publishing support for authors</small></span></div>
        </section>

        <section className="section books-section" id="books">
          <div className="section-heading"><div><div className="eyebrow"><span /> THE EROS BOOKSHELF</div><h2>Find your next <em>obsession.</em></h2><p>Stories worth staying up for. Worlds worth returning to.</p></div><a className="text-link" href="/books">Browse our collection <ArrowRight size={15} /></a></div>
          <div className="catalog-toolbar"><span className="catalog-count">FEATURED TITLES <b>0{filteredBooks.length}</b></span><label className="search-label"><span className="sr-only">Search books</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, authors, genres…" /></label></div>
          <div className="book-grid">
            {filteredBooks.map((book, index) => <article className="book-card" key={book.id}>
              <div className="book-image-wrap"><span className="book-number">0{index + 1}</span><CoverArt book={book} /><button className="quick-add" onClick={() => book.id === 'no-love-lost-in-the-village' ? document.getElementById('buy-book')?.scrollIntoView({ behavior: 'smooth' }) : addToCart(book)} aria-label={book.id === 'no-love-lost-in-the-village' ? `Buy ${book.title} from Lulu` : `Add ${book.title} to bag`}>{book.id === 'no-love-lost-in-the-village' ? <ArrowRight size={17} /> : <Plus size={17} />}</button></div>
              <div className="book-meta"><span>{book.genre}</span><span className="book-rating">✦ EROS PICK</span></div>
              <h3>{book.title}</h3><p className="book-author">by {book.author}</p><p className="book-description">{book.description}</p>
              <div className="book-buy-row"><strong>{money(book.price)} <small>from</small></strong><label className="format-select"><span className="sr-only">Format for {book.title}</span><select value={format[book.id] ?? book.formats[0]} onChange={(event) => setFormat((old) => ({ ...old, [book.id]: event.target.value as BookFormat }))}>{book.formats.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={13} /></label></div>
              <button className="add-button" onClick={() => book.id === 'no-love-lost-in-the-village' ? document.getElementById('buy-book')?.scrollIntoView({ behavior: 'smooth' }) : addToCart(book)}>{book.id === 'no-love-lost-in-the-village' ? 'Buy from Lulu' : 'Add to bag'} <ArrowRight size={15} /></button>
            </article>)}
            {filteredBooks.length === 0 && <div className="empty-search"><BookOpen size={28}/><h3>No stories found just yet.</h3><p>Try a different title, author, or genre.</p></div>}
          </div>
          <p className="demo-note">These are sample titles for the starter project. Replace them with your real catalog before launch.</p>
        </section>

        <section className="real-book-section" id="buy-book">
          <Script
            src="https://js.lulu.com/lulu-buy.js"
            strategy="afterInteractive"
            onReady={() => setLuluReady(true)}
          />
          <div className="real-book-copy">
            <div className="eyebrow"><span /> BUY DIRECT FROM THE BOOKMAKER</div>
            <h2>Bring the story<br />to <em>your bookshelf.</em></h2>
            <p>Discover <strong>No Love Lost in the Village</strong> by B. Eros. Use the secure Lulu purchase experience below to view the product and complete your order through the print-on-demand marketplace.</p>
            <p className="real-book-note">Price, available formats, shipping, and checkout are provided by Lulu and may vary by destination.</p>
          </div>
          <div className="lulu-product-panel">
            <div className="lulu-product-heading"><span className="lulu-mark">L</span><div><strong>No Love Lost in the Village</strong><small>B. Eros · Suspense fiction</small></div></div>
            {luluReady ? (
              createElement('lulu-buy-button', {
                'buy-button-id': '4b7dbcee-c35c-4ead-9c0a-63ec364c0b9a',
                variant: 'product-showcase',
              })
            ) : (
              <p className="lulu-loading" role="status">Loading secure purchase options…</p>
            )}
            <small className="lulu-powered">Purchase experience powered by Lulu</small>
          </div>
        </section>

        <section className="author-section" id="services"><div className="author-ornament">✦</div><div className="author-copy"><div className="eyebrow"><span /> FOR THE STORYTELLERS</div><h2>Your story deserves<br />to <em>meet the world.</em></h2><p>You bring the words. We’ll help you navigate the path from manuscript to published book with thoughtful support at every step.</p><div className="service-list"><span><i>01</i> Manuscript preparation</span><span><i>02</i> Cover design & formatting</span><span><i>03</i> Self-publishing guidance</span></div><a className="button button-light" href="/author-services">Explore author services <ArrowRight size={17} /></a><small className="service-note">Service offerings and pricing can be customized before launch.</small></div><div className="author-art"><div className="author-art-ring"/><div className="author-book-stack"><div className="stack-book stack-back"/><div className="stack-book stack-mid"/><div className="stack-book stack-front"><span>YOUR STORY</span><b>THE<br/>BEGINNING</b><small>BY YOU</small></div></div><span className="author-art-star">✧</span><span className="author-art-caption">A NEW CHAPTER STARTS HERE</span></div></section>

        <section className="manifesto" id="about"><div className="manifesto-symbol">❧</div><div className="eyebrow"><span /> A NOTE FROM EROS</div><h2>Because every great story<br />begins with a <em>feeling.</em></h2><p>Named for the Greek god associated with love and desire, Eros Publishing celebrates the spark that makes us create, connect, and imagine something beyond ourselves.</p><a className="text-link" href="/about">Get to know us <ArrowRight size={15}/></a></section>
      </main>

      <footer className="site-footer"><a href="#home" className="brand footer-brand"><span className="brand-mark">E<span>✦</span></span><span className="brand-copy"><strong>EROS</strong><small>P U B L I S H I N G</small></span></a><p>Stories that stir something eternal.</p><div className="footer-links"><a href="/books">Books</a><a href="/author-services">Author services</a><a href="/about">Our story</a><a href="/contact">Contact</a></div><small className="copyright">© {new Date().getFullYear()} Eros Publishing. All stories welcome.</small></footer>
      
      {cartOpen && <div className="drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
        <aside className="cart-drawer" aria-label="Shopping bag">
          <div className="drawer-header"><div><span className="eyebrow"><span /> YOUR COLLECTION</span><h2>Your bag <em>({count})</em></h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close shopping bag"><X /></button></div>
          {notice && <p className="cart-notice">{notice}</p>}
          {cart.length === 0 ? <div className="cart-empty"><ShoppingBag size={35}/><h3>Your next favorite is waiting.</h3><p>Add a book to begin your collection.</p><button className="button button-primary" onClick={() => { setCartOpen(false); document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore books <ArrowRight size={16}/></button></div> : <>
            <div className="cart-lines">{cart.map((line) => <div className="cart-line" key={`${line.book.id}-${line.format}`}><CoverArt book={line.book}/><div className="cart-line-details"><b>{line.book.title}</b><small>{line.format} · {line.book.author}</small><strong>{money(line.book.price * line.quantity)}</strong><div className="quantity-control"><button onClick={() => changeQuantity(line.book.id, line.format, -1)} aria-label="Decrease quantity"><Minus size={13}/></button><span>{line.quantity}</span><button onClick={() => changeQuantity(line.book.id, line.format, 1)} aria-label="Increase quantity"><Plus size={13}/></button></div></div><button className="remove-line" onClick={() => changeQuantity(line.book.id, line.format, -line.quantity)} aria-label={`Remove ${line.book.title}`}><X size={15}/></button></div>)}</div>
            <div className="cart-summary"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><p>Shipping and taxes, if applicable, are calculated at checkout.</p><button className="button button-primary checkout-button" onClick={() => setNotice('Checkout is a demo placeholder. Connect a payment provider before accepting orders.')}>Continue to checkout <ArrowRight size={16}/></button><small>Demo mode · No payment will be collected</small></div>
          </>}
        </aside>
      </div>}
    </>
  );
}
