import React, { useRef, useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import avatar from "../assets/avatar.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

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
        <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-950 font-montserrat">
            {/* Main Bar Wrapper */}
            <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 lg:px-12 text-white">
                
                {/* Left: Profile Image & Logo */}
                <div className="flex items-center gap-3">
                    <img 
                        src={avatar} 
                        alt="Adebola" 
                        className="w-8 h-8 rounded-full object-cover border border-zinc-800" 
                    />
                    <a className="font-aeonik text-lg font-bold tracking-tight hover:text-brand-green transition-colors text-white" href="#">
                        adebola<span className="text-brand-green">.</span>
                    </a>
                </div>
                
                {/* Right: Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
                    <a href="#services" className="text-zinc-400 hover:text-white transition-colors duration-200">About</a>
                    <a href="#projects" className="text-zinc-400 hover:text-white transition-colors duration-200">Works</a>
                    <a href="#contact" className="text-zinc-400 hover:text-white transition-colors duration-200">Contact</a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="flex md:hidden items-center">
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
                    >
                        {menuOpen ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div 
                    ref={menuRef} 
                    className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-zinc-900 px-6 py-6 flex flex-col gap-4 text-white shadow-2xl transition-all duration-300"
                >
                    <a href="#services" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-brand-green transition-colors py-2 border-b border-zinc-900 font-semibold">About</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-brand-green transition-colors py-2 border-b border-zinc-900 font-semibold">Works</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-brand-green transition-colors py-2 font-semibold">Contact</a>
                    
                    <div className="flex gap-4 pt-4 border-t border-zinc-900">
                        <a href="https://github.com/Garvey17" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-green transition-colors">
                            <FaGithub size={20}/>
                        </a>
                        <a href="https://www.linkedin.com/in/adebola-elisha-77a1a8257" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-green transition-colors">
                            <FaLinkedin size={20}/>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;