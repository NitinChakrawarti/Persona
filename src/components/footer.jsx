import React from "react";
import Logo from "../assets/fibologo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

    return (
        <>
            <div className='text-text_light mt-28 flex justify-between'>
                <div className=' px-36  h-[25.0vmax] pt-14 text-3xl bg-primary opacity-75 text-white md:flex-row flex-col w-[100%] gap-6'>
                    <div className="flex md:flex-row flex-col gap-24">
                        <div className="">
                            <img className="h-[12vmax] rounded-lg" src={Logo} />
                            <h1 className="font-extrabold  pt-4 text-[2vmax] text-text_dark">
                                Fibonacci
                            </h1>
                            <p className="text-[1.3vmax] text-text_dark/60 font-bold leading-6"> School Of Information
                                <br></br> Technology RGPV, Bhopal</p>
                        </div>
                        <div className="flex md:w-[70%] w-[100%] gap-40 md:pl-32">
                            <div className="">
                                <h1 className="text-[1.9vmax] text-text_dark/90 font-bold">Pages</h1>
                                <ul className="text-text_dark/70 flex flex-col pt-4">
                                    <Link to="/" className="hover:text-text_dark text-[1.1vmax] font-bold">Home</Link>
                                    <Link to="/about" className="hover:text-text_dark text-[1.2vmax] font-bold">About</Link>
                                    <Link to="/team" className="hover:text-text_dark text-[1.2vmax] font-bold">Team</Link>
                                    <Link to="/contact" className="hover:text-text_dark text-[1.2vmax] font-bold">Contact</Link>
                                </ul>
                            </div>
                            <div className="">
                                <h1 className="text-[1.9vmax] text-text_dark/90 font-bold">Social Links</h1>
                                <ul className="text-text_dark/70 flex flex-col pt-4">
                                    <Link to="https://www.linkedin.com/in/fibonacci-soit/" className="hover:text-text_dark text-[1.1vmax] flex items-center gap-4 font-bold"> <FaLinkedin size="1.5rem" /> LinkedIn </Link>
                                    <Link to="https://www.instagram.com/fibonacci_soit/" className="flex items-center gap-4 hover:text-text_dark text-[1.2vmax] font-bold"><FaInstagram size="1.5rem" /> Instagram</Link>
                                    <Link to="https://chat.whatsapp.com/FtTMIleQ34e5ITHF5JUv4w" className="flex items-center gap-4 hover:text-text_dark text-[1.2vmax] font-bold"><FaWhatsapp size="1.5rem" /> WhatsApp</Link>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}











