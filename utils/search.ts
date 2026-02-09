import { Product } from '../constants';

/**
 * Searches products by name and tagline (case-insensitive)
 * @param query - Search query string
 * @param products - Array of products to search through
 * @returns Filtered array of matching products
 */
export function searchProducts(query: string, products: Product[]): Product[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  return products.filter(product =>
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.tagline.toLowerCase().includes(normalizedQuery)
  );
}
