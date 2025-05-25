import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({
})

function CandidatesBanner({children} : {children : React.ReactNode}) {
    
    return (
        <>
            <div role='button' tabIndex={0} className={` w-72 flex items-center justify-start  hover:outline-1 hov focus:outline-1 focus:outline-neutral-50 hover:outline-neutral-50 flex-col text-black gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 transition-all duration-300  rounded-xl ${inter?.className}`}>
                <div id='' className=' w-full flex gap-3 '>
                    <Image alt="" loading='lazy' src={""} className='bg-gray-500 rounded-full w-12 h-12' width={48} height={48} />
                    <div>
                        <h2 className=' font-medium capitalize text-gray-900 dark:text-slate-100' >Full name</h2>
                        <p className=' text-gray-500 dark:text-slate-300 uppercase font-normal text-sm'>UI/UX Designer</p>
                    </div>
                </div>
                <hr className=' w-full text-gray-200 dark:text-slate-300' />
                <div className=''>
                    <ul className=' text-slate-600 dark:text-slate-300 list-disc w-full'>
                        <li>7 years of experiance</li>
                        <li>Education : Master Degree</li>
                        <li>Skills :  </li>
                    </ul>
                </div>
                <div className='w-full px-1.5 group'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default CandidatesBanner