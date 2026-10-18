import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex-1 bg-[#E1E8E1] flex items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm">

        {/* Illustration */}
        <div className="relative">
          <span className="text-8xl">🧺</span>
          <span className="absolute -top-2 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold shadow-md">
            ৪০৪
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold text-slate-900">
            পেজটি পাওয়া যায়নি
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, অথবা কখনো ছিল না।
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <span className="h-1 w-12 rounded-full bg-green-500" />
        </div>

        {/* Suggestions */}
        <div className="w-full rounded-2xl border border-slate-100 bg-white p-5 flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            এগুলো দেখতে পারেন
          </p>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <span className="text-lg">🏠</span> হোম পেজ
          </Link>
          <Link
            href="/category/chal"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <span className="text-lg">🍚</span> চালের দাম
          </Link>
          <Link
            href="/category/dal"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <span className="text-lg">🫘</span> ডালের দাম
          </Link>
          <Link
            href="/category/sobji"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <span className="text-lg">🥦</span> সবজির দাম
          </Link>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-green-600/25 transition-all duration-200 hover:bg-green-700 hover:-translate-y-0.5 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          হোম পেজে ফিরে যান
        </Link>

      </div>
    </div>
  );
};

export default NotFound;