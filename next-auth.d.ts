// types/next-auth.d.ts or next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser, DefaultJWT } from "next-auth"
import { RoleType } from "@/app/api/auth/MongoDB" // adjust path as needed

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: RoleType | null
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role?: RoleType | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    role?: RoleType | null
  }
}
