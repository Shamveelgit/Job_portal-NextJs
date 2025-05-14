import React from 'react'
import { checkUserExist, updateUserRole } from '../MongoDB'
import bcrypt from "bcrypt"

async function layout({children}) {
    
  return (
    <div>
      <button onClick={async () => {
        "use server"
        console.log("runnig");
        
        let user = await updateUserRole("6812305e1666a6163d922db9","company") 
        console.log(user);
        
      }}>Hello test purpose</button>
        {children}
    </div>
  )
}

export default layout