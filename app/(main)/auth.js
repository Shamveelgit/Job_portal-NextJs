import clientPromise from "@/lib/db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google(),
  ],
  callbacks : {
    async redirect({baseUrl,url}) {      
      return baseUrl
    }
  }
})