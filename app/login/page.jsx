import { signIn } from "../(main)/auth"
import React from 'react'

import { Miriam_Libre } from "next/font/google"
import SignUp from "./SignUp"
import RightSection from "./rightSection"
const miriamLibre = Miriam_Libre({

})
export default function page() {
    return (
        <>

            <div className="w-full h-screen flex items-start max-w-full" >
                <div className="flex sm:w-3/5 w-full flex-col justify-start items-center gap-6 bg-background ">
                    <header className="w-full flex items-center p-8 justify-start">
                        <div>
                            <h1
                                className={`text-title uppercase text-lg ${miriamLibre.className} `}
                            >
                                JOB <span className=" text-primary">Portal</span>
                            </h1>
                        </div>
                    </header>
                    {/* sign up component */}
                    <SignUp />

                </div>
                <div className=" w-2/5 bg-yellow-700 hidden md:block h-full">
                    <RightSection />
                </div>
            </div>
        </>
    )
}