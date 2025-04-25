import React from 'react'
import { auth } from './dashboard/auth'
import { redirect } from 'next/navigation'

async function page() {

    let session = await auth()
    console.log(session);
    
    return session ?
    redirect('/dashboard')
    : (
        <>
        <div>
            No user found
        </div>
        </>
    )
}

export default page