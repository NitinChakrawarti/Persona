import React from 'react'
import logo from "../assets/fibologo.png";
import { IoMdArrowDropright } from "react-icons/io";
const Aboutfibo = () => {
    return (
        <>
            <div className='text-text_light pt-16 flex justify-between'>
                <div className='flex justify-start px-32  h-[450px] text-3xl bg-primary opacity-75 text-white pt-[-2vmax] md:flex-row flex-col w-[100%] items-center gap-6'>

                    <div className="md:w-[80%] w-[100%] flex gap-24">

                        <div className="md:w-[40.0%] w-[100%] flex flex-col gap-16 items-center">
                            <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-text_dark">
                                FIBONACCI
                            </h1>
                            <div className="">
                                <img className="h-[200px] rounded-md" src={logo} />
                            </div>
                        </div>

                        <p className='text-[1.3vmax] text-start pt-28 font-bold text-text_dark ' >
                            Fibonacci is a rapidly growing coding community dedicated to empower
                            developers and encouraging a culture of continuous learning.
                            Fibonacci aims to provide a comprehensive learning environment where
                            members can enhance their coding skills, exchange knowledge, and
                            solve complex algorithmic challenges.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutfibo
