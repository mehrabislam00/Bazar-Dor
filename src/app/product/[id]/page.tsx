import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getSingleProduct } from "@/lib/api";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getSingleProduct(Number(id));

  return {
    title: product?.nameBn ?? "Product Details",
  };
}

const getProductPath = (id: string) => `/product/${encodeURIComponent(id)}`;

const ProductContent = async ({ params }: Props) => {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    const callbackUrl = encodeURIComponent(getProductPath(id));
    redirect(`/login?callbackUrl=${callbackUrl}&authRequired=1`);
  }

  const product = await getSingleProduct(Number(id));
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

const ProductPage = ({ params }: Props) => {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductContent params={params} />
    </Suspense>
  );
};

const ProductLoading = () => (
  <div className="min-h-full bg-[#E1E8E1]">
    <div className="container mx-auto flex max-w-4xl flex-col gap-5 px-4 py-5">
      <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />
      <div className="h-32 animate-pulse rounded-2xl bg-white" />
      <div className="h-48 animate-pulse rounded-2xl bg-white" />
    </div>
  </div>
);

export default ProductPage;