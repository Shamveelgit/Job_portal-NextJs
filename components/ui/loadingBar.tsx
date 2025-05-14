import React from 'react'

function LoadingBar({state} : {state : boolean}) {
  return (
    state && (
        <>
            <div className='w-full absolute top-0 right-0 z-10 h-1.5 bg-green-400 animate-pulse '>

            </div>
        </>
    )
  )
}

export default LoadingBar