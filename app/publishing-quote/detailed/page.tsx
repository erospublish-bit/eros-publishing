'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeepyak';

const services = [
  'Manuscript Evaluation','Proofreading','Copy Editing','Developmental Editing','Print Formatting','E-book Formatting','Cover Design','ISBN / Publishing Setup Guidance','Paperback Publishing','Hardcover Publishing','E-book Publishing','Audiobook Publishing','Retailer / Distribution Setup','Author Branding / Marketing Materials','Complete Publishing Package','I’m Not Sure — Recommend a Package'
];
const platforms = ['Barnes & Noble','Apple Books','Spotify / Audiobooks','Lulu','Other Retailers','I’m Not Sure — I Need Guidance'];
const formats = ['Paperback','Hardcover','E-book','Audiobook','Not Sure Yet'];

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function DetailedPublishingQuotePage() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitState('submitting');
    setSubmitError('');

    // Helpful Formspree metadata. The endpoint itself is public by design; no secret is exposed here.
    data.set('_subject', `Publishing Quote Request — ${data.get('title') || 'New project'}`);
    data.set('inquiryType', 'Publishing Quote Request');
    data.set('submittedFrom', 'Eros Publishing — Publishing Quote');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        let message = 'We could not submit your request. Please check your information and try again.';
        try {
          const result = await response.json();
          if (Array.isArray(result?.errors) && result.errors.length > 0) {
            message = result.errors.map((error: { message?: string }) => error.message).filter(Boolean).join(' ') || message;
          }
        } catch {
          // Keep the friendly fallback message when Formspree does not return JSON.
        }
        throw new Error(message);
      }

      form.reset();
      setSubmitState('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitState('error');
      setSubmitError(error instanceof Error ? error.message : 'We could not submit your request. Please try again.');
    }
  }

  return (
    <PageShell eyebrow="START YOUR PUBLISHING PROJECT" title="Request a professional" accent="publishing quote." intro="Tell us where your book is today and where you want it to go. We’ll use your answers to recommend a clear publishing path, project scope, and next steps—without asking you to know every publishing detail first.">
      <p className="page-lead"><Link className="text-link" href="/publishing-quote">← Prefer a shorter inquiry? Start with the quick consultation form</Link></p>
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

      {submitState === 'success' && (
        <section className="quote-success" role="status" aria-live="polite">
          <strong>Your publishing inquiry has been submitted successfully.</strong>
          <p>Thank you for telling us about your book. Eros Publishing has received your project information and will review your goals, requested services, formats, and timeline before following up using your preferred contact method.</p>
          <p><strong>You do not need to send a separate email.</strong></p>
        </section>
      )}

      {submitState === 'error' && (
        <section className="quote-success" role="alert" aria-live="assertive">
          <strong>We were unable to submit your inquiry.</strong>
          <p>{submitError}</p>
          <p>Your entries are still on this page. Please try again. If the problem continues, email <strong>authors@erospublishingkc.com</strong>.</p>
        </section>
      )}

      <form className="quote-form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit}>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />

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
          <div className="quote-section-heading"><span>06</span><div><h2>Review & Submit</h2><p>Submitting an inquiry starts a conversation—it does not lock you into a publishing package.</p></div></div>
          <label><input type="checkbox" name="rightsConfirmed" value="Yes" required /> <span>I confirm that I own or have the necessary rights to the material described in this request.</span></label>
          <label><input type="checkbox" name="inquiryAcknowledged" value="Yes" required /> <span>I understand that submitting this form is a request for information and does not create a publishing agreement or guarantee publication, distribution, sales, or earnings.</span></label>
          <label><input type="checkbox" name="contactConsent" value="Yes" required /> <span>I agree that Eros Publishing may contact me regarding this publishing inquiry.</span></label>
          <p><strong>Please do not submit confidential material or your complete unpublished manuscript through this form.</strong> If manuscript pages are needed for evaluation, we can discuss the appropriate next step after reviewing your inquiry.</p>
          <button className="button button-primary quote-submit" type="submit" disabled={submitState === 'submitting'} aria-busy={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Submitting Your Request…' : 'Submit My Publishing Request →'}
          </button>
          <p style={{ marginTop: 14, fontSize: 12 }}>Your inquiry is submitted securely through our website. You will remain on this page and receive confirmation when it has been sent.</p>
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
