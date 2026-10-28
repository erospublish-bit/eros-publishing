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
    id: 'no-love-lost-in-the-village', title: 'No Love Lost in the Village', author: 'B. Eros', genre: 'Crime', description: 'A small town is rocked by a series of mysterious disappearances.', price: 14.99, formats: ['Ebook', 'Paperback', 'Audiobook'], cover: 'cover-no-love-lost', featured: true,
  },
  
  
];
