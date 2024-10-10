import React from 'react'
import { useState } from 'react';
import Flipcard from './flipcard';
// import resources from '../assets/pngwing.com (1).png'
// import networking from '../assets/networking.png'
// import exposure from '../assets/pngwing.com (2).png'
// import skilldevelopment from '../assets/skill develpopment.png'
// import collarabativeProjects from '../assets/pngwing.com (2).png'

const Benefits = () => {
    
    return (
        <div className='text-text_light mt-28 flex justify-between'>
            <div className=' px-36  h-[40vmax] text-3xl bg-black opacity-75 text-white pt-[-2vmax] md:flex-row flex-col w-[100%] gap-6'>
                <div className="flex flex-col justify-start">
                    <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-primary">
                        Benefits for Members
                    </h1>
                    <p className='text-[1.4vmax] pt-10'>Unlock unique advantages with Fibonacci SOIT</p>
                </div>
                <div className="pt-20 flex gap-8 overflow-hidden relative">

                    <Flipcard />
                </div>
            </div>
        </div>
    )
}

export default Benefits
