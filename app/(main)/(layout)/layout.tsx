import React from 'react'
import Header from '../../../FirstPage/Header'

function layout({children} : {children : React.ReactNode}) {
  return (
    <>
        <Header />
        {
            children    
        }
    </>
  )
}

export default layout