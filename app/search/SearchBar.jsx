"use client"
import { Roboto } from 'next/font/google'
import React, { useEffect } from 'react'
import SearchIcon from '../svg/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '@/lib/features/SearchBarValue'
import { setFilterJobs } from '@/lib/features/FilteredJobs'

const RobotoFont = Roboto({
  subsets: ["latin"],
})

const SearchBar = ({ }) => {
  const searchBarValue = useSelector(state => state.searchValue)
  const allJobs = useSelector(state => state.GlobalJobList)
  const dispatch = useDispatch()
  useEffect(() => {
    if (searchBarValue.length) {
      let filtered = allJobs.filter((val) => val.title.toLowerCase().includes(searchBarValue) && val.description.toLowerCase().includes(searchBarValue))
      console.log(filtered)
      dispatch(setFilterJobs(filtered))
    }
    else {  
       dispatch(setFilterJobs(allJobs))
    }
  }, [searchBarValue, allJobs])

  return (
    <section className={` w-full px-3.5 flex items-center justify-center`}>
      <div className={`w-96 bg-gray-100 h-11 rounded-3xl p-4 font-normal text-base text-text shadow-searchBox ${RobotoFont.className} flex items-center`}>
        <div>
          <SearchIcon width={25} height={25} color={"black"} />
        </div>
        <input value={searchBarValue} onChange={(evt) => {
          dispatch(setSearchValue(evt.target.value.toLowerCase()));
        }}
          className={`w-full px-1 h-11 text-gray-950 focus:outline-none text-base capitalize`} type="text" placeholder="Search jobs" />
      </div>
    </section>
  )
}

export default SearchBar