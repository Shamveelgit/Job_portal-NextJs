"use client"
import { Roboto } from 'next/font/google'
import React from 'react'
import SearchIcon from './svg/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '@/lib/features/SearchBarValue'

const RobotoFont = Roboto({
  subsets: ["latin"],
})

const SearchBar = ({}) => {  
  const searchBarState = useSelector(state => state.searchBtn)
  const searchBarValue = useSelector(state => state.searchValue)
  const dispatch = useDispatch()
  console.log(searchBarValue);
  
  return searchBarState && (
    <section className={` w-full px-3.5 flex items-center justify-center`}>
          <div className={`w-96 bg-gray-100 h-11 rounded-3xl p-4 font-normal text-base text-text shadow-searchBox ${RobotoFont.className} flex items-center`}>
            <div>
              <SearchIcon width={25} height={25} color={"black"} />
            </div>
            <input value={searchBarValue} onChange={(evt) => {dispatch(setSearchValue(evt.target.value  ))}} className={`w-full px-1 h-11 text-gray-950 focus:outline-none text-base capitalize`} type="text" placeholder="Search jobs" />
          </div>
    </section>
  )
}

export default SearchBar