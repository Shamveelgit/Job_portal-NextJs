"use client"
import React, { useEffect } from 'react'
import JobCards from './JobCards'
import { useSelector } from 'react-redux'
import ClientJobCards from './clientJobCards'

function RecentJobs({ children, jobs }) {
    const globalJobs = useSelector(state => state.GlobalJobList)
    return (
        <>
            {
                children
            }
            <ClientJobCards serverJobList={jobs} />
        </>
    )
}

export default RecentJobs