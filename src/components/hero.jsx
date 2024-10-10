import React from 'react'
import heroimg from '../assets/pngwing.com.png'
import Typewriter from 'typewriter-effect';
const Main_home = () => {
    return (
        <>
            <div className=' bg-black  text-text_light px-32 pt-40 flex justify-between'>
                <div className='flex justify-centre h-[500px] text-3xl text-white pt-[8vmax] flex-col md:w-[50%] w-[100%]'>
                    <div className='px-6'>
                        <h1 className="text-[6vmax] font-bold leading-none text-primary pb-2">FIBONACCI</h1>
                        <span className="text-[3vmax] font-medium leading-none "> SOIT RGPV </span>
                    </div>
                    <div className='px-6 text-[4vmax] font-bold pt-4'>
                        <Typewriter
                            options={{
                                strings: ['Skill Development', 'Networking', 'Exposure', 'Opportunities'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                        <div className="h-[3px] w-[50%] bg-primary mt-40"></div>
                        <p className='text-[1.5vmax]'>Learn, Practice and Excel!</p>
                    </div>
                </div>
                <img className="relative  z-[10] h-[500px]" src={heroimg} />
            </div>
        </>
    )
}

export default Main_home
