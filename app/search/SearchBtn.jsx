"use client"
import { toggleSearchBtn } from '@/lib/features/searchBtnSlice'
import { useParams, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SearchBtn({children}) {    
   
    return (
    <div className=' cursor-pointer' onClick={() => {
    }}>
        {children}
    </div>
  )
}

export default SearchBtn  