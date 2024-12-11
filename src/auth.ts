import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Twitter],
  session: { strategy: "jwt" },
  pages: {
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      //   console.log("TOKEN:", token);
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      //   session.user.id = token.id;
      console.log("SESSION:", session);
      return session;
    },
  },
});
