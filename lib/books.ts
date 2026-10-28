export type BookFormat = 'Ebook' | 'Paperback' | 'Hardcover' | 'Audiobook';
export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  price: number;
  formats: BookFormat[];
  cover: string;
  featured?: boolean;
};

// Demo catalog. Replace these sample titles and prices with your real inventory.
export const books: Book[] = [
  {
    id: 'no-love-lost-in-the-village',
    title: 'No Love Lost in the Village',
    author: 'B. Eros',
    genre: 'Crime',
    description:
      "In the seemingly ordinary village of Northern Point, corruption, betrayal, and deception run deeper than anyone wants to admit. When Raz begins uncovering the truth behind Cleptes Corp. and the people pulling the strings, buried secrets, stolen credit, and questionable loyalties threaten to bring the entire village crashing down. Armed with evidence, determination, and a refusal to accept blame for someone else's bs, Raz discovers that the closer you get to the truth, the harder it becomes to know who you can trust. No Love Lost in the Village is a dark, sharp-witted suspense novel about power, accountability, greed, and the dangerous price of exposing the truth.",
    price: 14.99,
    formats: ['Paperback'],
    price: 6.99,
    formats: ['Ebook',],
    cover: 'cover-no-love-lost',
    featured: true,
  },
  
  
];
