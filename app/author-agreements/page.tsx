import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Author Agreements & Project Documents | Eros Publishing',
  description: 'Review Eros Publishing author-services agreement, project statement of work, and publication approval templates before commissioning publishing services.',
  alternates: { canonical: '/author-agreements' },
};

const sections = [
  { title: '1. Parties & project', text: 'This template is for a written agreement between Eros Publishing (“Provider”) and the named author or commissioning client (“Client”). Each project must identify the parties, effective date, book working title, manuscript version, estimated word count, and a separately approved Statement of Work (SOW). The agreement takes effect only when both parties accept the completed document.' },
  { title: '2. Services & change orders', text: 'Provider will perform only the services and deliverables expressly listed in the signed SOW. Anything not listed is excluded. A requested change to manuscript scope, formats, platforms, design direction, word count, or deliverables must be documented and approved with its additional fee or schedule impact before changed work starts.' },
  { title: '3. Client materials & rights', text: 'Client represents that they own or have secured permissions for submitted text, images, quotes, artwork, names, and other content and will inform Provider of any rights restrictions. Client retains ownership of their original manuscript and underlying intellectual property. Client grants Provider a nonexclusive, limited license to use and share submitted materials with approved project subcontractors and platforms only as necessary to perform the SOW.' },
  { title: '4. Design assets & final files', text: 'Upon payment of all amounts due, Client receives the rights in original, specifically commissioned deliverables that the signed SOW expressly assigns or licenses. Third-party stock, fonts, templates, cover imagery, software, and other licensed assets remain governed by their separate licenses. Editable source files, unused concepts, and pre-existing Provider tools are excluded unless expressly included. The SOW must state precisely which final file types and usage rights are delivered.' },
  { title: '5. Fees & outside expenses', text: 'The SOW lists the fixed price or rate, the payment due dates, taxes if applicable, and any approved expenses. Unless the signed SOW specifies otherwise, 50% is due at kickoff and 50% before release of final files or completion of publication setup. Third-party ISBN purchases, proof copies, printing, retailer costs, advertising, and outside licenses are not included unless itemized. Client authorization is required before incurring additional expenses on Client’s behalf.' },
  { title: '6. Timing, feedback & revisions', text: 'The SOW sets estimated milestones and the number of included revision rounds. One revision round means one consolidated set of feedback on a deliverable. Client will provide requested materials, approvals, and feedback by agreed dates. Material delays, out-of-scope changes, or third-party requirements may require a revised schedule. Neither party should treat an estimated release date as guaranteed unless the signed SOW expressly says so.' },
  { title: '7. Proofs & publication authorization', text: 'Client must review and approve the final manuscript, cover, interior, metadata, prices, platform selections, and proof files as applicable. Provider may not intentionally publish or submit a work for sale under this agreement until Client has provided a specific written publication approval identifying the edition and platform. Client remains responsible for factual accuracy, permissions, and final editorial decisions.' },
  { title: '8. Accounts, royalties & platform terms', text: 'When an author’s own retail or distribution accounts are used, Client remains the account owner and royalty recipient, subject to each platform’s deductions and terms. Provider charges the SOW service fees and takes no additional royalty percentage unless a separate signed agreement expressly provides otherwise. Client should enter platform passwords and payment/tax details directly, rather than sending credentials in an ordinary form.' },
  { title: '9. Confidentiality', text: 'Each party will use nonpublic materials and business information received from the other solely for the project, restrict access to those who need it, and take reasonable care to protect it. Exclusions include information already public, independently developed, lawfully received from another source, or required to be disclosed by law. Public portfolio use, testimonials, excerpts, or identifying unpublished book details require separate permission from Client.' },
  { title: '10. Pausing, ending & refunds', text: 'Either party may request cancellation by written notice. The parties will review the completed work, unpaid fees, unused prepaid service amounts, and noncancelable third-party costs. Any refund or balance must follow the specific SOW, applicable law, and the site’s Refund & Cancellation Policy; no automatic nonrefundable deposit is created by this template. Provider may pause services after written notice of an overdue payment or missing essential project material. On termination, Client receives paid-for completed deliverables and any other items expressly promised by the SOW.' },
  { title: '11. No outcome guarantees & responsibility', text: 'Provider will use reasonable professional care in delivering the agreed services but does not promise retailer acceptance, distribution availability, sales, rankings, reviews, profit, specific earnings, or commercial success. Third-party vendors control their own requirements and decisions. Any warranty, remedy, liability limit, or dispute-resolution clause should be negotiated and reviewed by counsel before inclusion in an executed agreement.' },
  { title: '12. Written approvals & entire agreement', text: 'The completed signed agreement and SOW, together with written approved change orders, define the project. Neither a quote inquiry nor this website template alone creates a paid service engagement. Material changes and publication authorization should be confirmed in writing. The governing law, notices, and method of signature should be completed in the execution copy with legal advice.' },
];

