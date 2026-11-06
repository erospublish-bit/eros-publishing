# Eros Publishing — Production website

Next.js App Router, TypeScript, React website for https://erospublishingkc.com.
**Production hosting: Netlify.** GitHub is the source of truth; GitHub Pages is not a deployment target.

## Features and locations
- Books/retailer links and Lulu widgets: `lib/books.ts`, `app/books/`
- Articles: `lib/blog.ts`, `app/blog/`
- Publishing pricing and self-publishing services: `app/publishing-pricing/`, `app/author-services/`
- Formspree quick and detailed request forms: `app/publishing-quote/`
- Browser-local printable draft agreements, not e-signatures: `components/AgreementForms.tsx`
- PayPal author tips: `components/AuthorTip.tsx`, `app/api/tips/`
- Site SEO: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, per-page metadata

## Local workflow
Install Node.js 22 LTS.
```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Releases
1. Create a feature branch; keep `main` untouched until every page is reviewed.
2. Validate critical routes, forms, payment sandbox, keyboard/mobile behavior and metadata.
3. Run GitHub CI (lint, typecheck, build) and CodeQL.
4. Merge to `main` **once** for one Netlify production release.
5. Check the Netlify production deploy, key paths, headers, orders and contact form. If needed, restore the prior known-good Netlify deploy.

Do not enable a separate GitHub Pages deployment. The site sells books via external retailers, not a built-in shopping cart.

## Environment variables
These belong in Netlify deployment environment settings, not in Git:
- `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENVIRONMENT`
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`, `NEXT_PUBLIC_PAYPAL_CHECKOUT_ENABLED`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (optional)
- `PAYPAL_MERCHANT_ID` (recommended for server-side payee verification)

Formspree endpoint IDs are public and are not secret keys. Configure provider anti-spam alerts and avoid collecting confidential manuscripts and banking credentials.

## Security / legal
The `.env*` pattern is ignored. Do not log payment tokens or personal details in CI.
CodeQL and CI check code health; follow `SECURITY.md` for private disclosure.
Agreement templates need project-specific review and separate verified signatures when necessary.
Privacy, cancellation and merchant disclosures require professional review before relying on them commercially.

## Robots and sitemaps
Use `app/sitemap.ts` (built from book and blog datasets) and `app/robots.ts`. Do not add duplicate `public/sitemap.xml` or `public/robots.txt`.
