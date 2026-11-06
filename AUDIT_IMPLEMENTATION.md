# Eros Publishing — audit remediation record

**Working branch:** `improve/sitewide-audit-nov-2026`  
**Production:** deliberately unchanged during this stage. A merge to `main` triggers the one coordinated Netlify production deploy.  
**Scope:** 21 sitemap HTML routes, one standalone printable resource, 3 site resources, plus shared assets, payment endpoints and deployment tooling.  
**Evidence:** GitHub `quality.yml` verifies lint, strict TypeScript, build, local route/SEO smoke tests and dependency severity. These checks are not a substitute for in-browser or real-provider tests.

## Page-by-page implementation

| Route | Changes prepared on working branch | Remaining independent check |
|---|---|---|
| `/` | Accurate standalone SEO title, shared typography and navigation, clarified reader/author CTA, simplified one-title catalog. | Desktop/mobile visual, CTA analytics, layout shift. |
| `/about/` | Unique canonical and social metadata, case-study context and consistent site footer. | Founder portrait crop and accessibility. |
| `/contact/` | New conversion-first contact layout, consultation paths, no sensitive manuscripts warning, metadata. | Contact email deliverability. |
| `/books/` | Edition/provider comparison table, retailer disclosures and click-through analytics. | Real store listings and mobile overflow. |
| `/books/no-love-lost-in-the-village/` | Tipping payment hardening, edition navigation, fallback messaging and retailer click-through events. | Test real Lulu embeds, PayPal sandbox and optional QR, purchase flows. |
| `/portfolio/` | Clear disclosure that highlighted title is Eros's own project, not a client testimonial. | Verify all presentation claims. |
| `/portfolio/no-love-lost-in-the-village/` | Challenge, work and result summary; honest limitations; source-linked title. | Confirm format/retailer claims and image display. |
| `/author-services/` | Service section navigation, stronger pricing links, cleaner FAQ structured data. | Readability of long cards on mobile. |
| `/publishing-pricing/` | Pricing section navigation, comparison, free vs paid consultation distinction, package-specific inquiries. | Confirm current rates and scope with business owner. |
| `/publishing-quote/` | Package of interest carried from pricing, explicit no-fee inquiry, privacy-safe GA4 lead event after Formspree success. | Test Formspree live endpoint and error/no-JS fallback. |
| `/publishing-quote/detailed/` | Section navigation and semantic checkbox fieldsets, privacy-safe success conversion event. | Test submission, mobile input interactions and consent. |
| `/author-agreements/` | Document navigation, explicit draft/non-attorney-review notice. | Obtain legal review before reliance. |
| `/author-agreements/forms/` | Clear printable draft instructions and template date. | Print every agreement form and signatures workflow. |
| `/legal/` | Unique canonical, clearer provider disclosures and privacy contact requests. | Qualified legal/privacy review for operations and applicable jurisdictions. |
| `/blog/` | Avoid duplicate feature-card listing, bylines/dates, clickable topic guides. | Editorial fact-check. |
| `/blog/how-much-does-it-cost-to-self-publish-a-book/` | Illustrative budget examples and editable CSV. | Confirm estimates are clearly illustrative. |
| `/blog/how-to-self-publish-a-book/` | Seven-step practical milestone checklist. | Verify advice against current workflows. |
| `/blog/lulu-vs-amazon-kdp/` | Qualitative comparison matrix and official provider references. | Verify latest provider terms and retailer links. |
| `/blog/book-formatting-guide/` | Print vs EPUB checklist with standard reference. | Validate format-specific recommendations. |
| `/blog/how-book-royalties-work/` | Explicitly illustrative unit economics and formula context. | Ensure numbers cannot be mistaken for official payout rates. |
| `/blog/what-is-an-isbn/` | Format-specific decision table and agency link. | Check current agency policy. |
| `/eros-publishing-author-checklist.html` | Canonical, description, resource nav, accessible print intent. | Test browser printing across device sizes. |

## Shared technical and security work
- Generated sitemap from active book/blog data, de-duplicated robots and sitemap source.
- Page-specific canonicals where absent; prevent double brand suffix; shared footer and skip-to-main landmark.
- Larger type, focus rings, 44px tap targets, reduced-motion support, detailed form fieldsets.
- PayPal checkout order-bound signed verification; server-side amount/currency checks and idempotent capture handling.
- Staged security headers with report-only CSP (do not claim enforced CSP before live validation).
- Netlify rate-limiting configuration proposed for tip route; confirm at deployment.
- GitHub Actions lint, type-check, build, smoke tests and dependency audit; no GitHub Pages deployment.
- Updated README and vulnerability reporting instructions.

## Release blockers and checks **not yet satisfied**
1. Finish and confirm newest GitHub Quality run on the exact branch head, including route smoke tests.
2. Inspect open dependency advisories and ensure no unresolved high/critical production vulnerability.
3. Check PayPal sandbox create, approve, capture, repeated capture, mismatched amount, and merchant identity. Configure `PAYPAL_MERCHANT_ID` if merchant validation is desired.
4. Confirm Formspree quick and detailed submissions, consent requirements, spam protections and notification delivery.
5. Manual desktop/tablet/mobile (320/375/768/1280px), keyboard screen-reader, Lighthouse/PageSpeed and third-party Lulu checkout review.
6. Review all published prices, legal terms and supplier claims with the business owner. Legal review requires a qualified professional.
7. Approve the bundled release; merge **once** to `main` and verify the single production Netlify deploy, with rollback ready.

No live-site changes should be inferred from commits to this working branch.
