import { Category, Product } from "@/types";
import CategoryProductGrid from "@/components/CategoryProductGrid/CategoryProductGrid";

type Props = {
  category: Category;
  products: Product[];
};

const CategoryPageLayout = ({ category, products }: Props) => {
  return (
    <div className="min-h-full bg-[#E1E8E1]">
      <div className="container mx-auto px-4 py-5 flex flex-col gap-4">

        {/* Category Header */}
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-5 flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-3xl">
            {category.icon}
          </span>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">
              {category.nameBn}
            </h1>
            <p className="text-sm text-slate-400">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Product grid with sort */}
        <CategoryProductGrid products={products} />

      </div>
    </div>
  );
};

export default CategoryPageLayout;