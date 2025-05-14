import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { addCompanyProfile, addUserProfile, checkUserExist, createUser } from "../../MongoDB";
import { Credentials, RoleType } from "../../../types/Types";


export async function POST(req: Request) {

    let { email, password, role, name }: Credentials = await req.json()
    let hashPass = await bcrypt.hash(password as string, 2)
    try {
        let user = await checkUserExist(email as any)
        if (!user) {
            let newUser = await createUser(email, hashPass, role as RoleType, new Date(), name as string)
            if (newUser.acknowledged && role == "company") {
                let companyProfile = await addCompanyProfile({
                    name: name as string,
                    email,
                })
            } else if (newUser.acknowledged && role === "employee") {
                let userProfile = await addUserProfile({
                    name: name as string,
                    email,
                })
            }
            return NextResponse.json({
                user: "Account created",
                autheticated: true
            })
        }

    }
    catch (error: any) {
        if (error.code === 11000) {
            return NextResponse.json({
                error: "user already exist",
                autheticated: false
            })
        } else {
            return NextResponse.json({
                error: "something went wrong",
                autheticated: false
            })
        }

    }

}