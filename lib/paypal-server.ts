import { createHmac, timingSafeEqual } from 'node:crypto';

export const paypalBase = process.env.PAYPAL_ENVIRONMENT === 'live'
  ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';

function secret() {
  const value = process.env.PAYPAL_ORDER_BINDING_SECRET || process.env.PAYPAL_CLIENT_SECRET;
  if (!value) throw new Error('Payment authentication is not configured');
  return value;
}

export function signTipOrder(orderId: string, amount: string) {
  const payload = [orderId, amount, String(Date.now() + 15 * 60 * 1000)].join('|');
  const encoded = Buffer.from(payload).toString('base64url');
  const signature = createHmac('sha256', secret()).update(encoded).digest('hex');
  return encoded + '.' + signature;
}

export function readTipOrder(orderId: string, binding: unknown): string | null {
  if (typeof binding !== 'string' || binding.length > 256) return null;
  const parts = binding.split('.');
  if (parts.length !== 2 || !/^[a-f0-9]{64}$/.test(parts[1])) return null;
  const expected = createHmac('sha256', secret()).update(parts[0]).digest('hex');
  if (!timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(parts[1], 'hex'))) return null;
  const decoded = Buffer.from(parts[0], 'base64url').toString('utf8').split('|');
  if (decoded.length !== 3 || decoded[0] !== orderId) return null;
  if (!/^\d{1,5}\.\d{2}$/.test(decoded[1])) return null;
  const expiration = Number(decoded[2]);
  if (!Number.isFinite(expiration) || expiration < Date.now() || expiration > Date.now() + 16 * 60 * 1000) return null;
  return decoded[1];
}

export async function paypalAccessToken(): Promise<string> {
  const id = process.env.PAYPAL_CLIENT_ID;
  const secretValue = process.env.PAYPAL_CLIENT_SECRET;
  if (!id || !secretValue) throw new Error('PayPal is not configured');
  const response = await fetch(paypalBase + '/v1/oauth2/token', {
    method: 'POST',
    headers: { Authorization: 'Basic ' + Buffer.from(id + ':' + secretValue).toString('base64'), 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials', cache: 'no-store', signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error('PayPal authentication failed');
  const data: { access_token?: string } = await response.json();
  if (!data.access_token) throw new Error('PayPal authentication failed');
  return data.access_token;
}

type Money = { currency_code?: string; value?: string };
type PayPalOrder = {
  id?: string;
  status?: string;
  purchase_units?: Array<{
    amount?: Money;
    payee?: { merchant_id?: string };
    payments?: { captures?: Array<{ status?: string; amount?: Money }> };
  }>;
};

export async function paypalOrderRequest(path: string, access: string, method: 'GET'|'POST', body?: object, requestId?: string) {
  const response = await fetch(paypalBase + path, {
    method,
    headers: {
      Authorization: 'Bearer ' + access,
      'Content-Type': 'application/json',
      ...(requestId ? { 'PayPal-Request-Id': requestId } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    cache: 'no-store', signal: AbortSignal.timeout(15000),
  });
  let data: PayPalOrder = {};
  try { data = await response.json() as PayPalOrder; } catch { /* Return generic provider error */ }
  return { response, data };
}

export function matchesTipAmount(data: PayPalOrder, expectedAmount: string) {
  const units = data?.purchase_units;
  if (!Array.isArray(units) || units.length !== 1) return false;
  const amount = units[0]?.amount;
  const expectedMerchant = process.env.PAYPAL_MERCHANT_ID;
  return amount?.currency_code === 'USD' &&
    amount?.value === expectedAmount &&
    (!expectedMerchant || units[0]?.payee?.merchant_id === expectedMerchant);
}

export function matchingCaptures(data: PayPalOrder, expectedAmount: string) {
  if (!matchesTipAmount(data, expectedAmount) || data?.status !== 'COMPLETED') return false;
  const captures = data.purchase_units[0]?.payments?.captures;
  return Array.isArray(captures) && captures.some((capture) =>
    capture?.status === 'COMPLETED' &&
    capture?.amount?.currency_code === 'USD' &&
    capture?.amount?.value === expectedAmount
  );
}
