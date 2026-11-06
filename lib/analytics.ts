/* Privacy-safe GA4 conversion events. Never pass form fields or contact details. */
type GAWindow = Window & { gtag?: (...args: unknown[]) => void };
export function trackPublicEvent(eventName: 'generate_lead' | 'select_content' | 'tip_completed', detail: Record<string, string>) {
  if (typeof window === 'undefined') return;
  (window as GAWindow).gtag?.('event', eventName, detail);
}
