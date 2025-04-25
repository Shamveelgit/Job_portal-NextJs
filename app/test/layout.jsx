import React from 'react'
import { checkUserExist } from '../(main)/dashboard/MongoDB'
import bcrypt from "bcrypt"

async function layout({children}) {
  
  let passHash = await bcrypt.hash("hello",5)
  console.log(passHash);
  
  return (
    <div>
        {children}
    </div>
  )
}

export default layout