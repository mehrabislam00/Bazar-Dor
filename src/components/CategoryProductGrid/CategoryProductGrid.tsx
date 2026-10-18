"use client";

import { useState } from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard/ProductCard";

type SortOption = "default" | "price-high" | "price-low" | "change";

const CategoryProductGrid = ({ products }: { products: Product[] }) => {
  const [sort, setSort] = useState<SortOption>("default");

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-high") return b.today - a.today;
    if (sort === "price-low") return a.today - b.today;
    if (sort === "change") return Math.abs(b.change.pct) - Math.abs(a.change.pct);
    return a.id - b.id;
  });

  return (
    <div className="flex flex-col gap-3">
      {/* Sort bar */}
      <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 flex items-center justify-end gap-3">
        <span className="text-sm text-slate-500">সাজান</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="select select-bordered select-sm rounded-xl text-sm"
        >
          <option value="default">ডিফল্ট</option>
          <option value="price-high">দাম: বেশি থেকে কম</option>
          <option value="price-low">দাম: কম থেকে বেশি</option>
          <option value="change">সর্বোচ্চ পরিবর্তন</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-xs text-slate-400">
        মোট {sorted.length}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductGrid;