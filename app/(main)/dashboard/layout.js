import Header from '@/FirstPage/Header'
import React from 'react'
import { auth } from './auth'
import { redirect } from 'next/navigation'

async function layout({ children }) {
  const session = await auth()
  return (
    session ?
      (
        <div className={`bg-background w-full min-h-screen flex flex-col gap-10 transition-colors duration-500`}>
          <Header />
          {children}
        </div>
      )
      :
      redirect("/signup")
  )
}

export default layout