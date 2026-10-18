import React from "react";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import { Category } from "@/types";

const CategoryBar = async () => {
  const categories: Category[] = await getCategories();

  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">

          {/* All */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-green-50"
          >
            <span className="text-base leading-none">🛒</span>
            <span className="text-xs font-medium text-slate-600 whitespace-nowrap group-hover:text-green-700">
              সব
            </span>
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-green-50"
            >
              <span className="text-base leading-none">{cat.icon}</span>
              <span className="text-xs font-medium text-slate-600 whitespace-nowrap group-hover:text-green-700">
                {cat.nameBn}
              </span>
            </Link>
          ))}

        </div>

        
      </div>
    </section>
  );
};

export default CategoryBar;