import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Self-Publishing Services for Authors | Eros Publishing',
  description:
    'Professional manuscript preparation, cover and interior design, self-publishing guidance, and answers to common author publishing questions from Eros Publishing.',
  alternates: { canonical: '/author-services' },
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

const faqs = [
  {
    question: 'Is Eros Publishing a traditional publisher or a self-publishing service?',
    answer: 'Eros Publishing provides assisted self-publishing services. Authors hire us for professional publishing support while maintaining control over their project. The exact services, responsibilities, and deliverables are defined in the project agreement before paid work begins.',
  },
  {
    question: 'Do I keep the rights to my book?',
    answer: 'Our service model is designed around author ownership. Your service agreement documents ownership and the limited permissions needed for Eros Publishing to perform the work you request. Authors should always review the final agreement carefully before a project begins.',
  },
  {
    question: 'Do you take a percentage of my royalties?',
    answer: 'Publishing-service fees and any ongoing arrangements are disclosed before you approve a project. When retailer or distribution accounts are established in the author’s name, royalties are generally governed by that platform’s terms. Your quote and agreement will identify any Eros Publishing fees that apply to your specific project.',
  },
  {
    question: 'Do I need a finished manuscript before contacting you?',
    answer: 'No. You can contact us while your manuscript is still in development. Knowing its current stage helps us recommend the right next step. Design, formatting, and publication work generally require a sufficiently complete manuscript before those production stages can begin.',
  },
  {
    question: 'What if I do not know which publishing services I need?',
    answer: 'That is completely fine. Select the recommendation option on the quote form and describe your manuscript, goals, and current stage. We can then identify which services are relevant instead of asking you to choose a package without enough information.',
  },
  {
    question: 'What kinds of books do you work with?',
    answer: 'Eros Publishing primarily supports independent book projects, with a strong focus on fiction. Project fit also depends on manuscript readiness, requested services, production requirements, and whether the material falls within the types of projects we can professionally support.',
  },
  {
    question: 'Can you edit my manuscript?',
    answer: 'Editorial support can be included depending on your project. The appropriate level may range from proofreading and copy editing to more substantial developmental work. We determine the recommended editorial scope after learning about the manuscript and its current condition.',
  },
  {
    question: 'Can you design my book cover and interior?',
    answer: 'Yes. Cover design, print interior formatting, and e-book formatting can be included in a publishing project. Design work is planned around the book’s genre, audience, format, and the technical requirements of the selected publishing platforms.',
  },
  {
    question: 'Where can you help me publish and distribute my book?',
    answer: 'Depending on the project, we can provide setup and distribution guidance for platforms and retailers such as Lulu, Barnes & Noble, Apple Books, and audiobook services. Availability, requirements, fees, and retailer terms are controlled by the individual platforms and can change over time.',
  },
  {
    question: 'Can you help with paperback, hardcover, e-book, and audiobook editions?',
    answer: 'Yes, those formats can be considered when planning your project. Not every book needs every format at launch, so we can help determine which editions make sense for your goals, budget, audience, and distribution strategy.',
  },
  {
    question: 'Do I need an ISBN?',
    answer: 'It depends on the format, retailer, and publishing approach. ISBN requirements and ownership choices can affect how a book is identified and listed. We can explain the options that apply to your project before publication setup is completed.',
  },
  {
    question: 'How much does it cost to publish a book with Eros Publishing?',
    answer: 'Cost depends on factors such as manuscript length and condition, editing needs, cover and interior design, number of formats, distribution setup, and other requested services. Review our publishing pricing for starting points, then request a quote for a project-specific scope and price.',
  },
  {
    question: 'How long does the publishing process take?',
    answer: 'Timelines vary by manuscript and scope. Individual services may take a few weeks, while a multi-stage publishing project can take longer because editing, author review, revisions, design, formatting, proofing, and platform setup happen in sequence. Your quote will include an estimated schedule based on the agreed work.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Revision allowances depend on the service. For example, Eros-produced design work may include up to two revision rounds when specified in the project scope. Your quote and agreement will state the included revision allowance so expectations are clear before production begins.',
  },
  {
    question: 'Will I get to approve my book before it is published?',
    answer: 'The workflow includes author review and proofing before publication-ready files are finalized. The specific approval process depends on the services and platforms included in your project and will be documented as part of the project scope.',
  },
  {
    question: 'Can you guarantee that my book will sell?',
    answer: 'No. Professional editing, design, formatting, distribution preparation, and publishing support can improve a book’s readiness for the market, but no publisher or service provider can responsibly guarantee sales, rankings, reviews, income, or commercial success.',
  },
  {
    question: 'Can you market my book after publication?',
    answer: 'Author branding and marketing materials may be included in some project scopes. Marketing needs vary widely, so any promotional work, deliverables, duration, and fees should be specifically identified in your quote rather than assumed to be part of publication services.',
  },
  {
    question: 'Can you help if my book was previously published?',
    answer: 'Potentially. Previously published books may require a review of existing files, rights, retailer listings, ISBNs, metadata, and platform accounts before changes are made. Tell us the book’s publication history when requesting a quote so we can determine the appropriate path.',
  },
  {
    question: 'What should I send with my initial inquiry?',
    answer: 'Start with your book title or working title, genre, approximate word count, manuscript stage, desired formats, publishing goals, timeline, and the services you think you may need. Please do not send confidential material or your complete unpublished manuscript through the initial quote form.',
  },
  {
    question: 'Does requesting a quote commit me to anything?',
    answer: 'No. A quote request is an inquiry and does not create a publishing agreement or require you to purchase services. Paid work begins only after the project scope, pricing, terms, and responsibilities have been agreed upon.',
  },
];

export default function AuthorServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <PageShell
      eyebrow="FOR INDEPENDENT AUTHORS"
      title="Your manuscript deserves"
      accent="a professional path to publication."
      intro="Eros Publishing helps independent authors move from manuscript to publication with thoughtful preparation, professional book design, and practical self-publishing support tailored to each project."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
        <p><Link className="text-link" href="/publishing-pricing">View publishing service pricing →</Link></p>
      </section>

      <section id="author-faq">
        <div className="eyebrow"><span />AUTHOR FAQ</div>
        <h2 className="page-section-heading">Questions authors ask before publishing</h2>
        <p className="page-lead">
          Publishing involves creative, financial, and distribution decisions. These answers explain how
          Eros Publishing approaches common questions so you can understand the process before requesting a quote.
        </p>
        <div style={{ display: 'grid', gap: '12px', marginTop: '32px' }}>
          {faqs.map((faq) => (
            <details className="page-card" key={faq.question} style={{ padding: '0' }}>
              <summary style={{ cursor: 'pointer', padding: '22px 24px', fontWeight: 700, listStylePosition: 'inside' }}>
                {faq.question}
              </summary>
              <div style={{ padding: '0 24px 24px' }}>
                <p style={{ margin: 0 }}>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="page-cta-panel">
        <h2>Still have a question about your book?</h2>
        <p>
          Tell us your book's genre, approximate word count, current manuscript stage, desired formats,
          and the publishing support you are looking for. If you are not sure what you need, say so—we
          can use your project details to recommend an appropriate next step.
        </p>
        <Link className="button button-light" href="/publishing-quote">
          Request a Publishing Quote →
        </Link>
        <p>
          <small>Submitting an inquiry does not create a publishing agreement or require you to purchase services.</small>
        </p>
      </section>
    </PageShell>
  );
}
