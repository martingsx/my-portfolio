import { aboutData } from '@/aboutdata'
import React from 'react'

const Cards = () => {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[700px]">
  {aboutData.map((about) => (
    <div
      key={about.id}
      className="bg-sky-900 text-white rounded-xl p-4 w-full h-[190px] hover:scale-105 transition duration-200 flex flex-col justify-between"
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{about.title}</h3>
        <p className="text-sm text-sky-100">{about.description}</p>
      </div>
      <div className="text-6xl ml-12">{about.icon}</div>
    </div>
        ))}
    </div>
          
  )
}

export default Cards
