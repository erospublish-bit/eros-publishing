'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

const services = [
  'Manuscript Evaluation','Proofreading','Copy Editing','Developmental Editing','Print Formatting','E-book Formatting','Cover Design','ISBN / Publishing Setup Guidance','Paperback Publishing','Hardcover Publishing','E-book Publishing','Audiobook Publishing','Retailer / Distribution Setup','Author Branding / Marketing Materials','Complete Publishing Package','I’m Not Sure — Recommend a Package'
];

const platforms = ['Barnes & Noble','Apple Books','Spotify / Audiobooks','Lulu','Other Retailers','I’m Not Sure — I Need Guidance'];
const formats = ['Paperback','Hardcover','E-book','Audiobook','Not Sure Yet'];

export default function PublishingQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Publishing Quote Request — ${data.get('title') || 'New project'}`;
    const selected = (name: string) => data.getAll(name).join(', ') || 'Not selected';
    const body = [
      'NEW PUBLISHING QUOTE REQUEST',
      '',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Preferred contact: ${data.get('contactMethod')}`,
      `Consultation preference: ${data.get('consultation')}`,
      '',
      `Book title: ${data.get('title')}`,
      `Genre: ${data.get('genre')}`,
      `Word count: ${data.get('wordCount')}`,
      `Manuscript stage: ${data.get('stage')}`,
      `Previously published: ${data.get('previouslyPublished')}`,
      `Book description: ${data.get('description')}`,
      '',
      `Services: ${selected('services')}`,
      `Distribution: ${selected('platforms')}`,
      `Formats: ${selected('formats')}`,
      '',
      `Ideal publication date: ${data.get('launchDate') || 'Not provided'}`,
      `Budget: ${data.get('budget')}`,
      `Primary goal: ${data.get('primaryGoal')}`,
      `Goals / priorities: ${data.get('goals') || 'Not provided'}`,
      `Biggest question / concern: ${data.get('concern') || 'Not provided'}`,
      `Referral source: ${data.get('source') || 'Not provided'}`,
    ].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:authors@erospublishingkc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <PageShell eyebrow="START YOUR PUBLISHING PROJECT" title="Request a professional" accent="publishing quote." intro="Tell us where your book is today and where you want it to go. We’ll use your answers to recommend a clear publishing path, project scope, and next steps—without asking you to know every publishing detail first.">
      <section className="page-cta-panel" style={{ marginBottom: 28 }}>
        <div className="quote-section-heading"><span>START</span><div><h2>Before you begin</h2><p>You do not need a finished manuscript or a complete publishing plan to request guidance.</p></div></div>
        <div className="quote-steps">
          <div><strong>1</strong><h3>Tell us where you are</h3><p>Share your manuscript stage, genre, approximate word count, and goals.</p></div>
          <div><strong>2</strong><h3>Choose what you know</h3><p>Select the services, formats, and retailers you are considering—or simply choose “Not Sure.”</p></div>
          <div><strong>3</strong><h3>Get a recommended path</h3><p>We review the project and identify an appropriate scope instead of forcing every author into the same package.</p></div>
          <div><strong>4</strong><h3>Decide before work begins</h3><p>You can review the proposed scope, pricing, and terms before committing to a project.</p></div>
        </div>
        <p style={{ marginTop: 24 }}><Link className="text-link" href="/publishing-pricing">Review publishing services & pricing →</Link></p>
      </section>

      {submitted && (
        <section className="quote-success" role="status">
          <strong>Your publishing request has been prepared.</strong>
          <p>Your email app should open with your project details already organized. Review the message and send it to complete your inquiry. If your email app did not open, contact <strong>authors@erospublishingkc.com</strong> and include your book title and the services you are considering.</p>
        </section>
      )}

      <form className="quote-form" onSubmit={handleSubmit}>
        <section className="quote-section">
          <div className="quote-section-heading"><span>01</span><div><h2>About You</h2><p>Tell us how you prefer to communicate during the planning stage.</p></div></div>
          <div className="quote-grid">
            <label>Full Name *<input name="name" autoComplete="name" required /></label>
            <label>Email Address *<input type="email" name="email" autoComplete="email" required /></label>
            <label>Phone Number<input type="tel" name="phone" autoComplete="tel" /></label>
            <label>Preferred Contact Method *<select name="contactMethod" required defaultValue="Email"><option>Email</option><option>Phone</option></select></label>
            <label>Consultation Preference *<select name="consultation" required defaultValue="Email first"><option>Email first</option><option>Phone conversation</option><option>No preference</option></select></label>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>02</span><div><h2>About Your Book</h2><p>Give us enough context to understand the project. A polished synopsis is not required.</p></div></div>
          <div className="quote-grid">
            <label>Book Title or Working Title *<input name="title" required /></label>
            <label>Genre *<select name="genre" required defaultValue=""><option value="">Select a genre</option><option>Fiction</option><option>Mystery / Thriller / Suspense</option><option>Romance</option><option>Fantasy</option><option>Science Fiction</option><option>Horror</option><option>Young Adult</option><option>Children's</option><option>Poetry</option><option>Memoir / Autobiography</option><option>Nonfiction</option><option>Other</option></select></label>
            <label>Approximate Word Count *<input type="number" name="wordCount" min="1" required /></label>
            <label>Manuscript Stage *<select name="stage" required defaultValue=""><option value="">Select a stage</option><option>Idea / Early Draft</option><option>First Draft</option><option>Completed Draft</option><option>Currently Being Edited</option><option>Fully Edited</option><option>Previously Published</option><option>Other</option></select></label>
            <label>Has this book been published before? *<select name="previouslyPublished" required defaultValue="No"><option>No</option><option>Yes — self-published</option><option>Yes — through a publisher</option><option>Not sure how to classify it</option></select></label>
            <label className="quote-full">Briefly Describe Your Book *<textarea name="description" rows={6} required placeholder="A few sentences about the story or subject, intended reader, and what makes the book distinctive. Please do not paste your entire manuscript." /></label>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>03</span><div><h2>Publishing Services</h2><p>Select everything you may need. Unsure authors can ask us to recommend the right scope.</p></div></div>
          <div className="quote-options">{services.map((item) => <label key={item}><input type="checkbox" name="services" value={item} /> <span>{item}</span></label>)}</div>
          <p style={{ marginTop: 18 }}>Not sure what editing, formatting, or distribution support you need? That is completely fine—select <strong>“I’m Not Sure — Recommend a Package.”</strong></p>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>04</span><div><h2>Distribution & Formats</h2><p>Tell us where and how you would like readers to find your book. These choices can be refined later.</p></div></div>
          <h3 className="quote-subheading">Distribution platforms</h3>
          <div className="quote-options">{platforms.map((item) => <label key={item}><input type="checkbox" name="platforms" value={item} /> <span>{item}</span></label>)}</div>
          <h3 className="quote-subheading">Publishing formats</h3>
          <div className="quote-options">{formats.map((item) => <label key={item}><input type="checkbox" name="formats" value={item} /> <span>{item}</span></label>)}</div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>05</span><div><h2>Goals, Timing & Budget</h2><p>These answers help us recommend a realistic scope instead of an oversized package.</p></div></div>
          <div className="quote-grid">
            <label>Ideal Publication Date<input type="date" name="launchDate" /></label>
            <label>Estimated Publishing Budget *<select name="budget" required defaultValue=""><option value="">Select a range</option><option>Under $500</option><option>$500–$999</option><option>$1,000–$1,499</option><option>$1,500–$2,499</option><option>$2,500–$3,999</option><option>$4,000+</option><option>Not Sure Yet</option></select></label>
            <label>Primary Publishing Goal *<select name="primaryGoal" required defaultValue=""><option value="">Select your main goal</option><option>Publish my first book professionally</option><option>Improve and republish an existing book</option><option>Reach more retailers and formats</option><option>Prepare a book for a specific launch date</option><option>Build an author brand / catalog</option><option>I need help deciding</option><option>Other</option></select></label>
            <label className="quote-full">What is most important to you with this project?<textarea name="goals" rows={5} placeholder="Share your publishing goals, concerns, deadlines, audience, or priorities." /></label>
            <label className="quote-full">What is your biggest publishing question or concern?<textarea name="concern" rows={4} placeholder="For example: editing level, ownership, retailer setup, ISBNs, formatting, cover design, costs, or where to begin." /></label>
            <label>How did you hear about Eros Publishing?<select name="source" defaultValue=""><option value="">Select one</option><option>Google / Search Engine</option><option>Social Media</option><option>Referral</option><option>Eros Publishing Book</option><option>Online Advertisement</option><option>Event / Community</option><option>Other</option></select></label>
          </div>
        </section>

        <section className="quote-section quote-consent">
          <div className="quote-section-heading"><span>06</span><div><h2>Review & Send</h2><p>Submitting an inquiry starts a conversation—it does not lock you into a publishing package.</p></div></div>
          <label><input type="checkbox" required /> <span>I confirm that I own or have the necessary rights to the material described in this request.</span></label>
          <label><input type="checkbox" required /> <span>I understand that submitting this form is a request for information and does not create a publishing agreement or guarantee publication, distribution, sales, or earnings.</span></label>
          <label><input type="checkbox" required /> <span>I agree that Eros Publishing may contact me regarding this publishing inquiry.</span></label>
          <p><strong>Please do not submit confidential material or your complete unpublished manuscript through this form.</strong> If manuscript pages are needed for evaluation, we can discuss the appropriate next step after reviewing your inquiry.</p>
          <button className="button button-primary quote-submit" type="submit">Prepare My Publishing Request →</button>
          <p style={{ marginTop: 14, fontSize: 12 }}>Your email application will open with the information above organized into a message to Eros Publishing. You can review it before sending.</p>
        </section>
      </form>

      <section className="page-cta-panel quote-next-steps">
        <h2>What happens after you inquire?</h2>
        <div className="quote-steps">
          <div><strong>1</strong><h3>Project Review</h3><p>We review your manuscript stage, goals, requested services, formats, and budget.</p></div>
          <div><strong>2</strong><h3>Recommended Scope</h3><p>We identify the services that fit the project and clarify any questions before proposing work.</p></div>
          <div><strong>3</strong><h3>Pricing & Terms</h3><p>You receive the proposed scope and next steps so you can make an informed decision.</p></div>
          <div><strong>4</strong><h3>Project Kickoff</h3><p>Work begins only after the scope, pricing, responsibilities, and terms have been agreed upon.</p></div>
        </div>
        <div style={{ marginTop: 28 }}>
          <h3>What to have ready if you move forward</h3>
          <p>Your latest manuscript file, preferred author name, book title or working title, publishing goals, and any existing cover or brand materials. Do not worry if some of these are still undecided—we can identify what is actually needed during planning.</p>
        </div>
      </section>
    </PageShell>
  );
}
