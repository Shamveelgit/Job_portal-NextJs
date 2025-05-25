import { signIn } from "next-auth/react";
import { RoleType } from "../types/Types";

export function isUserRoleSaved() {
    let userRole = document.cookie.split(";").filter(val => val.includes("userRole")).toString()
    userRole = userRole.slice(userRole.indexOf("=") + 1)
    console.log(userRole);    
    return userRole
}
export function saveUserRole(val : RoleType) {
    document.cookie = `userRole=${val}`
}
export async function GoogleSignIn() {
    try {
        const user = await signIn("google", {
            redirect: false,
            // redirectTo: "/dashboard",
            
        })
        // !user.error && redirect("/dashboard")
        console.log(user);
        return user

    }
    catch (err) {
        console.log("no internet");

    }
}