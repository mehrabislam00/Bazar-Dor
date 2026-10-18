import { Category } from "@/types";

const BASE = "https://openapi.programming-hero.com/api/bazardor";
const CACHE_OPTIONS = { next: { revalidate: 60 } };

export async function getProducts() {
  "use cache";
  const res = await fetch(`${BASE}/products`, CACHE_OPTIONS);
  if (!res.ok) return [];
  return res.json();
}

export async function getProductsByCategory(category: string) {
  "use cache";
  const res = await fetch(`${BASE}/products?category=${category}`, CACHE_OPTIONS);
  if (!res.ok) return [];
  return res.json();
}

export async function getCategories() {
  "use cache";
  const res = await fetch(`${BASE}/categories`, CACHE_OPTIONS);
  if (!res.ok) return [];
  return res.json();
}

export async function getSingleCategory(slug: string) {
  "use cache";
  const categories = await getCategories();
  return categories.find((category: Category) => category.slug === slug) ?? null;
}