import React from 'react'
import Slider from './slider';
const Activities = () => {
    return (
        <div className='text-text_light mt-28 flex justify-between'>
            <div className=' px-36  h-[27vmax] text-3xl bg-black opacity-75 text-white pt-[-2vmax] md:flex-row flex-col w-[100%] gap-6'>
                <div className="flex flex-col justify-start">
                    <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-primary">
                        Learn, Build, Innovate!
                    </h1>
                </div>
                <div className="pt-16 flex gap-10 overflow-hidden relative">
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Activities
