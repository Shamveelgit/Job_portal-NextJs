"use client"
import React, { useEffect } from 'react'

function SearchBtn({children}) {    
   
    return (
    <div className=' cursor-pointer' onClick={() => {
    }}>
        {children}
    </div>
  )
}

export default SearchBtn  