"use client"
import { Roboto } from 'next/font/google'
import React, { useEffect } from 'react'
import SearchIcon from '../../svg/Search'
import { fetchSearchData } from './fetchSearchData'
import { setDataExist } from '../../../lib/features/checkData'
import { UseAppDispatch, UseAppSelector } from '../../../hooks/ReduxType'
import { setSearchValue } from '../../../lib/features/SearchBarValue'
import { setFilterJobs } from '../../../lib/features/FilteredJobs'
import { addToGlobalJobList } from '../../../lib/features/JobList'
import { setSkipValue } from '../../../lib/features/SkipValue'


const RobotoFont = Roboto({
  subsets: ["latin"],
})

const SearchBar = ({ }) => {

  const searchBarValue = UseAppSelector(state => state.searchValue)
  const allJobs = UseAppSelector(state => state.GlobalJobList)
  const skipVal = UseAppSelector(state => state.skipValue)
  const dispatch = UseAppDispatch()

  const FetchSearchJobs = async (evt : React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key == "Enter" && searchBarValue.length) {
      console.log(searchBarValue);
      try {
        dispatch(setDataExist(true))
        let data = await fetchSearchData(skipVal, searchBarValue)
        if (data.length) {
          dispatch(addToGlobalJobList(data))
          dispatch(setFilterJobs(data))
          dispatch(setDataExist(false))
          dispatch(setSkipValue())
        }
        else {
          dispatch(setDataExist(false))
        }
      }
      catch (err) {
        dispatch(setDataExist(true))
        console.log(err);
        console.log("Network failure Can't connect server..");
      }
    }
  }
  useEffect(() => {
    dispatch(setFilterJobs(allJobs))
    if (searchBarValue.length) {
      let filtered = allJobs.filter((val) => val.title.toLowerCase().includes(searchBarValue) || val.description.toLowerCase().includes(searchBarValue))
      console.log(filtered)
      dispatch(setFilterJobs(filtered))
      dispatch(setDataExist(true))
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
          onKeyDown={FetchSearchJobs}
          className={`w-full px-1 h-11 text-gray-950 focus:outline-none text-base capitalize`} type="text" placeholder="Search jobs" />
      </div>
    </section>
  )
}

export default SearchBar