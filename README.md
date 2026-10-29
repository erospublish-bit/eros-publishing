# Eros Publishing — storefront starter

A responsive, mythology-inspired red/burgundy storefront for **erospublishingkc.com**, built with Next.js, React, TypeScript, and custom CSS.

## What's included

- Responsive landing page with Greek-mythology-inspired visual language
- Sample book catalog with title/author/genre search
- Format selector (ebook, paperback, hardcover, audiobook where applicable)
- Interactive shopping bag with quantity controls and subtotal
- Author services section and email inquiry link
- About section and responsive navigation
- SEO title and description starter metadata

## Important before launch

This is a **front-end starter**, not a live commerce system. The checkout button is intentionally a demo placeholder. It does not accept payment, create orders, deliver files, calculate shipping/tax, or store a cart across sessions. Replace sample titles, prices, and contact emails with real business information. Before taking orders, add a payment provider (such as Stripe), server-side checkout/order creation, fulfillment for physical books, and secure digital delivery for ebooks/audiobooks. Configure privacy, returns, terms, tax, and accessibility as appropriate for your business.

## 1. Install the tools

1. Install Node.js LTS from https://nodejs.org/ if it isn't installed already.
2. Open Visual Studio Code.
3. Download and unzip this project.
4. In VS Code, choose **File → Open Folder…** and select `eros-publishing-starter`.
5. Choose **Terminal → New Terminal**.

Check Node and npm:

```bash
node -v
npm -v
```

## 2. Run the site locally

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Leave the terminal running while you work. Press `Ctrl+C` in the terminal to stop the development server.

If you see a missing-package error, confirm you are in the project folder and rerun `npm install`.

## 3. Make your first edits

- **Catalog:** edit `lib/books.ts` to change sample book titles, descriptions, formats, and prices.
- **Page content and interactions:** edit `components/Storefront.tsx`.
- **Colors, layout, and mobile styling:** edit `app/globals.css`. The main red theme values are near the top in `:root`.
- **Browser title and description:** edit `app/layout.tsx`.

The book covers in this starter are CSS-generated mockups, not final cover artwork. Replace them with properly licensed cover images when your catalog is ready.

## 4. Put the project on GitHub

1. Create a new, empty repository on https://github.com (for example `eros-publishing`). Do not add a README there if you already have this README locally.
2. In the VS Code terminal, from this project folder, run:

```bash
git init
git add .
git commit -m "Create Eros Publishing storefront starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/eros-publishing.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and adjust the repository name if needed. If Git asks you to sign in, follow the browser authentication prompt. Git must be installed for these commands to work.

For later updates:

```bash
git add .
git commit -m "Describe my website change"
git push
```

## 5. Publish a preview

A beginner-friendly path is Vercel:

1. Sign in at https://vercel.com using GitHub.
2. Import the `eros-publishing` repository.
3. Keep the detected Next.js settings and deploy.
4. Once the preview works, add `erospublishkc.com` in the project's domain settings.
5. Follow the DNS records Vercel shows, at the company where you registered the domain. Do not guess DNS values.
6. Wait for domain verification and HTTPS to finish, then test on desktop and mobile.

## Suggested next steps for real commerce

1. Decide whether your own store or external retailer pages will fulfill each format.
2. Add Stripe Checkout using server-side code and environment variables; never put secret keys in client-side code or commit `.env` files.
3. Create a database for products, orders, customers, and service inquiries (for example Supabase).
4. Set up physical fulfillment/shipping and protected ebook/audiobook delivery.
5. Test successful and failed payments, refunds, order emails, taxes/shipping, and mobile checkout before launch.

## Troubleshooting

- **`npm` or `node` not found:** install Node.js LTS and restart VS Code.
- **Port 3000 busy:** Next.js may offer another local port; use the URL printed in the terminal.
- **Changes don't appear:** save the file, then refresh. If needed stop and restart `npm run dev`.
- **Git push rejected:** check that the GitHub repository URL is correct and that you are authenticated.
# eros-publishing
