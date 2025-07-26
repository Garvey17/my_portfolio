import React from "react";
import cmind from  "../assets/cmindset.png"
import notes from "../assets/notes.png"
import ingenious from "../assets/ingenious.png"
import voult from "../assets/voult.png"
import { Globe } from 'lucide-react';

const projects = [
    {
      title: "Notes App",
      description:
        "A secure Notes App built with the MERN stack featuring user login, signup, and JWT-based authentication. Users can create, edit, and manage their personal notes in a clean, responsive interface with data stored in MongoDB.",
      tech: ["React", "Tailwind", "MongoDB", "Express js", "Node js", "JWT"],
      image:notes,
      link:"https://notes-app-x2.onrender.com/home",
    },
    {
      title: "E-commerce store",
      description:
        "A stylish eCommerce fashion store built with the MERN stack, featuring product listings, user authentication, and a fully functional shopping cart for seamless browsing and checkout.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
      image:voult,
      link:"https://voult-mern-app-x2.onrender.com/",
    },
    {
      title: "Creative Mindset",
      description:
        "A sleek and modern website for a design agency built with React, Tailwind CSS, and GSAP, featuring smooth scroll-based animations, responsive layouts, and dynamic transitions that showcase the agency's services, portfolio, and team with an engaging user experience.",
      tech: ["React", "Gsap", "Tailwind",],
      image:cmind,
      link:"https://creativestudios-seven.vercel.app/",
    },
    {
      title: "AI SaaS",
      description:
        "A modern AI SaaS onboarding website designed to guide users through features, pricing, and account setup with a clean UI, interactive walkthroughs, and responsive design—built for clarity, conversion, and seamless user engagement.",
      tech: ["React", "Tailwind", "Mongo DB", "Expresss js", "Node js"],
      image:ingenious,
      link:"https://ingeniouspage.netlify.app/",
    },
  ];
  
  const ProjectsSection = () => {
    return (
      <section className="py-16 px-4 bg-white" id="projects">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[2rem] sm:text-3xl md:text-5xl lg:text-8xl font-aeonik mb-4">Projects</h2>
 
          <p className="text-gray-600 mb-12">
            A selection of projects that demonstrate my skills across the fullstack.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-black rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex  justify-between ">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                    </h3>
                    <a href={project.link} className="p-1.5 bg-black text-white flex rounded-2xl text-xs justify-center items-center font-montserrat mb-2" >Website <Globe/></a>
                </div>
                <div className="">
                    <img src={project.image} alt="" />
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  