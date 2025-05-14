import React from 'react'

function ButtonTag(props : React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const {className,children,...rest} = props
  return (
    <button {...props} className=' dark:text-gray-800 capitalize *:capitalize disabled:cursor-not-allowed disabled:bg-green-300 disabled:opacity-100 cursor-pointer bg-green-500 dark:bg-green-400 opacity-90 hover:opacity-100 h h-10 rounded-sm text-white font-semibold '>
        {props.children}
    </button>
  )
}

export default ButtonTag