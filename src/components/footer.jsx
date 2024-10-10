import React from "react";
import Logo from "../assets/fibologo.png";
export default function Footer() {

    return (
        <>
            <div className='text-text_light mt-28 flex justify-between'>
                <div className=' px-36  h-[25.0vmax] pt-14 text-3xl bg-primary opacity-75 text-white md:flex-row flex-col w-[100%] gap-6'>
                    <div className="">
                        <div className="">
                            <img className="h-[12vmax] rounded-lg" src={Logo} />
                            <h1 className="font-extrabold  pt-4 text-[2vmax] text-text_dark">
                                Fibonacci
                            </h1>
                            <p className="text-[1.3vmax] text-text_dark/60 font-bold"> School Of Information Technology RGPV, Bhopal</p>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}











