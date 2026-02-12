export interface InspirationItem {
  id: string;
  title: string;
  description: string;
  image: string; // URL or path
  url?: string; // External link
  tags: string[];
  category: Category;
  dateAdded: string;
  addedBy: string; // GitHub username or contributor name
}

export type Category =
  | "UI Design"
  | "Illustration"
  | "Typography"
  | "Color"
  | "Photography"
  | "Other";

  export type CategoryFilter = Category | "All"