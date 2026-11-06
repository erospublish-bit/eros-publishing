# Eros Publishing security disclosure

Report suspected security issues **privately** to authors@erospublishingkc.com, using subject "Private security report".
Please do not include passwords, financial data, client details or vulnerabilities demonstrated against other visitors. We will review credible reports and coordinate fixes before disclosure.

## Supported release
The currently published production build on erospublishingkc.com is supported; old snapshots are not independently supported.

## Precautions
- Keep PayPal client secrets in Netlify environment settings only; use least-privilege permissions and rotate compromised credentials.
- Use code review, CodeQL, dependency checks, locked installs and payment sandbox tests before merging to production.
- Browser-only agreement forms produce **draft printouts**, not legally verified electronic signatures.
