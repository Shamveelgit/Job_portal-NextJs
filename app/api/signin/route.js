import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { checkUserExist, createUser } from "@/app/(main)/dashboard/MongoDB";

export async function POST(req) {

    let { email, password, role, name } = await req.json()
    let emailVerified = false
    let hashPass = await bcrypt.hash(password, 2)
    console.log(email);
    

    let user = await checkUserExist(email)
    if (!user) {
        let newUser = await createUser(email, hashPass, role, emailVerified)
        console.log(newUser);
        return NextResponse.json({
            user: "Account created",
            autheticated: true
        })
    }
    else {
        return NextResponse.json({
            error: "user already exist",
            autheticated: false
        })
    }
}