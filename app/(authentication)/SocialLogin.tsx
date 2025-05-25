"use client"
import React, { startTransition, useEffect, useState, useTransition } from 'react'
import GoogleIcon from '../svg/google'
import FacebookIcon from '../svg/FacebookIcon'
import { usePathname, useSearchParams } from 'next/navigation'
import UserRole from '../../components/ui/UserRole'
import { UseAppDispatch, UseAppSelector } from '../../hooks/ReduxType'
import { isShowRoleUi } from '../../lib/features/ShowRoleUi'
import { GoogleSignIn, isUserRoleSaved } from '../../utils/utils.client'



function SocialLogin() {


    const params = useSearchParams()
    const path = usePathname()
    // const [showUserRole, setUserRoleUi] = useState(false)
    const showUserRole = UseAppSelector(state => state.showRoleUI)
    const dispatch = UseAppDispatch()
    console.log(isUserRoleSaved());


    useEffect(() => {
        params.get("error") && alert("Error in signin") // the email is already used
    },[])
    return (
        <div className='w-full flex flex-col items-stretch justify-center gap-3'>
            <p className=' w-full text-center uppercase text-text'>or</p>
            <div className='w-full dark:text-white *:cursor-pointer flex-wrap *:text-sm gap-3 *:px-2.5 *:border-slate-300 *:h-9 *:rounded-sm flex items-center justify-around *:border *:flex *:items-center *:justify-around *:gap-2'>
                <button onClick={async () => {
                    if (isUserRoleSaved()) {
                        let user = await GoogleSignIn()
                        
                    }
                    else {
                        dispatch(isShowRoleUi())
                    }
                }} className=''> <GoogleIcon width={15} height={15} />Sign up With Google</button>
                <button> <FacebookIcon width={15} height={15} /> Sign with Facebook</button>
            </div>
            {
                showUserRole && (
                    <div>
                        <UserRole />
                    </div>
                )
            }
        </div>
    )
}

export default SocialLogin