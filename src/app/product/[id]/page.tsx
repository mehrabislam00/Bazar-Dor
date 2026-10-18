import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getSingleProduct } from "@/lib/api";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getSingleProduct(Number(id));
  return {
    title: product ? `${product.nameBn} | বাজার দর` : "পণ্য পাওয়া যায়নি",
  };
}

const ProductContent = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getSingleProduct(Number(id));
  if (!product) return notFound();

  return <ProductDetail product={product} />;
};

const ProductPage = ({ params }: Props) => {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductContent params={params} />
    </Suspense>
  );
};

const ProductLoading = () => (
  <div className="min-h-screen bg-[#E1E8E1]">
    <div className="container mx-auto flex max-w-4xl flex-col gap-5 px-4 py-5">
      <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />
      <div className="h-32 animate-pulse rounded-2xl bg-white" />
      <div className="h-48 animate-pulse rounded-2xl bg-white" />
    </div>
  </div>
);

export default ProductPage;