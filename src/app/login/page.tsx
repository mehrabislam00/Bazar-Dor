import Link from "next/link";
import LoginForm from "@/components/LoginForm/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "সাইন ইন | বাজার দর",
};

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-12rem)] bg-[#E1E8E1] flex items-center justify-center px-10 py-4">
      <div className="w-full max-w-sm flex flex-col gap-3">

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-slate-900">সাইন ইন</h1>
          <p className="mt-1 text-sm text-slate-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে আকাউন্টে ঢুকুন।
          </p>
        </div>

        <LoginForm />

        <Link
          href="/"
          className="text-center text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>

      </div>
    </div>
  );
};

export default LoginPage;