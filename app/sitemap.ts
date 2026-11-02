import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/blog';
import { books } from '@/lib/books';

const baseUrl = 'https://erospublishingkc.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/books`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/author-services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/publishing-pricing`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/publishing-quote`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/legal`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/portfolio/no-love-lost-in-the-village`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${baseUrl}/books/${book.id}`,
    changeFrequency: 'monthly',
    priority: book.featured ? 0.9 : 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: article.slug === 'how-to-self-publish-a-book' ? 0.9 : 0.8,
  }));

  return [...staticPages, ...bookPages, ...articlePages];
}
