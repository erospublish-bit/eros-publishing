'use client';
import type { ReactNode } from 'react';
import { trackPublicEvent } from '@/lib/analytics';
type Props = { href: string; provider: string; className?: string; children: ReactNode };
export function TrackedRetailerLink({ href, provider, className, children }: Props) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer"
    onClick={() => trackPublicEvent('select_content', { content_type: 'retailer_link', item_id: 'no-love-lost-in-the-village', provider })}>
    {children}
  </a>;
}
