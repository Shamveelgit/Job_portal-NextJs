import React from 'react'
import { auth } from '../../auth'
import { redirect } from 'next/navigation'
import Header from '../../../FirstPage/Header'

async function layout({ children } : { children: React.ReactNode }) {
  const session = await auth()    
  return (
    session?.user ?
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