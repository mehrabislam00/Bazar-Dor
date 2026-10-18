const Loading = () => {
  return (
    <div className="flex-1 bg-[#E1E8E1] flex items-center justify-center px-4 py-6">
      <div className="flex flex-col items-center gap-6">

        {/* Animated logo tile */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-3xl bg-green-400 opacity-20" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-green-600 shadow-xl shadow-green-600/30">
            <span className="text-4xl">🛒</span>
          </span>
        </div>

        {/* Pulsing bars */}
        <div className="flex items-end gap-1.5 h-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-green-600 animate-bounce"
              style={{
                height: `${12 + i * 4}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold text-slate-700">দাম লোড হচ্ছে...</p>
          <p className="text-xs text-slate-400">একটু অপেক্ষা করুন</p>
        </div>

        {/* Skeleton cards */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/60 p-4 flex flex-col gap-3 animate-pulse"
            >
              <div className="h-10 w-10 rounded-xl bg-slate-200" />
              <div className="h-3 w-3/4 rounded-full bg-slate-200" />
              <div className="h-5 w-1/2 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loading;