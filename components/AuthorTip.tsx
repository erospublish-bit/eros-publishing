'use client';

import { useState } from 'react';

const paypalUrl = 'https://www.paypal.com/ncp/payment/9HPW959BDPQW4';

export function AuthorTip() {
  const [amount, setAmount] = useState('5');
  const [custom, setCustom] = useState('');
  const selected = amount === 'custom' ? Number(custom) : Number(amount);
  const valid = Number.isFinite(selected) && selected >= 1 && selected <= 10000;

  return (
    <section className="page-card" aria-labelledby="author-tip-heading" style={{ marginTop: '2rem' }}>
      <div className="card-icon">SUPPORT INDEPENDENT FICTION</div>
      <h2 id="author-tip-heading" className="page-section-heading">Tip the Author</h2>
      <p>Enjoyed <em>No Love Lost in the Village</em>? Support B. Eros and future stories with an optional tip.</p>
      <div role="group" aria-label="Suggested tip amount" style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
        {['3', '5', '10', 'custom'].map(value => (
          <button key={value} type="button" className={amount === value ? 'button button-primary' : 'button book-secondary-button'} aria-pressed={amount === value} onClick={() => setAmount(value)}>
            {value === 'custom' ? 'Custom amount' : '$' + value}
          </button>
        ))}
      </div>
      {amount === 'custom' && (
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Custom tip amount (USD)
          <input type="number" min="1" max="10000" step="0.01" inputMode="decimal" value={custom} onChange={event => setCustom(event.target.value)} placeholder="Enter an amount" style={{ display: 'block', maxWidth: '220px', padding: '.65rem', marginTop: '.4rem' }} />
        </label>
      )}
      <a className="button button-primary" href={paypalUrl} target="_blank" rel="noopener noreferrer" aria-disabled={!valid} onClick={event => { if (!valid) event.preventDefault(); }} style={!valid ? { opacity: .5, pointerEvents: 'none' } : undefined}>
        Continue to PayPal ↗
      </a>
      <p className="book-purchase-note">PayPal handles the payment. The amount selected here is a preference only; this PayPal payment link does not accept an amount from the website. Review the amount shown on PayPal before paying. If PayPal shows a fixed amount, you cannot change it here.</p>
    </section>
  );
}
