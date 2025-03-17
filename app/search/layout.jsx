import React from 'react'
import SearchBar from './SearchBar'

const layout = ({children}) => {
  
  return (
    <>
      <div className='flex gap-10'>
        <SearchBar />
      </div>
      {
        children
      }
    </>
  )
}

export default layout