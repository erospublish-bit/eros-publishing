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
  const orderBinding = useRef('');
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
        if (!response.ok || !data.id || !data.binding) throw new Error(data.error || 'Unable to start checkout');
        orderBinding.current = data.binding;
        return data.id;
      },
      onApprove: async (data: { orderID: string }) => {
        const response = await fetch('/api/tips/capture-order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ orderId: data.orderID, binding: orderBinding.current }) });
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
          {enabled ? <div className="author-tip-paypal" ref={container} aria-label="Secure PayPal checkout" /> : <p className="author-tip-notice" role="status">Eros Publishing's tipping checkout is temporarily unavailable. Please check back soon.</p>}
          {error && <p className="author-tip-error" role="alert">{error}</p>}
        </> : <div className="author-tip-success" role="status"><strong>Thank you for your support!</strong><p>Eros Publishing has received confirmation of your tip to B. Eros.</p></div>}
        <div className="author-tip-qr"><p>Prefer to scan? Support B. Eros using this QR code.</p><a href="https://www.paypal.com/donate/?hosted_button_id=TJQC4VCSLPATU&source=qr" target="_blank" rel="noopener noreferrer" aria-label="Open PayPal donation page"><img src="data:image/png;base64,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" alt="QR code linking to the B. Eros PayPal donation page" width="156" height="156" /></a><span>Scan with your phone or tap the code to continue.</span></div>
        <p className="author-tip-footer"><span aria-hidden="true">♧</span> Eros Publishing · Tips are optional; no purchase required. Payments are processed by PayPal.</p>
      </div>
    </section>
  );
}
