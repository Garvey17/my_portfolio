import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cmind from  "../assets/cmindset.png"
import notes from "../assets/notes.png"
import ingenious from "../assets/ingenious.png"
import voult from "../assets/voult.png"


gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase projects, skills, and services. Fully responsive and animated with GSAP.",
      tech: ["React", "Tailwind", "GSAP"],
      image:notes,
    },
    {
      title: "Task Manager API",
      description:
        "A RESTful API for managing tasks and users with authentication, built using Node.js, Express, and MongoDB. Includes JWT-based auth and CRUD operations.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      image:voult,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Fullstack e-commerce application with user authentication, shopping cart, and payment integration using Stripe.",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      image:cmind,
    },
    {
      title: "Blog CMS",
      description:
        "A custom content management system where users can write, edit, and delete blog posts. Admin dashboard and Markdown support included.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      image:ingenious,
    },
  ];

const ScrollRevealCards = () => {
  
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cards-wrapper",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                ease: "linear"
            }, 
        })
        tl.to('.card', {
            height: 0,
            opacity: 0,
            stagger: .5
        })
    })
  

  return (
    <section className="bg-gray-50 py-20 px-4 min-h-screen">
      <div className="cards-wrapper">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-auto"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
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
    </section>
  );
};

export default ScrollRevealCards;
