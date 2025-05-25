import { auth, signIn } from "../auth"
import React from 'react'

import { Miriam_Libre } from "next/font/google"
import RightSection from "./rightSection"
import { redirect } from "next/navigation"
import Link from "next/link"
import { UseAppDispatch, UseAppSelector } from "../../hooks/ReduxType"
import { isShowRoleUi } from "../../lib/features/ShowRoleUi"
const miriamLibre = Miriam_Libre({

})
export default async function layout({ children } : { children: React.ReactNode }) {
    const session = await auth()
    return (
        <>
            {
                session ? redirect("/dashboard") :

                    <div className="w-full h-screen flex items-start max-w-full" tabIndex={1}>
                        <div className="flex sm:w-3/5 w-full flex-col justify-start items-center gap-6 bg-background ">
                            <header className="w-full flex items-center p-8 justify-start">
                                <div>
                                    <Link href={"/"}
                                        className={`text-title uppercase text-lg cursor-pointer ${miriamLibre.className} `}
                                    >
                                        JOB <span className=" text-primary">Portal</span>
                                    </Link>
                                </div>  
                            </header>
                            {/* sign up component */}
                            <div className="flex flex-col max-w-full gap-5 justify-start items-stretch rounded-2xl px-4 md:px-10">

                                {children}
                            </div>

                        </div>
                        <div className=" w-2/5 bg-yellow-700 hidden md:block h-full">
                            <RightSection />
                        </div>
                    </div>
            }
        </>
    )
}