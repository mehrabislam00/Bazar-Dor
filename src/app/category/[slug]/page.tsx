import { notFound } from "next/navigation";
import { getCategories, getProductsByCategory, getSingleCategory } from "@/lib/api";
import CategoryPageLayout from "@/components/CategoryPageLayout/CategoryPageLayout";
import { Category } from "@/types";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getSingleCategory(slug);

  return {
    title: category?.nameBn ?? "Category",
  };
}

export async function generateStaticParams() {
  const categories: Category[] = await getCategories();
  return categories.map(({ slug }) => ({ slug }));
}

const CategoryPage = async ({ params }: Props) => {
  const { slug } = await params;
  const [products, category] = await Promise.all([
    getProductsByCategory(slug),
    getSingleCategory(slug),
  ]);

  if (!category) return notFound();

  return <CategoryPageLayout category={category} products={products} />;
};

export default CategoryPage;