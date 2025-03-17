"use client"

import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobCards from '../JobCards'
import { addGlobalListToFirst } from '@/lib/features/JobList'

function JobSection({jobs }) {

    const filterJobs = useSelector(state => state.filterJobs)
    const globalJobs = useSelector(state => state.GlobalJobList)
    const dispatch = useDispatch()

    useEffect(() => {
        
        if(!filterJobs.length) {
            console.log(globalJobs);
        }
        else {
            console.log("already have values");
            
        }
    }, [])
    return (
        <>
            {
                filterJobs?.length ? filterJobs.map((job, index) => (
                    <JobCards job={job} key={index} />
                )) :
                    (
                        <>

                        </>
                    )
            }

        </>
    )
}


export default JobSection