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
    id: 'midnight-oracle', title: 'The Midnight Oracle', author: 'A. Vale', genre: 'Dark Fantasy',
    description: 'A forgotten prophecy awakens beneath a city that has learned to fear the dark.',
    price: 14.99, formats: ['Ebook', 'Paperback', 'Hardcover', 'Audiobook'], cover: 'cover-oracle', featured: true,
  },
  {
    id: 'ashes-of-olympus', title: 'Ashes of Olympus', author: 'M. Rowan', genre: 'Mythic Fiction',
    description: 'When the old gods fall silent, one mortal must decide what deserves to survive.',
    price: 18.99, formats: ['Ebook', 'Paperback', 'Hardcover'], cover: 'cover-olympus', featured: true,
  },
  {
    id: 'velvet-thorns', title: 'Velvet & Thorns', author: 'J. Ellis', genre: 'Romantic Suspense',
    description: 'A dangerous secret draws two strangers into a love story with sharp edges.',
    price: 12.99, formats: ['Ebook', 'Paperback', 'Audiobook'], cover: 'cover-velvet', featured: true,
  },
];
