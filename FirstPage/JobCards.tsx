import Image from 'next/image';
import React from 'react';
import { jobType } from '../types/Types';

function JobCards({ job } : {job : jobType}) {
    
    return (
        <>
            <div
                data-container={"Job cards"}
                className=" flex flex-col overflow-hidden px-6 justify-center gap-4 capitalize"
            >
                <div
                    data-container={"card heading"}
                    className="flex items-center justify-between gap-1"
                >
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xs text-gray-700 dark:text-slate-300 line-clamp-1 max-w-11/12 ">{job.company}</h2>
                        <h1 className=" text-sm font-bold text-gray-950 dark:text-gray-100 max-w-(95%) line-clamp-2">{job.title}</h1>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-500">{job.salary}</div>
                    </div>
                    <div>
                        <Image
                            height={50}
                            width={50}
                            className="rounded-full min-w-[40px] "
                            alt=""
                            src={
                                "https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no"
                            }
                        ></Image>
                    </div>
                </div>
                <div
                    data-container={"card price"}
                    className=" w-full flex flex-col gap-1"
                >
                    <p className="text-xs font-extralight text-justify w-10/12 text-gray-600 dark:text-gray-300 dark:opacity-80 line-clamp-5 overflow-hidden">
                        {job.description}
                    </p>
                </div>
                <div className=" text-sm font-semibold text-gray-950 dark:text-gray-100">{job.location} </div>
                <div data-container={"card buttons"} className=" flex flex-col gap-3">
                    <div className=" flex justify-between *:px-4 py-1 *:h-8 *:rounded-md">
                        <button className=" border border-green-600 dark:text-slate-50 capitalize">{job.type}</button>
                        <button className="bg-green-600 border border-green-600 dark:bg-green-500 dark:border-green-500 text-background font-semibold cursor-pointer">Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobCards