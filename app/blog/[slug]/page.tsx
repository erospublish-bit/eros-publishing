import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { blogArticles, getBlogArticle } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return blogArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  const url = `https://erospublishingkc.com/blog/${article.slug}`;
  return {
    title: `${article.title} | Eros Publishing`, description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: 'article', publishedTime: article.date, authors: ['Eros Publishing'] }
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  const url = `https://erospublishingkc.com/blog/${article.slug}`;
  const related = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title,
    description: article.description, datePublished: article.date, dateModified: article.date,
    mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Eros Publishing', url: 'https://erospublishingkc.com' },
    publisher: { '@type': 'Organization', name: 'Eros Publishing', url: 'https://erospublishingkc.com' }
  };

  return <PageShell eyebrow={article.category.toUpperCase()} title={article.title} accent="The Eros Journal" intro={article.description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <article className="blog-article">
      <div className="blog-article-meta"><span>{new Date(`${article.date}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span><span>{article.readTime}</span></div>
      <p className="blog-article-intro">{article.intro}</p>
      {article.sections.map((section) => <section key={section.heading}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
      </section>)}
      <div className="blog-article-cta"><span className="blog-cta-symbol">✦</span><h3>Ready to move your manuscript forward?</h3><p>Eros Publishing provides editing, design, formatting, and publishing support built around the needs of your project.</p><div className="blog-cta-links"><Link className="button button-light" href="/publishing-quote">Request a Publishing Quote <ArrowRight size={16}/></Link><Link className="button button-outline-light" href="/publishing-pricing">View pricing</Link></div></div>
    </article>
    <section><div className="section-heading"><div><div className="eyebrow"><span /> KEEP READING</div><h2>More from the <em>Eros Journal.</em></h2></div></div><div className="page-card-grid">{related.map((item) => <article className="page-card" key={item.slug}><div className="card-icon">{item.category}</div><h3>{item.title}</h3><p>{item.description}</p><Link className="text-link" href={`/blog/${item.slug}`}>Read article <ArrowRight size={15}/></Link></article>)}</div></section>
  </PageShell>;
}
