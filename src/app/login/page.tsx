import Link from "next/link";
import LoginForm from "@/components/LoginForm/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "সাইন ইন | বাজার দর",
};

export const instant = false;

type LoginPageProps = {
  searchParams: Promise<{
    callbackUrl?: string | string[];
    authRequired?: string | string[];
  }>;
};

const LoginPage = async ({ searchParams }: LoginPageProps) => {
  const params = await searchParams;
  const callbackUrl = Array.isArray(params.callbackUrl)
    ? params.callbackUrl[0]
    : params.callbackUrl;
  let returnTo = "/";
  if (callbackUrl) {
    try {
      const parsedCallback = new URL(callbackUrl, "http://localhost");
      if (
        parsedCallback.origin === "http://localhost" &&
        parsedCallback.pathname.startsWith("/") &&
        !callbackUrl.includes("\\")
      ) {
        returnTo = `${parsedCallback.pathname}${parsedCallback.search}${parsedCallback.hash}`;
      }
    } catch {
      returnTo = "/";
    }
  }
  const authRequired = Array.isArray(params.authRequired)
    ? params.authRequired[0]
    : params.authRequired;

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-[#E1E8E1] flex items-center justify-center px-10 py-4">
      <div className="w-full max-w-sm flex flex-col gap-3">

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-slate-900">সাইন ইন</h1>
          <p className="mt-1 text-sm text-slate-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে আকাউন্টে ঢুকুন।
          </p>
        </div>

        <LoginForm callbackUrl={returnTo} showAuthWarning={authRequired === "1"} />

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