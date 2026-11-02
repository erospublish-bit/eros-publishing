import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { books } from '@/lib/books';

export const metadata: Metadata = {
  title: 'Published Work & Case Studies | Eros Publishing',
  description: 'Explore books developed and published with Eros Publishing and see the editorial, design, production, and distribution work behind each project.',
  alternates: { canonical: 'https://erospublishingkc.com/portfolio' },
};

export default function PortfolioPage() {
  const book = books.find((item) => item.id === 'no-love-lost-in-the-village');
  if (!book) return null;

  return (
    <PageShell
      eyebrow="PUBLISHED WITH EROS"
      title="Stories brought"
      accent="from manuscript to market."
      intro="Explore published work from Eros Publishing and see the practical editorial, design, production, and publishing support behind each finished book."
    >
      <section>
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span /> FEATURED CASE STUDY</div>
            <h2>Proof in the <em>finished work.</em></h2>
            <p>Our portfolio focuses on the work behind publication—not unsupported promises about sales or bestseller status.</p>
          </div>
        </div>

        <article className="book-detail-layout">
          <div className="book-detail-cover-wrap">
            <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} width={720} height={720} sizes="(max-width: 800px) 92vw, 38vw" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="book-detail-copy">
            <div className="card-icon">FLAGSHIP PROJECT</div>
            <h2 className="page-section-heading"><em>{book.title}</em></h2>
            <p className="page-lead">From manuscript development to a finished book available across multiple formats and publishing platforms.</p>
            <p><strong>Author:</strong> {book.author}<br/><strong>Genre:</strong> Suspense / Crime Fiction<br/><strong>Project:</strong> Independent publication</p>
            <p>This project demonstrates the same practical publishing journey Eros helps authors navigate: refining the manuscript, developing the book package, preparing publication-ready files, and setting up distribution.</p>
            <Link className="button button-primary" href="/portfolio/no-love-lost-in-the-village">View the full case study <ArrowRight size={16}/></Link>
          </div>
        </article>
      </section>

      <section>
        <div className="section-heading"><div><div className="eyebrow"><span /> WHAT OUR PORTFOLIO SHOWS</div><h2>More than a <em>book cover.</em></h2></div></div>
        <div className="page-card-grid">
          <article className="page-card"><div className="card-icon">01</div><h3>Editorial Development</h3><p>How a manuscript is shaped, refined, and prepared for readers while preserving the author&apos;s voice.</p></article>
          <article className="page-card"><div className="card-icon">02</div><h3>Book Production</h3><p>Cover development, interior preparation, formatting, metadata, and the details required for professional publication.</p></article>
          <article className="page-card"><div className="card-icon">03</div><h3>Publishing & Distribution</h3><p>Preparing formats and helping establish the platforms and distribution channels appropriate to the project.</p></article>
        </div>
      </section>

      <section className="page-cta-panel">
        <h2>Your book could be next.</h2>
        <p>Whether your manuscript is finished or still needs preparation, tell us where you are in the process and where you want your book to go.</p>
        <Link className="button button-light" href="/publishing-quote">Request a Publishing Quote <ArrowRight size={17}/></Link>
      </section>
    </PageShell>
  );
}
