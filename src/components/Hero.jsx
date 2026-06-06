import React, { useState, useEffect, useRef } from 'react'
import { FaDownload } from "react-icons/fa6";
import { ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from "../data/projects";
import { SiMongodb, SiPython, SiPytorch, SiOpenai, SiFastapi } from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 1.5,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const skillsList = [
    { name: "Python", icon: <SiPython className="text-2xl group-hover:text-[#3776AB] transition-colors duration-305" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-2xl group-hover:text-[#EE4C2C] transition-colors duration-305" /> },
    { name: "OpenAI / LLMs", icon: <SiOpenai className="text-2xl group-hover:text-[#74A57F] transition-colors duration-305" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-2xl group-hover:text-[#009688] transition-colors duration-305" /> },
    { name: "React", icon: <FaReact className="text-2xl group-hover:text-[#61DAFB] transition-colors duration-305" /> },
    { name: "Next.js", icon: <RiNextjsFill className="text-2xl group-hover:text-white transition-colors duration-305" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl group-hover:text-[#339933] transition-colors duration-305" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-2xl group-hover:text-[#4169E1] transition-colors duration-305" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl group-hover:text-[#47A248] transition-colors duration-305" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-2xl group-hover:text-[#38BDF8] transition-colors duration-305" /> },
    { name: "Git", icon: <FaGitAlt className="text-2xl group-hover:text-[#F05032] transition-colors duration-305" /> },
    { name: "GitHub", icon: <FaGithub className="text-2xl group-hover:text-white transition-colors duration-305" /> },
  ];

  // Slice to only show the first 4 projects as "Selected Projects"
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className='relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-28 pb-16 bg-black text-white overflow-hidden font-montserrat'>

      <div className='max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-start z-10'>
        
        {/* Left Column: Headline and Tagline */}
        <div className='flex flex-col items-start lg:col-span-7'>
          <div className="mb-4 px-3 py-1 bg-zinc-900 border border-zinc-800 text-brand-green text-xs font-semibold rounded-full tracking-widest uppercase">
            AI Engineer
          </div>

          <h1 className='flex flex-col'>
            <span className='font-aeonik text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] text-white tracking-tight'>
              I'm Adebola
            </span>
            <span className='font-aeonikreg text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-zinc-500 tracking-tight block mt-2'>
              Elisha.
            </span>
          </h1>

          <div className='mt-8 max-w-xl'>
            <p className='text-zinc-400 text-base md:text-lg leading-relaxed'>
              I design and engineer AI systems with cognitive architecture and meticulous attention to performance. Available for fullstack & AI engineering roles.
            </p>
          </div>

          <a
            download
            href='./resume_adebola.pdf'
            className="inline-flex gap-3 justify-center items-center mt-8 px-8 py-4 bg-brand-green text-black font-montserrat font-bold text-base rounded-full shadow-[0_0_20px_rgba(182,255,94,0.3)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Right Column: Selected Projects Accordion (Ref image style) */}
        <div id="projects" className='lg:col-span-5 w-full flex flex-col pt-8 lg:pt-4 border-t lg:border-t-0 border-zinc-900'>
          <h2 className="font-aeonik text-xs tracking-[0.25em] text-zinc-500 font-semibold mb-6 uppercase">
            Selected Projects
          </h2>
          
          <div className="flex flex-col border-t border-zinc-800">
            {featuredProjects.map((project, index) => {
              const isOpen = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(isOpen ? null : index)}
                  className="group border-b border-zinc-800 py-6 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Header Row */}
                  <div className="flex justify-between items-center w-full">
                    <span className="font-aeonik text-2xl md:text-3xl text-zinc-350 group-hover:text-white transition-colors duration-200">
                      {project.title}
                    </span>
                    <ChevronRight 
                      className={`w-5 h-5 text-zinc-500 group-hover:text-brand-green transition-transform duration-300 ${
                        isOpen ? 'rotate-90 text-brand-green' : ''
                      }`} 
                    />
                  </div>

                  {/* Expandable Accordion Body */}
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 pb-2 text-zinc-400 text-sm leading-relaxed max-w-md animate-fade-in">
                        <p className="mb-4">{project.description}</p>
                        
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tech.map((t, idx) => (
                            <span 
                              key={idx} 
                              className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xxs font-medium px-2 py-0.5 rounded-full uppercase tracking-wider"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Visit Project CTA */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProject(project);
                          }}
                          className="inline-flex items-center gap-1.5 text-brand-green hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors focus:outline-none cursor-pointer"
                        >
                          Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* See More Link leading to full projects page */}
          <div className="mt-8 text-right">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-brand-green transition-colors group"
            >
              See More Projects 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>

      {/* Skills Horizontal scroll container (Centered, not edge-to-edge) */}
      <div className="mt-16 w-full max-w-5xl mx-auto z-10 px-4 relative mb-16">
        
        <div className="text-center mb-6">
          <h3 className="font-aeonik text-xs tracking-[0.25em] text-zinc-550 font-semibold uppercase">
            Stack & Technologies
          </h3>
        </div>

        {/* Fade masking container */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-950/40 border border-zinc-900/60 p-6">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none z-10"></div>
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none z-10"></div>
          
          {/* Scrollable List */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none py-1 select-none"
          >
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-3.5 bg-zinc-900/30 border border-zinc-900 hover:border-brand-green/50 px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
              >
                <div className="text-zinc-500 group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="font-aeonik text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors duration-250">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>



      {/* Project Pop-up Details Modal Card */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
          {/* Backdrop close link */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveProject(null)}></div>
          
          {/* Pop-up Card */}
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] z-10 shadow-2xl flex flex-col md:grid md:grid-cols-12 md:max-h-[85vh] font-montserrat">
            
            {/* Close button */}
            <button 
              onClick={() => setActiveProject(null)} 
              className="absolute top-4 right-4 z-25 w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200 cursor-pointer focus:outline-none"
            >
              <X size={18} />
            </button>

            {/* Left Column: Project Cover Image */}
            <div className="relative md:col-span-6 overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-900 h-64 md:h-full min-h-[280px] md:min-h-[450px]">
              <img src={activeProject.image} alt={activeProject.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Right Column: Modal details body */}
            <div className="p-6 md:p-8 md:col-span-6 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
              <div>
                <h3 className="font-aeonik text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-zinc-450 text-sm leading-relaxed mb-6 font-montserrat">
                  {activeProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xxs font-medium px-3.5 py-1.5 rounded-full uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zinc-900">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex gap-2 justify-center items-center px-6 py-4 bg-brand-green text-black font-montserrat font-bold text-base rounded-full shadow-[0_0_20px_rgba(182,255,94,0.25)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  Visit Project Live <ArrowUpRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-4 bg-zinc-900 border border-zinc-800 text-zinc-350 font-bold text-base rounded-full hover:bg-zinc-800 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Close Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Hero