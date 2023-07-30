import React, { useState } from 'react'
import {Link} from "react-router-dom"
import moon from"../images/moon.png"

const Nav = () => {
    const [isActive, setActive] = useState(false);
    const [navActive, setNav] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        setNav(!navActive)
      };
    
    const toggleDarkMode = () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
      }
     
      
  return (
    <div className="nav w-full fixed z-50 bg-indigo-300 dark:bg-slate-900 shadow-lg">
    <div className='container mx-auto relative flex items-center justify-between px-6 py-4'>
        <Link className='dark:text-white font-bold text-4xl' to={"/"}>LOGO</Link>
        <div className="nav-links hidden md:flex space-x-10 dark:text-gray-100">
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>My Projects</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="hidden md:block" onClick={toggleDarkMode}><img className='w-5 h-5 object-cover cursor-pointer' src={moon} alt="darkmodebtn" /></div>
            <div className= {`${isActive ? 'active': ''} space-y-1 md:hidden cursor-pointer z-50`} onClick={toggleClass}>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
        </div>
        <div className={`${navActive ? 'active': ''} ${navActive ? '' : "hidden"} mob-nav bg-indigo-300 p-10 absolute left-0 top-0 w-full h-screen text-slate-800 flex flex-col items-start justify-center space-y-10 z-40`}>
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>My Projects</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default Nav