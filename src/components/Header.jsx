import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useRef, useState, useEffect } from "react";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <nav>
        <div className='flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white py-4 px-6 backdrop-blur-2xl border-y-2 border-black font-montserrat'>
            <div>
                <a className='font-aeonikreg font-bold' href="">Hi, Adebola</a>
            </div>
            <div className='flex space-x-8'>
                <div>
                    <a href="https://github.com/Garvey17">
                        <FaGithub size={25}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/adebola-elisha-77a1a8257">
                        <FaLinkedin size={25}/>
                    </a>
                </div>
            </div>
            <div className='hidden lg:flex space-x-4 text-sm gap-6'>
                
                <div className='hover:duration-200 ease-in-out hover:underline'>
                   <a  href="#projects">Projects</a>
                </div>
                <div className='hover:duration-200 ease-in-out hover:underline'>
                   <a href="#services">Services</a>
                </div>
                <div className='hover:duration-200 ease-in-out hover:underline'>
                   <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header