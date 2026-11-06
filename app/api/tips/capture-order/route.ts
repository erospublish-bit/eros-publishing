import { NextResponse } from 'next/server';
import { matchesTipAmount, matchingCaptures, paypalAccessToken, paypalOrderRequest, readTipOrder } from '@/lib/paypal-server';

export const runtime = 'nodejs';
export async function POST(request: Request) {
  const size = Number(request.headers.get('content-length') || 0);
  if (size > 512) return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
  try {
    const raw = await request.text();
    if (raw.length > 512) return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
    const { orderId, binding } = JSON.parse(raw) as { orderId?: unknown, binding?: unknown };
    if (typeof orderId !== 'string' || !/^[A-Z0-9]{8,32}$/.test(orderId)) {
      return NextResponse.json({ error: 'Invalid order.' }, { status: 400 });
    }
    const amount = readTipOrder(orderId, binding);
    if (!amount) return NextResponse.json({ error: 'Invalid or expired checkout request. Please start again.' }, { status: 400 });
    const access = await paypalAccessToken();
    const before = await paypalOrderRequest('/v2/checkout/orders/' + orderId, access, 'GET');
    if (!before.response.ok || !matchesTipAmount(before.data, amount)) {
      return NextResponse.json({ error: 'Payment details could not be verified.' }, { status: 409 });
    }
    if (matchingCaptures(before.data, amount)) return NextResponse.json({ status: 'COMPLETED' });
    if (before.data.status !== 'APPROVED') {
      return NextResponse.json({ error: 'This payment has not been approved.' }, { status: 409 });
    }
    const capture = await paypalOrderRequest('/v2/checkout/orders/' + orderId + '/capture', access, 'POST', undefined, 'tip-capture-' + orderId);
    if (!capture.response.ok || !matchingCaptures(capture.data, amount)) {
      return NextResponse.json({ error: 'Payment has not been confirmed.' }, { status: 502 });
    }
    return NextResponse.json({ status: 'COMPLETED' }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: 'Unable to confirm payment.' }, { status: 502 });
  }
}
