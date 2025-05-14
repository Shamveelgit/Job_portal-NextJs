"use client"
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react'
import SocialLogin from '../SocialLogin';
import { redirect } from 'next/navigation';
import ButtonTag from '../../../components/ui/ButtonTag';
import InputTag from '../../../components/ui/InputTag';
import LoadingBar from '../../../components/ui/loadingBar';
function page() {
  const [formData,setFormData] = useState({
    email : "",
    password : ""
  })

  const [pending , startTransition] = useTransition()

  function setInputValue(evt : React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [evt?.target?.name] : evt?.target?.value
    })
  }
  useEffect(() => {

  },[])  
  return (
    <>
      <LoadingBar state={pending} />
      <form action="" onSubmit={
        async(evt) => {
          evt.preventDefault()
          console.log("submitting");
          
          try {
            let user = await signIn("credentials",{
              email : formData.email,
              password : formData.password,
              redirect : false,
            })
            console.log(user);
            
            !user?.error && redirect("/dashboard")
          }
          catch(err) {

          }

        }
      } className='flex flex-col max-w-full gap-5 justify-center items-center rounded-2xl min-w-72 mt-5 animate-LeftToRIght'>
        <div className="flex items-center justify-start w-full *:capitalize ">
          <div className="flex *:capitalize flex-col">
            <h1 className=" text-xl font-semibold text-text">Wellcome Back</h1>
            <p className=" text-sm font-normal text-gray-600 dark:text-gray-200">Don't have an account? <Link href="/signup" onClick={() => {
              startTransition(() => {

              })
            }} className=' text-blue-500 dark:text-blue-400'>Create Account</Link></p>
          </div>
        </div>
        <div className='w-full flex flex-col items-stretch justify-center gap-4'>
          <InputTag className=' h-10 rounded-sm' placeholder={"Email"} onChange={setInputValue} value={formData.email} required name={"email"} type={"email"} />
          <InputTag className=' h-10 rounded-sm' placeholder={"Password"} onChange={setInputValue} value={formData.password} name={"password"} required type={"password"} />
          <div className='flex items-center justify-between w-full dark:text-gray-100 text-gray-900'>
            <div className='flex gap-1 items-center justify-center' >
              <input type="checkbox" className={" w-4 h-4 border border-green-500 rounded-sm"} name='remember-me' />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link href={"/login"} className=' text-blue-500 dark:text-blue-400'>Forgot password</Link>
          </div>
          <div className='w-full flex justify-center flex-col items-stretch'>
            <ButtonTag type='submit'>
              Sign in
            </ButtonTag>
          </div>
        </div>
      </form> 
      <SocialLogin />
    </>
  )
}

export default page