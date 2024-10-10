import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fibologo-removebg-preview.png";
import Particle_animation from "./tsparticle";

export default function Nav() {
    return (
        <>
            <div className="fixed z-50 w-full ">
                <Particle_animation />
                <div className="flex w-full translate-y-[-100px] justify-between items-center  py-2 px-32 text-4 text-primary backdrop:blur-2xl">
                    <div className="logo">
                        <img className="h-[6vmax]" src={logo} />
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <div>
                            <ul className="flex items-center justify-between gap-8 text-[1.2vmax] font-bold " >
                                <Link className="hover:text-secondary" to="/"  >Home </Link>
                                <Link className="hover:text-secondary" to="/about" > About </Link>
                                <Link className="hover:text-secondary" to="/team" > Team </Link>
                                <Link className="hover:text-secondary" to="/contact" > Contact </Link>
                            </ul>
                        </div>
                        <button className=" font-bold text-[1.2vmax] text-text_dark bg-primary/90 px-4 py-2 rounded-lg border-[1px] border-text_white hover:text-secondary">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}
