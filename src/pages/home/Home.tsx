import React from 'react'
import Image from "next/image";
import Titles from '@/src/components/titles';
import Subtitles from '@/src/components/subtitles';



const Home = () => {
  return (
    
    <section id="home" className="home">
      <Titles />
      <Subtitles />
      <div className="relative z-0 w-full h-[400px] bg-transparent">
        <Image src="/mountain-1.svg" alt="1" width={1920} height={500} 
          className="absolute top-0 left-0 z-50 w-full object-cover translate-y-110 animate-slide-up delay-1" />
        <Image src="/mountain-2.svg" alt="2" width={1920} height={500}
          className="absolute top-0 left-0 z-40 w-full object-cover translate-y-140 animate-slide-up delay-2" />
        <Image src="/mountain-3.svg" alt="3" width={1920} height={500}
          className="absolute top-0 left-0 z-30 w-full object-cover translate-y-85 animate-slide-up delay-3" />
        <Image src="/mountain-4.svg" alt="4" width={1920} height={500}
          className="absolute top-0 left-0 z-20 w-full object-cover translate-y-50 animate-slide-up delay-4" />
        <Image src="/mountain-5.svg" alt="5" width={1920} height={500}
          className="absolute top-0 left-0 z-10 w-full object-cover translate-y-60 animate-slide-up delay-5" />
      </div>
    </section>

  )
}

export default Home
