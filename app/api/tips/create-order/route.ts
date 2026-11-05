import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const base = process.env.PAYPAL_ENVIRONMENT === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';

async function token() {
  const id = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!id || !secret) throw new Error('PayPal is not configured');
  const response = await fetch(base + '/v1/oauth2/token', {
    method: 'POST',
    headers: { Authorization: 'Basic ' + Buffer.from(id + ':' + secret).toString('base64'), 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials', cache: 'no-store',
  });
  if (!response.ok) throw new Error('PayPal authentication failed');
  const data = await response.json();
  return data.access_token as string;
}

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();
    if (typeof amount !== 'string' || !/^(?:[1-9]\d{0,3}|10000)(?:\.\d{1,2})?$/.test(amount) || Number(amount) > 10000) {
      return NextResponse.json({ error: 'Enter an amount between $1 and $10,000.' }, { status: 400 });
    }
    const access = await token();
    const response = await fetch(base + '/v2/checkout/orders', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + access, 'Content-Type': 'application/json', 'PayPal-Request-Id': crypto.randomUUID() },
      body: JSON.stringify({ intent: 'CAPTURE', purchase_units: [{ description: 'Optional author tip for B. Eros', amount: { currency_code: 'USD', value: Number(amount).toFixed(2) } }] }),
      cache: 'no-store',
    });
    const result = await response.json();
    if (!response.ok || !result.id) return NextResponse.json({ error: 'Unable to create PayPal order.' }, { status: 502 });
    return NextResponse.json({ id: result.id });
  } catch {
    return NextResponse.json({ error: 'PayPal checkout is unavailable.' }, { status: 503 });
  }
}
