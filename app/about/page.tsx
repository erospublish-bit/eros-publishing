import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import beros from '../../images/beros.jpeg';

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="A NOTE FROM EROS"
      title="Every great story"
      accent="begins with a feeling."
      intro="Eros Publishing celebrates the spark that makes us create, connect, and imagine something beyond ourselves. Our goal is to help stories find the readers and opportunities they deserve."
    >
      <section>
        <h2 className="page-section-heading">Stories, thoughtfully brought to life</h2>
        <p className="page-lead">Inspired by Eros, the figure from Greek mythology associated with love and desire, our identity reflects the emotions that make stories memorable: curiosity, longing, courage, and change.</p>
        <div className="page-card-grid">
          <article className="page-card"><div className="card-icon">♡</div><h3>Reader first</h3><p>We want readers to discover books that stay with them after the final page.</p></article>
          <article className="page-card"><div className="card-icon">✍</div><h3>Author minded</h3><p>Independent authors deserve clear information and practical publishing support.</p></article>
          <article className="page-card"><div className="card-icon">✦</div><h3>Built on creativity</h3><p>Every book begins with an idea worth shaping, refining, and sharing.</p></article>
        </div>
      </section>

      <section className="book-detail-layout">
        <div className="book-detail-cover-wrap">
          <Image
            className="book-detail-cover"
            src={beros}
            alt="Brandan Rayton, Founder and Publisher of Eros Publishing"
            width={720}
            height={900}
            sizes="(max-width: 800px) 100vw, 42vw"
          />
        </div>
        <div className="book-detail-copy">
          <div className="card-icon">FOUNDER & PUBLISHER</div>
          <h2 className="page-section-heading">Meet Brandan Rayton</h2>
          <p className="page-lead">Brandan Rayton founded Eros Publishing with a straightforward belief: authors should be able to bring their stories to the world without giving up ownership of the work they created.</p>
          <p>As an independent author and publisher, Brandan understands that writing the book is only one part of the journey. Editing, design, formatting, distribution, retailer setup, and the decisions between a finished manuscript and a published book can quickly become overwhelming. Eros Publishing was created to make that process clearer.</p>
          <p>Based in Kansas City and serving authors nationwide, Eros Publishing provides independent authors with professional publishing support while keeping authors in control of their books, rights, and publishing accounts.</p>
          <p>Brandan&apos;s approach centers on transparency, creative ownership, and practical guidance. Rather than taking control of an author&apos;s work, Eros works alongside authors to prepare manuscripts, develop professional book packages, navigate publishing platforms, and bring publication-ready projects to market.</p>
          <p>Brandan is also the author of <em>No Love Lost in the Village</em>, published under the name B. Eros. His experience taking a book from manuscript development through editing, design, distribution, and publication helped shape the author-focused services now offered through Eros Publishing.</p>
          <p><strong>Your book. Your rights. Your royalties.</strong></p>
        </div>
      </section>

      <section className="page-cta-panel">
        <h2>Ready to bring your manuscript to life?</h2>
        <p>Tell us about your book, your goals, and the publishing support you need.</p>
        <Link className="button button-light" href="/publishing-quote">Request a Publishing Quote →</Link>
      </section>
    </PageShell>
  );
}
