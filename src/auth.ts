import type { AuthConfig } from '@auth/core/types'
import GithubProvider from '@auth/core/providers/github'
import GoogleProvider from '@auth/core/providers/google'

export const authConfig: AuthConfig = {
  providers: [
    GithubProvider({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
} 