import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { books, type BookFormat } from '@/lib/books';

const formats: { id: string; format: BookFormat; title: string; emptyMessage: string }[] = [
  {
    id: 'paperback',
    format: 'Paperback',
    title: 'Paperback',
    emptyMessage: 'No paperback editions are available yet.',
  },
  {
    id: 'audiobooks',
    format: 'Audiobook',
    title: 'Audiobooks',
    emptyMessage: 'No audiobook editions are available yet.',
  },
  {
    id: 'ebooks',
    format: 'Ebook',
    title: 'E-books',
    emptyMessage: 'No e-book editions are available yet.',
  },
];

export default function BooksPage() {
  return (
    <PageShell
      eyebrow="THE EROS BOOKSHELF"
      title="Find your next"
      accent="obsession."
      intro="Explore stories selected for readers who love atmosphere, emotion, suspense, and unforgettable characters. Browse our titles by format to see what's available."
    >
      <div id="formats" className="book-formats">
        <h2 className="page-section-heading">Browse by format</h2>
        <p className="page-lead">
          Find the edition that fits the way you love to read.
        </p>

        {formats.map(({ id, format, title, emptyMessage }) => {
          const formatBooks = books.filter(
            (book) =>
              book.formats.includes(format) ||
              (format === 'Audiobook' && Boolean(book.audiobookUrl)),
          );

          return (
            <section className="book-format-section" id={id} key={format}>
              <h3 className="book-format-heading">{title}</h3>
              {formatBooks.length > 0 ? (
                <div className="page-card-grid format-card-grid">
                  {formatBooks.map((book) => (
                    <article className="page-card" key={book.id}>
                      <div className="card-icon" aria-hidden="true">✦</div>
                      <h4>{book.title}</h4>
                      <p className="format-book-byline">
                        {book.genre} by {book.author}
                      </p>
                      <p>{book.description}</p>
                      {format === 'Audiobook' && book.audiobookUrl ? (
                        <a href={book.audiobookUrl} target="_blank" rel="noreferrer">
                          Listen on Spotify ↗
                        </a>
                      ) : book.luluBuyButtonId ? (
                        <a
                          href={`https://svc.lulu.com/?items=${book.luluBuyButtonId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit our Marketplace ↗
                        </a>
                      ) : (
                        <Link href="/#buy-book">View purchase options →</Link>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <p className="format-empty-state">{emptyMessage}</p>
              )}
            </section>
          );
        })}
      </div>

      <section className="page-cta-panel">
        <h2>Ready to bring a story home?</h2>
        <p>
          Visit the featured purchase section to access the embedded buying
          experience, where current price, format, shipping, and checkout details
          are supplied by one of many partners.
        </p>
        <Link className="button button-light" href="/#buy-book">
          Buy the featured book →
        </Link>
      </section>
    </PageShell>
  );
}
