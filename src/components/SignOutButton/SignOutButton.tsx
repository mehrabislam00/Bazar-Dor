"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signOutUser } from "@/lib/auth-client";

type Props = {
  children: ReactNode;
  className?: string;
};

const SignOutButton = ({ children, className }: Props) => {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    const { error } = await signOutUser();

    if (error) {
      setIsSigningOut(false);
      toast.error(error.message ?? "সাইন আউট করা যায়নি।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    router.replace("/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isSigningOut}
      className={className}
    >
      {isSigningOut ? "সাইন আউট হচ্ছে..." : children}
    </button>
  );
};

export default SignOutButton;