"use client"
import React, { useEffect, useState, useTransition } from 'react'
// import JobCards from './JobCards'
import { FetchJobs } from './fetchJobCards'
import JobCards from './JobCards'
import { useDispatch, useSelector } from 'react-redux'
import { addGlobalListToFirst, addToGlobalJobList } from '@/lib/features/JobList'
import { setSkipValue } from '@/lib/features/SkipValue'

function ClientJobCards({ serverJobList }) {
    const [isPending, startTransition] = useTransition()
    const skip = useSelector(state => state.skipValue)
    const [btnEnable, setBtnEnable] = useState(true)
    const globalJobs = useSelector(state => state.GlobalJobList)
    const dispatch = useDispatch()

    const handleLoadMoreCards = (evt) => {
        startTransition(async () => {
            try {
                let jobCards = await FetchJobs(skip)
                if (jobCards.length) {
                    dispatch(setSkipValue())
                    console.log(skip);
                    dispatch(addToGlobalJobList(jobCards))
                } else {
                    setBtnEnable(false)
                }
            }
            catch (err) {
                console.log("Some error caught");
                console.dir(err)
            }
        })

    }
    useEffect(() => {
            return () => {
            serverJobList.map((job) => {
                let check = globalJobs.some((obj) => obj._id == job._id)
                if (!check) {
                    dispatch(addGlobalListToFirst([job]))
                }
            })
        }
    }, [])  


    return (
        <>
            {
                globalJobs.map((job, index) => (
                    <JobCards key={index} job={job} />
                ))
            }
            {
                isPending &&
                <>
                    {
                        Array.from({ length: 4 }).map((val, index) => (
                            <div key={index} className=' animate-pulse'></div>
                        ))
                    }
                </>
            }
            {
                btnEnable && <div className=' flex items-center justify-center'>
                    <div>
                        <button onClick={handleLoadMoreCards} disabled={isPending} className=' text-slate-900 dark:text-slate-100 capitalize flex flex-col items-center'>see more <svg width={40} height={50} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className=' dark:fill-slate-100 fill-slate-900 animate-bounce' d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></button>
                    </div>
                </div>

            }
        </>
    )
}

export default ClientJobCards