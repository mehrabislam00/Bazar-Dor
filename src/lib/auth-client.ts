import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
});

const profileCachePrefix = "bazar-dor:profile:";

type CachedProfile = {
  id: string;
  name: string | null;
  email: string;
  image?: string | null;
};

export const cacheUserProfile = (user: CachedProfile) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    `${profileCachePrefix}${user.id}`,
    JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    }),
  );
};

export const clearCachedUserProfiles = () => {
  if (typeof window === "undefined") return;

  for (let index = window.localStorage.length - 1; index >= 0; index -= 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith(profileCachePrefix)) {
      window.localStorage.removeItem(key);
    }
  }
};

export const signOutUser = async () => {
  const result = await authClient.signOut();
  if (!result.error) {
    clearCachedUserProfiles();
  }
  return result;
};