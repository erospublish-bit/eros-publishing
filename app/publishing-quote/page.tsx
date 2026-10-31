'use client';

import { FormEvent, useState } from 'react';
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
      '',
      `Book title: ${data.get('title')}`,
      `Genre: ${data.get('genre')}`,
      `Word count: ${data.get('wordCount')}`,
      `Manuscript stage: ${data.get('stage')}`,
      `Book description: ${data.get('description')}`,
      '',
      `Services: ${selected('services')}`,
      `Distribution: ${selected('platforms')}`,
      `Formats: ${selected('formats')}`,
      '',
      `Ideal publication date: ${data.get('launchDate') || 'Not provided'}`,
      `Budget: ${data.get('budget')}`,
      `Goals / priorities: ${data.get('goals') || 'Not provided'}`,
      `Referral source: ${data.get('source') || 'Not provided'}`,
    ].join('\n');

    window.location.href = `mailto:authors@erospublishingkc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <PageShell eyebrow="START YOUR PUBLISHING PROJECT" title="Request a professional" accent="publishing quote." intro="Tell us about your manuscript, publishing goals, and the support you need. Eros Publishing will use your answers to recommend an appropriate publishing path and project scope.">
      {submitted && (
        <section className="quote-success" role="status">
          <strong>Your publishing request has been prepared.</strong>
          <p>Your email app should open with a structured quote request addressed to Eros Publishing. Send that message to complete your inquiry.</p>
        </section>
      )}

      <form className="quote-form" onSubmit={handleSubmit}>
        <section className="quote-section">
          <div className="quote-section-heading"><span>01</span><div><h2>About You</h2><p>Tell us how to reach you.</p></div></div>
          <div className="quote-grid">
            <label>Full Name *<input name="name" required /></label>
            <label>Email Address *<input type="email" name="email" required /></label>
            <label>Phone Number<input type="tel" name="phone" /></label>
            <label>Preferred Contact Method *<select name="contactMethod" required><option>Email</option><option>Phone</option></select></label>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>02</span><div><h2>About Your Book</h2><p>Give us the essentials about your manuscript.</p></div></div>
          <div className="quote-grid">
            <label>Book Title or Working Title *<input name="title" required /></label>
            <label>Genre *<select name="genre" required><option value="">Select a genre</option><option>Fiction</option><option>Mystery / Thriller / Suspense</option><option>Romance</option><option>Fantasy</option><option>Science Fiction</option><option>Horror</option><option>Young Adult</option><option>Children's</option><option>Poetry</option><option>Memoir / Autobiography</option><option>Nonfiction</option><option>Other</option></select></label>
            <label>Approximate Word Count *<input type="number" name="wordCount" min="1" required /></label>
            <label>Manuscript Stage *<select name="stage" required><option value="">Select a stage</option><option>Idea / Early Draft</option><option>First Draft</option><option>Completed Draft</option><option>Currently Being Edited</option><option>Fully Edited</option><option>Previously Published</option><option>Other</option></select></label>
            <label className="quote-full">Briefly Describe Your Book *<textarea name="description" rows={6} required placeholder="Provide a short synopsis or description. Please do not paste your entire manuscript." /></label>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>03</span><div><h2>Publishing Services</h2><p>Select everything you may need. We can refine the scope together.</p></div></div>
          <div className="quote-options">{services.map((item) => <label key={item}><input type="checkbox" name="services" value={item} /> <span>{item}</span></label>)}</div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>04</span><div><h2>Distribution & Formats</h2><p>Tell us where and how you want your book available.</p></div></div>
          <h3 className="quote-subheading">Distribution platforms</h3>
          <div className="quote-options">{platforms.map((item) => <label key={item}><input type="checkbox" name="platforms" value={item} /> <span>{item}</span></label>)}</div>
          <h3 className="quote-subheading">Publishing formats</h3>
          <div className="quote-options">{formats.map((item) => <label key={item}><input type="checkbox" name="formats" value={item} /> <span>{item}</span></label>)}</div>
        </section>

        <section className="quote-section">
          <div className="quote-section-heading"><span>05</span><div><h2>Project Goals</h2><p>Help us understand your timing, budget, and priorities.</p></div></div>
          <div className="quote-grid">
            <label>Ideal Publication Date<input type="date" name="launchDate" /></label>
            <label>Estimated Publishing Budget *<select name="budget" required><option value="">Select a range</option><option>Under $500</option><option>$500–$999</option><option>$1,000–$1,499</option><option>$1,500–$2,499</option><option>$2,500–$3,999</option><option>$4,000+</option><option>Not Sure Yet</option></select></label>
            <label className="quote-full">What is most important to you with this project?<textarea name="goals" rows={5} placeholder="Share your publishing goals, concerns, deadlines, or priorities." /></label>
            <label>How did you hear about Eros Publishing?<select name="source"><option value="">Select one</option><option>Google / Search Engine</option><option>Social Media</option><option>Referral</option><option>Eros Publishing Book</option><option>Online Advertisement</option><option>Event / Community</option><option>Other</option></select></label>
          </div>
        </section>

        <section className="quote-section quote-consent">
          <label><input type="checkbox" required /> <span>I confirm that I own or have the necessary rights to the material described in this request.</span></label>
          <label><input type="checkbox" required /> <span>I understand that submitting this form is a request for information and does not create a publishing agreement or guarantee publication, distribution, sales, or earnings.</span></label>
          <label><input type="checkbox" required /> <span>I agree that Eros Publishing may contact me regarding this publishing inquiry.</span></label>
          <p><strong>Please do not submit confidential material or your complete unpublished manuscript through this form.</strong></p>
          <button className="button button-primary quote-submit" type="submit">Request My Publishing Quote →</button>
        </section>
      </form>

      <section className="page-cta-panel quote-next-steps">
        <h2>What happens next?</h2>
        <div className="quote-steps"><div><strong>1</strong><h3>Submit Your Request</h3><p>Tell us about your book and publishing goals.</p></div><div><strong>2</strong><h3>Project Review</h3><p>We review the scope and identify the services that best fit your project.</p></div><div><strong>3</strong><h3>Receive Your Recommendation</h3><p>We follow up with recommended services, pricing, and next steps.</p></div><div><strong>4</strong><h3>Approve Your Plan</h3><p>No work begins until scope, pricing, and terms are agreed upon.</p></div></div>
      </section>
    </PageShell>
  );
}
