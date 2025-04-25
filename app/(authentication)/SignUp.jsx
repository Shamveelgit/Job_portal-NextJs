"use client"
import { Inter } from 'next/font/google'
import React, { useDebugValue, useEffect, useState } from 'react'
import GoogleIcon from '../svg/google'
import FacebookIcon from '../svg/FacebookIcon'
import { signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import SocialLogin from './SocialLogin'
import axios from 'axios'

const inter = Inter({

})

function SignUpPage() {

    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPass: "",
        role: "employee"
    })
    const setValues = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const isFormValid =
        formData.userName.length &&
        formData.confirmPass.length &&
        formData.email.length &&
        formData.fullName.length &&
        formData.password.length &&
        formData.confirmPass === formData.password

    return (
        <>
            {/* header section  */}
            <form  onSubmit={async (evt) => {
                let data = {
                    email : formData.email,
                    password : formData.password,
                    role : formData.role,
                    name : formData.fullName
                }
                evt.preventDefault()
                console.log("submitting");
                const newUser= await axios.post("/api/signin",JSON.stringify(data))
                console.log(newUser);
                if(newUser.data.autheticated) {
                    let user = await signIn("credentials",{
                        email : formData.email,
                        password : formData.password,
                        redirect : false
                    })
                    console.log("sign ined");
                    if(user.error == "CredentialsSignin") {
                        console.log("redirecting");
                        redirect("/dashboard")
                    }                                        
                    
                }
                else {
                    console.log("error in signign");
                    
                }
            }} className='flex animate-rightToLeft flex-col max-w-full gap-5 justify-start items-stretch rounded-2xl'>
                <div className="flex items-center justify-between w-full *:capitalize">
                    <div className="flex *:capitalize flex-col">
                        <h1 className=" text-xl font-semibold text-text">Create account</h1>
                        <p className=" text-sm font-normal text-gray-600 dark:text-gray-200">already have an account? <Link href="/login" className=' text-blue-500 dark:text-blue-400'>Log in</Link></p>
                    </div>
                    <select value={formData.role} onChange={setValues} className=' w-32  h-10 text-sm px-1 border rounded-sm outline-none border-slate-400 focus:border-slate-700 focus:border-2 text-gray-600 dark:text-gray-200 dark:*:text-gray-800' name="role" id="">
                        <option value="employee" className=' w-32'>employee</option>
                        <option value="comapny" className=' w-32'>comapny</option>
                    </select>
                </div>
                {/* input section  */}
                <div className=" w-full flex gap-4 flex-col *:h-10 *:text-sm *:rounded-sm *:border ">
                    <div className="flex capitalize *:text-gray-600 dark:*:text-gray-100 dark:*:focus:border-slate-100 *:capitalize justify-between *:border *:border-slate-400 *:focus:border-2 *:outline-none *:focus:border-slate-700 border-none *:px-1.5 gap-2 *:rounded-sm h-full *:text-sm">
                        <input name='fullName' onChange={setValues} value={formData.fullName} required type="text" placeholder="full name" className='w-1/2' />
                        <input name='userName' onChange={setValues} value={formData.userName} type="text" required placeholder="username" className='w-1/2' />
                    </div>
                    <input name='email' id='credentials-email' onChange={setValues} value={formData.email} required className={`border dark:focus:border-slate-100 border-slate-400 focus:border-slate-700 outline-none focus:border-2 text-gray-600 dark:text-gray-100 px-1.5  ${formData.email.length && "invalid:border-red-500"} `} type="email" placeholder="Email Address" />
                    <input name='password' id='credentials-password' onChange={setValues} value={formData.password} required className='border capitalize border-slate-400 dark:focus:border-slate-100 focus:border-slate-700 outline-none focus:border-2 text-gray-600 dark:text-gray-100 px-1.5 ' type="password" placeholder="password" />
                    <input name='confirmPass' onChange={setValues} value={formData.confirmPass} required className={`border capitalize focus:border-slate-700 outline-none dark:focus:border-slate-100 focus:border-2 text-gray-600 dark:text-gray-100 px-1.5 ${formData.confirmPass === formData.password ? "border-slate-400" : "border-red-500"

                        }`} type="password" placeholder="confirm password" />
                    <div className=" text-gray-600 dark:text-gray-100 flex gap-2.5 items-center border-none capitalize *:capitalize">
                        <input type="checkbox" name='termsAgree' required className=' has: w-4 h-4 border outline-blue-500' />
                        <p>I've read and agree with your <a href="" className=' text-blue-500 dark:text-blue-400 font-semibold'>Terms of Services</a></p>
                    </div>
                </div>
                <input type='submit' disabled={!isFormValid} className=' dark:text-gray-800 capitalize *:capitalize disabled:cursor-not-allowed disabled:bg-green-300 disabled:opacity-100 cursor-pointer bg-green-500 dark:bg-green-400 opacity-90 hover:opacity-100 h h-10 rounded-sm text-white font-semibold ' value={"create account"} />


            </form>
            <SocialLogin />
        </>
    )
}

export default SignUpPage