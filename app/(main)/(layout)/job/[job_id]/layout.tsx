import { NextApiHandler } from 'next'
import React from 'react'

async function layout({children,params} : {children : React.ReactNode, params : Promise<string>}) {
    
    console.log(await params);
    
  return (
    <div>
        {
            children
        }
    </div>
  )
}

export default layout