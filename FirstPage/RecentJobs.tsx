"use client"
import React, { useEffect } from 'react'
import ClientJobCards from './clientJobCards'
import { useSession } from 'next-auth/react'
import { JobsData } from '../types/Types';

function RecentJobs({  jobs } : { jobs : JobsData}) {
    const session = useSession()    
    
    return (
        <>
            <ClientJobCards serverJobList={jobs} />
        </>
    )
}

export default RecentJobs