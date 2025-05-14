"use client"

import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToGlobalJobList } from '@/lib/features/JobList'

import JobCards from '@/FirstPage/JobCards'
function JobSection({jobs}) {

    const filterJobs = useSelector(state => state.filterJobs)
    const checkData = useSelector(state => state.checkData)
    const dispatch = useDispatch()

    console.log(checkData);
    
    useEffect(() => {
        
        if(!filterJobs.length) {
            dispatch(addToGlobalJobList(jobs))
        }
        else {
            console.log("already have values");
        }
    }, [])
    return (
        <>
            {
                filterJobs.length ? filterJobs.map((job, index) => (
                    <JobCards job={job} key={index} />
                )) : 
                <>
                </>
            }
            {
                    checkData && Array.from({length : 1}).map((val,index) => (
                        <div key={index} className=' animate-pulse'></div>
                    )) 
            }
            
        </>
    )
}


export default JobSection