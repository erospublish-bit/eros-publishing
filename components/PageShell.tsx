import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

type PageShellProps = { eyebrow: string; title: string; accent: string; intro: string; children: React.ReactNode };

export function PageShell({ eyebrow, title, accent, intro, children }: PageShellProps) {
  return (
    <>
      <div className="announcement">✦ STORIES WITH A LITTLE DIVINE FIRE <span className="announcement-dot">✦</span> INDEPENDENTLY PUBLISHED, FOREVER REMEMBERED</div>
      <SiteHeader />
      <main id="main-content" className="subpage-main">
        <section className="subpage-hero">
          <div className="eyebrow"><span /> {eyebrow}</div>
          <h1>{title}<br/><em>{accent}</em></h1>
          <p>{intro}</p>
        </section>
        <div className="subpage-content">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
