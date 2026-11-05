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
    <section className="author-tip" aria-labelledby="author-tip-heading">
      <div className="author-tip-inner">
        <div className="author-tip-kicker"><span aria-hidden="true">♥</span> SUPPORT INDEPENDENT STORYTELLING</div>
        <h2 id="author-tip-heading">Enjoyed the story?</h2>
        <p className="author-tip-intro">Leave a little appreciation for B. Eros. Every tip helps bring the next story to life.</p>
        {!success ? <>
          <div className="author-tip-choices" role="group" aria-label="Choose a tip amount">
            {['3', '5', '10'].map(value => (
              <button key={value} type="button" className={choice === value ? 'author-tip-choice is-selected' : 'author-tip-choice'} aria-pressed={choice === value} onClick={() => { setChoice(value); setError(''); }}>
                {'$' + value}
              </button>
            ))}
          </div>
          <button type="button" className={choice === 'custom' ? 'author-tip-custom is-selected' : 'author-tip-custom'} aria-pressed={choice === 'custom'} onClick={() => { setChoice('custom'); setError(''); }}>Choose your own amount</button>
          {choice === 'custom' && <label className="author-tip-custom-label" htmlFor="author-tip-custom-amount">Custom tip amount (USD)
            <input id="author-tip-custom-amount" type="number" min="1" max="10000" step="0.01" inputMode="decimal" value={custom} onChange={event => setCustom(event.target.value)} placeholder="Enter an amount" />
          </label>}
          <div className="author-tip-total" role="status">{valid ? <>Your tip: <strong>{'$' + Number(amount).toFixed(2)}</strong></> : 'Enter a tip between $1 and $10,000.'}</div>
          {enabled ? <div className="author-tip-paypal" ref={container} aria-label="Secure PayPal checkout" /> : <p className="author-tip-notice" role="status">PayPal checkout is being configured. Please check back soon.</p>}
          {error && <p className="author-tip-error" role="alert">{error}</p>}
        </> : <div className="author-tip-success" role="status"><strong>Thank you for your support!</strong><p>PayPal confirmed your tip to B. Eros.</p></div>}
        <p className="author-tip-footer"><span aria-hidden="true">♧</span> Secure checkout powered by PayPal. Tips are optional; no purchase required.</p>
      </div>
    </section>
  );
}
