import React from 'react'

function InputTag(props) {
  
  return (
    <>
      <input {...props} className={`border dark:focus:border-slate-100 border-slate-400 focus:border-slate-700 outline-none focus:border-2 roud rounded-sm h-10 text-sm w-full text-gray-600 dark:text-gray-100 px-1.5`} />
    </>
  )
}

export default InputTag