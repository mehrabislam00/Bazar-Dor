import { redirect } from "next/navigation";
import { connection } from "next/server";
import { headers } from "next/headers";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import Avatar from "@/components/Avatar/Avatar";
import ProfileForm from "@/components/ProfileForm/ProfileForm";
import type { Metadata } from "next";
import SignOutButton from "@/components/SignOutButton/SignOutButton";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfileContent = async () => {
  await connection();
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");

  const { user } = session;

  return (
    <div className="flex-1 bg-[#E1E8E1]">
      <div className="container mx-auto px-10 py-6 max-w-2xl flex flex-col gap-5">

        {/* Page heading */}
        <div >
          <h1 className="text-2xl font-extrabold text-slate-900">আমার প্রোফাইল</h1>
          <p className="text-sm text-slate-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        {/* User info card */}
        <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar src={user.image} name={user.name} size={56} />
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900">{user.name}</span>
              <span className="text-sm text-slate-400">{user.email}</span>
            </div>
          </div>

          <SignOutButton className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition-all hover:bg-red-50 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              সাইন আউট
          </SignOutButton>
        </div>

        {/* Edit form */}
        <div className="rounded-2xl border border-slate-100 bg-white px-5 py-6">
          <h2 className="text-sm font-bold text-slate-700 mb-5">তথ্য</h2>
          <ProfileForm
            name={user.name ?? ""}
            email={user.email ?? ""}
            image={user.image}
          />
        </div>

      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <Suspense fallback={<ProfileLoading />}>
      <ProfileContent />
    </Suspense>
  );
};

const ProfileLoading = () => (
  <div className="flex-1 bg-[#E1E8E1]">
    <div className="container mx-auto flex max-w-2xl flex-col gap-5 px-10 py-6">
      <div className="h-9 w-48 animate-pulse rounded-lg bg-slate-200" />
      <div className="h-24 animate-pulse rounded-2xl bg-white" />
      <div className="h-64 animate-pulse rounded-2xl bg-white" />
    </div>
  </div>
);

export default ProfilePage;