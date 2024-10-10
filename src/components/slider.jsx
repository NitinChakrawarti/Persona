import React from 'react'
import codingMar from '../assets/codingmara.png'
import hackathon from '../assets/hackathon.png'
import webDev from '../assets/wendevfest.png'
import Fibohack from '../assets/fibohack.png'
// import resources from '../assets/pngwing.com (1).png';
const Slider = () => {

    const Events = [
        {
            name: "Workshop",
            image: Fibohack,
            colorbg: "#0a101a"
        },
        {
            
            name: "Coding Marathon",
            image: codingMar,
            colorbg: "#0a101a"
        },
        {
            
            name: "Web DEV Fest",
            image: webDev,
            colorbg: "#0a101a"
        },
        {
            
            name: "Hackathon (Fibohach 1.0)",
            image:  hackathon,
            colorbg: '#55e6a4'
        }
    ];
    
    return (
        <div className='overflow-hidden relative'>
            <div className="flex ">
                <section className=" flex auto_scroll_activity_section mr-8 gap-11 mt-10" style={{ "--speed": `${8000}ms` }} >
                    {Events.map((event, index) => (
                        <div key={index} className={`w-[24vmax] py-4  h-[14vmax] box_shadow rounded-[13px] bg-[${event.colorbg}]`}>
                        
                            <div className='text-center font-medium flex justify-center items-center pt-6'>
                                <img className="" src={event.image} />
                            </div>
                            <div className="flex flex-col pr-6 text-center pt-2">
                                <p className='text-[1.5vmax] text-white  font-bold'>
                                    {event.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className=" flex auto_scroll_activity_section mr-8 gap-11 mt-10" style={{ "--speed": `${8000}ms` }} >
                    {Events.map((event, index) => (
                        <div key={index} className={`w-[24vmax] py-4  h-[14vmax] box_shadow rounded-[13px] bg-[${event.colorbg}]`}>
                        
                            <div className='text-center font-medium flex justify-center items-center pt-6'>
                                <img className="" src={event.image} />
                            </div>
                            <div className="flex flex-col pr-6 text-center pt-2">
                                <p className='text-[1.5vmax] text-white  font-bold'>
                                    {event.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className=" flex auto_scroll_activity_section mr-8 gap-11 mt-10" style={{ "--speed": `${8000}ms` }} >
                    {Events.map((event, index) => (
                        <div key={index} className={`w-[24vmax py-4] h-[14vmax] box_shadow rounded-[13px] bg-[${event.colorbg}]`}>
                        
                            <div className='text-center font-medium flex justify-center items-center pt-6'>
                                <img className="" src={event.image} />
                            </div>
                            <div className="flex flex-col pr-6 text-center pt-2">
                                <p className='text-[1.5vmax] text-white  font-bold'>
                                    {event.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Slider


