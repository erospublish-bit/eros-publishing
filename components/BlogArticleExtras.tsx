import Link from 'next/link';

function Resources({ children }: { children: React.ReactNode }) {
  return <p className="blog-resources"><strong>Helpful next steps:</strong> {children}</p>;
}
export function BlogArticleExtras({ slug }: { slug: string }) {
  if (slug === 'how-much-does-it-cost-to-self-publish-a-book') return <section className="blog-extra">
    <h2>Illustrative publishing budgets</h2>
    <p>These are planning scenarios, <strong>not Eros Publishing quotes</strong>. Your word count, editorial needs, source files and third-party expenses can change the total.</p>
    <div className="table-scroll"><table className="edition-table"><thead><tr><th scope="col">Planning category</th><th scope="col">Short text novel</th><th scope="col">Illustrated / complex book</th></tr></thead><tbody>
      <tr><th scope="row">Editing / review allowance</th><td>$750</td><td>$2,200</td></tr>
      <tr><th scope="row">Cover/design allowance</th><td>$249</td><td>$800</td></tr>
      <tr><th scope="row">Interior / e-book formatting</th><td>$299</td><td>$850</td></tr>
      <tr><th scope="row">Publishing setup allowance</th><td>$199</td><td>$399</td></tr>
      <tr><th scope="row">Illustrative subtotal</th><td><strong>$1,497</strong></td><td><strong>$4,249</strong></td></tr>
    </tbody></table></div>
    <p>Not included: ISBN purchase, proof copies, printing, postage, advertising, specialist licensing, taxes and unexpected revision rounds.</p>
    <Resources><a href="/eros-publishing-publishing-budget.csv" download>Download the editable budget worksheet (CSV)</a> · <Link href="/publishing-pricing/">See published service prices</Link>.</Resources>
  </section>;
  if (slug === 'how-to-self-publish-a-book') return <section className="blog-extra">
    <h2>Milestone checklist and decisions</h2>
    <ol><li><strong>Manuscript:</strong> Keep a revised master copy and record open editorial questions.</li>
      <li><strong>Editing:</strong> Approve tracked changes and confirm proofreading happens after design.</li>
      <li><strong>Design:</strong> Choose trim size, binding, cover concept and intended formats.</li>
      <li><strong>Production:</strong> Export print-ready files and validated reflowable e-book files.</li>
      <li><strong>Metadata:</strong> Check edition identifiers, author name, synopsis and category selections.</li>
      <li><strong>Proofing:</strong> Review physical proof, digital navigation and retailer preview.</li>
      <li><strong>Release:</strong> Verify live product listings and keep accounts under the agreed owner.</li>
    </ol>
    <Resources><Link href="/eros-publishing-author-checklist.html">Print the author checklist</Link> · <Link href="/blog/book-formatting-guide/">Review formatting decisions</Link> · <Link href="/publishing-quote/">Ask for a free initial consultation</Link>.</Resources>
  </section>;
  if (slug === 'lulu-vs-amazon-kdp') return <section className="blog-extra">
    <h2>Platform comparison: questions to verify</h2>
    <p>Reviewed November 6, 2026. Availability, fees and terms can change; use each provider's current product calculator before publishing.</p>
    <div className="table-scroll"><table className="edition-table"><thead><tr><th>Decision</th><th>Lulu</th><th>Amazon KDP</th></tr></thead><tbody>
      <tr><th>Print model</th><td>Print-on-demand based on submitted interior and cover files</td><td>Print-on-demand for eligible editions</td></tr>
      <tr><th>Manufacturing costs</th><td>Use Lulu's pricing calculator for chosen specifications</td><td>Printing cost varies by market, paper, trim, ink and page count</td></tr>
      <tr><th>Retail access</th><td>Lulu storefront plus eligible distribution routes; retailer approval is separate</td><td>KDP-controlled Amazon sales channels and eligible distribution options</td></tr>
      <tr><th>Proofs / quality</th><td>Review print proofs and distribution requirements</td><td>Review proofs and previews in KDP's title setup</td></tr>
      <tr><th>Fulfillment</th><td>Provider handles print orders placed through its supported routes</td><td>Provider handles print orders sold through KDP channels</td></tr>
    </tbody></table></div>
    <Resources><a href="https://www.lulu.com/pricing" target="_blank" rel="noopener noreferrer">Lulu's official pricing calculator</a> · <a href="https://kdp.amazon.com/en_US/help/topic/G201834340" target="_blank" rel="noopener noreferrer">KDP print-cost documentation</a> · <Link href="/publishing-pricing/">Distribution support</Link>.</Resources>
  </section>;
  if (slug === 'book-formatting-guide') return <section className="blog-extra">
    <h2>Print versus EPUB quality-control checklist</h2>
    <div className="table-scroll"><table className="edition-table"><thead><tr><th>Check</th><th>Print PDF</th><th>Reflowable EPUB</th></tr></thead><tbody>
      <tr><th>Page geometry</th><td>Verify trim size, interior margins and bleed where applicable</td><td>Allow responsive text size; avoid fixed-page print assumptions</td></tr>
      <tr><th>Typography</th><td>Check embedded fonts, leading, running heads and page numbers</td><td>Use logical heading hierarchy and readable fallback fonts</td></tr>
      <tr><th>Navigation</th><td>Inspect table of contents, page numbering and chapter breaks</td><td>Test table of contents links, landmarks and reading order</td></tr>
      <tr><th>Images</th><td>Check resolution, crop and print-safe placement</td><td>Check alt text, flexible sizing and text alternatives</td></tr>
      <tr><th>Proof</th><td>Review a physical copy before release</td><td>Test on more than one device or reading app</td></tr>
    </tbody></table></div>
    <Resources><a href="https://www.w3.org/TR/epub-33/" target="_blank" rel="noopener noreferrer">W3C EPUB standard</a> · <Link href="/author-services/">Book preparation services</Link> · <Link href="/eros-publishing-author-checklist.html">Printable production checklist</Link>.</Resources>
  </section>;
  if (slug === 'how-book-royalties-work') return <section className="blog-extra">
    <h2>Illustrative per-sale royalty arithmetic</h2>
    <p>A fictional paperback sells for $19.99. Suppose the applicable retailer and printing deductions combined are $8.25. The illustrative amount before tax or other costs is <strong>$19.99 − $8.25 = $11.74</strong>. Actual rates depend on provider, territory, format and account terms, and some formulas use a percentage before printing deductions.</p>
    <p>For an e-book example with a $4.99 list price and assumed total marketplace/delivery deductions of $1.50, the hypothetical payout is <strong>$3.49</strong>. These numbers do not represent a particular retailer's offer.</p>
    <p>Eros Publishing's project service fees are separate from the royalties paid by retailers to the author or rights holder under their own account agreements.</p>
    <Resources><a href="https://www.lulu.com/pricing" target="_blank" rel="noopener noreferrer">Lulu cost/earnings calculator</a> · <a href="https://kdp.amazon.com/en_US/help/topic/G201834340" target="_blank" rel="noopener noreferrer">KDP printing-cost guide</a> · <Link href="/publishing-pricing/">Our service pricing</Link>.</Resources>
  </section>;
  if (slug === 'what-is-an-isbn') return <section className="blog-extra">
    <h2>ISBN decision guide by edition</h2>
    <div className="table-scroll"><table className="edition-table"><thead><tr><th>Edition</th><th>Typical consideration</th><th>Decision to record</th></tr></thead><tbody>
      <tr><th>Paperback</th><td>Usually needs its own ISBN for retail distribution</td><td>Who is listed as publisher / imprint?</td></tr>
      <tr><th>Hardcover</th><td>Usually a separate ISBN from the paperback</td><td>Who owns and registers this identifier?</td></tr>
      <tr><th>E-book</th><td>Requirement varies by storefront or distributor</td><td>Does the chosen channel accept a platform identifier?</td></tr>
      <tr><th>Audiobook</th><td>Identifier requirements depend on sales/distribution route</td><td>Which metadata and edition reference will be supplied?</td></tr>
    </tbody></table></div>
    <p>U.S. publishers acquire their own ISBNs through the U.S. ISBN Agency at Bowker. Publisher and national rules differ, and a platform-provided identifier may limit how imprint information appears.</p>
    <Resources><a href="https://www.myidentifiers.com/isbn/US_isbn_agency" target="_blank" rel="noopener noreferrer">Official U.S. ISBN agency</a> · <Link href="/publishing-pricing/">Publishing setup services</Link>.</Resources>
  </section>;
  return null;
}
