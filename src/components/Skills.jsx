import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import express from "../assets/icons8-express-js.svg"
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function Skills() {
    const slideData = [
        
                <SiMongodb size={30}/>,
            
            
                <img className='w-10' src={express} alt="" />,
        
          
                <FaReact size={30}/>,
        
                <FaNodeJs size={30} />,
          
                <RiTailwindCssFill size={30}/>,
          
                <FaJs size={30}/>,
           
                <IoLogoFigma size={30}/>,
            
                <FaGitAlt size={30}/>,
           
                <FaGithub size={30}/>,
            
                <RiNextjsFill size={30}/>,
           
                <SiPostman size={30}/>,
            
                <BiLogoPostgresql size={30}/>
            
    ]

    const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate content to make the scroll seamless
    const content = slider.innerHTML;
    slider.innerHTML += content;

    // Get total width of all items
    const totalWidth = slider.scrollWidth / 2;

    slider.addEventListener("mouseenter", () =>
      gsap.to(slider, { timeScale: 0 })
    );
    slider.addEventListener("mouseleave", () =>
      gsap.to(slider, { timeScale: 1 })
    );

    // GSAP infinite scroll animation
    gsap.fromTo(
      slider,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 45,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden w-screen'>
            <h1 className='font-aeonikreg text-[1.8rem] sm:text-3xl md:text-5xl lg:text-7xl'>STACK AND SKILLS</h1>

        <div className='min-h-[100px] h-auto py-10 relative w-screen bg-black text-white flex flex-col justify-center items-center gap-8 overflow-hidden'>
            <div className="lg:grid grid-cols-3 grid-rows-3 md:grid-cols-6 gap-20 text-white hidden">
                <div >
                    <SiMongodb size={35}/>
                </div>
                <div>
                    <img className='w-10' src={express} alt="" />
                </div>
                <div>
                    <FaReact size={35}/>
                </div>
                <div>
                    <FaNodeJs size={35} />
                </div>
                
                <div>
                    <RiTailwindCssFill size={35}/>
                </div>
                <div>
                    <FaJs size={35}/>
                </div>
                <div>
                    <IoLogoFigma size={35}/>
                </div>
                <div>
                    <FaGitAlt size={35}/>
                </div>
                <div>
                    <FaGithub size={35}/>
                </div>
                <div>
                    <RiNextjsFill size={35}/>
                </div>
                <div>
                    <SiPostman size={35}/>
                </div>
                <div>
                    <BiLogoPostgresql size={35}/>
                </div>
            
            </div>
            <div
            ref={sliderRef}
            className="flex gap-12 whitespace-nowrap text-white font-bricolage lg:hidden overflow-hidden"
        >
            {slideData.map((item, i) => (
            <div key={i} className="min-w-max">
                {item}
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Skills