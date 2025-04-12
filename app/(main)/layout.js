import Header from '@/FirstPage/Header'
import React from 'react'

function layout({children}) {
  return (
    <div className={`bg-background w-full min-h-screen flex flex-col gap-10 transition-colors duration-500`}>
      <Header />
      {children}
    </div>
  )
}

export default layout