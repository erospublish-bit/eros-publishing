'use client';

import { useEffect, useRef, useState } from 'react';

type PayPalButtons = { render: (element: HTMLElement) => Promise<void> };
type PayPalSDK = { Buttons: (options: Record<string, unknown>) => PayPalButtons };
declare global { interface Window { paypal?: PayPalSDK } }

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const enabled = Boolean(clientId && process.env.NEXT_PUBLIC_PAYPAL_CHECKOUT_ENABLED === 'true');

export function AuthorTip() {
  const [choice, setChoice] = useState('5');
  const [custom, setCustom] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const amount = choice === 'custom' ? custom : choice;
  const valid = /^(?:[1-9]\d{0,3}|10000)(?:\.\d{1,2})?$/.test(amount) && Number(amount) <= 10000;
  const selectedAmount = useRef(amount);
  selectedAmount.current = amount;

  useEffect(() => {
    if (!enabled || !clientId) return;
    if (window.paypal) { setSdkReady(true); return; }
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(clientId) + '&currency=USD&intent=capture';
    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () => setError('PayPal could not load. Please try again later.');
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  useEffect(() => {
    if (!sdkReady || !valid || !container.current || !window.paypal || success) return;
    const node = container.current;
    node.replaceChildren();
    let active = true;
    const buttons = window.paypal.Buttons({
      createOrder: async () => {
        setError('');
        const response = await fetch('/api/tips/create-order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: selectedAmount.current }) });
        const data = await response.json();
        if (!response.ok || !data.id) throw new Error(data.error || 'Unable to start checkout');
        return data.id;
      },
      onApprove: async (data: { orderID: string }) => {
        const response = await fetch('/api/tips/capture-order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ orderId: data.orderID }) });
        const result = await response.json();
        if (!response.ok || result.status !== 'COMPLETED') throw new Error(result.error || 'Payment confirmation failed');
        if (active) setSuccess(true);
      },
      onError: (err: unknown) => { if (active) setError(err instanceof Error ? err.message : 'PayPal checkout encountered an error.'); },
      onCancel: () => { if (active) setError('Checkout was cancelled. No payment was confirmed.'); },
    });
    void buttons.render(node).catch(() => { if (active) setError('Unable to display PayPal checkout.'); });
    return () => { active = false; node.replaceChildren(); };
  }, [sdkReady, amount, valid, success]);

  return (
    <section className="page-card" aria-labelledby="author-tip-heading" style={{ marginTop: '2rem' }}>
      <div className="card-icon">SUPPORT INDEPENDENT FICTION</div>
      <h2 id="author-tip-heading" className="page-section-heading">Tip the Author</h2>
      <p>Enjoyed <em>No Love Lost in the Village</em>? Support B. Eros and future stories with an optional tip.</p>
      {!success ? <>
        <div role="group" aria-label="Tip amount" style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
          {['3', '5', '10', 'custom'].map(value => (
            <button key={value} type="button" className={choice === value ? 'button button-primary' : 'button book-secondary-button'} aria-pressed={choice === value} onClick={() => { setChoice(value); setError(''); }}>
              {value === 'custom' ? 'Custom amount' : '$' + value}
            </button>
          ))}
        </div>
        {choice === 'custom' && <label style={{ display: 'block', marginBottom: '1rem' }}>Custom tip amount (USD)
          <input type="number" min="1" max="10000" step="0.01" inputMode="decimal" value={custom} onChange={event => setCustom(event.target.value)} placeholder="Enter an amount" style={{ display: 'block', maxWidth: '220px', padding: '.65rem', marginTop: '.4rem' }} />
        </label>}
        {valid && <p>Selected tip: <strong>${Number(amount).toFixed(2)}</strong></p>}
        {!valid && <p role="status">Enter a tip between $1 and $10,000.</p>}
        {enabled ? <div ref={container} aria-label="PayPal checkout" /> : <p role="status">PayPal checkout is being configured. Please check back soon.</p>}
        {error && <p role="alert">{error}</p>}
      </> : <p role="status">Thank you for supporting B. Eros! PayPal confirmed your payment.</p>}
      <p className="book-purchase-note">Tips are optional and processed securely by PayPal. No purchase is required.</p>
    </section>
  );
}
