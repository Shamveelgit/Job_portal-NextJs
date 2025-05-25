// types/next-auth.d.ts or next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser, DefaultJWT } from "next-auth"
import { RoleType } from "./types/Types"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user : User
  }

  interface User extends DefaultUser{
    role?: RoleType
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    role?: RoleType | null
  }
}
