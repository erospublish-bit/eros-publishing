import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { books } from '@/lib/books';

const siteUrl = 'https://erospublishingkc.com';

export const metadata: Metadata = {
  title: 'No Love Lost in the Village | Publishing Case Study',
  description: 'See how No Love Lost in the Village by B. Eros moved through manuscript development, editorial refinement, book production, formatting, and multi-platform publication.',
  alternates: { canonical: `${siteUrl}/portfolio/no-love-lost-in-the-village` },
};

export default function CaseStudyPage() {
  const book = books.find((item) => item.id === 'no-love-lost-in-the-village');
  if (!book) return null;

  return (
    <PageShell
      eyebrow="PUBLISHING CASE STUDY"
      title="No Love Lost"
      accent="in the Village."
      intro="A behind-the-book look at the development and publishing work that brought B. Eros's suspense novel from manuscript toward a finished, distributed title."
    >
      <section className="book-detail-layout">
        <div className="book-detail-cover-wrap">
          <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} width={800} height={800} priority sizes="(max-width: 800px) 92vw, 38vw" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="book-detail-copy">
          <div className="card-icon">PROJECT OVERVIEW</div>
          <h2 className="page-section-heading">From story to <em>published title.</em></h2>
          <p className="page-lead"><em>No Love Lost in the Village</em> is a suspense novel by B. Eros centered on corruption, betrayal, accountability, and the cost of exposing the truth.</p>
          <p>The project required more than simply uploading a manuscript. The book moved through story development and editorial revision, presentation and cover work, publication preparation, format decisions, and distribution setup.</p>
          <p><strong>Author:</strong> B. Eros<br/><strong>Genre:</strong> Suspense / Crime Fiction<br/><strong>Publishing model:</strong> Independent publishing<br/><strong>Formats:</strong> Paperback, hardcover, e-book and audiobook distribution</p>
          <Link className="text-link" href="/books/no-love-lost-in-the-village">Explore the finished book <ArrowRight size={15}/></Link>
        </div>
      </section>

      <section>
        <div className="section-heading"><div><div className="eyebrow"><span /> THE CHALLENGE</div><h2>Turn a manuscript into a <em>complete book package.</em></h2></div></div>
        <p className="page-lead">A finished story still has to become a finished product. The project called for a consistent narrative, professional presentation, publication-ready assets, and a practical route to readers across multiple formats.</p>
      </section>

      <section>
        <div className="section-heading"><div><div className="eyebrow"><span /> THE WORK</div><h2>Publishing support from <em>page to platform.</em></h2></div></div>
        <div className="page-card-grid">
          <article className="page-card"><div className="card-icon">01</div><h3>Manuscript Development</h3><p>Reviewing story structure, continuity, pacing, character clarity, and presentation to strengthen the manuscript while maintaining its intended creative voice.</p></article>
          <article className="page-card"><div className="card-icon">02</div><h3>Editorial Refinement</h3><p>Revising and preparing the text for publication, including consistency work and the transition from working draft to a more polished manuscript.</p></article>
          <article className="page-card"><div className="card-icon">03</div><h3>Cover & Presentation</h3><p>Developing a recognizable visual package for the title and preparing the book to be presented professionally to readers and retailers.</p></article>
          <article className="page-card"><div className="card-icon">04</div><h3>Formatting & Production</h3><p>Preparing the project for its intended formats and making the production decisions required between manuscript completion and publication.</p></article>
          <article className="page-card"><div className="card-icon">05</div><h3>Publishing Setup</h3><p>Building the title&apos;s publishing information, product presentation, and distribution setup for appropriate third-party publishing platforms.</p></article>
          <article className="page-card"><div className="card-icon">06</div><h3>Multi-Format Reach</h3><p>Establishing routes for print, e-book, and audiobook availability so readers can encounter the title in the format that suits them.</p></article>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-symbol">✦</div>
        <div className="eyebrow"><span /> THE RESULT</div>
        <h2>A finished book with a<br/><em>real path to readers.</em></h2>
        <p><em>No Love Lost in the Village</em> now has a dedicated product presence and distribution routes spanning print, e-book, and audiobook channels. The project also became a practical foundation for Eros Publishing&apos;s author-services philosophy: professional support without requiring authors to surrender control of their creative work.</p>
        <p><strong>This case study describes the publishing work performed and does not make sales, ranking, or bestseller guarantees.</strong></p>
      </section>

      <section>
        <div className="section-heading"><div><div className="eyebrow"><span /> THE EROS APPROACH</div><h2>Your story stays <em>your story.</em></h2><p>The goal is not to take an author&apos;s book away from them. It is to help turn their work into a professional publication while keeping ownership and publishing decisions clear.</p></div></div>
        <div className="page-card-grid">
          <article className="page-card"><h3>Creative Ownership</h3><p>The author remains at the center of the project and retains ownership subject to the terms of the publishing-services agreement.</p></article>
          <article className="page-card"><h3>Defined Services</h3><p>Editing, design, formatting, and publishing support are scoped as services rather than hidden behind royalty-sharing arrangements.</p></article>
          <article className="page-card"><h3>Practical Guidance</h3><p>Authors receive support navigating the decisions and platforms between a manuscript and a book that readers can actually find.</p></article>
        </div>
      </section>

      <section className="page-cta-panel">
        <h2>Ready to build your own publishing story?</h2>
        <p>Tell Eros Publishing about your manuscript, the stage it is in, and the support you need to bring it to market.</p>
        <Link className="button button-light" href="/publishing-quote">Request a Publishing Quote <ArrowRight size={17}/></Link>
      </section>
    </PageShell>
  );
}
