import clientPromise from "@/lib/db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { checkUserExist } from "./MongoDB"
import NextAuth from "next-auth"
import bcrypt from "bcrypt"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google(),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential) => {
        try {
          console.log("authrize called");
          const pwHash = await bcrypt.hash(credential.password, 2)
          console.log("hashed password from signin", pwHash);

          // check user exist
          let user = await checkUserExist(credential.email, pwHash, true)
          console.log("users is here", user);

          if (!user) {
            console.log("there is no user sorry browser");
            return null
          }
          else {
            let match = await bcrypt.compare(credential.password,user.password,)
            if(match)
            return {
              id: user?._id,
              email: user?.email,
              name: user?.name,
              image: user?.image,
              role: user?.role || null
            }
            else {
              console.log("user password is wrong");
              
              return null
            }
          }
        }
        catch (err) {
          console.log(err);
          return null

        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  }
  ,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id || user._id?.toString()
        token.email = user.email
        token.name = user.name
        token.picture = user.image
        token.role = user.role || null // default if needed
      }
      console.log("Updated JWT Token ")
      return token
    }
    ,
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          role: token.role
        }
      }
      console.log("Session Callback (Updated):")
      return session
    },

    async redirect({ baseUrl, url }) {
      return baseUrl
    },
  },
  events: {
    createUser: (message) => {
      console.log(message);

    },
    signIn: (message) => {
      console.log(message);
    }
  }
})