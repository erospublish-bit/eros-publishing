import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const base = process.env.PAYPAL_ENVIRONMENT === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json();
    if (typeof orderId !== 'string' || !/^[A-Z0-9]{8,32}$/.test(orderId)) return NextResponse.json({ error: 'Invalid order.' }, { status: 400 });
    const id = process.env.PAYPAL_CLIENT_ID;
    const secret = process.env.PAYPAL_CLIENT_SECRET;
    if (!id || !secret) return NextResponse.json({ error: 'PayPal is not configured.' }, { status: 503 });
    const auth = await fetch(base + '/v1/oauth2/token', {
      method: 'POST',
      headers: { Authorization: 'Basic ' + Buffer.from(id + ':' + secret).toString('base64'), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials', cache: 'no-store',
    });
    if (!auth.ok) throw new Error('PayPal authentication failed');
    const { access_token } = await auth.json();
    const response = await fetch(base + '/v2/checkout/orders/' + orderId + '/capture', {
      method: 'POST', headers: { Authorization: 'Bearer ' + access_token, 'Content-Type': 'application/json', 'PayPal-Request-Id': 'tip-capture-' + orderId }, cache: 'no-store',
    });
    const data = await response.json();
    const captures = data.purchase_units?.flatMap((unit: { payments?: { captures?: Array<{ status: string }> } }) => unit.payments?.captures ?? []) ?? [];
    if (!response.ok || data.status !== 'COMPLETED' || !captures.some((capture: { status: string }) => capture.status === 'COMPLETED')) {
      return NextResponse.json({ error: 'Payment has not been confirmed.' }, { status: 502 });
    }
    return NextResponse.json({ status: 'COMPLETED' });
  } catch {
    return NextResponse.json({ error: 'Unable to confirm payment.' }, { status: 502 });
  }
}
