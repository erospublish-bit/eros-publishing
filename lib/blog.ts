export type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type BlogArticle = {
  slug: string; title: string; description: string; category: string; date: string; readTime: string;
  intro: string; sections: BlogSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-much-does-it-cost-to-self-publish-a-book',
    title: 'How Much Does It Cost to Self-Publish a Book?',
    description: 'A practical guide to self-publishing costs, including editing, cover design, formatting, distribution, and the choices that affect your budget.',
    category: 'Self-Publishing', date: '2026-11-02', readTime: '8 min read',
    intro: 'Self-publishing can cost very little if you do nearly everything yourself, or several thousand dollars when you hire professionals. The useful question is not simply “What does self-publishing cost?” but “Which parts of my book need professional help?”',
    sections: [
      { heading: 'The main costs of self-publishing', paragraphs: ['Most publishing budgets are built from a handful of production categories. Your manuscript, goals, formats, and the amount of work you can do yourself determine which expenses apply.'], bullets: ['Editing and manuscript preparation', 'Cover design', 'Interior formatting for print and e-books', 'ISBN and publishing setup where applicable', 'Distribution and retailer setup', 'Proof copies and launch materials'] },
      { heading: 'Editing and manuscript preparation', paragraphs: ['Editing can be one of the most valuable investments in a book. Developmental work addresses the larger story or structure, while copyediting and proofreading focus increasingly on clarity, consistency, grammar, and final errors. A manuscript that needs substantial development will generally require more work than a polished manuscript approaching publication.'] },
      { heading: 'Cover design and formatting', paragraphs: ['A book needs files suited to each format in which it will be published. Print interiors have different requirements from reflowable e-books, and a paperback cover must account for trim size, spine width, bleed, and printer specifications. Professional presentation helps the finished product feel intentional rather than improvised.'] },
      { heading: 'Distribution and platform setup', paragraphs: ['Publishing platforms have different requirements and business models. Authors should understand account ownership, royalties, metadata, pricing, and distribution choices before publication. Eros Publishing structures its services so authors can receive setup assistance while retaining control of their work and accounts where the selected platform permits it.'] },
      { heading: 'Build a budget around your actual book', paragraphs: ['Avoid paying for services simply because they appear on a generic checklist. Start with the condition of your manuscript, the formats you want, where you want the book sold, and what you can confidently handle yourself. Eros Publishing offers service packages and custom scopes so authors can compare the work required before production begins.'] }
    ]
  },
  {
    slug: 'how-to-self-publish-a-book',
    title: 'How to Self-Publish a Book: A Step-by-Step Guide',
    description: 'Learn the major steps from finished manuscript to published book, including editing, design, formatting, metadata, distribution, proofs, and launch.',
    category: 'Self-Publishing', date: '2026-11-02', readTime: '10 min read',
    intro: 'Self-publishing gives authors significant control, but it also makes the author responsible for decisions a traditional publishing team might otherwise coordinate. A clear sequence makes the process much easier to manage.',
    sections: [
      { heading: '1. Finish and assess the manuscript', paragraphs: ['Before designing a cover or opening retailer accounts, get the manuscript into the strongest practical shape. Separate revision from proofreading: large structural changes should happen before final error correction.'] },
      { heading: '2. Edit for the stage your book is in', paragraphs: ['Determine whether the manuscript needs developmental feedback, line or copy editing, proofreading, or a combination. The right level depends on how mature the draft is.'] },
      { heading: '3. Define the book package', paragraphs: ['Choose formats, trim size, cover direction, interior style, and the basic positioning of the book. These choices affect production files and sometimes printing economics.'] },
      { heading: '4. Prepare publication files', paragraphs: ['Format the interior for each intended format and create a cover that meets the specifications of the printer or distributor. Review files carefully before approving them.'] },
      { heading: '5. Prepare metadata and publishing accounts', paragraphs: ['Your title, subtitle, author name, description, categories, keywords, pricing, identifiers, and distribution settings help retailers understand and display the book. Keep accurate records and understand which accounts you control.'] },
      { heading: '6. Order or review proofs', paragraphs: ['A digital preview is useful, but a physical proof can reveal issues with margins, typography, image reproduction, spine placement, and overall reading experience. Correct problems before promoting the book widely.'] },
      { heading: '7. Publish, distribute, and market', paragraphs: ['Publication is the beginning of the commercial life of the book, not the end of the project. Make retailer pages accurate, create a realistic launch plan, and build ways for readers to discover the title over time.'] }
    ]
  },
  {
    slug: 'lulu-vs-amazon-kdp', title: 'Lulu vs. Amazon KDP: What Independent Authors Should Compare',
    description: 'Compare the questions authors should ask when evaluating Lulu and Amazon KDP for print-on-demand publishing and distribution.',
    category: 'Distribution', date: '2026-11-02', readTime: '7 min read',
    intro: 'Lulu and Amazon KDP can both play a role in independent publishing, but the best choice depends on your formats, sales channels, printing needs, distribution goals, and how you want to manage the book.',
    sections: [
      { heading: 'Start with your distribution goal', paragraphs: ['Do you primarily want an Amazon listing, direct print fulfillment, broader distribution options, or a combination? Begin with the outcome instead of choosing a platform simply because its name is familiar.'] },
      { heading: 'Compare print specifications and economics', paragraphs: ['Trim sizes, binding choices, color options, print costs, shipping, and available markets can affect both the creative product and your margin. Platform terms and pricing can change, so verify current details before publishing.'] },
      { heading: 'Understand account ownership and metadata', paragraphs: ['Know who controls the publishing account, book files, metadata, pricing, and payment information. Independent authors benefit from maintaining organized records and understanding every service connected to their title.'] },
      { heading: 'You may not need an either/or decision', paragraphs: ['Some publishing strategies use more than one service for different purposes. What matters is avoiding conflicting settings and understanding how each channel affects availability, identifiers, pricing, and fulfillment.'] }
    ]
  },
  {
    slug: 'book-formatting-guide', title: 'Book Formatting: What Authors Need Before Publishing',
    description: 'Understand print and e-book formatting, trim size, margins, front matter, typography, and the files authors need before publication.',
    category: 'Book Production', date: '2026-11-02', readTime: '7 min read',
    intro: 'Formatting turns an edited manuscript into a file designed for reading and production. Good formatting is often quiet: readers notice the story instead of fighting the page.',
    sections: [
      { heading: 'Print and e-book formatting are different', paragraphs: ['A paperback has fixed pages, margins, headers, page numbers, and a defined trim size. A reflowable e-book must adapt to different screens and reader-controlled text settings. One source manuscript may therefore require multiple production files.'] },
      { heading: 'Decide trim size and structure early', paragraphs: ['Trim size influences page count and layout. Front matter, chapter openings, scene breaks, back matter, and any images should also be planned consistently before final export.'] },
      { heading: 'Typography should serve the reader', paragraphs: ['Font choice, line spacing, paragraph treatment, margins, and hierarchy should create a comfortable reading experience. Decorative choices should not make long-form text harder to read.'] },
      { heading: 'Validate the final files', paragraphs: ['Use the publishing platform’s preview tools, check embedded fonts and images where relevant, and inspect a proof. Small layout errors are much easier to fix before the book goes on sale.'] }
    ]
  },
  {
    slug: 'how-book-royalties-work', title: 'How Book Royalties Work for Self-Published Authors',
    description: 'A plain-language guide to self-publishing royalties, retail price, printing costs, platform shares, and why authors should read each platform’s current terms.',
    category: 'Royalties', date: '2026-11-02', readTime: '6 min read',
    intro: 'A royalty percentage by itself does not tell you how much an author earns from a sale. The actual payment can depend on retail price, printing cost, sales channel, discounts, platform terms, and the format sold.',
    sections: [
      { heading: 'Royalty rate is not the same as profit', paragraphs: ['A platform may calculate compensation from a defined portion of the sale and then subtract applicable printing or delivery costs. Because formulas differ, compare expected earnings using the platform’s current calculator or documentation rather than relying on a headline percentage.'] },
      { heading: 'Format changes the economics', paragraphs: ['Paperback, hardcover, e-book, and audiobook products have different production and delivery economics. A price that works for an e-book may not produce a sustainable margin for a printed book.'] },
      { heading: 'Distribution can introduce additional shares', paragraphs: ['When another retailer or distribution channel is involved, the economics can differ from a direct sale. Broader reach can be valuable, but authors should understand the tradeoff between availability and per-copy earnings.'] },
      { heading: 'Keep control of your financial accounts', paragraphs: ['Authors should know where sales are reported, how payments are issued, and which tax and banking details are attached to each publishing account. Eros Publishing’s service fees are separate from platform royalties unless a written agreement explicitly says otherwise.'] }
    ]
  },
  {
    slug: 'what-is-an-isbn', title: 'What Is an ISBN and Does a Self-Published Author Need One?',
    description: 'Learn what an ISBN identifies, when self-published books may need one, and why different formats can require different identifiers.',
    category: 'Publishing Basics', date: '2026-11-02', readTime: '6 min read',
    intro: 'An ISBN is an International Standard Book Number used to identify a particular book product or edition in the publishing supply chain. Whether you need to obtain one yourself depends on the format, platform, market, and publishing strategy.',
    sections: [
      { heading: 'What an ISBN identifies', paragraphs: ['An ISBN identifies a specific publication rather than the underlying story itself. Different editions or formats can require separate identifiers under ISBN rules.'] },
      { heading: 'Free platform ISBNs versus your own', paragraphs: ['Some publishing services may offer identifiers for eligible print products. The implications can differ from purchasing and registering your own ISBN, including how publisher information is represented. Review the current platform terms and the ISBN agency guidance for your country before deciding.'] },
      { heading: 'E-books can be different', paragraphs: ['Identifier requirements for digital books depend on the retailer and distribution route. Do not assume every digital storefront follows the same requirement.'] },
      { heading: 'Choose based on your publishing plan', paragraphs: ['If you are building a publishing imprint, distributing widely, or planning multiple editions, identifier strategy deserves attention early. Keep a record of every ISBN and the exact format or edition assigned to it.'] }
    ]
  }
];

export const getBlogArticle = (slug: string) => blogArticles.find((article) => article.slug === slug);
