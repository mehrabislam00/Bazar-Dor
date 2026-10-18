"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Avatar from "@/components/Avatar/Avatar";
import { toast } from "react-toastify";

type Props = {
  name: string;
  email: string;
  image?: string | null;
};

const ProfileForm = ({ name: initialName, email, image: initialImage }: Props) => {
  const [name, setName] = useState(initialName);
  const [image] = useState(initialImage ?? null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { error } = await authClient.updateUser({
      name,
      image: preview ?? image ?? undefined,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message ?? "প্রোফাইল আপডেট করা যায়নি।");
      return;
    }

    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Avatar upload */}
      <div className="flex flex-col items-center gap-3">
        <Avatar src={preview ?? image} name={name} size={80} />
        <label className="cursor-pointer text-xs font-medium text-green-600 hover:underline">
          ছবি পরিবর্তন করুন
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">নাম</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
        />
      </div>

      {/* Email (read-only) */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">ইমেইল</label>
        <input
          type="email"
          value={email}
          readOnly
          className="w-full rounded-xl border border-slate-100 bg-slate-100 px-4 py-2.5 text-sm text-slate-400 cursor-not-allowed outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-xl bg-green-600 py-3 text-sm font-bold text-white shadow-md shadow-green-600/25 transition-all duration-200 hover:bg-green-700 hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "সংরক্ষণ হচ্ছে..." : "আপডেট"}
      </button>

      {success && (
        <p className="text-center text-xs font-medium text-green-600">
          ✓ সফলভাবে আপডেট হয়েছে
        </p>
      )}
    </div>
  );
};

export default ProfileForm;