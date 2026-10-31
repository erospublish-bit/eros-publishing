import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Publishing Services & Pricing | Eros Publishing',
  description:
    'Explore transparent self-publishing service pricing from Eros Publishing, including editing, formatting, cover design, distribution setup, and complete publishing packages.',
};

const individualServices = [
  ['Publishing Consultation', '$75'],
  ['Manuscript Evaluation', '$149–$299'],
  ['Proofreading', '$0.015/word'],
  ['Copy Editing', '$0.025/word'],
  ['Developmental Editing', '$0.04/word'],
  ['E-book Formatting', '$149'],
  ['Print Interior Formatting', '$199'],
  ['E-book + Print Formatting', '$299'],
  ['Standard Cover Design', '$249'],
  ['Premium Custom Cover', '$399+'],
  ['ISBN / Publishing Setup Assistance', '$99'],
  ['Single Distribution Platform Setup', '$199'],
  ['Distribution Setup — Up to 4 Platforms', '$399'],
  ['Additional Distribution Platform', '$75'],
  ['Additional Book Setup', '$199+'],
  ['Book Description / Sales Copy', '$99'],
  ['Metadata, Categories & Keywords', '$99'],
  ['Author Bio Development', '$75'],
  ['Launch Consultation', '$149'],
  ['30-Day Publishing Support', '$199'],
];

const distributionPackages = [
  {
    name: 'Launch',
    price: '$199',
    tagline: 'For authors who need professional setup on one publishing platform.',
    features: [
      'Setup assistance for 1 distribution platform',
      'Book upload and configuration',
      'Basic metadata setup',
      'Pricing assistance',
      'Retail listing quality check',
      '1 correction round',
    ],
  },
  {
    name: 'Wide Release',
    price: '$399',
    tagline: 'Our recommended option for authors who want broad distribution.',
    featured: true,
    features: [
      'Setup assistance for up to 4 distribution platforms',
      'Book upload and configuration',
      'Metadata, categories, and keywords',
      'Pricing and territory assistance',
      'ISBN guidance',
      'Retail listing quality check',
      '1 correction round',
    ],
  },
  {
    name: 'Publisher Pro',
    price: '$699',
    tagline: 'Expanded distribution support with launch guidance and post-launch assistance.',
    features: [
      'Setup assistance for up to 5 distribution platforms',
      'Book upload and configuration',
      'Metadata, categories, and keywords',
      'Pricing and territory assistance',
      'ISBN guidance',
      'Distribution strategy',
      'Retail listing quality check',
      'Launch consultation',
      '2 correction rounds',
      '30 days of post-launch support',
    ],
  },
];

const packages = [
  {
    name: 'Essential',
    price: '$799',
    tagline: 'A professional foundation for authors ready to publish.',
    features: [
      'Publishing consultation',
      'E-book formatting',
      'Print interior formatting',
      'Standard cover design',
      'Metadata optimization',
      'ISBN guidance',
      'Distribution setup for up to 2 platforms',
      'Pricing strategy',
      'Retail listing quality check',
      '1 revision round',
      '14 days of post-launch support',
    ],
  },
  {
    name: 'Professional',
    price: '$1,499',
    tagline: 'Our most complete option for authors who want broader publishing support.',
    featured: true,
    features: [
      'Publishing consultation',
      'Manuscript evaluation',
      'Proofreading allowance for qualifying manuscripts',
      'E-book formatting',
      'Print interior formatting',
      'Custom cover design',
      'Metadata optimization',
      'Book description / sales copy',
      'ISBN guidance',
      'Distribution setup for up to 4 platforms',
      'Pricing strategy',
      'Retail listing quality check',
      'Launch consultation',
      '2 revision rounds',
      '30 days of post-launch support',
    ],
  },
  {
    name: 'Signature',
    price: '$2,499+',
    tagline: 'White-glove publishing support for authors seeking a stronger launch package.',
    features: [
      'Publishing consultation',
      'Manuscript evaluation',
      'Proofreading allowance for qualifying manuscripts',
      'E-book formatting',
      'Print interior formatting',
      'Premium custom cover design',
      'Metadata optimization',
      'Book description / sales copy',
      'Author bio development',
      'ISBN guidance',
      'Distribution setup for up to 5 platforms',
      'Pricing strategy',
      'Retail listing quality check',
      'Launch consultation',
      'Marketing and launch plan',
      '2 revision rounds',
      '60 days of post-launch support',
    ],
  },
];

