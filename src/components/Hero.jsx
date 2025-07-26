import React from 'react'
import heroimg from "../assets/portfolio asset.jpg"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaDownload } from "react-icons/fa6";

function Hero() {

    const heroRef = useRef(null);
    const buttonRef = useRef(null);
    const tracking = useRef(false); // Flag to track if we're inside
    const elementRef = useRef(null);

    useEffect(() => {
        gsap.to(elementRef.current, {
          y: -10,              // Move up 10px
          duration: 1,         // Duration of one oscillation half
          yoyo: true,          // Reverse the animation
          repeat: -1,          // Infinite loop
          ease: "power1.inOut" // Smooth easing
        });
      }, []);
  
    useEffect(() => {
      const hero = heroRef.current;
      const button = buttonRef.current;
  
      const moveButton = (e) => {
        if (!tracking.current) return; // ignore if outside
  
        const rect = hero.getBoundingClientRect();
        const offsetX = button.offsetWidth / 2;
        const offsetY = button.offsetHeight / 2;
  
        const x = e.clientX - rect.left - offsetX;
        const y = e.clientY - rect.top - offsetY;
  
        gsap.to(button, {
          x,
          y,
          duration: 1.2,
          ease: "power2.out",
        });
      };
  
      const centerButton = () => {
        const rect = hero.getBoundingClientRect();
        const centerX = rect.width / 2 - button.offsetWidth / 2;
        const centerY = rect.height / 2 - button.offsetHeight / 2;
  
        gsap.to(button, {
          x: centerX,
          y: centerY,
          duration: 1.5,
          ease: "power3.out",
        });
      };
  
      const handleEnter = () => {
        tracking.current = true;
      };
  
      const handleLeave = () => {
        tracking.current = false;
        centerButton(); // only animate once on exit
      };
  
      hero.addEventListener("mouseenter", handleEnter);
      hero.addEventListener("mouseleave", handleLeave);
      hero.addEventListener("mousemove", moveButton);
  
      centerButton(); // initial position
  
      return () => {
        hero.removeEventListener("mouseenter", handleEnter);
        hero.removeEventListener("mouseleave", handleLeave);
        hero.removeEventListener("mousemove", moveButton);
      };
    }, []);
  return (

    <div ref={heroRef} className='lg:px-8 md:h-[60vh] lg:h-screen pt-20 md:pt-30 pb-20 relative bg-white'>

       <a
        ref={buttonRef}
        download
        href='./cv.pdf'
        className="hidden lg:flex gap-2 justify-center items-center absolute cursor-pointer top-0 left-0 px-6 py-3 bg-[#B6FF5E] hover:bg-green-600 text-black font-montserrat font-semibold border-2 border-black shadow-lg pointer-events-auto z-40 rounded-2xl"
      > <FaDownload />
        Download CV
      </a>
        <div className='flex px-4 flex-col lg:items-start md:relative md:h-[35vh]'>
            <div className='flex flex-col   lg:items-start'>
                <span className='font-aeonik text-[2rem] sm:text-3xl md:text-5xl lg:text-8xl'>
                    FULLSTACK DEVELOPER
                </span>
                <span className='font-aeonikreg  text-[1.8rem] sm:text-3xl md:text-3xl lg:text-6xl'>
                    Adebola Elisha
                </span>
                <span className='font-montserrat font-medium text-[0.8rem] lg:text-[1.2rem]'>
                    Building full-stack solutions <br className='lg:hidden' /> that scale and perform.
                </span>
            </div>
            {/* <div className='w-60 flex justify-center items-center lg:hidden absolute top-0 '>
                <img className='' src={heroimg} alt="" />
            </div> */}
            <div className='hidden md:block lg:hidden absolute w-[50%] right-5 top-1/2'>
                <p className='absolute text-xs'>
                    I'm a full-stack developer who builds fast, scalable, and user-focused web applications. From crafting clean, responsive frontends to designing efficient backend systems, I bridge the gap between design and functionality. Whether you're launching a startup or scaling an existing product, I can help turn your ideas into production-ready software.
                </p>
            </div>
           <a
                download
                href='./cv.pdf'
                className=" lg:hidden mt-10 cursor-pointer px-6 md:mt-40 py-3 bg-[#B6FF5E] hover:bg-green-600 text-black font-montserrat font-semibold border-2 border-black shadow-lg pointer-events-auto z-40 rounded-2xl md:absolute bottom-0 md:w-[50vw] flex gap-4 justify-center items-center"
            >   
                <FaDownload />
                Download CV
            </a>
            
        </div>
        <div className='hidden lg:flex absolute w-[35%] right-20 mt-40 text-xs '>
                <p className='absolute'>
                I'm a full-stack developer who builds fast, scalable, and user-focused web applications. From crafting clean, responsive frontends to designing efficient backend systems, I bridge the gap between design and functionality. Whether you're launching a startup or scaling an existing product, I can help turn your ideas into production-ready software. <br />
                stack:<span className='font-bold font-aeonik'> MERN</span>
                </p>
            </div>
        <div ref={elementRef} className='hidden lg:flex absolute w-[20%] left-20 mt-10 text-xs '>
               <img className='' src={heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero