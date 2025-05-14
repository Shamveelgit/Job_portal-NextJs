"use client"
import { signIn } from 'next-auth/react'
import React, { useEffect } from 'react'
import GoogleIcon from '../svg/google'
import FacebookIcon from '../svg/FacebookIcon'
import { useSearchParams} from 'next/navigation'

function SocialLogin() {
    const params = useSearchParams()
    useEffect(() => {
        params.get("error") && alert("Error in signin") // the email is already used
    })    
    return (
        <div className='w-full flex flex-col items-stretch justify-center gap-3'>
            <p className=' w-full text-center uppercase text-text'>or</p>
            <div className='w-full dark:text-white *:cursor-pointer flex-wrap *:text-sm gap-3 *:px-2.5 *:border-slate-300 *:h-9 *:rounded-sm flex items-center justify-around *:border *:flex *:items-center *:justify-around *:gap-2'>
                <button onClick={async () => {
                    console.log("hello");
                    
                    try {
                        const user = await signIn("google", {
                            redirect : false,
                            redirectTo : "/dashboard",
                            state : encodeURIComponent("company")
                        })
                        // !user.error && redirect("/dashboard")
                        console.log(user);
                        
                    }
                    catch (err) {
                        console.log("no internet");
                            
                    }

                }} className=''> <GoogleIcon width={15} height={15} />Sign up With Google</button>
                <button> <FacebookIcon width={15} height={15} /> Sign with Facebook</button>
            </div>
        </div>
    )
}

export default SocialLogin