export default function AuthorAgreementsPage() {
  return (
    <PageShell eyebrow="FOR AUTHOR CLIENTS" title="Clear terms for" accent="your book." intro="Review the documents used to define publishing work, safeguard author ownership, and confirm publication decisions before a project moves forward.">
      <section>
        <p className="page-lead"><strong>Review templates — not an executed contract.</strong> These example provisions help you understand our process. A custom, completed and mutually accepted agreement and statement of work are required before paid services begin. They are not a substitute for legal advice.</p>
        <div className="page-card-grid">
          <article className="page-card"><div className="card-icon">01</div><h3>Author Services Agreement</h3><p>Defines the relationship, copyright permissions, payment standards, approval rights, confidentiality and cancellation process.</p><a className="text-link" href="#services-agreement">Review agreement →</a></article>
          <article className="page-card"><div className="card-icon">02</div><h3>Project Statement of Work</h3><p>Captures the exact editing, design, formatting, distribution, schedules, revisions and project fees.</p><a className="text-link" href="#statement-of-work">Review project checklist →</a></article>
          <article className="page-card"><div className="card-icon">03</div><h3>Publication Approval</h3><p>Records the author’s explicit consent before a finalized edition is uploaded or released.</p><a className="text-link" href="#publication-approval">Review approval form →</a></article>
        </div>
      </section>
      <section id="services-agreement">
        <h2 className="page-section-heading">Author Services Agreement — model terms</h2>
        <p>These clauses are a review copy of a proposed agreement. Your individually completed contract identifies the contracting parties and applies only to the services you authorize.</p>
        <div style={{display:'grid',gap:14,marginTop:24}}>
          {sections.map(section => <article className="page-card" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></article>)}
        </div>
      </section>
      <section id="statement-of-work">
        <h2 className="page-section-heading">Project Statement of Work — required details</h2>
        <p>Each client project should document the following before money changes hands:</p>
        <ul className="page-list">
          <li><strong>Parties and title:</strong> legal names, contact details, date, book title, edition(s), source manuscript filename/version and word count</li>
          <li><strong>Exact services:</strong> editing level, design specifications, included formats, requested distribution platforms and any exclusions</li>
          <li><strong>Deliverables:</strong> marked-up or clean manuscripts, cover files, interior PDF, EPUB, metadata, and whether source files are included</li>
          <li><strong>Fees:</strong> total service price, deposit, final balance, payment milestones, permitted expenses and third-party fees</li>
          <li><strong>Schedule:</strong> material handoff, first proof, revision deadlines, final delivery estimate and dependencies on client responses</li>
          <li><strong>Revisions:</strong> included rounds, feedback method, additional-revision pricing and written change-order process</li>
          <li><strong>Rights and ownership:</strong> commissioned artwork treatment, licensed stock/font restrictions, rights to portfolio display, account ownership and royalty flow</li>
          <li><strong>Cancellation:</strong> how completed work and authorized outside costs will be itemized, and how any remaining prepaid balance will be treated</li>
          <li><strong>Signatures:</strong> both parties’ names, signatures, dates, and chosen method of written notices</li>
        </ul>
      </section>
      <section id="publication-approval">
        <h2 className="page-section-heading">Final Proof & Publication Approval — model form</h2>
        <p>Before publication or retailer submission, the author should provide a separate written approval with these entries:</p>
        <ul className="page-list">
          <li>Book title, author name, ISBN (if assigned), edition, format and file version/date</li>
          <li>Approved cover and interior proof file names, description and metadata</li>
          <li>Approved retail platforms, listing price, territories and desired availability date (if applicable)</li>
          <li>Confirmation that the author reviewed the files, accepts known corrections and has the necessary publication rights</li>
          <li>Specific authorization to submit the listed edition to the listed platforms; author signature and date</li>
        </ul>
        <p><strong>Important:</strong> agreeing to general service terms is not publication authorization. The completed approval must be collected separately for each applicable release.</p>
      </section>
      <section id="additional-documents">
        <h2 className="page-section-heading">Other documents used when appropriate</h2>
        <div className="page-card-grid">
          <article className="page-card"><h3>Confidentiality / NDA</h3><p>Optional mutual confidentiality agreement before exchanging sensitive manuscript or business materials.</p></article>
          <article className="page-card"><h3>Change Order</h3><p>Written approval of new scope, fees and revised milestones before additional work begins.</p></article>
          <article className="page-card"><h3>Permissions & Licensing</h3><p>Specific written permissions for photographs, excerpts, illustrations, licensed artwork or co-author contributions.</p></article>
          <article className="page-card"><h3>Testimonial / Portfolio Release</h3><p>Separate, optional consent for sharing client endorsements, book images or project outcomes in Eros Publishing marketing.</p></article>
        </div>
      </section>
      <section className="page-cta-panel">
        <h2>Ready to define your project?</h2>
        <p>Request a consultation. We’ll identify your deliverables and send the project-specific agreement for review before paid work starts. Do not share complete unpublished manuscripts or sensitive account credentials through inquiry forms.</p>
        <Link href="/publishing-quote" className="button button-light">Request a Consultation →</Link>
        <p style={{marginTop:18}}><Link href="/legal">Read website policies and cancellation information →</Link></p>
      </section>
    </PageShell>
  );
}
