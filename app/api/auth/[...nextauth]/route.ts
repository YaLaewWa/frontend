import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface UserData {
  username: string;
}

declare module "next-auth" {
  interface Session {
    user?: UserData;
    accessToken?: string;
  }

  interface User {
    user?: UserData;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: UserData;
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });
        const user = await res.json();
        if (!user) {
          throw new Error("Something is wrong");
        } else if (!res.ok) {
          throw new Error(user.error);
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user = token.user;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
