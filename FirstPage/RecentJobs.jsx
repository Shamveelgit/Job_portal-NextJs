"use client"
import React, { useEffect } from 'react'
import ClientJobCards from './clientJobCards'

function RecentJobs({ children, jobs }) {
    
    return (
        <>
            <ClientJobCards serverJobList={jobs} />
        </>
    )
}

export default RecentJobs