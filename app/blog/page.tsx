import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { blogArticles } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Self-Publishing Guides & Author Resources',
  description: 'Practical self-publishing guides covering publishing costs, book formatting, royalties, ISBNs, distribution, Lulu, Amazon KDP, and the path from manuscript to market.',
  alternates: { canonical: 'https://erospublishingkc.com/blog' },
  openGraph: { title: 'The Eros Journal | Self-Publishing Guides', description: 'Practical guidance for independent authors from manuscript to market.', url: 'https://erospublishingkc.com/blog', type: 'website' }
};

export default function BlogPage() {
  const featured = blogArticles[0];
  return <PageShell eyebrow="THE EROS JOURNAL" title="Publish with" accent="more clarity." intro="Practical guides for independent authors navigating editing, book production, distribution, royalties, and the business of bringing a manuscript to market.">
    <section>
      <div className="section-heading"><div><div className="eyebrow"><span /> START HERE</div><h2>Publishing guidance built for <em>real decisions.</em></h2><p>No hype or guaranteed outcomes—just useful explanations of the choices authors face while preparing and publishing a book.</p></div></div>
      <article className="page-card">
        <div className="card-icon">FEATURED · {featured.category.toUpperCase()}</div>
        <h2>{featured.title}</h2><p className="page-lead">{featured.description}</p><p>By Eros Publishing · {new Date(`${featured.date}T12:00:00`).toLocaleDateString('en-US', { dateStyle: 'medium' })}</p>
        <Link className="button button-primary" href={`/blog/${featured.slug}`}>Read the guide <ArrowRight size={16}/></Link>
      </article>
    </section>

    <section>
      <div className="section-heading"><div><div className="eyebrow"><span /> AUTHOR RESOURCE LIBRARY</div><h2>Learn the path from <em>manuscript to market.</em></h2></div></div>
      <div className="page-card-grid">{blogArticles.filter(article => article.slug !== featured.slug).map((article) => <article className="page-card" key={article.slug}>
        <div className="card-icon">{article.category.toUpperCase()}</div><h3>{article.title}</h3><p>{article.description}</p>
        <p><small>By Eros Publishing · {new Date(`${article.date}T12:00:00`).toLocaleDateString('en-US', { dateStyle: 'medium' })} · {article.readTime}</small></p><Link className="text-link" href={`/blog/${article.slug}`}>Read article <ArrowRight size={15}/></Link>
      </article>)}</div>
    </section>

    <section>
      <div className="section-heading"><div><div className="eyebrow"><span /> EXPLORE BY TOPIC</div><h2>Answers for every stage of <em>independent publishing.</em></h2></div></div>
      <div className="page-card-grid"><article className="page-card"><div className="card-icon">SELF-PUBLISHING</div><h3>Plan the publishing journey</h3><p>Understand costs, workflow, professional services, and the decisions involved in publishing independently.</p><Link className="text-link" href="/blog/how-to-self-publish-a-book/">Read the step-by-step guide →</Link></article><article className="page-card"><div className="card-icon">BOOK PRODUCTION</div><h3>Prepare a professional book</h3><p>Learn how editing, formatting, covers, metadata, and proofs turn a manuscript into publication-ready files.</p><Link className="text-link" href="/blog/book-formatting-guide/">See the formatting guide →</Link></article><article className="page-card"><div className="card-icon">DISTRIBUTION & ROYALTIES</div><h3>Understand the marketplace</h3><p>Explore publishing platforms, identifiers, distribution choices, and the economics behind book sales.</p><Link className="text-link" href="/blog/how-book-royalties-work/">Understand royalties →</Link></article></div>
    </section>

    <section className="page-cta-panel"><h2>Reading about publishing is the first step. Publishing your book is the next.</h2><p>Tell Eros Publishing about your manuscript and receive a scope based on the support your project actually needs.</p><Link className="button button-light" href="/publishing-quote">Request a Publishing Quote <ArrowRight size={17}/></Link></section>
  </PageShell>;
}
