import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { PageShell } from '@/components/PageShell';
import { AuthorTip } from '@/components/AuthorTip';
import { books } from '@/lib/books';

const book = books.find((item) => item.id === 'no-love-lost-in-the-village')!;
const bookUrl = 'https://erospublishingkc.com/books/no-love-lost-in-the-village';
const coverUrl = new URL(book.cover, 'https://erospublishingkc.com').toString();

export const metadata: Metadata = {
  title: 'No Love Lost in the Village by B. Eros | Eros Publishing',
  description:
    'Discover No Love Lost in the Village by B. Eros, a dark suspense novel about corruption, betrayal, power, and the dangerous price of exposing the truth.',
  alternates: {
    canonical: bookUrl,
  },
  openGraph: { type: 'book', title: 'No Love Lost in the Village by B. Eros', description: 'A suspense novel about corruption and betrayal in Northern Point.', url: bookUrl, images: [{ url: coverUrl, alt: 'Cover of No Love Lost in the Village' }] },
  twitter: { card: 'summary_large_image', images: [coverUrl] },
};

const bookStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  '@id': `${bookUrl}#book`,
  name: book.title,
  url: bookUrl,
  description:
    'A dark, sharp-witted suspense novel about corruption, betrayal, accountability, greed, and the dangerous price of exposing the truth.',
  image: coverUrl,
  author: {
    '@type': 'Person',
    name: book.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Eros Publishing',
    url: 'https://erospublishingkc.com',
  },
  genre: ['Crime', 'Suspense fiction'],
  inLanguage: 'en-US',
  workExample: [
    { '@type': 'Book', name: `${book.title} — Paperback`, bookFormat: 'https://schema.org/Paperback' },
    { '@type': 'Book', name: `${book.title} — Hardcover`, bookFormat: 'https://schema.org/Hardcover' },
  ],
};

export default function NoLoveLostInTheVillagePage() {
  return (
    <PageShell
      eyebrow="EROS PUBLISHING FICTION"
      title="No Love Lost"
      accent="in the Village."
      intro="A dark, sharp-witted suspense novel about corruption, betrayal, accountability, greed, and the dangerous price of exposing the truth."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStructuredData).replace(/</g, '\\u003c') }}
      />

      <section className="book-detail-layout">
        <div className="book-detail-cover-wrap">
          <Image
            className="book-detail-cover"
            src={book.cover}
            alt="Cover of No Love Lost in the Village by B. Eros"
            width={720}
            height={720}
            sizes="(max-width: 800px) 92vw, 45vw"
            quality={82}
            priority
          />
        </div>

        <div className="book-detail-copy">
          <div className="card-icon">FEATURED TITLE</div>
          <h2 className="page-section-heading">{book.title}</h2>
          <p className="book-detail-byline">By {book.author} · {book.genre} / Suspense</p>
          <p className="page-lead">
            In the seemingly ordinary village of Northern Point, corruption, betrayal, and deception run deeper than anyone wants to admit. When Raz begins uncovering the truth behind Cleptes Corp. and the people pulling the strings, buried secrets, stolen credit, and questionable loyalties threaten to bring the entire village crashing down.
          </p>
          <p>
            Armed with evidence, determination, and a refusal to carry the blame for someone else&apos;s actions, Raz discovers that the closer you get to the truth, the harder it becomes to know who you can trust.
          </p>

          <div className="book-detail-actions">
            {book.ebookLinks?.map(({ label, url }) => (
              <a className="button button-primary" key={label} href={url} target="_blank" rel="noopener noreferrer">
                E-book on {label} ↗
              </a>
            ))}
            {book.audiobookUrl && (
              <a className="button book-secondary-button" href={book.audiobookUrl} target="_blank" rel="noreferrer">
                Listen on Spotify ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <section id="editions">
        <h2 className="page-section-heading">Choose your edition</h2>
        <p className="page-lead">Read it in print or e-book format, or experience the story as an audiobook.</p>
        {(book.luluBuyButtonId || book.hardcoverLuluBuyButtonId) && <Script src="https://js.lulu.com/lulu-buy.js" strategy="afterInteractive" />}
        <div className="book-edition-grid">
          <article className="page-card book-edition-card" id="edition-paperback">
            <div className="card-icon">PRINT · PAPERBACK</div>
            <h3>Paperback</h3>
            <p>Enjoy the story in a flexible print format. Order securely through Lulu, which handles pricing, printing, and fulfillment.</p>
            {book.luluBuyButtonId && (
              // @ts-expect-error Lulu defines this custom element in its external script.
              <lulu-buy-button buy-button-id={book.luluBuyButtonId} variant={book.luluVariant || 'product-showcase'} />
            )}
          </article>

          {book.hardcoverLuluBuyButtonId && (
            <article className="page-card book-edition-card" id="edition-hardcover">
              <div className="card-icon">PRINT · HARDCOVER</div>
              <h3>Hardcover</h3>
              <p>Choose a durable hardcover for your personal library or as a gift. Lulu handles the order, printing, and delivery.</p>
              {/* @ts-expect-error Lulu defines this custom element in its external script. */}
              <lulu-buy-button buy-button-id={book.hardcoverLuluBuyButtonId} variant={book.luluVariant || 'product-showcase'} />
            </article>
          )}

          <article className="page-card book-edition-card" id="edition-ebook">
            <div className="card-icon">DIGITAL</div>
            <h3>E-book</h3>
            <p>Read on a supported device or reading app. Choose a retailer to check the current price and supported formats.</p>
            <div className="format-store-links">
              {book.ebookLinks?.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
          </article>

          <article className="page-card book-edition-card" id="edition-audiobook">
            <div className="card-icon">AUDIO</div>
            <h3>Audiobook</h3>
            <p>Listen through Spotify. Check Spotify for access, pricing, and region availability.</p>
            {book.audiobookUrl && <a href={book.audiobookUrl} target="_blank" rel="noreferrer">Listen on Spotify ↗</a>}
          </article>
        </div>
        <p className="book-purchase-note">Purchases and listening access take place with the named third-party provider. Prices, delivery options, and availability may vary by platform.</p>
      </section>

      <AuthorTip />

      <section>
        <h2 className="page-section-heading">Inside the story</h2>
        <div className="page-card-grid">
          <article className="page-card"><div className="card-icon">01</div><h3>Power & corruption</h3><p>Northern Point&apos;s ordinary surface hides a network of influence, questionable loyalties, and people determined to protect their position.</p></article>
          <article className="page-card"><div className="card-icon">02</div><h3>Truth & accountability</h3><p>Raz&apos;s search for answers forces uncomfortable truths into the open and tests how far people will go to avoid responsibility.</p></article>
          <article className="page-card"><div className="card-icon">03</div><h3>Trust & betrayal</h3><p>As the evidence builds, the line between ally and adversary becomes increasingly difficult to see.</p></article>
        </div>
      </section>

      <section className="page-cta-panel">
        <h2>Discover what Northern Point is hiding.</h2>
        <p>Choose your preferred edition above, or return to the Eros bookshelf to explore available titles and formats.</p>
        <Link className="button button-light" href="/books">Browse all books →</Link>
      </section>
    </PageShell>
  );
}
