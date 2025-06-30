import React from 'react'
import Cards from '@/src/components/cards'
import Images from '@/src/components/meImage'
import TitleAbout from '@/src/components/titleabout'


const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center align-center md:flex-row gap-8 px-8 py-12">

      <div className="w-full md:w-1/3">
        <Images />
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-8 max-w-[700px]">
        <TitleAbout />
        <Cards />
      </div>

    </div>

  )
}

export default About