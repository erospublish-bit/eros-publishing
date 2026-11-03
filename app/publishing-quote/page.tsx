'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maeeaepa';
type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function PublishingQuotePage() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitState('submitting');
    setSubmitError('');
    data.set('_subject', 'New Eros Publishing consultation inquiry');
    data.set('inquiryType', 'Quick Publishing Consultation');
    data.set('submittedFrom', 'Eros Publishing — Quick Consultation');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        let message = 'We could not submit your inquiry. Please try again.';
        try {
          const result = await response.json();
          if (Array.isArray(result?.errors) && result.errors.length) {
            message = result.errors.map((item: { message?: string }) => item.message).filter(Boolean).join(' ') || message;
          }
        } catch {
          // Use the fallback message for non-JSON errors.
        }
        throw new Error(message);
      }
      form.reset();
      setSubmitState('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitState('error');
      setSubmitError(error instanceof Error ? error.message : 'Please try again or contact us by email.');
    }
  }

  return (
    <PageShell
      eyebrow="YOUR STORY STARTS HERE"
      title="Let's talk about"
      accent="your book."
      intro="Whether your manuscript is finished or still taking shape, tell us a little about your project. A short inquiry is all you need to start a conversation with Eros Publishing."
    >
      <section className="quick-quote-layout">
        <div>
          <div className="card-icon">FREE INITIAL INQUIRY · ABOUT 2 MINUTES</div>
          <h2 className="page-section-heading">Request a publishing consultation</h2>
          <p className="page-lead">Share your contact information and what kind of help you may need. You do not need a book title, exact word count, budget, or finished manuscript to get started.</p>

          {submitState === 'success' ? (
            <div className="quote-success" role="status" aria-live="polite">
              <strong>Your inquiry was submitted successfully.</strong>
              <p>Thank you for contacting Eros Publishing. We'll review your message and follow up by email to discuss the next steps. No additional form is required right now.</p>
              <button type="button" className="button button-primary" onClick={() => setSubmitState('idle')}>Send another inquiry</button>
            </div>
          ) : (
            <form className="quote-form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
              <div className="quote-section">
                <div className="quote-grid">
                  <label>Full name *<input name="name" autoComplete="name" required /></label>
                  <label>Email address *<input name="email" type="email" autoComplete="email" required /></label>
                  <label>What kind of help do you need?
                    <select name="service" defaultValue="Not sure yet">
                      <option>Not sure yet</option>
                      <option>Complete publishing package</option>
                      <option>Editing and proofreading</option>
                      <option>Cover design and formatting</option>
                      <option>Publishing and distribution setup</option>
                      <option>Other publishing support</option>
                    </select>
                  </label>
                  <label>Manuscript stage
                    <select name="stage" defaultValue="Not sure yet">
                      <option>Not sure yet</option>
                      <option>Still writing</option>
                      <option>Completed manuscript</option>
                      <option>Ready to publish</option>
                      <option>Previously published</option>
                    </select>
                  </label>
                  <label className="quote-full">Tell us about your book (optional)
                    <textarea name="details" rows={4} placeholder="Genre, approximate word count, publishing goals, or questions. Please don't paste your full manuscript." />
                  </label>
                </div>
                <div className="quote-consent quick-quote-consent">
                  <label><input type="checkbox" name="contactConsent" value="Yes" required /><span>I agree that Eros Publishing may contact me about this inquiry. *</span></label>
                  <p>Submitting this form does not create a publishing agreement or guarantee publication or sales. Please do not include confidential information or unpublished manuscript files. See our <Link href="/legal">privacy and service policies</Link>.</p>
                </div>
                {submitState === 'error' && <div className="quote-success" role="alert"><strong>Submission unsuccessful.</strong><p>{submitError} Your entries remain in the form. If needed, email <a href="mailto:authors@erospublishingkc.com">authors@erospublishingkc.com</a>.</p></div>}
                <button className="button button-primary quote-submit" type="submit" disabled={submitState === 'submitting'} aria-busy={submitState === 'submitting'}>
                  {submitState === 'submitting' ? 'Sending your inquiry…' : 'Request Free Consultation →'}
                </button>
              </div>
            </form>
          )}
        </div>
        <aside className="quick-quote-aside">
          <div className="card-icon">WHAT HAPPENS NEXT</div>
          <h2>Simple from the start.</h2>
          <ol>
            <li><strong>Tell us about your project.</strong><p>Complete the short form with what you know today.</p></li>
            <li><strong>We review your inquiry.</strong><p>We'll follow up to clarify your needs and recommend a sensible next step.</p></li>
            <li><strong>Get a clear proposal.</strong><p>For projects moving forward, we'll outline scope, deliverables, revision allowances, timing, pricing, and a written agreement before any paid work begins.</p></li>
          </ol>
          <div className="quick-quote-detailed">
            <h3>Already have your project details ready?</h3>
            <p>Use our comprehensive questionnaire to share manuscript length, publishing formats, distribution preferences, budget, and launch goals upfront.</p>
            <Link className="button book-secondary-button" href="/publishing-quote/detailed">Complete Detailed Quote Form →</Link>
          </div>
          <Link className="text-link" href="/publishing-pricing">Explore publishing packages & pricing →</Link><p><Link className="text-link" href="/legal#service-scope">Review service terms & author rights →</Link></p>
        </aside>
      </section>
    </PageShell>
  );
}
