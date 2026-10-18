const BASE = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts() {
  const res = await fetch(`${BASE}/products`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(`${BASE}/products?category=${category}`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function getSingleProduct(id: number) {
  const res = await fetch(`${BASE}/products/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE}/categories`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}