"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Subtitles = () => {
  return (
    <div>
      <p className='font-light text-white text-2xl text-center translate-y-90 text-shadow-lg italic'> Hola, soy Martín
      <TypeAnimation
      sequence={[
        " front-end developer",
        1000,
        " react",
        1000,
        " node.js",
        1000,
        " typescript",
        1000,
        " ux/ui designer",
        1000
      ]}
      wrapper='span'
      speed={50}
      repeat={Infinity}
      className='font-bold text-purple-300'/> </p>
    </div>
  )
}

export default Subtitles
