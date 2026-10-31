import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Self-Publishing Services for Authors | Eros Publishing',
  description:
    'Professional manuscript preparation, cover and interior design, and self-publishing guidance from Eros Publishing. Request a custom publishing quote for your book.',
};

const services = [
  {
    number: '01',
    title: 'Manuscript Preparation',
    description:
      'Prepare your manuscript for the next stage of publication with a clear, professional production plan.',
    deliverables: [
      'Manuscript readiness review',
      'Editorial and proofreading planning',
      'Front- and back-matter preparation guidance',
      'Pre-publication quality-control checklist',
    ],
    timeline: 'Typical timeline: 1–3 weeks, depending on manuscript length and scope.',
  },
  {
    number: '02',
    title: 'Cover & Interior Design',
    description:
      'Turn your manuscript into a polished book package designed around your genre, audience, and publishing platform.',
    deliverables: [
      'Cover design planning and production',
      'Print-ready interior formatting',
      'E-book formatting when included in the project scope',
      'Platform-ready file preparation',
      'Up to two revision rounds on Eros-produced design work',
    ],
    timeline: 'Typical timeline: 2–4 weeks after final manuscript and project materials are received.',
  },
  {
    number: '03',
    title: 'Self-Publishing Guidance',
    description:
      'Get practical support navigating the decisions between a finished manuscript and a professional book launch.',
    deliverables: [
      'Publishing-platform and format guidance',
      'Book metadata and listing preparation',
      'Distribution-option guidance',
      'Proof-copy and pre-launch checklist',
      'Launch-readiness consultation',
    ],
    timeline: 'Typical timeline: 1–3 weeks, based on publishing goals and platform requirements.',
  },
];

const workflow = [
  ['01', 'Consultation', 'Tell us about your manuscript, goals, audience, preferred formats, and where you are in the publishing process.'],
  ['02', 'Custom Quote', 'We define the recommended services, deliverables, timeline, revision allowance, and project price before work begins.'],
  ['03', 'Production', 'Once the scope is approved, we begin the agreed manuscript, design, formatting, and publishing preparation work.'],
  ['04', 'Proof & Revisions', 'You review the project deliverables and submit revisions included within the agreed scope.'],
  ['05', 'Publication Ready', 'Final files are prepared for the selected publishing platform, followed by proof and launch-readiness checks.'],
];

export default function AuthorServicesPage() {
  return (
    <PageShell
      eyebrow="FOR INDEPENDENT AUTHORS"
      title="Your manuscript deserves"
      accent="a professional path to publication."
      intro="Eros Publishing helps independent authors move from manuscript to publication with thoughtful preparation, professional book design, and practical self-publishing support tailored to each project."
    >
      <section>
        <h2 className="page-section-heading">Publishing services built around your book</h2>
        <p className="page-lead">
          Every manuscript is different. Rather than forcing your book into a one-size-fits-all package,
          Eros Publishing creates a custom project scope based on your manuscript, publishing goals, and
          the services you actually need.
        </p>

        <div className="page-card-grid">
          {services.map((service) => (
            <article className="page-card" key={service.number}>
              <div className="card-icon">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <h4>Typical deliverables</h4>
              <ul>
                {service.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p><strong>{service.timeline}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="page-section-heading">From manuscript to publication</h2>
        <p className="page-lead">
          You should know what happens next before committing to a publishing project. Our process keeps
          scope, expectations, revisions, and deliverables clear from the beginning.
        </p>
        <div className="page-card-grid">
          {workflow.map(([number, title, description]) => (
            <article className="page-card" key={number}>
              <div className="card-icon">{number}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="page-section-heading">Transparent project pricing</h2>
        <p className="page-lead">
          Publishing projects vary significantly by word count, manuscript condition, book format,
          design requirements, and requested services. Eros Publishing provides a custom quote before
          paid work begins so you can review the scope and cost before making a commitment.
        </p>
        <ul className="page-list">
          <li><strong>No surprise scope.</strong> Deliverables and project pricing are documented before production begins.</li>
          <li><strong>Clear revision allowances.</strong> Included revision rounds are identified in your project scope.</li>
          <li><strong>Your work remains yours.</strong> Ownership and permitted use of author-supplied content are documented in the service agreement.</li>
          <li><strong>Realistic timelines.</strong> Your quote includes an estimated production schedule based on the agreed project.</li>
          <li><strong>No guaranteed sales claims.</strong> Publishing support can prepare a professional book for market, but sales and commercial results cannot be guaranteed.</li>
        </ul>
      </section>

      <section className="page-cta-panel">
        <h2>Ready to take the next step with your manuscript?</h2>
        <p>
          Tell us your book's genre, approximate word count, current manuscript stage, desired formats,
          and the publishing support you are looking for. We will use that information to discuss the
          project and determine an appropriate scope.
        </p>
        <Link className="button button-light" href="/contact">
          Request a Publishing Quote →
        </Link>
        <p>
          <small>Submitting an inquiry does not create a publishing agreement or require you to purchase services.</small>
        </p>
      </section>
    </PageShell>
  );
}
