import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'More Than Books | Eros Publishing Blog',
  description: 'Discover Eros Publishing, explore No Love Lost in the Village by B. Eros, and learn how self-publishing support can help bring your manuscript to life.',
};

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="THE EROS JOURNAL"
      title="More than books."
      accent="A world of stories."
      intro="Ideas, inspiration, featured reads, and guidance for the storytellers bringing their own worlds to life. Welcome to the Eros Publishing blog."
    >
      <article className="blog-article">
        <div className="blog-article-meta"><span>WELCOME TO EROS PUBLISHING</span><span>READ · CREATE · BECOME</span></div>
        <h2>More Than Books: Discover Eros Publishing, Where Stories Come to Life</h2>
        <p className="blog-article-intro">Every memorable story begins with a spark. Sometimes it becomes a book that keeps you turning pages late into the night. Sometimes it becomes the manuscript you have been carrying around for years, waiting for the right moment to share it with the world.</p>

        <p>At <strong>Eros Publishing</strong>, we celebrate both sides of that journey. We are an independent publishing brand for readers who love discovering stories and for aspiring authors who are ready to take the next step with their own work. Our purpose is simple: to make room for stories that move people, spark imagination, and stay with readers long after the final page.</p>

        <h3>Stories worth getting lost in</h3>
        <p>A great book offers more than an escape. It invites us into unfamiliar places, introduces us to complicated characters, and challenges what we think we know. The Eros bookshelf is a place to discover stories with atmosphere, emotion, suspense, and memorable turns.</p>
        <p>One featured title is <em>No Love Lost in the Village</em> by B. Eros, a suspense novel set in the seemingly ordinary village of Northern Point. When Raz begins uncovering the truth behind Cleptes Corp. and the people working behind the scenes, buried secrets, betrayal, and questions of accountability threaten to disrupt the community. It is a story about power, greed, deception, and the price of bringing the truth into the open.</p>
        <p>Whether you are drawn to suspense, layered characters, or stories that keep you guessing, we invite you to explore the <Link href="/books">Eros bookstore</Link> and find your next read.</p>

        <h3>Your story deserves a path to publication</h3>
        <p>Have a manuscript of your own? Taking a book from an early draft to a finished publication can feel overwhelming. There are creative decisions to make, publishing platforms to compare, formatting requirements to understand, and details to prepare before launch.</p>
        <p>Eros Publishing is building author support around three important parts of that process:</p>
        <ul>
          <li><strong>Manuscript preparation:</strong> planning and preparation guidance to help move your work toward publication.</li>
          <li><strong>Cover design and formatting:</strong> support planning a professional cover and readable interior files suited to your chosen publishing platform.</li>
          <li><strong>Self-publishing guidance:</strong> help understanding formats, metadata, distribution options, and launch preparation.</li>
        </ul>
        <p>Every book and author has different needs. Project scope, deliverables, pricing, and timelines should be discussed and confirmed before work begins. Visit our <Link href="/author-services">author services page</Link> to learn more and start a conversation about your project.</p>

        <h3>Independent publishing. Creative possibility.</h3>
        <p>We believe independent publishing gives authors meaningful opportunities to shape their work and make informed choices about how it reaches readers. It is a journey built on creativity, persistence, and attention to detail. You bring the idea and the words; the right guidance can help you navigate the steps that follow.</p>
        <p>And for readers, independent publishing means there are always new voices, perspectives, and worlds waiting to be discovered. Every book begins with someone willing to tell a story.</p>

        <div className="blog-article-cta">
          <span className="blog-cta-symbol">✦</span>
          <h3>There is a story waiting for you.</h3>
          <p>Explore the books, discover the author support available through Eros Publishing, or get in touch and tell us what you are creating.</p>
          <div className="blog-cta-links"><Link className="button button-light" href="/books">Explore the bookstore →</Link><Link className="button button-outline-light" href="/author-services">For authors →</Link></div>
        </div>
        <p className="blog-signoff">Eros Publishing — <em>Stories that stir something eternal.</em></p>
      </article>
    </PageShell>
  );
}
