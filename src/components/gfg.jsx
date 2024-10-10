import React from 'react'
import { Link } from 'react-router-dom'

const Gfg = () => {
    return (
        <div className='text-text_light mt-16 flex justify-between pb-10'>
            <div className=' px-36  h-[30vmax] text-3xl bg-black opacity-75 text-white pt-[-2vmax] md:flex-row flex-col w-[100%] gap-6'>
                <div className="flex flex-col justify-start">
                    <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-primary">
                        GeeksforGeeks
                    </h1>
                    <p className='text-[1.4vmax] text-primary/80 pt-4 pb-8'>Sparking innovation through code! In partnership with Geeks for Geeks!</p>
                </div>
                <div className="flex gap-48 md:flex-row flex-col">
                    <div className="w-[100%] md:w-[50%]">
                        <p className='text-[1.5vmax] leading-2'>
                            GeeksforGeeks is a leading platform that provides computer science
                            resources and coding challenges for programmers and technology
                            enthusiasts. With a strong emphasis on enhancing coding skills and
                            knowledge, it has become a trusted destination for over 12 million plus
                            registered users worldwide.
                        </p>
                        <button className=" mt-10 w-[9vmax] font-bold text-[1.2vmax] text-text_dark bg-primary/90 p py-1 rounded-lg border-[1px] border-text_white hover:text-white">
                            <Link to='https://www.geeksforgeeks.org/ ' target='_blank'> Learn More </Link>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className="h-[150px] rounded-md" src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gfg
