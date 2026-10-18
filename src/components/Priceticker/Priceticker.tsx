import React from "react";

const prices = [
  { emoji: "🌾", name: "Miniket Rice", price: 99, unit: "kg", change: -2.9 },
  { emoji: "🌾", name: "Sarna Rice", price: 148, unit: "kg", change: 2.4 },
  { emoji: "🌾", name: "Bottom Size Rice", price: 66, unit: "kg", change: 3.4 },
  { emoji: "🫘", name: "Lentil Dal", price: 142, unit: "kg", change: 2.9 },
  { emoji: "🫘", name: "Chickpea Dal", price: 120, unit: "kg", change: -2.8 },
  { emoji: "🫘", name: "Amon Dal", price: 95, unit: "kg", change: 1.5 },
  { emoji: "🫙", name: "Soybean Oil", price: 175, unit: "ltr", change: -1.2 },
  { emoji: "🫙", name: "Palm Oil", price: 145, unit: "ltr", change: 0.8 },
  { emoji: "🥦", name: "Potato", price: 45, unit: "kg", change: -3.1 },
  { emoji: "🥦", name: "Onion", price: 80, unit: "kg", change: 4.2 },
  { emoji: "🐟", name: "Rohu Fish", price: 320, unit: "kg", change: 1.8 },
  { emoji: "🐟", name: "Hilsa Fish", price: 1200, unit: "kg", change: -2.5 },
  { emoji: "🍖", name: "Broiler Chicken", price: 195, unit: "kg", change: 3.6 },
  { emoji: "🍖", name: "Beef", price: 750, unit: "kg", change: 0.5 },
  { emoji: "🥚", name: "Egg", price: 12, unit: "pc", change: -1.4 },
  { emoji: "🥛", name: "Milk", price: 85, unit: "ltr", change: 2.1 },
  { emoji: "🌶️", name: "Chilli Powder", price: 340, unit: "kg", change: 5.3 },
  { emoji: "🌶️", name: "Turmeric", price: 280, unit: "kg", change: -0.9 },
];

const TickerItem = ({
  emoji,
  name,
  price,
  unit,
  change,
}: (typeof prices)[0]) => {
  const isUp = change >= 0;
  return (
    <span className="inline-flex items-center gap-1.5 px-4">
      <span className="text-sm">{emoji}</span>
      <span className="text-xs font-medium text-slate-700">{name}</span>
      <span className="text-xs text-slate-500">
        ৳{price}/{unit}
      </span>
      <span
        className={`inline-flex items-center gap-0.5 text-[11px] font-semibold ${
          isUp ? "text-red-500" : "text-green-600"
        }`}
      >
        {isUp ? "▲" : "▼"} {Math.abs(change)}%
      </span>
      <span className="ml-3 text-slate-200">|</span>
    </span>
  );
};

const PriceTicker = () => {
  return (
    <div className="border-b border-slate-100 bg-white overflow-hidden">
      <div className="flex w-max animate-ticker">
        {/* Render twice for seamless loop */}
        {[...prices, ...prices].map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;