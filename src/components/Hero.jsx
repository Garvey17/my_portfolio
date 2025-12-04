import React, { useEffect, useRef } from 'react'
import heroimg from "../assets/portfolio asset.jpg"
import { gsap } from "gsap";
import { FaDownload } from "react-icons/fa6";

function Hero() {

  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  const tracking = useRef(false);
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, {
      y: -15,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const button = buttonRef.current;

    const moveButton = (e) => {
      if (!tracking.current) return;

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
      centerButton();
    };

    hero.addEventListener("mouseenter", handleEnter);
    hero.addEventListener("mouseleave", handleLeave);
    hero.addEventListener("mousemove", moveButton);

    centerButton();

    return () => {
      hero.removeEventListener("mouseenter", handleEnter);
      hero.removeEventListener("mouseleave", handleLeave);
      hero.removeEventListener("mousemove", moveButton);
    };
  }, []);

  return (
    <div ref={heroRef} className='relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 pb-12 bg-white overflow-hidden'>

      {/* Floating Download Button (Desktop) */}
      <a
        ref={buttonRef}
        download
        href='./cv.pdf'
        className="hidden lg:flex gap-3 justify-center items-center absolute cursor-pointer top-0 left-0 px-8 py-4 bg-brand-green hover:bg-[#a2e64b] text-black font-montserrat font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all pointer-events-auto z-40 rounded-full"
      > <FaDownload />
        Download CV
      </a>

      <div className='max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center'>
        <div className='flex flex-col items-start z-10'>
          <h1 className='flex flex-col'>
            <span className='font-aeonik text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight text-brand-black'>
              FULLSTACK
            </span>
            <span className='font-aeonikreg text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight text-gray-800'>
              DEVELOPER
            </span>
          </h1>

          <div className='mt-8 max-w-xl'>
            <h2 className='font-aeonik text-2xl md:text-3xl mb-4'>Adebola Elisha</h2>
            <p className='font-montserrat text-gray-600 text-lg md:text-xl leading-relaxed'>
              Building full-stack solutions that scale and perform. I bridge the gap between design and functionality to create seamless user experiences.
            </p>
          </div>

          <div className='mt-8 flex flex-wrap gap-4'>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>MERN Stack</span>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>Nextjs</span>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>Node.js</span>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>Tailwind</span>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>Supabase</span>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>Solidity</span>
            <span className='px-4 py-2 bg-gray-100 rounded-full font-aeonik text-sm border border-gray-200'>Python</span>
          </div>

          {/* Mobile Download Button */}
          <a
            download
            href='./cv.pdf'
            className="lg:hidden mt-10 w-full md:w-auto flex gap-3 justify-center items-center px-8 py-4 bg-brand-green text-black font-montserrat font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        <div className='relative hidden lg:block h-full min-h-[500px]'>
          <div ref={elementRef} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-md'>
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img className='w-full h-auto object-cover' src={heroimg} alt="Adebola Elisha" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green rounded-full -z-10 blur-xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full -z-10 blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero