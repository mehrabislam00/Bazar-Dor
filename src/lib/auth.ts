import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_AUTH_MONGO_URI!);
const db = client.db();
const deploymentUrl =
  process.env.BETTER_AUTH_URL ??
  process.env.NEXT_PUBLIC_APP_URL ??
  "https://bazar-dor-x3dz.vercel.app";
const appUrl = process.env.VERCEL ? deploymentUrl : "http://localhost:3000";
const trustedOrigins = [
  appUrl,
  deploymentUrl,
  "http://localhost:3000",
].filter((origin): origin is string => Boolean(origin));

export const auth = betterAuth({
  baseURL: appUrl,
  trustedOrigins,

      socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID!, 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET!, 
        },
        github: { 
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET as string, 
        }, 
    },

      emailAndPassword: { 
    enabled: true, 
  }, 

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
      requireLocalEmailVerified: false,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});