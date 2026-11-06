import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/blog';
import { books } from '@/lib/books';

export const dynamic = 'force-static';
const base = 'https://erospublishingkc.com';
const fixed = [
  '/', '/books/', '/portfolio/', '/blog/', '/author-services/', '/publishing-pricing/',
  '/publishing-quote/', '/publishing-quote/detailed/', '/about/', '/contact/',
  '/author-agreements/', '/author-agreements/forms/', '/legal/',
  '/eros-publishing-author-checklist.html',
];
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = fixed.map(path => ({ url: new URL(path, base).toString() }));
  const bookPages = books.map(book => ({ url: new URL(`/books/${book.id}/`, base).toString() }));
  const caseStudies = [{ url: new URL('/portfolio/no-love-lost-in-the-village/', base).toString() }];
  const articles = blogArticles.map(article => ({
    url: new URL(`/blog/${article.slug}/`, base).toString(),
    lastModified: new Date(`${article.date}T12:00:00Z`),
  }));
  return [...pages, ...bookPages, ...caseStudies, ...articles];
}
