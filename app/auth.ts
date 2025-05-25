import { MongoDBAdapter } from "@auth/mongodb-adapter"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { addCompanyProfile, addUserProfile, checkUserExist, createAppliedJobList, updateUserRole, } from "./MongoDB"
import NextAuth, { NextAuthConfig, User } from "next-auth"
import bcrypt from "bcrypt"
import { cookies } from "next/headers";
import clientPromise from "../lib/db";
import { Credentials, RoleType, UserType } from "../types/Types";


interface ExtendedUser extends User {
  role: RoleType
}
interface ExtendedToken {
  id?: string;
  email?: string;
  name?: string | null;
  picture?: string | null;
  role?: RoleType | null;
  emailVerified: Date | null
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/login",
    newUser: "/signup",
    error: "/signup",
    signOut: "",
    // verifyRequest : ""
  },
  providers: [
    Google({
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential: Partial<Record<string, unknown>>,): Promise<ExtendedUser | null> => {
        // check user exist        
        try {
          let user = await checkUserExist({ email: credential.email as string })
          console.log(user);
          if (!user) {
            console.log("there is no user sorry browser");
            return null
          }
          else {
            let match = await bcrypt.compare(credential.password as string, user.password as string,)
            if (match)
              return {
                id: user?._id?.toString(),
                email: user?.email,
                name: user?.name,
                image: user?.image,
                role: user?.role || null,
              }
            else {
              console.log("user password is wrong");
              return null
            }
            return null
          }
        }
        catch (err) {
          console.log("error in authorizing user");
          return null

        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },

  callbacks: {
    redirect: ({ baseUrl, url }) => {
      return baseUrl
    },

    async jwt({ token, user, account, profile, session, trigger }): Promise<UserType | null> {
      console.log("jwt called");
      if (user) {
        token.id = token.jti,
          token.email = user.email
        token.name = user.name
        token.picture = user.image
      }
      return await checkUserExist({ email: token.email as string }) ? token as UserType : null
    }
    ,
    session({ session, token, user, newSession, trigger }) {

      console.log("session called");
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name,
          email: token.email as string,
          image: token.picture,
          emailVerified: user?.emailVerified,
          role: token.role as RoleType
        }
      }
      return session

    },
  },
  events: {
    createUser: async ({ user }) => {
      console.log("calling creaetUSer");
      let userRole = (await cookies()).get("userRole")?.value
      try {
        if (userRole === "employee") {
          await addUserProfile({
            name: user.name as string,
            email: user.email as string,
            image: user.image as string,
          }).then(async () => {
            console.log("user profile created");
            await createAppliedJobList(user.id as string).then((val) => {
              console.log("applied job list created");
            })

          })
        }
        else if (userRole === "company") {
          await addCompanyProfile({
            name: user.name as string,
            email: user.email as string,
            image: user.image as string,
          }).then((val) => {
            console.log("company profile created");

          })
        } else {
          console.log("both user and company can't create");

        }
        await updateUserRole(user.id, (await cookies()).get("userRole")?.value as RoleType)
        console.log(" profile created succesfull");

      }
      catch (err) {
        console.log("error in creating profile or setting user role");
        console.log(err);


      }
    },


  }
})