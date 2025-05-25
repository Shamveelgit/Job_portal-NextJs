import Image from 'next/image'
import React from 'react'
import ButtonTag from './ButtonTag'
import Link from 'next/link'

function SavedCandidates() {
    let { name, cv, image, profileUrl, title } = {
        name: "muhammed shamveel",
        title: "Ui Ux designer",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no",
        profileUrl: "",
        cv: "",
    }
    return (
        <>
            <div className='flex items-center justify-around bg-secondaryColor p-2'>
                <div className='flex items-center justify-around gap-2'>
                    <div>
                        {/* <Image alt='' src={""} /> */}
                        <div className='w-10 h-10 rounded-full bg-white'></div>
                    </div>
                    <div className=' capitalize p-1 text-text'>
                        <h1 className=' text-sm font-semibold'>{name}</h1>
                        <p className=' text-sm'>{title}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='w-8 h-8 flex justify-center items-center bg-green-200 rounded-sm'>
                        <svg
                            height={20}
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                                    stroke="#000000"
                                    strokeWidth={2}
                                    strokeLinejoin="round"
                                />{" "}
                            </g>
                        </svg>

                    </div>
                    <div>
                        <Link href={profileUrl}>
                            <ButtonTag className=' text-xs p-2 bg-boxText '>view profile</ButtonTag>
                        </Link>
                    </div>
                    <div className=''>
                        <div className='w-8 h-8 flex items-center justify-center bg-gray-300 rounded-sm'>
                            <svg
                                height={15}
                                fill="#000000"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path d="M12.15 28.012v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.788 1.762-3.2 3.506-3.319 1.95-0.137 3.6 0.975 4.137 2.787 0.069 0.238 0.119 0.488 0.181 0.731v0.85c-0.019 0.056-0.050 0.106-0.056 0.169-0.269 1.65-1.456 2.906-3.081 3.262-0.125 0.025-0.25 0.063-0.375 0.094h-0.85c-0.056-0.019-0.113-0.050-0.169-0.056-1.625-0.262-2.862-1.419-3.237-3.025-0.037-0.156-0.081-0.3-0.119-0.444zM20.038 3.988l-0 0.85c-0.019 0.069-0.050 0.131-0.056 0.2-0.281 1.8-1.775 3.206-3.538 3.319-1.944 0.125-3.588-1-4.119-2.819-0.069-0.231-0.119-0.469-0.175-0.7v-0.85c0.019-0.056 0.050-0.106 0.063-0.162 0.3-1.625 1.244-2.688 2.819-3.194 0.206-0.069 0.425-0.106 0.637-0.162h0.85c0.056 0.019 0.113 0.050 0.169 0.056 1.631 0.269 2.863 1.419 3.238 3.025 0.038 0.15 0.075 0.294 0.113 0.437zM20.037 15.575v0.85c-0.019 0.069-0.050 0.131-0.063 0.2-0.281 1.794-1.831 3.238-3.581 3.313-1.969 0.087-3.637-1.1-4.106-2.931-0.050-0.194-0.094-0.387-0.137-0.581v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.794 1.831-3.238 3.581-3.319 1.969-0.094 3.637 1.1 4.106 2.931 0.050 0.2 0.094 0.394 0.137 0.588z" />{" "}
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SavedCandidates