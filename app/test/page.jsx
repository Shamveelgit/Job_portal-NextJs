"use client"
import Applicants from '@/components/applicants'
import IsUserRole from '@/components/isUserRole'
import { removeToAppliedJobs } from '@/lib/features/applidJob'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function page() {

  const {data : session,status  } = useSession()
  console.log(session);
  
  

  return (
    <div className=' flex items-center justify-center w-full h-screen text-white'>
      <IsUserRole />
    </div>
  )
}

export default page