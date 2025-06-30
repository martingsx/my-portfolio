"use client"
import { TypeAnimation } from 'react-type-animation'

export const Introduction = () => {
    return (
        <div>
            <div className="absolute z-10 w-full">
                <div className="z-20 flex flex-col items-center py-72">
                <div className='relative z-20 flex flex-col items-center max-w-md text-center'>
                    <h1 className="text-2xl leading-tight md:text-6xl text-white font-bold flex flex-nowrap">Martín González
                    </h1>
                <TypeAnimation sequence={[ " reimagina", 1000, " crea", 1000, " desarrolla", 1000]}
                    wrapper="span"
                    speed={50} 
                    repeat= {Infinity}
                    className= "font-bold text-white font-light"/>
                </div>
                </div>
            </div>
        </div>

    );
    
}