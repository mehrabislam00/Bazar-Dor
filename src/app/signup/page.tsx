import Link from "next/link";
import SignupForm from "@/components/SignupForm/SignupForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignupPage = () => {
  return (
    <div className="min-h-[calc(100vh-12rem)] bg-[#E1E8E1] flex items-center justify-center px-10 py-4">
      <div className="w-full max-w-sm flex flex-col gap-3">

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-slate-900">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="mt-1 text-sm text-slate-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <SignupForm />

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

export default SignupPage;