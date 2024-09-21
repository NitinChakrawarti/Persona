import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <div>
                <ul className="flex justify-evenly py-8 text-4 bg-slate-900 text-red-200" >
                    <Link to="/"  >HOME </Link>
                    <Link to="/about" > ABOUT </Link>
                </ul>

            </div>
        </>
    )
}
