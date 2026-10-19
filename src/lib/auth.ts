import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_AUTH_MONGO_URI!);
const db = client.db();

export const auth = betterAuth({

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

  database: mongodbAdapter(db, {
    client,
  }),
});