export default function PublishingPricingPage() {
  return (
    <PageShell
      eyebrow="TRANSPARENT SELF-PUBLISHING PRICING"
      title="Professional publishing support"
      accent="without giving up your royalties."
      intro="Choose the publishing support that fits your book. Eros Publishing offers transparent service-based pricing for editing, design, formatting, distribution setup, and complete self-publishing packages."
    >
      <section>
        <h2 className="page-section-heading">Self-Publishing & Distribution Setup</h2>
        <p className="page-lead">
          Get your book professionally prepared and configured for major publishing and distribution platforms.
          Your retailer accounts remain in your name, platform royalties are paid directly to you, and Eros Publishing
          charges a one-time professional service fee instead of taking an additional percentage of your royalties.
        </p>
        <div className="page-card-grid">
          {distributionPackages.map((pkg) => (
            <article className="page-card" key={pkg.name}>
              <div className="card-icon">{pkg.featured ? 'MOST POPULAR' : 'DISTRIBUTION'}</div>
              <h3>{pkg.name}</h3>
              <p><strong style={{ fontSize: '1.8rem' }}>{pkg.price}</strong></p>
              <p>{pkg.tagline}</p>
              <ul>
                {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="button button-primary" href="/contact">Get Started →</Link>
            </article>
          ))}
        </div>
        <p className="page-lead">
          Distribution support may include platforms such as Barnes & Noble Press, Apple Books, Spotify/Findaway,
          Lulu, and other appropriate retailers or distributors. Platform availability, eligibility, fees, and royalty
          terms are controlled by each third-party provider and may change.
        </p>
      </section>

      <section>
        <h2 className="page-section-heading">Your book. Your rights. Your royalties.</h2>
        <p className="page-lead">
          Eros Publishing is built around assisted self-publishing. You retain ownership of your work and,
          when your retailer and distribution accounts are held in your name, you receive the net royalties
          those platforms pay you. Eros Publishing charges professional service fees rather than taking an
          additional percentage of your royalties.
        </p>
      </section>

      <section>
        <h2 className="page-section-heading">Complete publishing packages</h2>
        <p className="page-lead">
          Start with the level of support that matches your manuscript and publishing goals. Final pricing
          may vary based on word count, manuscript condition, complexity, requested formats, and distribution requirements.
        </p>
        <div className="page-card-grid">
          {packages.map((pkg) => (
            <article className="page-card" key={pkg.name}>
              <div className="card-icon">{pkg.featured ? 'MOST POPULAR' : 'PACKAGE'}</div>
              <h3>{pkg.name}</h3>
              <p><strong style={{ fontSize: '1.8rem' }}>{pkg.price}</strong></p>
              <p>{pkg.tagline}</p>
              <ul>
                {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="button button-primary" href="/contact">Request This Package →</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="page-section-heading">Individual publishing services</h2>
        <p className="page-lead">
          Need only part of the publishing process? Build a custom project using individual services.
        </p>
        <div className="page-card-grid">
          {individualServices.map(([service, price]) => (
            <article className="page-card" key={service}>
              <h3>{service}</h3>
              <p><strong>{price}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="page-section-heading">Eros Complete Publishing</h2>
        <div className="page-card">
          <div className="card-icon">PREMIUM</div>
          <h3>Starting at $3,999</h3>
          <p>
            For authors who want comprehensive support from manuscript refinement through publication and launch.
            A custom scope may include developmental editing, copy editing or proofreading, premium cover design,
            print and e-book formatting, metadata optimization, ISBN guidance, broad distribution setup, author bio,
            book description, launch strategy, marketing materials, multiple revision rounds, and up to 90 days of post-publication support.
          </p>
          <Link className="button button-primary" href="/contact">Request a Custom Quote →</Link>
        </div>
      </section>

      <section>
        <h2 className="page-section-heading">How payment works</h2>
        <ul className="page-list">
          <li><strong>50% deposit to begin.</strong> Production starts after the scope is approved and the initial payment is received.</li>
          <li><strong>50% before final publication or delivery.</strong> The remaining project balance is due before final files are released or publication setup is completed.</li>
          <li><strong>Editing is based on manuscript length.</strong> Package editing allowances may be capped by word count, and longer or more complex manuscripts may require a custom quote.</li>
          <li><strong>Third-party costs are separate unless stated.</strong> ISBN purchases, copyright registration, proofs, printing, advertising, retailer fees, and other outside expenses are not included unless specifically listed in your agreement.</li>
        </ul>
      </section>

      <section>
        <h2 className="page-section-heading">Important publishing terms</h2>
        <p className="page-lead">
          Eros Publishing provides assisted self-publishing services. Publication, distribution, sales, rankings,
          reviews, and revenue are not guaranteed. Final deliverables, revision allowances, ownership terms,
          deadlines, and payment requirements are documented in the client service agreement before production begins.
        </p>
      </section>

      <section className="page-cta-panel">
        <h2>Ready to publish your book professionally?</h2>
        <p>
          Tell us your genre, approximate word count, current manuscript stage, desired formats, and the publishing
          services you need. We will help identify the most appropriate package or create a custom project scope.
        </p>
        <Link className="button button-light" href="/contact">Request a Publishing Quote →</Link>
      </section>
    </PageShell>
  );
}
