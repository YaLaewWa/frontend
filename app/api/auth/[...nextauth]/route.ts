import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      username?: string;
      accessToken?: string;
    }
  }

  interface User {
    username?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions  = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const res = await fetch("/auth/login", {
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
        if (res.ok && user) {
          return user;
        }
        
        return null;
      },
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.username = user.username;
        token.accessToken = user.accessToken
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.username = token.username;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
