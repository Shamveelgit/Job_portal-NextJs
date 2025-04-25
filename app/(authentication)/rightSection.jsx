import React from 'react'
import image from "@/public/Image.svg"
import Image from 'next/image'

function RightSection() {
  return (
    <Image className=' w-full h-full object-cover' src={image} alt="" />
  )
}

export default RightSection