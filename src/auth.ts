import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import type { Role } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: Role }).role ?? "BUYER";
      }
      if (account?.provider === "google" && typeof profile?.picture === "string") {
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      const id = typeof token.id === "string" ? token.id : token.sub;
      if (typeof id === "string") session.user.id = id;
      session.user.role = (token.role as Role | undefined) ?? "BUYER";
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
