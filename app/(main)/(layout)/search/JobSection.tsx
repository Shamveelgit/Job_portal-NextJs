"use client"

import React, { useEffect, } from 'react'
import { addToGlobalJobList } from '../../../../lib/features/JobList'
import JobCards from '../../../../FirstPage/JobCards'
import { JobsData, jobType } from '../../../../types/Types'
import { UseAppDispatch, UseAppSelector } from '../../../../hooks/ReduxType'
function JobSection({jobs} : {jobs : JobsData} ) {
``
    const filterJobs = UseAppSelector(state => state.filterJobs)
    const checkData = UseAppSelector(state => state.checkData)
    const dispatch = UseAppDispatch()

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