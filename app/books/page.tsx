import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { TrackedRetailerLink } from '@/components/TrackedRetailerLink';
import { books, type Book, type BookFormat } from '@/lib/books';

export const metadata: Metadata = {
  title: 'Books & Editions',
  description: 'Explore suspense fiction from Eros Publishing. Compare paperback, hardcover, e-book, and audiobook editions and choose where to buy or listen.',
  alternates: { canonical: 'https://erospublishingkc.com/books' },
};

const formats: { id: string; format: BookFormat; title: string; description: string; action: string }[] = [
  { id: 'paperback', format: 'Paperback', title: 'Paperback', description: 'A flexible print edition for everyday reading. Order through Lulu, our print partner.', action: 'Shop paperback' },
  { id: 'hardcover', format: 'Hardcover', title: 'Hardcover', description: 'A sturdy, shelf-ready print edition. Order through Lulu, our print partner.', action: 'Shop hardcover' },
  { id: 'ebooks', format: 'Ebook', title: 'E-book', description: 'Read digitally on your compatible device or reading app. Choose your retailer below.', action: 'Explore e-book' },
  { id: 'audiobooks', format: 'Audiobook', title: 'Audiobook', description: 'Experience the story in audio through Spotify. Availability and access terms are shown on Spotify.', action: 'Explore audiobook' },
];

function hasEdition(book: Book, format: BookFormat) {
  if (format === 'Paperback') return Boolean(book.luluBuyButtonId);
  if (format === 'Hardcover') return Boolean(book.hardcoverLuluBuyButtonId);
  if (format === 'Ebook') return Boolean(book.ebookLinks?.length);
  return Boolean(book.audiobookUrl);
}

export default function BooksPage() {
  return (
    <PageShell
      eyebrow="THE EROS BOOKSHELF"
      title="Stories worth"
      accent="staying for."
      intro="Discover Eros Publishing fiction and choose how you want to experience each story. Find print editions, digital retailers, and listening options in one place."
    >
      <section className="book-shop-intro">
        <h2 className="page-section-heading">Featured book</h2>
        {books.map((book) => (
          <article className="book-shop-feature" key={book.id}>
            <Link className="book-shop-cover" href={`/books/${book.id}`}>
              <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} width={420} height={420} sizes="(max-width: 680px) 80vw, 280px" />
            </Link>
            <div>
              <div className="card-icon">{book.genre}</div>
              <h3>{book.title}</h3>
              <p className="book-detail-byline">By {book.author}</p>
              <p>{book.description}</p>
              <p className="book-shop-availability"><strong>Available formats:</strong> {formats.filter(({format}) => hasEdition(book,format)).map(({title})=>title).join(' · ')}</p>
              <Link className="button button-primary" href={`/books/${book.id}#editions`}>Compare editions & buy →</Link>
            </div>
          </article>
        ))}
      </section>
      <section aria-labelledby="edition-overview">
        <h2 id="edition-overview" className="page-section-heading">Edition overview</h2>
        <p className="page-lead">Choose where to shop or listen. Every seller sets the final price, taxes, delivery, device access and regional availability.</p>
        <div className="table-scroll"><table className="edition-table"><thead><tr><th scope="col">Format</th><th scope="col">Provider</th><th scope="col">What to expect</th><th scope="col">Details</th></tr></thead><tbody>
          <tr><th scope="row">Paperback</th><td>Lulu</td><td>Print-on-demand; shipping calculated at checkout</td><td><Link href="/books/no-love-lost-in-the-village/#edition-paperback">View paperback</Link></td></tr>
          <tr><th scope="row">Hardcover</th><td>Lulu</td><td>Print-on-demand; shipping calculated at checkout</td><td><Link href="/books/no-love-lost-in-the-village/#edition-hardcover">View hardcover</Link></td></tr>
          <tr><th scope="row">E-book</th><td>Apple Books / Barnes &amp; Noble</td><td>Digital access depends on chosen retailer</td><td><Link href="/books/no-love-lost-in-the-village/#edition-ebook">View e-book</Link></td></tr>
          <tr><th scope="row">Audiobook</th><td>Spotify</td><td>Access terms depend on account and territory</td><td><Link href="/books/no-love-lost-in-the-village/#edition-audiobook">View audiobook</Link></td></tr>
        </tbody></table></div>
      </section>
      <section id="formats">
        <h2 className="page-section-heading">Shop by format</h2>
        <p className="page-lead">Find the edition you want and follow the retailer link to complete your purchase or start listening. Print orders are handled by Lulu; digital and audio purchases or access are handled by their respective platforms.</p>
        <div className="book-shop-formats">
          {formats.map(({ id, format, title, description, action }) => {
            const available = books.filter((book) => hasEdition(book, format));
            return (
              <section className="book-shop-format" id={id} key={format}>
                <div className="card-icon">{format === 'Ebook' ? 'DIGITAL EDITION' : format === 'Audiobook' ? 'LISTEN' : 'PRINT EDITION'}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                {available.length ? available.map((book) => (
                  <div className="book-shop-format-links" key={book.id}>
                    <strong>{book.title}</strong>
                    <Link href={`/books/${book.id}#${id === 'paperback' ? 'edition-paperback' : id === 'hardcover' ? 'edition-hardcover' : id === 'ebooks' ? 'edition-ebook' : 'edition-audiobook'}`}>{action} →</Link>
                    {format === 'Ebook' && book.ebookLinks?.map(({label,url})=><TrackedRetailerLink href={url} key={label} provider={label}>{label} ↗</TrackedRetailerLink>)}
                    {format === 'Audiobook' && book.audiobookUrl && <TrackedRetailerLink href={book.audiobookUrl} provider="Spotify">Listen on Spotify ↗</TrackedRetailerLink>}
                  </div>
                )) : <p>No editions currently listed in this format.</p>}
              </section>
            );
          })}
        </div>
      </section>
      <section className="page-cta-panel">
        <h2>Find the format that fits your story.</h2>
        <p>Browse the complete book details, then choose the seller or listening platform that works for you. Pricing and availability are confirmed by each provider.</p>
        <Link className="button button-light" href="/books/no-love-lost-in-the-village#editions">Explore available editions →</Link>
      </section>
    </PageShell>
  );
}
