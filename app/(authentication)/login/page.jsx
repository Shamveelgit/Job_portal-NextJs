"use client"
import InputTag from '@/components/InputTag';
import ButtonTag from '@/components/ui/ButtonTag';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import SocialLogin from '../SocialLogin';

function page() {

  const [email, setEmail] = useState("shamveelshamveel902@gmail.com");
  const { data: session } = useSession("312814")

  return (
    <>
      <form action="" onSubmit={evt => evt.preventDefault()} className='flex flex-col max-w-full gap-5 justify-center items-center rounded-2xl min-w-72 mt-5 animate-LeftToRIght'>
        <div className="flex items-center justify-start w-full *:capitalize ">
          <div className="flex *:capitalize flex-col">
            <h1 className=" text-xl font-semibold text-text">Wellcome Back</h1>
            <p className=" text-sm font-normal text-gray-600 dark:text-gray-200">Don't have an account? <Link href="/signup" className=' text-blue-500 dark:text-blue-400'>Create Account</Link></p>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-4'>
          <InputTag placeholder={"Email"} required type={"email"} />
          <InputTag placeholder={"Password"} required type={"password"} />
          <div className='flex items-center justify-between w-full dark:text-gray-100 text-gray-900'>
            <div className='flex gap-1 items-center justify-center' >
              <input type="checkbox" className={" w-4 h-4 border border-green-500 rounded-sm"} name='remember-me' />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link href={"/login"} className=' text-blue-500 dark:text-blue-400'>Forgot password</Link>
          </div>
          <div className='w-full flex justify-center flex-col items-stretch'>
            <ButtonTag type="submit" onSubmit={() => {
              signIn("credentials",{
                email,
                password,
                redirect : false,
              })
            }}>Sign in</ButtonTag>
          </div>
        </div>
      </form>
      <SocialLogin />
    </>
  )
}

export default page