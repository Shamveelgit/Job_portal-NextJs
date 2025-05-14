import React from 'react'

function InputTag(props : React.InputHTMLAttributes<HTMLInputElement>)  {
    const {className,...rest} = props
  return (
    <input {...props}  className={`border dark:focus:border-slate-100 border-slate-400 focus:border-slate-700 outline-none focus:border-2 text-gray-600 dark:text-gray-100 px-1.5 ${className} `} />
  )
}

export default InputTag