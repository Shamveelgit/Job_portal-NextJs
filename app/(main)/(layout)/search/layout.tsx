import React from 'react'
import SearchBar from './SearchBar'
import Header from '../../../../FirstPage/Header'

const layout = ({children} : {children : React.ReactNode}) => {
  
  return (
    <>
      <div className='flex gap-10 flex-col'>
        <SearchBar />
      </div>
      {
        children
      }
    </>
  )
}

export default layout