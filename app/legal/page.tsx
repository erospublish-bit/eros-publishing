import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Legal & Publishing Policies | Eros Publishing',
  description: 'Review Eros Publishing privacy, terms, refund and cancellation, copyright and DMCA, and publishing-services policies.',
};

export default function LegalPage() {
  return (
    <PageShell
      eyebrow="TRUST & TRANSPARENCY"
      title="Legal & publishing"
      accent="policies."
      intro="Clear expectations protect authors, readers, and the creative work entrusted to Eros Publishing. Review the policies that govern use of our website and publishing-service relationships."
    >
      <section>
        <p className="page-lead"><strong>Last updated: October 31, 2026.</strong> These website policies provide general terms for Eros Publishing. Individual publishing projects may also be governed by a separate written service agreement, proposal, or statement of work. If a signed agreement conflicts with these general service policies, the signed agreement controls for that project.</p>

        <div className="page-card-grid">
          <article className="page-card"><div className="card-icon">01</div><h3>Privacy</h3><p>How information submitted through this website may be collected, used, and protected.</p></article>
          <article className="page-card"><div className="card-icon">02</div><h3>Terms of use</h3><p>The rules and expectations that apply when visiting or using the Eros Publishing website.</p></article>
          <article className="page-card"><div className="card-icon">03</div><h3>Author services</h3><p>Important expectations concerning payments, ownership, revisions, schedules, cancellation, and publication outcomes.</p></article>
        </div>
      </section>

      <section id="privacy">
        <h2 className="page-section-heading">Privacy Policy</h2>
        <p>Eros Publishing may receive information that you voluntarily provide when contacting us or requesting publishing services, such as your name, email address, project information, manuscript details, and other information included in your message. We use this information to respond to inquiries, evaluate requested services, communicate about projects, and operate and improve our business.</p>
        <p>The website may use analytics and similar technologies to understand general website traffic and usage. Eros Publishing does not intend to sell personal information submitted through publishing inquiries. Information may be shared with service providers when reasonably necessary to operate the website or provide an agreed service, or when disclosure is required by law.</p>
        <p>Please do not send confidential material, full unpublished manuscripts, financial information, or other sensitive information until an appropriate submission or service process has been established. Reasonable measures may be used to protect information, but no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>
        <p>To ask about personal information you have submitted through the site, contact <a href="mailto:authors@erospublishingkc.com">authors@erospublishingkc.com</a>.</p>
      </section>

      <section id="terms">
        <h2 className="page-section-heading">Terms of Use</h2>
        <p>By using this website, you agree to use it only for lawful purposes. Website content is provided for general informational and promotional purposes and may be updated without notice. Nothing on this website creates an author-publisher, client-service-provider, partnership, employment, fiduciary, or other contractual relationship unless Eros Publishing and the applicable party enter into a separate written agreement.</p>
        <p>Product availability, retailer information, printing, shipping, pricing, and third-party services may change. Purchases completed through an external bookseller, print-on-demand provider, marketplace, payment processor, or other third party may also be subject to that provider's terms and policies.</p>
      </section>

      <section id="publishing-services">
        <h2 className="page-section-heading">Publishing Services Disclaimer & Client Terms</h2>
        <p>Eros Publishing provides independent publishing support. Specific deliverables, fees, payment schedules, revision allowances, estimated timelines, and responsibilities should be stated in a written proposal or service agreement before paid work begins.</p>
        <ul className="page-list">
          <li><strong>Intellectual property.</strong> Authors retain ownership of their original manuscripts and underlying intellectual property unless a separate signed agreement expressly states otherwise. Authors are responsible for having the rights and permissions necessary for material they submit.</li>
          <li><strong>Payment.</strong> Fees, deposits, installment schedules, and final-payment requirements are established in the applicable proposal or service agreement. Work may be paused when an agreed payment is overdue.</li>
          <li><strong>Revisions.</strong> Included revision rounds and the scope of those revisions are defined for each project. Additional or out-of-scope revisions may require additional fees and time.</li>
          <li><strong>Delivery dates.</strong> Timelines are estimates unless expressly guaranteed in writing. Client delays, substantial scope changes, third-party platform requirements, or events outside reasonable control may affect delivery dates.</li>
          <li><strong>Author approval.</strong> Authors are responsible for reviewing proofs, metadata, cover files, interior files, and other deliverables and providing approval before publication or distribution when approval is required.</li>
          <li><strong>No sales guarantee.</strong> Publishing, editing, design, formatting, consultation, or launch support does not guarantee acceptance by a retailer or distributor, sales volume, reviews, rankings, awards, media coverage, profitability, or commercial success.</li>
          <li><strong>Third-party platforms.</strong> Retailers, printers, distributors, and publishing platforms control their own requirements, availability, pricing, production, distribution, and account policies. Eros Publishing cannot guarantee decisions or performance by those third parties.</li>
        </ul>
      </section>

      <section id="refunds">
        <h2 className="page-section-heading">Refund & Cancellation Policy</h2>
        <p>Because publishing services involve reserved production time and customized creative or professional work, cancellation and refund eligibility depends on the work already performed and the terms of the applicable service agreement. Any non-refundable deposit, milestone payment, cancellation charge, or refund calculation should be identified before the project begins.</p>
        <p>If a client requests cancellation, Eros Publishing may invoice for completed work, approved expenses, and other amounts due under the project agreement. Any eligible refund will be determined according to that agreement. Purchases made through third-party retailers or marketplaces are governed by the seller's applicable return and refund policy.</p>
      </section>

      <section id="copyright">
        <h2 className="page-section-heading">Copyright & DMCA</h2>
        <p>Unless otherwise indicated, the Eros Publishing website's original branding, written website content, graphics, design elements, and other original materials are protected by applicable intellectual-property laws. Book covers, manuscripts, excerpts, author materials, trademarks, and other third-party content remain the property of their respective rights holders.</p>
        <p>Eros Publishing respects intellectual-property rights. If you believe material displayed on this website infringes your copyright, send a written notice to <a href="mailto:authors@erospublishingkc.com">authors@erospublishingkc.com</a> identifying the copyrighted work, the allegedly infringing material and its location, your contact information, a good-faith statement regarding the disputed use, and the other information required by applicable law. Valid notices will be reviewed and addressed as appropriate.</p>
      </section>

      <section id="legal-disclaimer">
        <h2 className="page-section-heading">General Disclaimer</h2>
        <p>Information on this website is not legal, tax, accounting, or financial advice. Authors and clients should obtain advice from qualified professionals when their project raises legal, tax, business-formation, rights, licensing, or other professional questions.</p>
      </section>

      <section className="page-cta-panel">
        <h2>Questions about these policies?</h2>
        <p>Contact Eros Publishing before purchasing services if you need clarification about project terms, rights, payments, revisions, or cancellation.</p>
        <Link className="button button-light" href="/contact">Contact Eros Publishing →</Link>
      </section>
    </PageShell>
  );
}
