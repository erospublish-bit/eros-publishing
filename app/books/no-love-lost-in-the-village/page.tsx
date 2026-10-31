import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { PageShell } from '@/components/PageShell';
import { books } from '@/lib/books';

const book = books.find((item) => item.id === 'no-love-lost-in-the-village')!;

export const metadata: Metadata = {
  title: 'No Love Lost in the Village by B. Eros | Eros Publishing',
  description:
    'Discover No Love Lost in the Village by B. Eros, a dark suspense novel about corruption, betrayal, power, and the dangerous price of exposing the truth.',
};

export default function NoLoveLostInTheVillagePage() {
  return (
    <PageShell
      eyebrow="EROS PUBLISHING FICTION"
      title="No Love Lost"
      accent="in the Village."
      intro="A dark, sharp-witted suspense novel about corruption, betrayal, accountability, greed, and the dangerous price of exposing the truth."
    >
      <section className="book-detail-layout">
        <div className="book-detail-cover-wrap">
          <Image
            className="book-detail-cover"
            src={book.cover}
            alt="Cover of No Love Lost in the Village by B. Eros"
            width={720}
            height={720}
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
              <a className="button button-primary" key={label} href={url} target="_blank" rel="noreferrer">
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

      <section>
        <h2 className="page-section-heading">Choose your edition</h2>
        <p className="page-lead">Read it in print or e-book format, or experience the story as an audiobook.</p>
        <div className="page-card-grid">
          <article className="page-card">
            <div className="card-icon">PRINT</div>
            <h3>Paperback</h3>
            <p>Order the physical edition through our Lulu-powered purchase experience.</p>
            {book.luluBuyButtonId && (
              <>
                <Script src="https://js.lulu.com/lulu-buy.js" strategy="afterInteractive" />
                {/* @ts-expect-error Lulu defines this custom element in its external script. */}
                <lulu-buy-button buy-button-id={book.luluBuyButtonId} variant={book.luluVariant || 'product-showcase'} />
              </>
            )}
          </article>

          <article className="page-card">
            <div className="card-icon">DIGITAL</div>
            <h3>E-book</h3>
            <p>Choose your preferred retailer for the digital edition.</p>
            <div className="format-store-links">
              {book.ebookLinks?.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
          </article>

          <article className="page-card">
            <div className="card-icon">AUDIO</div>
            <h3>Audiobook</h3>
            <p>Listen to the audiobook edition on Spotify.</p>
            {book.audiobookUrl && <a href={book.audiobookUrl} target="_blank" rel="noreferrer">Listen on Spotify ↗</a>}
          </article>
        </div>
      </section>

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
