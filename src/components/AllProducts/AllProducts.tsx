import React from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard/ProductCard";

const AllProducts = ({ products }: { products: Product[] }) => {
  return (
    <section id="all-products" className="container mx-auto scroll-mt-24 px-4 py-4">
      <div className="mb-1 flex items-center gap-2">
        <h2 className="text-base font-bold text-slate-900">সব পণ্য</h2>
      </div>
      <p className="mb-4 text-xs text-slate-400">
        মোট {products.length}টি পণ্য
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;