"use client"
import { toggleSearchBtn } from '@/lib/features/searchBtnSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SearchBtn({children}) {    
    const searchBarState = useSelector(state => state.searchBtn)
    const dispatch = useDispatch()
    return (
    <div className=' cursor-pointer' onClick={() => {
        dispatch(toggleSearchBtn())
    }}>
        {children}
    </div>
  )
}

export default SearchBtn