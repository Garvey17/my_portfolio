import React, { useEffect, useRef } from "react";
import { Globe } from 'lucide-react';
import { projects } from "../data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Mobile only
        "(max-width: 768px)": () => {
          cardsRef.current.forEach((card, index) => {
            if (index === cardsRef.current.length - 1) return; // Don't animate the last card

            const nextCard = cardsRef.current[index + 1];

            gsap.to(card, {
              scale: 0.9,
              opacity: 0,
              scrollTrigger: {
                trigger: card,
                start: "top 15%", // Adjust based on where you want the stack to start
                endTrigger: nextCard,
                end: "top 15%",
                scrub: true,
                // markers: true, // Uncomment for debugging
              },
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="py-24 px-4 bg-black font-montserrat" id="projects" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-aeonik mb-6 text-white tracking-tight">Selected Work</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-montserrat">
            A showcase of projects demonstrating full-stack capabilities and attention to detail.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group bg-zinc-950/40 backdrop-blur-md rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col h-full md:static sticky top-[15vh]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4 gap-4">
                  <h3 className="text-2xl font-aeonik font-bold text-white group-hover:text-brand-green transition-colors duration-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green text-black font-semibold rounded-full text-xs hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(182,255,94,0.25)] whitespace-nowrap"
                  >
                    Visit <Globe size={14} />
                  </a>
                </div>

                <p className="text-zinc-400 mb-8 font-montserrat leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3.5 py-1.5 rounded-full tracking-wide uppercase"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;