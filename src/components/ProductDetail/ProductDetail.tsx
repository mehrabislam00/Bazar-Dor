import { Product } from "@/types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const ProductDetail = ({ product }: { product: Product }) => {
  const isUp   = product.change.dir === "up";
  const isFlat = product.change.pct === 0;

  const allMin  = Math.min(...product.markets.map((m) => m.min));
  const allMax  = Math.max(...product.markets.map((m) => m.max));
  const priceDiff = Math.abs(product.today - product.yesterday);

  return (
    <div className="min-h-full bg-[#E1E8E1]">
      <div className="container mx-auto px-4 py-5 flex flex-col gap-5 max-w-4xl">

        {/* Breadcrumb */}
        <Breadcrumb
          crumbs={[
            { label: "হোম", href: "/" },
            { label: product.categoryNameBn, href: `/category/${product.category}` },
            { label: product.nameBn },
          ]}
        />

        {/* Product header card */}
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-4xl shadow-sm">
              {product.image}
            </span>
            <div className="flex flex-col gap-1.5">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {product.nameBn}
              </h1>
              <p className="text-xs text-slate-400">
                প্রতি {product.unit} · {product.categoryNameBn}
              </p>
              {!isFlat && (
                <p className="text-xs text-slate-500">
                  গতকালের তুলনায় আজ দাম{" "}
                  <span className={isUp ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>
                    {isUp ? "বেড়েছে" : "কমেছে"}
                  </span>
                  {" · "}
                  <span className="font-medium">৳{priceDiff} টাকা</span>
                </p>
              )}
            </div>
          </div>

          {/* Price badge */}
          <div className="shrink-0 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-right">
            <p className="text-[10px] text-slate-400 mb-1">আজকের দাম</p>
            <p className="text-3xl font-extrabold text-slate-900 leading-none">
              {product.today.toLocaleString("bn-BD")}
            </p>
            <p className="text-xs text-slate-400 mt-1">টাকা / {product.unit}</p>
            {!isFlat && (
              <span className={`inline-flex items-center gap-0.5 mt-1.5 text-xs font-bold ${
                isUp ? "text-red-500" : "text-green-600"
              }`}>
                {isUp ? "▲" : "▼"} {Math.abs(product.change.pct)}%
              </span>
            )}
          </div>
        </div>

        {/* Price summary */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold text-slate-700">দামের সারসংক্ষেপ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 flex flex-col gap-1">
              <p className="text-xs text-slate-400">গতকাল দাম</p>
              <p className="text-2xl font-extrabold text-slate-900">
                ৳{product.yesterday.toLocaleString("bn-BD")}
                <span className="text-sm font-normal text-slate-400 ml-1">টাকা</span>
              </p>
              <p className="text-[11px] text-slate-400">সবচেয়ে কম থাকার সম্ভাব</p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 flex flex-col gap-1">
              <p className="text-xs text-slate-400">সর্বোচ্চ দাম</p>
              <p className="text-2xl font-extrabold text-red-500">
                ৳{allMax.toLocaleString("bn-BD")}
                <span className="text-sm font-normal text-slate-400 ml-1">টাকা</span>
              </p>
              <p className="text-[11px] text-slate-400">সবচেয়ে বেশি থাকার সম্ভাব</p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 flex flex-col gap-1">
              <p className="text-xs text-slate-400">কম দাম</p>
              <p className="text-2xl font-extrabold text-green-600">
                ৳{allMin.toLocaleString("bn-BD")}
                <span className="text-sm font-normal text-slate-400 ml-1">টাকা</span>
              </p>
              <p className="text-[11px] text-slate-400">প্রতি {product.unit}তে সাশ্রয়</p>
            </div>

          </div>
        </div>

        {/* Market prices table */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold text-slate-700">বাজারভিত্তিক আজকের দাম</h2>
          <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">বাজার</th>
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">বিভাগ</th>
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">সর্বনিম</th>
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">সর্বোচ্চ</th>
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {product.markets.map((market, i) => {
                    const avg = ((market.min + market.max) / 2).toFixed(1);
                    return (
                      <tr
                        key={i}
                        className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-5 py-3 text-sm font-medium text-slate-800">
                          {market.market}
                        </td>
                        <td className="px-5 py-3 text-sm text-slate-500">
                          {market.division}
                        </td>
                        <td className="px-5 py-3 text-sm text-green-600 font-semibold">
                          ৳{market.min} টাকা
                        </td>
                        <td className="px-5 py-3 text-sm text-red-500 font-semibold">
                          ৳{market.max} টাকা
                        </td>
                        <td className="px-5 py-3 text-sm font-bold text-slate-900">
                          ৳{avg} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
