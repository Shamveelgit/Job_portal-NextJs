import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const inter = Inter({
})
const Applicants = () => {
    return (
        <div role='button' tabIndex={0} className={` w-72 flex items-center justify-start  hover:outline-1 hov focus:outline-1 focus:outline-neutral-50 hover:outline-neutral-50 flex-col text-black gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 transition-all duration-300  rounded-xl ${inter.className}`}>
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
                    <li>Applied : Jan 23, 2022</li>
                </ul>
            </div>
            <div className='w-full px-1.5 group'>
                <button className=' cursor-pointer flex gap-1.5 group hover:text-green-500 text-green-400  font-medium'>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.71875 8.5946L10 11.875L13.2812 8.5946"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=' group-hover:stroke-green-500 stroke-green-400'

                        />
                        <path
                            d="M10 3.125V11.8727"
                            stroke="#26B356"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=' group-hover:stroke-green-500 stroke-green-400'

                        />
                        <path
                            d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
                            stroke="#26B356"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className=' group-hover:stroke-green-500 stroke-green-400'
                            strokeLinejoin="round"
                        />
                    </svg>
                    Download
                </button>
            </div>
        </div>
    )
}

export default Applicants