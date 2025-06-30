import React from 'react'
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <Image src="/meimage.png" alt="1" width={1920} height={500} 
                className="rounded-xl object-cover w-full h-auto" />
    </div>
  )
}

export default Images