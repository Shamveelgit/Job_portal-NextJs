'use client'
import { Inter } from 'next/font/google'
import React, { useEffect, useState, useTransition, ChangeEvent, FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import SocialLogin from './SocialLogin'
import axios from 'axios'
import LoadingBar from '../../components/ui/loadingBar'

const inter = Inter({ subsets: ['latin'] })

interface FormData {
  fullName: string
  userName: string
  email: string
  password: string
  confirmPass: string
  role: 'employee' | 'comapny'
  termsAgree: boolean
}

function SignUpPage() {  
  const [pending, startTransition] = useTransition()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPass: '',
    role: 'employee',
    termsAgree: false,
  })

  const setValues = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const isFormValid =
    formData.userName.length > 0 &&
    formData.confirmPass.length > 0 &&
    formData.email.length > 0 &&
    formData.fullName.length > 0 &&
    formData.password.length > 0 &&
    formData.confirmPass === formData.password &&
    formData.termsAgree

  useEffect(() => {
    // Side effects can be added here
  }, [])

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    startTransition(async () => {
      const data = {
        email: formData.email,
        password: formData.password,
        role: formData.role,
        name: formData.fullName,
      }

      try {
        const newUser = await axios.post('/api/signin', JSON.stringify(data))
        console.log(newUser);
        
        if (newUser.data.autheticated) {
          const user = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            role : formData.role,
            redirect: true,
          })
          console.log(newUser);
        } else {
          console.log('Error signing in')        }
      } catch (error) {
        console.error('Request failed:', error)
      }
    })
  }

  return (
    <>
      <LoadingBar state={pending} />
      <form
        onSubmit={handleSubmit}
        className="flex animate-rightToLeft hideScrollBar flex-col max-w-full gap-5 justify-start items-stretch rounded-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between w-full *:capitalize">
          <div className="flex *:capitalize flex-col">
            <h1 className="text-xl font-semibold text-text">Create account</h1>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-200">
              already have an account?{' '}
              <Link href="/login" onClick={() => {
                console.log("hello");
                
                startTransition(() => {
                })
              }} className="text-blue-500 dark:text-blue-400">
                Log in
              </Link>
            </p>
          </div>
          <select
            value={formData.role}
            onChange={setValues}
            className="w-32 h-10 text-sm px-1 border rounded-sm outline-none border-slate-400 focus:border-slate-700 focus:border-2 text-gray-600 dark:text-gray-200 dark:*:text-gray-800"
            name="role"
          >
            <option value="employee">employee</option>
            <option value="comapny">comapny</option>
          </select>
        </div>

        {/* Inputs */}
        <div className="w-full flex gap-4 flex-col *:h-10 *:text-sm *:rounded-sm *:border">
          <div className="flex capitalize *:text-gray-600 dark:*:text-gray-100 dark:*:focus:border-slate-100 *:capitalize justify-between *:border *:border-slate-400 *:focus:border-2 *:outline-none *:focus:border-slate-700 border-none *:px-1.5 gap-2 *:rounded-sm h-full *:text-sm">
            <input
              name="fullName"
              onChange={setValues}
              value={formData.fullName}
              required
              type="text"
              placeholder="full name"
              className="w-1/2"
            />
            <input
              name="userName"
              onChange={setValues}
              value={formData.userName}
              required
              type="text"
              placeholder="username"
              className="w-1/2"
            />
          </div>

          <input
            name="email"
            id="credentials-email"
            onChange={setValues}
            value={formData.email}
            required
            className={`border dark:focus:border-slate-100 border-slate-400 focus:border-slate-700 outline-none focus:border-2 text-gray-600 dark:text-gray-100 px-1.5 ${
              formData.email.length && 'invalid:border-red-500'
            }`}
            type="email"
            placeholder="Email Address"
          />

          <input
            name="password"
            id="credentials-password"
            onChange={setValues}
            value={formData.password}
            required
            className="border capitalize border-slate-400 dark:focus:border-slate-100 focus:border-slate-700 outline-none focus:border-2 text-gray-600 dark:text-gray-100 px-1.5"
            type="password"
            placeholder="password"
          />

          <input
            name="confirmPass"
            onChange={setValues}
            value={formData.confirmPass}
            required
            className={`border capitalize focus:border-slate-700 outline-none dark:focus:border-slate-100 focus:border-2 text-gray-600 dark:text-gray-100 px-1.5 ${
              formData.confirmPass === formData.password
                ? 'border-slate-400'
                : 'border-red-500'
            }`}
            type="password"
            placeholder="confirm password"
          />

          <div className="text-gray-600 dark:text-gray-100 flex gap-2.5 items-center border-none capitalize *:capitalize">
            <input
              type="checkbox"
              name="termsAgree"
              checked={formData.termsAgree}
              onChange={setValues}
              required
              className="w-4 h-4 border outline-blue-500"
            />
            <p>
              I've read and agree with your{' '}
              <a href="#" className="text-blue-500 dark:text-blue-400 font-semibold">
                Terms of Services
              </a>
            </p>
          </div>
        </div>

        <input
          type="submit"
          disabled={!isFormValid || pending}
          className={`dark:text-gray-800 capitalize ${
            pending && 'animate-pulse'
          } *:capitalize disabled:cursor-not-allowed disabled:bg-green-300 disabled:opacity-100 cursor-pointer bg-green-500 dark:bg-green-400 opacity-90 hover:opacity-100 h-10 rounded-sm text-white font-semibold`}
          value="create account"
        />
      </form>
      <SocialLogin />
    </>
  )
}

export default SignUpPage
