import React from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard/ProductCard";

const PriceIncreased = ({ products }: { products: Product[] }) => {
  const increased = products.filter((p) => p.change.dir === "up");
  const displayedProducts = increased.slice(0, 6);
  if (increased.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm font-bold text-red-500">▲</span>
        <h2 className="text-base font-bold text-slate-900">আজকের দাম বেড়েছে</h2>
        <span className="ml-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-500">
          {increased.length}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PriceIncreased;