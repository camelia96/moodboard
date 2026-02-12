import { InspirationItem, Category } from "./types";
import inspirationData from "@/data/inspiration.json";

/**
 * Get all inspiration items
 */
export function getAllItems(): InspirationItem[] {
  return inspirationData as InspirationItem[];
}

/**
 * Get a single item by ID
 */
export function getItemById(id: string): InspirationItem | undefined {
  const items = getAllItems();
  return items.find((item) => item.id === id);
}

/**
 * Get items by tag
 */
export function getItemsByTag(tag: string): InspirationItem[] {
  const items = getAllItems();
  return items.filter((item) =>
    item.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get items by category
 */
export function getItemsByCategory(category: Category): InspirationItem[] {
  const items = getAllItems();
  return items.filter((item) => item.category === category);
}

/**
 * Get all unique tags from all items
 */
export function getAllTags(): string[] {
  const items = getAllItems();
  const tagsSet = new Set<string>();

  items.forEach((item) => {
    item.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * Search items by title or description
 */
export function searchItems(query: string): InspirationItem[] {
  if (!query.trim()) return getAllItems();

  const items = getAllItems();
  const lowerQuery = query.toLowerCase();

  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
