'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TitleAbout = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full max-w-[700px]">
        <h3 className="text-4xl font-bold text-purple-300 mb-4 mt-0">
          <TypeAnimation
            sequence={[
              " About me",
              2000,
              " Sobre mi",
              2000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='font-bold text-purple-300'
          />
        </h3>
        <p className="text-white text-lg leading-relaxed">
          Soy un Front-End Developer de 24 años apasionado por crear interfaces
          <br /> limpias, dinámicas y centradas en el usuario. Me especializo en construir experiencias digitales
          que no solo se ven bien, sino que también funcionan de manera fluida
          en cualquier dispositivo.
          Me gusta mantenerme al día con las nuevas tecnologías y tendencias en diseño web,
          y disfruto llevar ideas desde un boceto
          hasta su implementación final.
          <br />
          <br />
          Trabajo con tecnologías modernas como React, Tailwind CSS y herramientas de diseño como Figma.
          Más allá del código, valoro la comunicación clara, el trabajo en equipo y los proyectos con propósito.
          Siempre estoy en busca de nuevos desafíos que me permitan crecer y aportar valor.
        </p>
      </div>
    </div>
  )
}

export default TitleAbout