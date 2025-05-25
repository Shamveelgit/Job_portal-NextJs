import React, { Suspense, use } from 'react'

import JobSection from './JobSection' 
import { FetchJobs } from '../../../../FirstPage/fetchJobCards'
async function page() {  

  const jobs = await FetchJobs(0) 

  return (
    <section className="w-full items-center capitalize justify-center flex flex-col gap-4 lg:p-5">
      <div className="w-full pl-10">
        <h1 className="text-text font-bold">recommendation</h1>
      </div>
      <div className="w-full flex items-start  justify-start">
        <div className="w-full flex items-center justify-center">
          <div className=" w-full *:shadow-lg *:bg-secondaryColor *:rounded-lg grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-3 2xl:grid-cols-5 overflow-hidden max-md:*:h-64 *:h-72 gap-8 px-5 lg:px-6">
              <JobSection jobs={jobs} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page