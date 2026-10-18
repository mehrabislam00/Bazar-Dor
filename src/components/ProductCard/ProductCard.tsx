import React from "react";
import Link from "next/link";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  const isUp   = product.change.dir === "up";
  const isFlat = product.change.dir === "flat" || product.change.pct === 0;

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl">
          {product.image}
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-slate-900">{product.nameBn}</span>
          <span className="text-xs text-slate-400">প্রতি {product.unit}</span>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="mb-0.5 text-[11px] text-slate-400">আজকের দাম</p>
          <p className="text-2xl font-extrabold text-slate-900">
            ৳{product.today.toLocaleString("bn-BD")}
          </p>
        </div>

        {isFlat ? (
          <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-400">
            — ০.০%
          </span>
        ) : (
          <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold ${
            isUp ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"
          }`}>
            {isUp ? "▲" : "▼"} {Math.abs(product.change.pct)}%
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;