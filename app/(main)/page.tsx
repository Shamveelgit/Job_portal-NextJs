import React from 'react'

import { auth } from '../auth'
import Image from 'next/image'
import ButtonTag from '../../components/ui/ButtonTag'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import TitleUi from '../../components/ui/TitleUi'
async function page() {
    const session = await auth()
    session?.user && redirect('/dashboard')
    return (
        <>
            <div className='w-full h-screen'>
                <header className='w-full flex items-center justify-center pt-2 '>
                    <div className='flex w-11/12 rounded-4xl p-4 px-6 bg-secondaryColor items-center justify-between'>
                        <div>
                            <TitleUi />
                        </div>
                        <nav className=' flex justify-around gap-2'>
                            <Link href={"/login"}>
                                <ButtonTag className='text-sm px-2 py-1.5'>Login</ButtonTag>

                            </Link>
                            <Link href={"/signup"}>
                                <ButtonTag className='text-sm px-2 py-1.5'>Sign up</ButtonTag>

                            </Link>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}
export default page