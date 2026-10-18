import React from "react";

const categories = [
  { label: "Rice", emoji: "🌾" },
  { label: "Lentils", emoji: "🫘" },
  { label: "Oil", emoji: "🫙" },
  { label: "Vegetables", emoji: "🥦" },
  { label: "Fish", emoji: "🐟" },
  { label: "Meat", emoji: "🍖" },
  { label: "Eggs & Dairy", emoji: "🥚" },
  { label: "Spices", emoji: "🌶️" },
  { label: "Fruits", emoji: "🍎" },
  { label: "Snacks", emoji: "🍿" },
];

const Category = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="container mx-auto ">
        {/* Scrollable row */}
        <div className="flex items-center gap-1 overflow-x-auto px-5 py-3 scrollbar-none">
          {categories.map((cat) => (
           <button
  key={cat.label}
  className="group flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-green-50 active:scale-95"
>
  <span className="text-base leading-none">{cat.emoji}</span>
  <span className="text-xs font-medium text-slate-600 transition-colors duration-200 group-hover:text-green-700 whitespace-nowrap">
    {cat.label}
  </span>
</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
