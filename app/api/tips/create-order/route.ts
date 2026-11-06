import { NextResponse } from 'next/server';
import { paypalAccessToken, paypalOrderRequest, signTipOrder } from '@/lib/paypal-server';

export const runtime = 'nodejs';
export async function POST(request: Request) {
  const size = Number(request.headers.get('content-length') || 0);
  if (size > 512) return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
  try {
    const raw = await request.text();
    if (raw.length > 512) return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
    const { amount } = JSON.parse(raw) as { amount?: unknown };
    if (typeof amount !== 'string' || !/^(?:[1-9]\d{0,3}|10000)(?:\.\d{1,2})?$/.test(amount) || Number(amount) > 10000) {
      return NextResponse.json({ error: 'Enter an amount between $1 and $10,000.' }, { status: 400 });
    }
    const formatted = Number(amount).toFixed(2);
    const access = await paypalAccessToken();
    const { response, data } = await paypalOrderRequest('/v2/checkout/orders', access, 'POST', {
      intent: 'CAPTURE',
      purchase_units: [{ description: 'Optional author tip for B. Eros', amount: { currency_code: 'USD', value: formatted } }],
    }, crypto.randomUUID());
    if (!response.ok || typeof data.id !== 'string') return NextResponse.json({ error: 'Unable to create PayPal order.' }, { status: 502 });
    return NextResponse.json({ id: data.id, binding: signTipOrder(data.id, formatted) }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: 'PayPal checkout is unavailable.' }, { status: 503 });
  }
}
