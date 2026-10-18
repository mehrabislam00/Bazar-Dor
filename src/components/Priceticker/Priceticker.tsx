import React from "react";
import { getProducts } from "@/lib/api";
import { Product } from "@/types";

const TickerItem = ({ product }: { product: Product }) => {
  const isUp   = product.change.dir === "up";
  const isFlat = product.change.pct === 0;

  return (
    <span className="inline-flex items-center gap-1.5 px-4">
      <span className="text-sm">{product.image}</span>
      <span className="text-xs font-medium text-slate-700">{product.nameBn}</span>
      <span className="text-xs text-slate-500">৳{product.today}/{product.unit}</span>
      {!isFlat && (
        <span className={`inline-flex items-center gap-0.5 text-[11px] font-semibold ${
          isUp ? "text-red-500" : "text-green-600"
        }`}>
          {isUp ? "▲" : "▼"} {Math.abs(product.change.pct)}%
        </span>
      )}
      <span className="ml-3 text-slate-200">|</span>
    </span>
  );
};

const PriceTicker = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="border-b border-slate-100 bg-white overflow-hidden">
      <div className="flex w-max animate-ticker">
        {[...products, ...products].map((product, i) => (
          <TickerItem key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;