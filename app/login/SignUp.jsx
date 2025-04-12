"use client"
import { Inter } from 'next/font/google'
import React, { useDebugValue, useEffect, useState } from 'react'
import GoogleIcon from '../svg/google'
import FacebookIcon from '../svg/FacebookIcon'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

const inter = Inter({

})

function SignUp() {

    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPass: "",
        termsAgree: false,
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
        formData.termsAgree &&
        formData.confirmPass === formData.password

    console.log(formData);

    useEffect(() => {

    }, [])




    return (
        <div className="flex flex-col max-w-full gap-5 justify-start items-stretch rounded-2xl px-4 md:px-10">
            {/* header section  */}
            <form onSubmit={evt => {
                evt.preventDefault()
            }} action="" className='flex flex-col max-w-full gap-5 justify-start items-stretch rounded-2xl'>
                <div className="flex items-center justify-between w-full *:capitalize">
                    <div className="flex *:capitalize flex-col">
                        <h1 className=" text-xl font-semibold">Create account</h1>
                        <p className=" text-sm font-normal text-gray-600">already have an account? <a href="" className=' text-blue-500'>Log in</a></p>
                    </div>
                    <select value={formData.role} onChange={setValues} className=' w-32 h-10 text-sm px-1 border rounded-sm outline-none border-slate-400 focus:border-slate-700 focus:border-2 text-gray-600' name="role" id="">
                        <option value="employee" className=' w-32'>employee</option>
                        <option value="comapny" className=' w-32'>comapny</option>
                    </select>
                </div>
                {/* input section  */}
                <div className=" w-full flex gap-4 flex-col *:h-10 *:text-sm *:rounded-sm *:border ">
                    <div className="flex capitalize *:text-gray-600 *:capitalize justify-between *:border *:border-slate-400 *:focus:border-2 *:outline-none *:focus:border-slate-700 border-none *:px-1.5 gap-2 *:rounded-sm h-full *:text-sm">
                        <input name='fullName' onChange={setValues} value={formData.fullName} required type="text" placeholder="full name" className='w-1/2' />
                        <input name='userName' onChange={setValues} value={formData.userName} type="text" required placeholder="username" className='w-1/2' />
                    </div>
                    <input name='email' onChange={setValues} value={formData.email} required className={`border border-slate-400 focus:border-slate-700 outline-none focus:border-2 text-gray-600 px-1.5  ${formData.email.length && "invalid:border-red-500"} `} type="email" placeholder="Email Address" />
                    <input name='password' onChange={setValues} value={formData.password} required className='border capitalize border-slate-400 focus:border-slate-700 outline-none focus:border-2 text-gray-600 px-1.5 ' type="password" placeholder="password" />
                    <input name='confirmPass' onChange={setValues} value={formData.confirmPass} required className={`border capitalize focus:border-slate-700 outline-none focus:border-2 text-gray-600 px-1.5 ${formData.confirmPass === formData.password ? "border-slate-400" : "border-red-500"

                        }`} type="password" placeholder="confirm password" />
                    <div className=" text-gray-600 flex gap-2.5 items-center border-none capitalize *:capitalize">
                        <input type="checkbox" name='termsAgree' value={formData.termsAgree} onChange={setValues} required className=' has: w-4 h-4 border outline-blue-500' />
                        <p>I've read and agree with your <a href="" className=' text-blue-500 font-semibold'>Terms of Services</a></p>
                    </div>
                </div>
                <input type='submit' disabled={!isFormValid} className=' capitalize *:capitalize disabled:cursor-not-allowed disabled:bg-green-300 disabled:opacity-100 cursor-pointer bg-green-500 opacity-90 hover:opacity-100 h h-10 rounded-sm text-white font-semibold ' value={"create account"} />


            </form>
            <div className='w-full flex flex-col items-stretch justify-center gap-3'>
                <p className=' w-full text-center uppercase'>or</p>
                <div className='w-full flex-wrap *:text-sm gap-3 *:px-2.5 *:border-slate-300 *:h-9 *:rounded-sm flex items-center justify-around *:border *:flex *:items-center *:justify-around *:gap-2'>
                    <button onClick={() => {
                        signIn("google")
                    }} className=''> <GoogleIcon width={15} height={15} />Sign up With Google</button>
                    <button> <FacebookIcon width={15} height={15} /> Sign with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp