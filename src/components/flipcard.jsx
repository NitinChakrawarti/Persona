import React, { useState } from 'react';
import resources from '../assets/pngwing.com (1).png';
import networking from '../assets/networking-removebg-preview.png';
import skilldevelopment from '../assets/skill_develpopment-removebg-preview.png';
import collarabativeProjects from '../assets/pngwing.com (2).png';
import ReactCardFlip from 'react-card-flip';

const Flipcard = () => {
    const benefitsData = [
        {
            title: "Exclusive resource access",
            description: "Members gain entry to a wealth of coding resources, tutorials and tools tailored for skill enhancement.",
            image: resources
        },
        {
            title: 'Networking opportunities',
            description: 'Members can connect with like-minded individuals, share knowledge and collaborate on projects.',
            image: networking
        },
    
        {
            title: 'Skill development',
            description: 'Members can participate in coding contests, hackathons and coding challenges to enhance their skills.',
            image: skilldevelopment
        },
        {
            title: 'Collaborative projects',
            description: 'Members can collaborate on projects, work on real-world problems and build a strong portfolio.',
            image: collarabativeProjects
        }
    ];

    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setFlippedIndex(index);
    };

    const handleMouseLeave = () => {
        setFlippedIndex(null);
    };

    return (
        <div className='overflow-hidden relative'>
            <div className='flex gap-8'>
                {benefitsData.map((benefit, index) => (
                    <ReactCardFlip
                        key={index}
                        isFlipped={flippedIndex === index}
                        flipDirection="vertical"
                    >
                        <div
                            className="front flex flex-col justify-center items-center gap-6 h-[24vmax] bg-text_light w-[18vmax] text-center rounded-md"
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            <img className="h-[12vmax]" src={benefit.image} alt={benefit.title} />
                            <h1 className= 'text-text_dark font-bold text-[1.3vmax]'>{benefit.title}</h1>
                        </div>

                        <div
                            className="back h-[24vmax] py-4 px-2 bg-primary w-[18vmax] text-center flex flex-col justify-evenly rounded-md shadow-lg text-text_dark"
                            onMouseLeave={handleMouseLeave}
                        >
                            <h1 className='font-bold'>{benefit.title}</h1>
                            <p className='text-[1.1vmax] px-2 leading-5 '>{benefit.description}</p>
                        </div>
                    </ReactCardFlip>
                ))}
            </div>
        </div>
    );
}

export default Flipcard;
