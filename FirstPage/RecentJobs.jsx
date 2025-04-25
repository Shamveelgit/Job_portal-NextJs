"use client"
import React, { useEffect } from 'react'
import ClientJobCards from './clientJobCards'
import { useSession } from 'next-auth/react'

function RecentJobs({ children, jobs }) {
    const session = useSession()
    console.log(session);
    
    
    return (
        <>
            <ClientJobCards serverJobList={jobs} />
        </>
    )
}

export default RecentJobs